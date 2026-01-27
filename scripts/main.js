// -------------------------------------
// vue app
// -------------------------------------

const app = Vue.createApp({
  data() {
    return {
      language: "english",
      careerStartDate: 2016,
      copyrightStartDate: 2022,
      completedProjects: 25,
      happyClients: 20,

      appTheme: "dark_theme",
      savedTheme: null,

      // flag to toggle the preloader
      isPreloading: true,

      // toast notifications array
      notifications: [],

      // manage loading spinner status
      ajaxLoading: [],

      // minimize the header on scrolling down
      startMinimizingHeaderAt: 100,
      isHeaderBig: true,
      // toggle the header on scrolling down
      lastScrollPosition: 0,
      isHeaderHidden: false,
      // scroll to top button
      startShowingScrollTopBtnAt: 600,
      isScrollTopBtnDisplayed: false,

      // flag to toggle focus style class
      isAnyFocus: false,

      // flag to toggle nav menu
      isNavMenuOpen: false,

      experienceNumber: 0,

      // list of nav links to loop through it
      navLinks: [
        {
          url: "#hero",
          title: { en: "Home", fr: "Accueil" },
        },
        {
          url: "#about",
          title: { en: "About", fr: "A propos" },
        },
        {
          url: "#services",
          title: { en: "Services", fr: "Services" },
        },
        {
          url: "#skills",
          title: { en: "Skills", fr: "Compétences" },
        },
        {
          url: "#portfolio",
          title: { en: "Portfolio", fr: "Portfolio" },
        },
        {
          url: "#contact",
          title: { en: "Contact", fr: "Contact" },
        },
      ],

      navLinksWithoutPortfolio: [
        {
          url: "#hero",
          title: { en: "Home", fr: "Accueil" },
        },
        {
          url: "#about",
          title: { en: "About", fr: "A propos" },
        },
        {
          url: "#services",
          title: { en: "Services", fr: "Services" },
        },
        {
          url: "#skills",
          title: { en: "Skills", fr: "Compétences" },
        },
        {
          url: "#contact",
          title: { en: "Contact", fr: "Contact" },
        },
      ],

      staticTexts: {
        presentation: {
          greeting: {
            en: "Software Engineer",
            fr: "Développeur Logiciel",
          },
          currentJobTitle: {
            en: "Turning Ideas into Reality | Building Scalable Solutions",
            fr: "Donner vie à vos idées | Bâtir des Solutions Scalables",
          },
        },
        getInTouch: { en: "Project or Audit?", fr: "Projet ou Audit ?" },
        scroll: { en: "My Expertise", fr: "Mon Expertise" },
        experienceYearLabel: {
          en: "Years Of Experience",
          fr: "Années d'expérience",
        },
        completedProjectLabel: {
          en: "Projects Delivered",
          fr: "Projets Livrés",
        },
        happyClientLabel: { en: "Collaborations", fr: "Collaborations" },
        hireMe: { en: "Contact Me", fr: "Me Contacter" },
        toCV: { en: "Download CV", fr: "Télécharger CV" },
      },

      aboutMe: {
        title: { en: "About Me", fr: "À propos" },
        subtitle1: {
          en: "Web & Mobile Expertise,",
          fr: "Expertise Web & Mobile,",
        },
        subtitle2: { en: "From Concept to Launch.", fr: "Du Concept au Lancement." },
        text: {
          en: "As a Tech Lead and Solutions Architect, I help companies realize their digital ambitions. With dual expertise in system architecture and application development, I intervene to structure your projects, secure your technological choices, and guide your teams toward operational excellence, ensuring robust and sustainable delivery.",
          fr: "En tant que Tech Lead et Architecte Solutions, j'aide les entreprises à concrétiser leurs ambitions numériques. Fort d'une double expertise en architecture système et en développement applicatif, j'interviens pour structurer vos projets, sécuriser vos choix technologiques et accompagner vos équipes vers l'excellence opérationnelle, garantissant une livraison robuste et pérenne.",
        },
        quoteDescription: {
          en: "Quality & Strategy.",
          fr: "Qualité & Stratégie.",
        },
        quoteText: {
          en: "My goal: To provide the strategic vision and technical backbone your project needs to thrive, ensuring scalability from day one.",
          fr: "Mon objectif : Apporter la vision stratégique et le socle technique indispensables à la réussite de votre projet, en assurant sa scalabilité dès le premier jour.",
        },
        hireMe: { en: "Let's work together", fr: "Travaillons ensemble" },
        downloadCv: { en: "Download Resume", fr: "Télécharger CV" },
      },

      services: {
        title: { en: "Expertise", fr: "Expertise" },
        subtitle: { en: "How I Can Help", fr: "Comment j'interviens" },
        productDesign: { en: "Consulting & Audits", fr: "Consulting & Audits" },
        productDesignText: {
          en: "For existing systems: I perform deep architectural reviews and code audits. I provide strategic roadmaps to resolve technical debt, optimize performance, and prepare your stack for scaling.",
          fr: "Pour les systèmes existants : Je réalise des revues d'architecture approfondies et des audits de code. Je fournis des feuilles de route stratégiques pour résorber la dette technique, optimiser les performances et préparer votre stack au passage à l'échelle.",
        },
        webDev: { en: "Architecture & Product Engineering", fr: "Architecture & Ingénierie Produit" },
        webDevText: {
          en: "From idea to deployment: Resilient architecture design, strategic tech stack selection, and full-stack implementation to build products built for growth.",
          fr: "De l'idée au déploiement : Conception d'architectures résilientes, choix technologiques stratégiques et réalisation Full-stack pour des produits taillés pour la croissance.",
        },
        multiplatformApp: {
          en: "Technical Leadership & Mentoring",
          fr: "Leadership Technique & Mentorat"
        },
        xPlatformAppText: {
          en: "I integrate into your teams to bring expertise and methodology. I foster best practices (Clean Arch, CI/CD) and developer autonomy through benevolent yet demanding mentorship.",
          fr: "J'intègre vos équipes pour apporter expertise et méthodologie. Je favorise les bonnes pratiques (Clean Arch, CI/CD) et l'autonomie des développeurs à travers un mentorat bienveillant mais exigeant.",
        },
      },

      //SKILLS CONTENT

      // toggle between skills and tools in skills section
      isSkillsOrTools: "skills",

      mySkills: {
        title: { en: "my skills", fr: "mes compétences" },
        subtitle1: { en: "My Technical", fr: "Mon Arsenal" },
        subtitle2: {
          en: "Arsenal",
          fr: "Technique",
        },
        text: {
          en: "Leveraging a modern, robust ecosystem to solve complex business problems. I select and master the right tools to deliver efficiency and scalability.",
          fr: "Tirer parti d'un écosystème moderne et robuste pour résoudre des problèmes métier complexes. Je sélectionne et maîtrise les bons outils pour offrir efficacité et évolutivité.",
        },
        skillsLabel: { en: "Core Tech", fr: "Socle Techno" },
        toolsLabel: { en: "Ecosystème", fr: "Ecosystème" },
        skillsItems: [
          {
            imgUrl: "assets/images/skills/flutter.png",
            title: "Flutter",
          },
          {
            imgUrl: "assets/images/skills/dart.png",
            title: "Dart",
          },
          {
            imgUrl: "assets/images/skills/react.png",
            title: "React / React Native",
          },
          {
            imgUrl: "assets/images/skills/next.png",
            title: "Next.js",
          },
          {
            imgUrl: "assets/images/skills/typescript.png",
            title: "TypeScript",
          },
          {
             imgUrl: "assets/images/skills/javascript.png",
             title: "JavaScript",
           },
          {
            imgUrl: "assets/images/skills/vue.png",
            title: "Vue.js",
          },
          {
            imgUrl: "assets/images/skills/angular.png",
            title: "Angular",
          },
          {
            imgUrl: "assets/images/skills/firebase.png",
            title: "Firebase",
          },
          {
            imgUrl: "assets/images/skills/supabase.png",
            title: "Supabase",
          },
          {
            imgUrl: "assets/images/skills/html5.png",
            title: "HTML5",
          },
          {
            imgUrl: "assets/images/skills/css3.png",
            title: "CSS3",
          },
          {
            imgUrl: "assets/images/skills/sass.png",
            title: "SASS",
          },
        ],
        toolsItems: [
          {
            imgUrl: "assets/images/skills/azure.png",
            title: "Azure DevOps",
          },
          {
            imgUrl: "assets/images/skills/gitlab.png",
            title: "Gitlab",
          },
          {
            imgUrl: "assets/images/skills/git.png",
            title: "Git",
          },
          {
            imgUrl: "assets/images/skills/jira.webp",
            title: "Jira",
          },
          {
            imgUrl: "assets/images/skills/confluence.webp",
            title: "Confluence",
          },
          {
            imgUrl: "assets/images/skills/play.png",
            title: "Google Play Console",
          },
          {
            imgUrl: "assets/images/skills/app.png",
            title: "AppStore Connect",
          },
          {
            imgUrl: "assets/images/skills/android.png",
            title: "Android Studio",
          },
          {
            imgUrl: "assets/images/skills/xcode.png",
            title: "XCode",
          },
          {
            imgUrl: "assets/images/skills/vs-code.png",
            title: "VS Code",
          },
          {
            imgUrl: "assets/images/skills/postman.webp",
            title: "Postman",
          },
          {
             imgUrl: "assets/images/skills/npm.png",
             title: "Npm/Yarn",
           },
        ],
      },

      language: "french",
      careerStartDate: 2016,
      copyrightStartDate: 2022,
      completedProjects: 25,
      happyClients: 20,

      // EDUCATION CONTENT
      education: {
        title: { en: "Education", fr: "Education" },
        subtitle: { en: "International Background", fr: "Parcours International" },
        text: {
          en: `My academic journey spans across three continents (Europe, Asia, Africa), reflecting a global perspective and adaptability. I have pursued Master's level programs in French, Chinese, and Malagasy universities.`,
          fr: `Mon parcours académique s'étend sur trois continents (Europe, Asie, Afrique), reflétant une perspective mondiale et une grande adaptabilité. J'ai suivi des cursus de niveau Master dans des universités françaises, chinoises et malgaches.`,
        },
        items: [
          {
            date: "2023",
            schoolName: {
              fr: "Université Côte d'Azur (France)",
              en: "Côte d'Azur University (France)",
            },
            degreeTitle: {
              fr: "Master 2 MBDS",
              en: "Master 2 MBDS",
            },
            desc: {
              fr: "Master 2 MIAGE Mobiquité, Base de Données et intégration de Systèmes (MBDS).",
              en: "Master 2 MIAGE Mobiquity, Database and Systems Integration (MBDS).",
            },
          },
          {
            date: "2022",
            schoolName: {
              fr: "Beijing University of Technology",
              en: "Beijing University of Technology",
            },
            degreeTitle: {
              fr: "Master - Imagerie Médicale & Vision par Ordinateur",
              en: "Master - Medical Imaging & Computer Vision",
            },
            desc: {
              fr: "Master en Computer Science and Technology.",
              en: "Master in Computer Science and Technology.",
            },
          },
          {
            date: "2022",
            schoolName: { fr: "CNTEMAD", en: "CNTEMAD" },
            degreeTitle: {
              fr: "Master 1 Génie Logiciel & Base de données",
              en: "Master 1 Software Engineering & Databases",
            },
            desc: {
              fr: "Master 1 en Informatique.",
              en: "Master 1 in Computer Science.",
            },
          },
           {
            date: "2020",
            schoolName: {
              fr: "Beijing University of Technology",
              en: "Beijing University of Technology",
            },
            degreeTitle: {
              fr: "Certificat Langue & Littérature Chinoise",
              en: "Chinese Language & Literature Certificate",
            },
            desc: {
              fr: "Certificat de langue.",
              en: "Language certificate.",
            },
          },
          {
            date: "2017",
            schoolName: {
              fr: "Infocentre de La Salle Soavimbahoaka",
              en: "Infocentre de La Salle Soavimbahoaka",
            },
            degreeTitle: {
              fr: "Licence Développement d'application",
              en: "Bachelor in Application Development",
            },
            desc: {
              fr: "Licence en Informatique.",
              en: "Bachelor in Computer Science.",
            },
          },
          {},
        ],
      },

      // EXPERIENCE CONTENT
      experience: {
        title: { en: "Experience", fr: "Expérience" },
        subtitle1: {
          en: `Impactful Leadership`,
          fr: `Leadership Impactant`,
        },
        subtitle2: {
          en: "& Technical Expertise",
          fr: "& Expertise Technique",
        },
        text: {
          en: `Transitioning from hands-on development to strategic leadership, I have consistently driven technical excellence. My track record includes managing technical teams, architecting complex cloud solutions, and delivering high-value projects in international environments.`,
          fr: `Passant du développement pratique au leadership stratégique, j'ai constamment favorisé l'excellence technique. Mon parcours inclut la gestion d'équipes techniques, l'architecture de solutions cloud complexes et la livraison de projets à haute valeur ajoutée dans des environnements internationaux.`,
        },
        items: [
          {
            date: "Nov 2025 - Present",
            companyName: {
              fr: "Indépendant",
              en: "Freelance",
            },
            jobTitle: {
              fr: "Tech Lead & Solutions Architect",
              en: "Tech Lead & Solutions Architect",
            },
            desc: {
              fr: "Architecture et lead technique pour des projets innovants.",
              en: "Architecture and technical lead for innovative projects.",
            },
          },
          {
            date: "Jun 2023 - Present",
            companyName: {
              fr: "Digital Training Center | DTC-MG",
              en: "Digital Training Center | DTC-MG",
            },
            jobTitle: {
              fr: "Co-fondateur & Responsable",
              en: "Co-founder & Manager",
            },
            desc: {
              fr: "Conception de programmes, enseignement développement mobile, encadrement pédagogique.",
              en: "Program design, mobile development teaching, pedagogical supervision.",
            },
          },
          {
            date: "Feb 2025 - Oct 2025",
            companyName: { fr: "Mora Market", en: "Mora Market" },
            jobTitle: {
              fr: "Technical Team Lead Developer",
              en: "Technical Team Lead Developer",
            },
            desc: {
              fr: "Encadrement équipe, Org. Sprints Agile (Scrum), Code Review, CI/CD, Coaching.",
              en: "Team Management, Agile Sprint Org (Scrum), Code Review, CI/CD, Coaching.",
            },
          },
          {
            date: "Dec 2023 - Jan 2025",
            companyName: {
              fr: "Versusmind",
              en: "Versusmind",
            },
            jobTitle: {
              fr: "Consultant Nouvelles Technologies",
              en: "New Technologies Consultant",
            },
            desc: {
              fr: "Développement d'applications critiques (Santé, BTP).",
              en: "Critical App Development (Health, Construction).",
            },
          },
           {
            date: "Jun 2021 - Dec 2023",
            companyName: { fr: "Bocasay Madagascar", en: "Bocasay Madagascar" },
            jobTitle: {
              fr: "Développeur Mobile & Front-end",
              en: "Mobile & Front-end Developer",
            },
            desc: {
              fr: "Réalisation d'applications complexes (GED, E-learning). Optimisation des performances et garants de la qualité du code.",
              en: "Development of complex applications (Electronic Document Management, E-learning). Performance optimization, and code quality guardian.",
            },
          },
          {
            date: "Jan 2018 - Jun 2018",
            companyName: {
              fr: "ONG HABAKA",
              en: "ONG HABAKA",
            },
            jobTitle: { fr: "Développeur Full Stack", en: "Full Stack Developer" },
            desc: {
              fr: "App de suivi Fablab (CodeIgniter, MySQL).",
              en: "Fablab tracking app (CodeIgniter, MySQL).",
            },
          },
          {},
        ],
      },

      //PORTFOLIO CONTENT
      // filter type for items in portfolio section
      worksFilter: "all",

      myWorks: {
        isVisible: false,
        title: { en: "portfolio", fr: "Portfolio" },
        subtitle1: {
          en: `Selected`,
          fr: `Sélection de`,
        },
        subtitle2: {
          en: "Work",
          fr: "Travaux",
        },
        text: {
          en: `A selection of projects where I delivered scalable solutions, optimized performance, and ensured technical quality. From mobile apps to complex web platforms.`,
          fr: `Une sélection de projets où j'ai livré des solutions évolutives, optimisé les performances et garanti la qualité technique. Des applications mobiles aux plateformes web complexes.`,
        },
        loadMore: {
          en: "Load more works",
          fr: "Charger plus de travaux",
        },
      },

      allPortfolioItems: [
        {
          url: "#",
          imgUrl: "assets/images/portfolio/portfolio-1.png",
          title: {
            en: "Student Records Management",
            fr: "Gestion de notes d'étudiants",
          },
          desc: { en: "2016", fr: "2016" },
          category: { slug: "web", name: "Web" },
        },
        {
          url: "#",
          imgUrl: "assets/images/portfolio/portfolio-2.png",
          title: {
            en: "Vehicle fleet management",
            fr: "Gestion de parc automobile",
          },
          desc: { en: "2017", fr: "2017" },
          category: { slug: "web", name: "Web" },
        },
        {
          url: "#",
          imgUrl: "assets/images/portfolio/portfolio-3.png",
          title: {
            en: "Entry/Exit system management",
            fr: "Système de gestion d'entrée et sortie",
          },
          desc: { en: "2018", fr: "2018" },
          category: { slug: "web", name: "Web" },
        },
        {
          url: "#",
          imgUrl: "assets/images/portfolio/portfolio-4.png",
          title: { en: "BMI Calculator", fr: "Calculateur IMC" },
          desc: { en: "April 2019", fr: "Avril 2019" },
          category: { slug: "mobile", name: "Mobile" },
        },
        {
          url: "#",
          imgUrl: "assets/images/portfolio/portfolio-5.png",
          title: { en: "Music player", fr: "Music Player" },
          desc: { en: "2021", fr: "2021" },
          category: { slug: "desktop", name: "Desktop" },
        },
        {
          url: "#",
          imgUrl: "assets/images/portfolio/portfolio-6.png",
          title: { en: "Skilleos", fr: "Skilleos" },
          desc: { en: "2021", fr: "2021" },
          category: { slug: "web", name: "Web" },
        },
        {
          url: "#",
          imgUrl: "assets/images/portfolio/portfolio-5.png",
          title: { en: "Meteo application", fr: "Meteo" },
          desc: { en: "2021", fr: "2021" },
          category: { slug: "mobile", name: "Mobile" },
        },
        {
          url: "#",
          imgUrl: "assets/images/portfolio/portfolio-6.png",
          title: { en: "Calculator", fr: "Calculatrice" },
          desc: { en: "2023", fr: "2023" },
          category: { slug: "mobile", name: "Mobile" },
        },
        {
          url: "#",
          imgUrl: "assets/images/portfolio/portfolio-7.png",
          title: {
            en: "Touristic pathway management",
            fr: "Gestion de parcours touristique",
          },
          desc: { en: "2023", fr: "2023" },
          category: { slug: "web", name: "web" },
        },
        {
          url: "#",
          imgUrl: "assets/images/portfolio/portfolio-7.png",
          title: { en: "Mail Management", fr: "Gestion de courriers" },
          desc: { en: "2023", fr: "2023" },
          category: { slug: "web", name: "web" },
        },
        {
          url: "#",
          imgUrl: "assets/images/portfolio/portfolio-7.png",
          title: {
            en: "Student assigment manager",
            fr: "Gestion de devoir d'étudiant",
          },
          desc: { en: "2023", fr: "2023" },
          category: { slug: "web", name: "web" },
        },
      ].reverse(),

      // current page of portfolio items
      portfolioItemsPage: 0,

      // viewed portfolio items
      portfolioItems: [],

      //TESTIMONIALS CONTENT
      testimonials: {
        isVisible: false,
        title: {
          en: "testimonials",
          fr: "témoignages",
        },
        subtitle1: {
          en: "Check what's people",
          fr: "Voyez ce que les gens",
        },
        subtitle2: {
          en: "say about me",
          fr: "disent de moi",
        },
      },
      testimonialsItems: [
        {
          imgUrl: "assets/images/testimonials/testimonials-2.jpg",
          quoteContent: {
            en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla justo at odio sodales hendrerit. Mauris molestie pellentesque quam, sit amet ultricies ex sagittis non.",
            fr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla justo at odio sodales hendrerit. Mauris molestie pellentesque quam, sit amet ultricies ex sagittis non.",
          },
          quoteAuthor: { en: "John Doe", fr: "John Doe" },
          jobTitle: { en: "Photographer", fr: "Photographer" },
        },
        {
          imgUrl: "assets/images/testimonials/testimonials-2.jpg",
          quoteContent: {
            en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla justo at odio sodales hendrerit. Mauris molestie pellentesque quam, sit amet ultricies ex sagittis non.",
            fr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla justo at odio sodales hendrerit. Mauris molestie pellentesque quam, sit amet ultricies ex sagittis non.",
          },
          quoteAuthor: { en: "John Doe", fr: "John Doe" },
          jobTitle: { en: "Photographer", fr: "Photographer" },
        },
        {
          imgUrl: "assets/images/testimonials/testimonials-2.jpg",
          quoteContent: {
            en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla justo at odio sodales hendrerit. Mauris molestie pellentesque quam, sit amet ultricies ex sagittis non.",
            fr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla justo at odio sodales hendrerit. Mauris molestie pellentesque quam, sit amet ultricies ex sagittis non.",
          },
          quoteAuthor: { en: "John Doe", fr: "John Doe" },
          jobTitle: { en: "Photographer", fr: "Photographer" },
        },
        {
          imgUrl: "assets/images/testimonials/testimonials-2.jpg",
          quoteContent: {
            en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla justo at odio sodales hendrerit. Mauris molestie pellentesque quam, sit amet ultricies ex sagittis non.",
            fr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla justo at odio sodales hendrerit. Mauris molestie pellentesque quam, sit amet ultricies ex sagittis non.",
          },
          quoteAuthor: { en: "John Doe", fr: "John Doe" },
          jobTitle: { en: "Photographer", fr: "Photographer" },
        },
        {
          imgUrl: "assets/images/testimonials/testimonials-2.jpg",
          quoteContent: {
            en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla justo at odio sodales hendrerit. Mauris molestie pellentesque quam, sit amet ultricies ex sagittis non.",
            fr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla justo at odio sodales hendrerit. Mauris molestie pellentesque quam, sit amet ultricies ex sagittis non.",
          },
          quoteAuthor: { en: "John Doe", fr: "John Doe" },
          jobTitle: { en: "Photographer", fr: "Photographer" },
        },
      ],

      contact: {
        title: { en: "Contact", fr: "Contact" },
        subtitle1: { en: "Have You Any Project?", fr: "Vous avez un projet?" },
        subtitle2: {
          en: "Please Drop a Message",
          fr: "Veuillez laisser un message",
        },
        text: {
          en: "Get in touch and let me know how I can help. Fill out the form and I’ll be in touch as soon as possible.",
          fr: "Contactez-moi et dites-moi comment je peux vous aider. Remplissez le formulaire et je vous contacterai dès que possible.",
        },
        addressLabel: { en: "Address", fr: "Adresse" },
        address: "Madagascar, Antananarivo, 101",
        phoneLabel: { en: "Phone", fr: "Téléphone" },
        phone1: "(+261) 34 20 905 72",
        phone2: "(+261) 32 84 688 57",
        emailLabel: { en: "Email", fr: "Email" },
        email1: "christianstephanjosue@gmail.com",
        email2: "",

        form: {
          customerNameLabel: { en: "Name", fr: "Nom" },
          customerNamePlaceholder: {
            en: "e.g. Jean Rakoto",
            fr: "ex. Jean Rakoto",
          },
          customerEmailLabel: { en: "Email", fr: "Email" },
          customerEmailPlaceholder: {
            en: "e.g. jean.rakoto@gmail.com",
            fr: "ex. jean.rakoto@gmail.com",
          },
          customerPhoneLabel: { en: "Phone", fr: "Téléphone" },
          customerPhonePlaceholder: {
            en: "Phone Number",
            fr: "Numéro de télephone",
          },
          messageLabel: { en: "Message", fr: "Message" },
          messagePlaceholder: {
            en: "Write message...",
            fr: "Ecrire un message...",
          },
          optionalLabel: { en: "Optional", fr: "Optionelle" },
        },
      },
    };
  },

  created() {
    // get a theme to use
    this.getAppTheme();

    // get portfolio items
    this.getPortfolioItems();
  },

  mounted() {
    if (window.innerWidth >= 992) {
      // initialize circle cursor
      this.initCircleCursor();

      // nav menu tab trap
      this.navMenuTabTrap();

      // apply pan effect hero image
      this.heroImgPanEffect();

      // initialize VanillaTilt library in portfolio section
      this.initializeTilt();
    }

    // hide the preloader screen after loading
    window.addEventListener("load", () =>
      setTimeout(() => (this.isPreloading = false), 5000)
    );

    // scrolling options
    this.scrollingOptions();
    document.addEventListener("scroll", () => this.scrollingOptions());

    // initialize popper.js plugin
    document.querySelectorAll(".has-ultimate-tooltip").forEach((el) => {
      Popper.createPopper(el, el.querySelector(".ultimate-tooltip"), {
        placement: "top",
        modifiers: [{ name: "offset", options: { offset: [0, 30] } }],
      });
    });
  },

  methods: {
    // initialize circle cursor
    initCircleCursor() {
      const app = this.$refs.appRef;
      const outer = this.$refs.circleCursorOuter;
      const inner = this.$refs.circleCursorInner;

      app?.addEventListener("mousemove", (e) => {
        // make the circles follow the cursor
        outer.setAttribute(
          "style",
          `visibility: visible; top: ${e.clientY}px; left: ${e.clientX}px;`
        );
        inner.setAttribute(
          "style",
          `visibility: visible; top: ${e.clientY}px; left: ${e.clientX}px;`
        );

        // add link hover style
        e.target.closest("a") ||
        e.target.closest("button") ||
        e.target.closest(".link-hover")
          ? inner.classList.add("cursor-link-hover")
          : inner.classList.remove("cursor-link-hover");
      });

      app.addEventListener("click", () => {
        // add pulse effect on click
        inner.classList.add("cursor-click-effect");
        setTimeout(() => inner.classList.remove("cursor-click-effect"), 200);
      });
    },

    // get a theme to use
    getAppTheme() {
      // get the saved theme from the localStorage
      const storageSavedTheme = localStorage.getItem("nafieSavedTheme");

      // Check to see if there a saved theme
      if (storageSavedTheme) {
        this.savedTheme = storageSavedTheme;
      } else {
        // So, try to get the browser default theme or make your own default

        // Check to see if Media-Queries are supported
        if (window.matchMedia) {
          // Check if the dark-mode Media-Query matches
          if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            this.savedTheme = "dark_theme";
          } else {
            this.savedTheme = "light_theme";
          }
        } else {
          // Default (when Media-Queries are not supported)
          this.savedTheme = appTheme;
        }
      }

      // save the new theme in the localStorage
      localStorage.setItem("nafieSavedTheme", this.savedTheme);
    },

    // detect the theme changes
    changeAppTheme() {
      this.savedTheme === "light_theme"
        ? (this.savedTheme = "dark_theme")
        : (this.savedTheme = "light_theme");

      // save the new theme in the localStorage
      localStorage.setItem("nafieSavedTheme", this.savedTheme);
    },

    switchLanguage() {
      this.language = this.language === "english" ? "french" : "english";
      console.log(this.language, this.getLanguageCode());
    },

    getLanguageCode() {
      return this.language == "english" ? "en" : "fr";
    },

    // toggle nav menu
    toggleNavMenu() {
      this.isNavMenuOpen = !this.isNavMenuOpen;
      this.isNavMenuOpen ? this.openNavMenu() : this.closeNavMenu();
    },

    // open nav menu
    openNavMenu() {
      const bodyEl = document.getElementsByTagName("body")[0];

      this.isNavMenuOpen = true;

      bodyEl.setAttribute("style", "overflow-y: hidden;");

      // set focus on nav menu
      this.$refs.headerNav.querySelector(".desktop-menu-content").focus();
    },

    // close nav menu
    closeNavMenu() {
      const bodyEl = document.getElementsByTagName("body")[0];

      this.isNavMenuOpen = false;

      bodyEl.removeAttribute("style");

      // set focus on nav menu toggle button
      this.$refs.navMenuToggleBtn.focus();
    },

    // nav menu tab trap
    navMenuTabTrap() {
      const nav = this.$refs.headerNav;
      const focusableElementsString =
        'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]';
      let firstTabStop;
      let lastTabStop;
      let isFirstTabStop;
      let isLastTabStop;

      document.addEventListener("keyup", (e) => {
        if (nav.classList.contains("menu-open")) {
          // get first & last focusable elements in the side menu for the tab trap
          const visibleFocusableEls = [
            ...nav.querySelectorAll(focusableElementsString),
          ].filter(
            (el) =>
              window.getComputedStyle(el).getPropertyValue("visibility") !==
              "hidden"
          );
          firstTabStop = visibleFocusableEls[0];
          lastTabStop = visibleFocusableEls[visibleFocusableEls.length - 1];

          if (e.code === "Tab") {
            if (e.shiftKey) {
              /* shift + tab */ // if this is the first item, move to the last item
              isFirstTabStop && lastTabStop.focus();
            } /* tab */ else {
              // if this is the last item, go back to the first item
              isLastTabStop && firstTabStop.focus();
            }

            // close nav menu on Escape button press
          } else if (e.code === "Escape") {
            this.toggleNavMenu();
          }

          // get current active element
          const activeEl = document.activeElement;

          // check if last item or not
          isLastTabStop = activeEl === lastTabStop ? true : false;

          // check if first item or not
          isFirstTabStop = activeEl === firstTabStop ? true : false;
        }
      });
    },

    // apply pan effect hero image
    heroImgPanEffect() {
      const parent = this.$refs.heroSection;
      const layer1 = parent.querySelectorAll(".layer")[0];
      const layer2 = parent.querySelectorAll(".layer")[1];

      parent.addEventListener("mousemove", (e) => {
        const x =
          ((e.x - parent.getBoundingClientRect().x) / parent.offsetWidth) * 100;
        const y =
          ((e.y - parent.getBoundingClientRect().y) / parent.offsetHeight) *
          100;

        parent.classList.add("parallax-animation");

        layer1.setAttribute("style", `transform-origin: ${x}vw ${y}vh;`);
        layer2.setAttribute("style", `transform-origin: ${x}vw ${y}vh;`);
      });
    },

    // scrolling options
    scrollingOptions() {
      const scrollPosition = window.pageYOffset;

      // check for current scroll position to minimize the header
      this.isHeaderBig =
        scrollPosition >= this.startMinimizingHeaderAt ? false : true;

      // check for current scroll position to toggle the header
      this.isHeaderHidden =
        scrollPosition > 100 && scrollPosition > this.lastScrollPosition
          ? true
          : false;
      this.lastScrollPosition = scrollPosition;

      // check for current scroll position to show the scrollTop button
      this.isScrollTopBtnDisplayed =
        scrollPosition >= this.startShowingScrollTopBtnAt ? true : false;
    },

    // scroll to top
    scrollToTop() {
      window.scroll({ top: 0, behavior: "smooth" });
    },

    // initialize VanillaTilt library in portfolio section
    initializeTilt() {
      VanillaTilt.init(
        this.$refs.portfolioItems?.querySelectorAll(".portfolio-item"),
        {
          max: 8,
          speed: 400,
          glare: true,
          "max-glare": 0.3,
        }
      );
    },

    // get portfolio items
    getPortfolioItems() {
      const size = 7;

      // check if there is more works or not
      if (
        (this.portfolioItemsPage - 1) * size + size <
        this.allPortfolioItems.length
      ) {
        this.portfolioItemsPage++;
        const itemsArr = this.allPortfolioItems.slice(
          (this.portfolioItemsPage - 1) * size,
          this.portfolioItemsPage * size
        );

        this.portfolioItems.push(...itemsArr);

        // initialize VanillaTilt for new items
        setTimeout(
          () => this.portfolioItemsPage > 1 && this.initializeTilt(),
          0
        );
      } else {
        // show the message "No more works" to the user
        this.setNotify({
          className: "danger",
          msg: this.$refs.portfolioItems?.getAttribute(
            "data-no-more-works-msg"
          ),
          time: 3000,
        });
      }
    },

    sendAknowledgmentReceipt(formData) {
      console.log(formData);
      const url = "https://f6c2io.buildship.run/receipt-aknowledgment";
      fetch(url, { method: "POST", body: formData }).catch((err) => console.log(err));
    },

    // contact form validation
    contactFormValidation() {
      // contact form
      const contactForm = this.$refs.contactForm;

      // form controls
      const name = contactForm.querySelector('input[name="name"]');
      const email = contactForm.querySelector('input[name="email"]');
      const phone = contactForm.querySelector('input[name="phone"]');
      const message = contactForm.querySelector("textarea");

      // form validation status
      let errors = {
        name: { required: true, minLength: true },
        email: { required: true, invalid: true },
        phone: { invalid: true },
        message: { required: true },
      };

      /* --------------- */
      /* name validation */
      /* --------------- */

      // required validation
      if (name.value === "") {
        errors.name.required = true;
        this.setNotify({
          id: "nameRequired",
          className: "danger",
          msg: name.closest(".control").querySelector(".errors-msgs .required")
            .value,
        });
      } else {
        errors.name.required = false;
        this.dismissNotify("nameRequired");
      }

      // minlength validation
      if (
        name.value.length > 0 &&
        name.value.length < name.getAttribute("minlength")
      ) {
        errors.name.minLength = true;
        this.setNotify({
          id: "nameMinLength",
          className: "danger",
          msg: name.closest(".control").querySelector(".errors-msgs .minLength")
            .value,
        });
      } else {
        errors.name.minLength = false;
        this.dismissNotify("nameMinLength");
      }

      // toggle invalid errors & style classes
      if (Object.keys(errors.name).some((err) => errors.name[err] === true)) {
        name.classList.remove("valid");
        name.classList.add("invalid");
      } else {
        name.classList.remove("invalid");
        name.classList.add("valid");
      }

      /* ---------------- */
      /* email validation */
      /* ---------------- */

      // required validation
      if (email.value === "") {
        errors.email.required = true;
        this.setNotify({
          id: "emailRequired",
          className: "danger",
          msg: email.closest(".control").querySelector(".errors-msgs .required")
            .value,
        });
      } else {
        errors.email.required = false;
        this.dismissNotify("emailRequired");
      }

      // email validation
      if (
        email.value.length > 0 &&
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          email.value
        )
      ) {
        errors.email.invalid = true;
        this.setNotify({
          id: "emailInvalid",
          className: "danger",
          msg: email.closest(".control").querySelector(".errors-msgs .invalid")
            .value,
        });
      } else {
        errors.email.invalid = false;
        this.dismissNotify("emailInvalid");
      }

      // toggle invalid errors & style classes
      if (Object.keys(errors.email).some((err) => errors.email[err] === true)) {
        email.classList.remove("valid");
        email.classList.add("invalid");
      } else {
        email.classList.remove("invalid");
        email.classList.add("valid");
      }

      /* ---------------- */
      /* phone validation */
      /* ---------------- */

      // phone validation
      if (
        phone.value.length > 0 &&
        !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
          phone.value
        )
      ) {
        errors.phone.invalid = true;
        this.setNotify({
          id: "phoneInvalid",
          className: "danger",
          msg: phone.closest(".control").querySelector(".errors-msgs .invalid")
            .value,
        });
      } else {
        errors.phone.invalid = false;
        this.dismissNotify("phoneInvalid");
      }

      // toggle invalid errors & style classes
      if (Object.keys(errors.phone).some((err) => errors.phone[err] === true)) {
        phone.classList.remove("valid");
        phone.classList.add("invalid");
      } else {
        phone.classList.remove("invalid");
        phone.classList.add("valid");
      }

      /* ------------------ */
      /* message validation */
      /* ------------------ */

      // required validation
      if (message.value === "") {
        errors.message.required = true;
        this.setNotify({
          id: "messageRequired",
          className: "danger",
          msg: message
            .closest(".control")
            .querySelector(".errors-msgs .required").value,
        });
      } else {
        errors.message.required = false;
        this.dismissNotify("messageRequired");
      }

      // toggle invalid errors & style classes
      if (
        Object.keys(errors.message).some((err) => errors.message[err] === true)
      ) {
        message.classList.remove("valid");
        message.classList.add("invalid");
      } else {
        message.classList.remove("invalid");
        message.classList.add("valid");
      }

      // send the message if the form is valid
      !Object.values(errors).some((control) =>
        Object.values(control).some(Boolean)
      ) && this.sendContactFormMessage(contactForm);
    },

    // send message from contact form
    sendContactFormMessage(form) {
      const url = form.getAttribute("action");
      const formData = new FormData(form);

      // start loading spinner
      this.startLoading();

      // send post request
      fetch(url, { method: "POST", body: formData })
        .then((res) => res.text())
        .then((data) => {
          if (String(data).includes("successful")) {
            // show success message
            this.setNotify({
              className: "success",
              msg: form.getAttribute("data-success-msg"),
              time: 5000,
            });

            // send aknowledgment receipt
            this.sendAknowledgmentReceipt(new FormData(form));

            // reset all form inputs
            form.reset();

            // remove inputs valid classes
            form
              .querySelectorAll(".valid")
              .forEach((el) => el.classList.remove("valid"));
          } else if (String(data).includes("successful")) {
            // show error message
            this.setNotify({
              className: "danger",
              msg: form.getAttribute("data-err-msg"),
              time: 5000,
            });
          }

          // end loading spinner
          this.endLoading();
        })
        .catch((err) => console.log(err));
    },

    // show messages by toast notifications
    setNotify({ id, className, msg, time }) {
      const notify = {
        id: id || `${Date.now()}${this.notifications.length}`,
        className,
        msg,
        time,
      };

      if (id) {
        !this.notifications.some((e) => e.id === id) &&
          this.notifications.push(notify);
      } else {
        this.notifications.push(notify);
      }

      // remove this notification from the array after (n) seconds
      time && setTimeout(() => this.dismissNotify(notify.id), time);
    },

    // dismiss the notifications
    dismissNotify(id) {
      const index = this.notifications.findIndex((notify) => notify.id === id);
      index > -1 && this.notifications.splice(index, 1);
    },

    // add ajax loading spinner
    startLoading() {
      this.ajaxLoading.push(true);
    },

    // remove ajax loading spinner
    endLoading() {
      this.ajaxLoading.pop();
    },
  },
  computed: {
    // flag to toggle ajax loading spinner
    isAjaxLoading() {
      return this.ajaxLoading.some((state) => state === true);
    },

    // get the total years of experience
    experienceYears() {
      return (
        new Date(
          new Date() - new Date(String(this.careerStartDate))
        ).getFullYear() - 1970 
      );
    },

    // split education items into chunks of 2 items
    educationChunks() {
      const items = this.education.items;
      return [...Array(Math.ceil(items.length / 2))].map((_, i) =>
        items.slice(i * 2, i * 2 + 2)
      );
    },

    // split experience items into chunks of 2 items
    experienceChunks() {
      const items = this.experience.items;
      return [...Array(Math.ceil(items.length / 2))].map((_, i) =>
        items.slice(i * 2, i * 2 + 2)
      );
    },

    // get the total years of copyright
    copyrightDate() {
      const yearsDuration =
        new Date(
          new Date() - new Date(String(this.copyrightStartDate))
        ).getFullYear() - 1970;
      return yearsDuration === 0
        ? this.copyrightStartDate
        : `${this.copyrightStartDate} - ${
            this.copyrightStartDate + yearsDuration
          }`;
    },
  },
  directives: {
    // clone directive
    clone: {
      mounted(el) {
        el.parentNode.insertBefore(el.cloneNode(true), el.nextSibling);
      },
    },

    // add stagger delay to children elements
    staggerdelay: {
      mounted(el, binding) {
        [...el.children].forEach((child, i) => {
          child.setAttribute(
            "style",
            `animation-delay: ${(i + 1) * (binding.value || 100)}ms`
          );
        });
      },
    },

    // tooltip directive
    tooltip: {
      mounted(el, binding) {
        el.classList.add("has-tooltip");
        el.insertAdjacentHTML(
          "beforeend",
          `<div class="custom-tooltip custom-tooltip-${binding.value.dir}">${binding.value.text}</div>`
        );
      },
    },
  },
});

app.mount("#app");
