/* Progressive motion: content stays readable if animations are unavailable. */
window.initPremiumMotion = function (root) {
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const pointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  const seen = new WeakSet();
  const animations = new Set();
  const removers = [];
  const easing = "cubic-bezier(.22, 1, .36, 1)";
  let observer, mutations, timer, frame = 0, scrollFrame = 0, pending, activeCard;
  let projects = [], visibleProjects = new Set(), movingScenes = new Set(), sceneObserver;
  const hero = root.querySelector(".hero-section");
  let sceneVisible = true;

  function animate(el, delay = 0, distance = 16) {
    if (preference.matches || !el.animate || seen.has(el)) return;
    seen.add(el);
    const animation = el.animate([
      { opacity: 0, translate: `0 ${distance}px` },
      { opacity: 1, translate: "0 0" }
    ], { duration: 680, delay, easing, fill: "backwards" });
    animations.add(animation);
    animation.finished.then(() => animations.delete(animation), () => animations.delete(animation));
  }

  const selector = ".section-title, .text-box, .about-img, .about-text, .portrait-composition, .journey-card, .atelier-scene, .lab-heading, .service-console, .constellation-heading, .constellation-field, .engineering-notes, .portfolio-heading, .portfolio-featured-heading, .portfolio-catalog-heading, .portfolio-card, .contact-form, .skills-text, .experience-timeline";
  function register(node) {
    if (!(node instanceof Element)) return;
    const elements = [...node.querySelectorAll(selector)];
    if (node.matches(selector)) elements.unshift(node);
    elements.forEach(el => { if (!seen.has(el)) observer?.observe(el); });
  }

  function start() {
    if (preference.matches) return;
    root.querySelectorAll(".hero-text > *, .hero-img, .hero-proof-panel").forEach((el, i) => {
      if (el.tagName === "H1") {
        [...el.children].forEach((line, index) => animate(line, 120 + index * 150, 56));
      } else animate(el, i * 80, 24);
    });
    if (!window.IntersectionObserver) return;
    observer = new IntersectionObserver(entries => {
      entries.filter(entry => entry.isIntersecting).forEach((entry, i) => {
        // Children of an animated container should not get a second reveal.
        const ancestor = entry.target.parentElement.closest(selector);
        if (!ancestor || !seen.has(ancestor)) animate(entry.target, Math.min(i, 3) * 65);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0, rootMargin: "0px 0px -28px 0px" });
    register(root);
    function refreshScenes() {
      projects = [...root.querySelectorAll(".portfolio-card .item-img")];
      projects.forEach(el => sceneObserver?.observe(el));
    }
    sceneObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.target.matches(".atelier-scene, .experimental-object, .service-console, .constellation-field")) {
          if (entry.isIntersecting) movingScenes.add(entry.target);
          else movingScenes.delete(entry.target);
          entry.target.classList.toggle("is-moving", entry.isIntersecting && !document.hidden);
          return;
        }
        if (entry.target === hero) sceneVisible = entry.isIntersecting;
        else if (entry.isIntersecting) visibleProjects.add(entry.target);
        else visibleProjects.delete(entry.target);
      });
      updateScenes();
    });
    if (hero) sceneObserver.observe(hero);
    root.querySelectorAll(".atelier-scene, .experimental-object, .service-console, .constellation-field").forEach(el => sceneObserver.observe(el));
    refreshScenes();
    mutations = new MutationObserver(records => {
      records.forEach(record => record.addedNodes.forEach(register));
      refreshScenes();
    });
    mutations.observe(root, { childList: true, subtree: true });
  }

  // Scroll stays native. Only visible scenes receive compositor transforms.
  function updateScenes() {
    if (preference.matches || document.hidden || scrollFrame) return;
    scrollFrame = requestAnimationFrame(() => {
      scrollFrame = 0;
      const height = window.innerHeight;
      const bounds = sceneVisible && hero ? hero.getBoundingClientRect() : null;
      const measurements = [...visibleProjects].filter(el => el.isConnected).map(el => [el, el.getBoundingClientRect()]);
      if (bounds) {
        const progress = Math.min(1, Math.max(0, -bounds.top / bounds.height));
        hero.style.setProperty("--photo-lift", `${progress * -24}px`);
        hero.style.setProperty("--portrait-lift", `${-progress * 48}px`);
        hero.style.setProperty("--portrait-scale", `${1 + progress * .08}`);
        hero.style.setProperty("--hero-shift", `${progress * -24}px`);
        hero.style.setProperty("--orbit-turn", `${progress * 36}deg`);
        hero.style.setProperty("--scene-lift", `${progress * -48}px`);
        hero.style.setProperty("--scene-angle", `${progress * 13}deg`);
      }
      measurements.forEach(([el, rect]) => {
        const progress = Math.min(1, Math.max(0, (height - rect.top) / (height + rect.height)));
        el.style.setProperty("--project-scale", `${1.18 - progress * .18}`);
        el.style.setProperty("--project-inset", `${(1 - progress) * 5}%`);
      });
    });
  }

  function listen(target, type, handler, options) {
    target.addEventListener(type, handler, options);
    removers.push(() => target.removeEventListener(type, handler, options));
  }
  listen(window, "scroll", updateScenes, { passive: true });
  listen(window, "resize", updateScenes, { passive: true });
  listen(document, "visibilitychange", () => {
    movingScenes.forEach(el => el.classList.toggle("is-moving", !document.hidden));
    updateScenes();
  });

  function clearPointer() {
    cancelAnimationFrame(frame);
    frame = 0;
    pending = null;
    activeCard?.classList.remove("motion-lit");
    activeCard = null;
    root.querySelector(".hero-portrait")?.style.removeProperty("translate");
    root.querySelectorAll(".kinetic-word").forEach(el => {
      ["--word-x", "--word-y", "--word-turn"].forEach(prop => el.style.removeProperty(prop));
    });
    root.querySelector(".experimental-object")?.style.removeProperty("--abstract-x");
    root.querySelector(".experimental-object")?.style.removeProperty("--abstract-y");
    const scene = root.querySelector(".atelier-scene");
    scene?.style.removeProperty("--scene-yaw");
    scene?.style.removeProperty("--scene-pitch");
  }

  listen(root, "pointermove", event => {
    if (preference.matches || !pointer.matches || event.pointerType === "touch") return;
    pending = { x: event.clientX, y: event.clientY, target: event.target };
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      if (!pending) return;
      const { x, y, target } = pending;
      const title = root.querySelector(".kinetic-title");
      if (title) {
        const words = [...title.querySelectorAll(".kinetic-word")].map(el => [el, el.getBoundingClientRect()]);
        words.forEach(([el, rect]) => {
          const dx = x - (rect.left + rect.width / 2);
          const dy = y - (rect.top + rect.height / 2);
          const influence = Math.max(0, 1 - Math.hypot(dx, dy) / 240);
          el.style.setProperty("--word-x", `${dx * influence * .065}px`);
          el.style.setProperty("--word-y", `${dy * influence * .09}px`);
          el.style.setProperty("--word-turn", `${dx * influence * .009}deg`);
        });
        const object = root.querySelector(".experimental-object");
        object?.style.setProperty("--abstract-x", `${(x / window.innerWidth - .5) * -32}px`);
        object?.style.setProperty("--abstract-y", `${(y / window.innerHeight - .5) * -24}px`);
      }
      const scene = target.closest(".atelier-scene");
      if (scene) {
        const bounds = scene.getBoundingClientRect();
        scene.style.setProperty("--scene-yaw", `${((x - bounds.left) / bounds.width - .5) * 5}deg`);
        scene.style.setProperty("--scene-pitch", `${((y - bounds.top) / bounds.height - .5) * -5}deg`);
      } else {
        const previousScene = root.querySelector(".atelier-scene");
        previousScene?.style.removeProperty("--scene-yaw");
        previousScene?.style.removeProperty("--scene-pitch");
      }
      const card = target.closest(".services-card, .portfolio-card, .hero-proof-panel");
      if (activeCard !== card) activeCard?.classList.remove("motion-lit");
      activeCard = card;
      if (card) {
        const bounds = card.getBoundingClientRect();
        card.style.setProperty("--light-x", `${x - bounds.left}px`);
        card.style.setProperty("--light-y", `${y - bounds.top}px`);
        card.classList.add("motion-lit");
      }
      const hero = target.closest(".hero-section");
      const portrait = root.querySelector(".hero-portrait");
      if (hero && portrait) {
        const bounds = hero.getBoundingClientRect();
        const dx = ((x - bounds.left) / bounds.width - .5) * 8;
        const dy = ((y - bounds.top) / bounds.height - .5) * 8;
        portrait.style.translate = `${dx}px ${dy}px`;
      } else portrait?.style.removeProperty("translate");
    });
  }, { passive: true });
  listen(root, "pointerleave", clearPointer);
  listen(pointer, "change", clearPointer);
  listen(root, "focusin", event => {
    // Keyboard focus must never land on a temporarily transparent control.
    animations.forEach(animation => {
      if (animation.effect?.target?.contains(event.target)) animation.finish();
    });
  });
  listen(preference, "change", () => {
    animations.forEach(animation => animation.cancel());
    observer?.disconnect();
    mutations?.disconnect();
    sceneObserver?.disconnect();
    visibleProjects.clear();
    movingScenes.clear();
    cancelAnimationFrame(scrollFrame);
    scrollFrame = 0;
    hero?.style.removeProperty("--photo-lift");
    hero?.style.removeProperty("--portrait-lift");
    hero?.style.removeProperty("--portrait-scale");
    hero?.style.removeProperty("--hero-shift");
    hero?.style.removeProperty("--orbit-turn");
    hero?.style.removeProperty("--scene-lift");
    hero?.style.removeProperty("--scene-angle");
    root.querySelectorAll(".is-moving").forEach(el => el.classList.remove("is-moving"));
    projects.forEach(el => {
      el.style.removeProperty("--project-scale");
      el.style.removeProperty("--project-inset");
    });
    clearPointer();
    root.querySelectorAll(".portfolio-item").forEach(el => el.vanillaTilt?.destroy());
    if (!preference.matches) start();
  });
  function schedule() { timer = setTimeout(start, 760); }
  if (document.readyState === "complete") schedule();
  else listen(window, "load", schedule, { once: true });

  return () => {
    clearTimeout(timer);
    clearPointer();
    observer?.disconnect();
    mutations?.disconnect();
    sceneObserver?.disconnect();
    cancelAnimationFrame(scrollFrame);
    animations.forEach(animation => animation.cancel());
    removers.forEach(remove => remove());
  };
};
