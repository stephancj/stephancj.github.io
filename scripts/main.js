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
      portfolioCategory: "all",
      selectedPortfolioItem: null,
      portfolioLastFocusedElement: null,

      // list of nav links to loop through it
      navLinks: [
        {
          url: "#hero",
          title: { en: "Home", fr: "Accueil" },
        },
        {
          url: "#about",
          title: { en: "About", fr: "À propos" },
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
          title: { en: "About", fr: "À propos" },
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
            en: "Lead Software Engineer · Web, mobile & applied AI",
            fr: "Lead Software Engineer · Web, mobile & IA appliquée",
          },
          titleTop: {
            en: "I turn business needs into",
            fr: "Je transforme des besoins métiers en",
          },
          titleBottom: {
            en: "reliable software products.",
            fr: "produits logiciels fiables.",
          },
          lead: {
            en: "I support startups, SMEs and product teams from scoping to production: architecture, full-stack and mobile development, automation, applied AI and technical leadership.",
            fr: "J'accompagne startups, PME et équipes produit du cadrage à la mise en production : architecture, développement full-stack et mobile, automatisation, IA appliquée et pilotage technique.",
          },
        },
        getInTouch: { en: "Discuss your project", fr: "Discuter de votre projet" },
        viewWork: { en: "View case studies", fr: "Voir les réalisations" },
        scroll: { en: "How I help", fr: "Comment j'interviens" },
        experienceYearLabel: {
          en: "Years of experience",
          fr: "Ans d'expérience",
        },
        completedProjectLabel: {
          en: "Projects and engagements",
          fr: "Projets et missions",
        },
        happyClientLabel: { en: "Client collaborations", fr: "Collaborations client" },
        hireMe: { en: "Contact me", fr: "Me contacter" },
        toCV: { en: "Download CV", fr: "Télécharger CV" },
        availability: {
          en: "Available for product scoping, end-to-end delivery, technical audits and team reinforcement.",
          fr: "Disponible pour cadrage produit, delivery de bout en bout, audit technique et renfort d'équipe.",
        },
        portfolio: {
          viewDetails: {
            en: "View project",
            fr: "Voir le projet",
          },
          closeDetails: {
            en: "Close project details",
            fr: "Fermer le detail du projet",
          },
          role: {
            en: "Role",
            fr: "Rôle",
          },
          contributions: {
            en: "Key contributions",
            fr: "Contributions principales",
          },
          clientHighlights: {
            en: "Concrete value delivered",
            fr: "Ce que le projet apporte concretement",
          },
        },
      },

      heroProof: {
        kicker: {
          en: "Experience at a glance",
          fr: "Le parcours en bref",
        },
      },

      heroProofBadges: [
        {
          en: "Since 2016 · 5+ years in product teams",
          fr: "Depuis 2016 · 5+ ans en équipes produit",
        },
        {
          en: "Led a 5-developer team",
          fr: "Équipe de 5 développeurs pilotée",
        },
      ],

      heroHighlights: [
        {
          value: { en: "From idea to production", fr: "De l'idée à la production" },
          label: {
            en: "product scoping, architecture, delivery and releases",
            fr: "cadrage produit, architecture, delivery et mises en production",
          },
        },
        {
          value: { en: "Cross-platform engineering", fr: "Ingénierie multi-plateforme" },
          label: {
            en: "web, mobile, back-end, data and CI/CD",
            fr: "web, mobile, back-end, données et CI/CD",
          },
        },
        {
          value: { en: "Business-critical products", fr: "Produits métiers exigeants" },
          label: {
            en: "e-commerce, healthcare, logistics and field operations",
            fr: "e-commerce, santé, logistique et opérations terrain",
          },
        },
      ],

      aboutMe: {
        title: { en: "Technical partner", fr: "Partenaire technique" },
        subtitle1: {
          en: "The breadth to move forward,",
          fr: "La polyvalence pour avancer,",
        },
        subtitle2: {
          en: "the depth to make sound decisions.",
          fr: "la profondeur pour bien décider.",
        },
        text: {
          en: "My scope is broad because product problems rarely fit into one technology. My foundation stays precise: software architecture, full-stack and mobile engineering, product delivery, code quality and team leadership. AI accelerates the work; technical accountability remains human.",
          fr: "Mon champ d'intervention est large parce qu'un problème produit tient rarement dans une seule technologie. Mon socle reste précis : architecture logicielle, ingénierie full-stack et mobile, delivery produit, qualité du code et accompagnement d'équipe. L'IA accélère l'exécution ; la responsabilité technique reste humaine.",
        },
        quoteDescription: {
          en: "Structure, clarity, execution.",
          fr: "Structure, clarté, exécution.",
        },
        quoteText: {
          en: "My role does not stop at implementation. I help clarify the need, reduce technical risk and keep the project moving with solid decisions.",
          fr: "Mon rôle ne se limite pas au développement. J'interviens pour clarifier le besoin, réduire le risque technique et faire avancer le projet avec des décisions solides.",
        },
        highlights: [
          {
            title: { en: "Scoping & roadmap", fr: "Cadrage & feuille de route" },
            text: {
              en: "Clarify the need, constraints, priorities and the shortest credible path to production.",
              fr: "Clarifier le besoin, les contraintes, les priorités et le chemin le plus crédible vers la production.",
            },
          },
          {
            title: { en: "Architecture & delivery", fr: "Architecture & delivery" },
            text: {
              en: "Design and implement web, mobile, back-end and data foundations built for maintainability.",
              fr: "Concevoir et réaliser le web, le mobile, le back-end et la donnée avec une base maintenable.",
            },
          },
          {
            title: { en: "Team reinforcement", fr: "Renfort d'équipe" },
            text: {
              en: "Operational contribution inside an existing team, with autonomy, code review and knowledge sharing.",
              fr: "Contribution opérationnelle dans une équipe existante, avec autonomie, revue de code et transmission des bonnes pratiques.",
            },
          },
          {
            title: { en: "AI-augmented engineering", fr: "Ingénierie augmentée par l'IA" },
            text: {
              en: "Specifications, agents, automation and AI features with review, testing and operating rules.",
              fr: "Spécifications, agents, automatisations et fonctionnalités IA avec revue, tests et règles d'exploitation.",
            },
          },
        ],
        hireMe: { en: "Let's scope your need", fr: "Cadrons votre besoin" },
        downloadCv: { en: "Download Resume", fr: "Télécharger CV" },
      },

      services: {
        title: { en: "Where I step in", fr: "Contextes d'intervention" },
        subtitle: { en: "Four contexts, from the need to production", fr: "Quatre contextes, du besoin à la production" },
        text: {
          en: "I keep the same goal in every engagement: clarify what matters, choose a proportionate solution, deliver it properly and leave a foundation the team can evolve.",
          fr: "Je garde le même objectif dans chaque mission : clarifier l'essentiel, choisir une solution proportionnée, la livrer proprement et laisser une base que l'équipe pourra faire évoluer.",
        },
        outcomeLabel: { en: "Expected outcome", fr: "Résultat attendu" },
        cta: { en: "Discuss this need", fr: "Échanger sur ce besoin" },
        cards: [
          {
            className: "interface",
            imgUrl: "assets/images/services/product-design.svg",
            kicker: {
              en: "For startups",
              fr: "Pour les startups",
            },
            title: {
              en: "Launch a product on reliable foundations",
              fr: "Lancer un produit sur des bases fiables",
            },
            text: {
              en: "For founders or product teams who need to turn an idea into a usable first version while keeping scope, cost and technical risk under control.",
              fr: "Pour les fondateurs et équipes produit qui doivent transformer une idée en première version utile tout en maîtrisant le périmètre, le coût et le risque technique.",
            },
            points: [
              {
                en: "Discovery workshops, product scoping and prioritization",
                fr: "Ateliers de découverte, cadrage produit et priorisation",
              },
              {
                en: "User journeys, functional specifications and delivery plan",
                fr: "Parcours utilisateurs, spécifications fonctionnelles et plan de delivery",
              },
              {
                en: "Stack, architecture, data and integration decisions",
                fr: "Choix de stack, architecture, données et intégrations",
              },
              {
                en: "Web, mobile and back-end implementation through production release",
                fr: "Réalisation web, mobile et back-end jusqu'à la mise en production",
              },
            ],
            outcome: {
              en: "A focused first version, an explicit architecture and a roadmap grounded in real usage.",
              fr: "Une première version ciblée, une architecture explicite et une feuille de route ancrée dans les usages réels.",
            },
          },
          {
            className: "development",
            imgUrl: "assets/images/services/brackets.svg",
            kicker: {
              en: "For SMEs",
              fr: "Pour les PME",
            },
            title: {
              en: "Digitalize a process without making the organization heavier",
              fr: "Digitaliser un processus sans alourdir l'organisation",
            },
            text: {
              en: "For companies that want to replace scattered spreadsheets, manual follow-up or fragmented tools with one coherent business workflow.",
              fr: "Pour les entreprises qui veulent remplacer les tableurs dispersés, les suivis manuels ou les outils fragmentés par un workflow métier cohérent.",
            },
            points: [
              {
                en: "Process mapping, user interviews and functional scoping",
                fr: "Cartographie du processus, entretiens utilisateurs et cadrage fonctionnel",
              },
              {
                en: "Roles, permissions, data flows and business rules",
                fr: "Rôles, permissions, flux de données et règles métier",
              },
              {
                en: "Interfaces designed for office and field operations",
                fr: "Interfaces pensées pour les opérations au bureau et sur le terrain",
              },
              {
                en: "Migration, training, deployment and progressive rollout",
                fr: "Migration, formation, déploiement et adoption progressive",
              },
            ],
            outcome: {
              en: "A maintainable tool that reduces double entry, clarifies operations and can evolve module by module.",
              fr: "Un outil maintenable qui réduit les doubles saisies, clarifie les opérations et évolue module par module.",
            },
          },
          {
            className: "ai",
            imgUrl: "assets/images/services/platform-icon.png",
            kicker: {
              en: "For products in use",
              fr: "Pour les produits en usage",
            },
            title: {
              en: "Add useful AI without making the product fuzzy",
              fr: "Ajouter de l'IA utile sans rendre le produit flou",
            },
            text: {
              en: "For teams that want to add assistance, search, summaries, extraction or smart automations to an existing product or internal workflow.",
              fr: "Pour les équipes qui veulent ajouter assistance, recherche, résumés, extraction ou automatisations intelligentes dans un produit existant ou un workflow interne.",
            },
            points: [
              {
                en: "Use-case audit, expected value and feasibility assessment",
                fr: "Audit des cas d'usage, valeur attendue et étude de faisabilité",
              },
              {
                en: "Prototype with real data and measurable acceptance criteria",
                fr: "Prototype sur données réelles avec critères d'acceptation mesurables",
              },
              {
                en: "Integration into the current product and user journey",
                fr: "Intégration dans le produit actuel et le parcours utilisateur",
              },
              {
                en: "Human validation, observability, cost and security guardrails",
                fr: "Validation humaine, observabilité, maîtrise des coûts et garde-fous de sécurité",
              },
            ],
            outcome: {
              en: "An AI capability tied to a clear job, with controlled quality, cost and operating rules.",
              fr: "Une capacité IA liée à une tâche claire, avec qualité, coût et règles d'exploitation sous contrôle.",
            },
          },
          {
            className: "marketing",
            imgUrl: "assets/images/services/platform-icon.png",
            kicker: {
              en: "For existing teams",
              fr: "Pour les équipes en place",
            },
            title: {
              en: "Reinforce a team without breaking its pace",
              fr: "Renforcer une équipe sans casser son rythme",
            },
            text: {
              en: "For teams that need immediate delivery capacity together with someone able to clarify decisions, improve the system and help developers grow.",
              fr: "Pour les équipes qui ont besoin de capacité de delivery immédiate et d'un profil capable de clarifier les décisions, améliorer le système et faire progresser les développeurs.",
            },
            points: [
              {
                en: "Fast onboarding, technical audit and priority alignment",
                fr: "Intégration rapide, audit technique et alignement des priorités",
              },
              {
                en: "Hands-on feature delivery, refactoring and incident resolution",
                fr: "Delivery de fonctionnalités, refactoring et résolution d'incidents",
              },
              {
                en: "Code review, mentoring and shared engineering standards",
                fr: "Revue de code, mentorat et standards d'ingénierie partagés",
              },
              {
                en: "CI/CD, technical backlog and release stabilization",
                fr: "CI/CD, backlog technique et stabilisation des mises en production",
              },
            ],
            outcome: {
              en: "More delivery capacity now, with clearer standards and greater team autonomy afterwards.",
              fr: "Davantage de capacité immédiatement, puis des standards plus clairs et une équipe plus autonome.",
            },
          },
        ],
      },

      //SKILLS CONTENT

      // toggle between skills and tools in skills section
      isSkillsOrTools: "skills",

      mySkills: {
        title: { en: "Engineering foundation", fr: "Socle d'ingénierie" },
        subtitle1: { en: "Technologies serve", fr: "Les technologies au service" },
        subtitle2: {
          en: "the product and its operation",
          fr: "du produit et de son exploitation",
        },
        text: {
          en: "I choose tools according to the product, team and operating constraints. The goal is not to accumulate frameworks, but to build a system the team can understand, release and evolve.",
          fr: "Je choisis les outils selon le produit, l'équipe et les contraintes d'exploitation. L'objectif n'est pas d'accumuler les frameworks, mais de construire un système que l'équipe peut comprendre, livrer et faire évoluer.",
        },
        businessItems: [
          {
            en: "Web and mobile: React, Next.js, Vue, Angular and Flutter for interfaces designed around real usage.",
            fr: "Web et mobile : React, Next.js, Vue, Angular et Flutter pour des interfaces pensées autour des usages réels.",
          },
          {
            en: "Back-end and data: TypeScript, Node.js, REST or GraphQL APIs, SQL and Firebase ecosystems.",
            fr: "Back-end et données : TypeScript, Node.js, API REST ou GraphQL, écosystèmes SQL et Firebase.",
          },
          {
            en: "Delivery: automated tests, code review, CI/CD, observability and web or app-store releases.",
            fr: "Delivery : tests automatisés, revue de code, CI/CD, observabilité et déploiements web ou stores.",
          },
          {
            en: "AI-assisted engineering: specifications, agent workflows, automation and systematic human validation.",
            fr: "Ingénierie assistée par l'IA : spécifications, workflows d'agents, automatisation et validation humaine systématique.",
          },
        ],
        skillsLabel: { en: "Technologies", fr: "Technologies" },
        toolsLabel: { en: "Delivery & tools", fr: "Delivery & outils" },
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
            title: "React",
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
            imgUrl: "assets/images/skills/css3.png",
            title: "CSS3 / Sass",
          },
          {
            imgUrl: "assets/images/skills/html5.png",
            title: "HTML5",
          },
          {
            imgUrl: "assets/images/skills/android.png",
            title: "Android",
          },
          {
            imgUrl: "assets/images/skills/firebase.png",
            title: "Firebase",
          },
          {
             imgUrl: "assets/images/skills/npm.png",
             title: "NodeJS",
           },
        ],
        toolsItems: [
          {
            imgUrl: "assets/images/skills/azure.png",
            title: "Azure DevOps",
          },
          {
            imgUrl: "assets/images/skills/gitlab.png",
            title: "GitLab CI",
          },
          {
            imgUrl: "assets/images/skills/git.png",
            title: "Git / GitHub Actions",
          },
          {
            imgUrl: "assets/images/skills/jira.webp",
            title: "Jira / Trello",
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
            date: "2022-2023",
            schoolName: {
              fr: "Université Côte d'Azur (France)",
              en: "Côte d'Azur University (France)",
            },
            degreeTitle: {
              fr: "Master 2 MBDS",
              en: "Master 2 MBDS",
            },
            desc: {
              fr: "Master 2 MIAGE Mobiquité, Base de Données et Intégration de Systèmes (MBDS).",
              en: "Master 2 MIAGE Mobiquity, Database and Systems Integration (MBDS).",
            },
          },
          {
            date: "2022",
            schoolName: {
              fr: "CNTEMAD",
              en: "CNTEMAD",
            },
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
            date: "2019-2021",
            schoolName: {
              fr: "Beijing University of Technology",
              en: "Beijing University of Technology",
            },
            degreeTitle: {
              fr: "Master, Computer Science & Technology",
              en: "Master, Computer Science & Technology",
            },
            desc: {
              fr: "Informatique et Technologie.",
              en: "Computer Science & Technology.",
            },
          },
          {
            date: "2018-2019",
            schoolName: {
              fr: "Beijing University of Technology",
              en: "Beijing University of Technology",
            },
            degreeTitle: {
              fr: "Langues et littératures chinoises",
              en: "Chinese Language & Literature",
            },
            desc: {
              fr: "Certificat de langue.",
              en: "Language certificate.",
            },
          },
          {
            date: "2014-2017",
            schoolName: {
              fr: "Infocentre de La Salle (Soavimbahoaka)",
              en: "Infocentre de La Salle (Soavimbahoaka)",
            },
            degreeTitle: {
              fr: "Licence en informatique, développement d’applications",
              en: "Bachelor in Computer Science, Application Development",
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
          en: `Projects delivered under real constraints`,
          fr: `Des projets menés dans le réel`,
        },
        subtitle2: {
          en: "& with technical accountability",
          fr: "& avec responsabilité technique",
        },
        text: {
          en: `Across product companies, service firms, volunteer work and freelance engagements, I learned to protect what matters most to clients: useful software, a clear plan, reliable implementation and enough structure to keep momentum.`,
          fr: `Entre produit, ESN, associatif et freelance, j'ai surtout appris à protéger ce qui compte le plus pour un client : un logiciel utile, un plan clair, une exécution fiable et assez de structure pour garder l'élan.`,
        },
        items: [
          {
            date: { en: "Nov 2025 - Present", fr: "Nov. 2025 - présent" },
            companyName: {
              fr: "Indépendant",
              en: "Freelance",
            },
            jobTitle: {
              fr: "Lead Developer Web & Mobile",
              en: "Lead Developer Web & Mobile",
            },
            desc: {
              en: "Design, development and maintenance of modern web and mobile applications, with Agile steering, technical framing and release follow-through.",
              fr: "Conception, développement et maintenance d'applications web et mobiles, avec pilotage Agile, cadrage technique et suivi de mise en production.",
            },
          },
          {
            date: { en: "Feb 2025 - Oct 2025", fr: "Févr. 2025 - oct. 2025" },
            companyName: {
              fr: "Mora Market",
              en: "Mora Market",
            },
            jobTitle: {
              fr: "Team Lead Developer",
              en: "Team Lead Developer",
            },
            desc: {
              en: "Led the development department across marketplace, ERP, CRM and seller platform products. Set up CI/CD, optimized workflows, managed backlog and contributed to the mobile application architecture.\nTools: ReactJS, NextJS, Flutter, Docker, GitlabCI.",
              fr: "Encadrement du pôle développement sur une marketplace, un ERP, un CRM et une plateforme vendeur. Mise en place CI/CD, optimisation des workflows, gestion du backlog et contribution à l'architecture de l'application mobile.\nOutils : ReactJS, NextJS, Flutter, Docker, GitLab CI.",
            },
          },
          {
            date: { en: "Dec 2023 - Jan 2025", fr: "Déc. 2023 - janv. 2025" },
            companyName: {
              fr: "Versusmind",
              en: "Versusmind",
            },
            jobTitle: {
              fr: "Consultant Nouvelles Technologies",
              en: "New Technologies Consultant",
            },
            desc: {
              en: "Consulting, maintenance and development of web and mobile applications for construction and healthcare, including a complete patient management, appointment and billing system.\nTools: Flutter, Azure DevOps, React, Next.js, TypeScript.",
              fr: "Conseil, maintenance évolutive et développement d'applications web et mobiles pour le BTP et la santé, dont une solution complète de gestion patient, rendez-vous, dossier médical et facturation.\nOutils: Flutter, Azure DevOps, React, Next.js, TypeScript.",
            },
          },
          {
            date: { en: "Oct 2023 - Present", fr: "Oct. 2023 - présent" },
            companyName: {
              fr: "Rotary Club Antananarivo",
              en: "Rotary Club Antananarivo",
            },
            jobTitle: {
              fr: "Chef de Projet & Développeur SI (Bénévolat)",
              en: "Project Manager & IS Developer (Volunteer)",
            },
            desc: {
              en: "Project coordination, development and user training around an offline-first field application used during surgical campaigns.\nTools: Flutter, Firebase, MariaDB.",
              fr: "Pilotage, développement et formation utilisateur autour d'une application terrain offline-first utilisée pendant des campagnes chirurgicales.\nOutils: Flutter, Firebase, MariaDB.",
            },
          },
          {
            date: { en: "Jun 2023 - Present", fr: "Juin 2023 - présent" },
            companyName: {
              fr: "Digital Training Center (DTC-MG)",
              en: "Digital Training Center (DTC-MG)",
            },
            jobTitle: {
              fr: "Co-Fondateur & Formateur Flutter",
              en: "Co-Founder & Flutter Trainer",
            },
            desc: {
              en: "Design and implementation of Flutter training programs. Teaching, mentoring, and assessing student progress.",
              fr: "Conception et mise en œuvre programmes formation Flutter. Enseignement, encadrement et évaluation des progrès étudiants.",
            },
          },
          {
            date: { en: "Jun 2021 - Dec 2023", fr: "Juin 2021 - déc. 2023" },
            companyName: { fr: "Bocasay", en: "Bocasay" },
            jobTitle: {
              fr: "Développeur d'Applications",
              en: "Application Developer",
            },
            desc: {
              en: "Maintenance and store releases for custom mobile applications (EDM, HR, expenses, payroll variables) as well as an e-learning platform.\nTools: Flutter, Vue.js, React, Node.js, Docker, Gitlab CI.",
              fr: "Maintenance évolutive et mises en production d'applications mobiles sur mesure (GED, RH, notes de frais, variables de paie) ainsi que d'une plateforme e-learning.\nOutils: Flutter, Vue.js, React, Node.js, Docker, Gitlab CI.",
            },
          },
          {
            date: { en: "Jan 2018 - Jun 2018", fr: "Janv. 2018 - juin 2018" },
            companyName: {
              fr: "ONG HABAKA",
              en: "ONG HABAKA",
            },
            jobTitle: { fr: "Développeur Full Stack (Stage)", en: "Full Stack Developer (Internship)" },
            desc: {
              en: "Design & dev of Fablab tracking app (member entry/exit).",
              fr: "Conception & dév app suivi Fablab (entrées/sorties membres).",
            },
          },
          {
            date: { en: "Aug 2017 - Oct 2017", fr: "Août 2017 - oct. 2017" },
            companyName: {
              fr: "BMOI",
              en: "BMOI",
            },
            jobTitle: { fr: "Développeur Logiciels (Stage)", en: "Software Developer (Internship)" },
            desc: {
              en: "Automation of manual tasks for fleet management department.",
              fr: "Automatisation tâches manuelles service parc automobile.",
            },
          },
           {
            date: { en: "Aug 2016 - Oct 2016", fr: "Août 2016 - oct. 2016" },
            companyName: {
              fr: "Sainte Famille Mahamasina",
              en: "Sainte Famille Mahamasina",
            },
            jobTitle: { fr: "Développeur Web (Stage)", en: "Web Developer (Internship)" },
            desc: {
              en: "App for management and generation of academic records.",
              fr: "App de gestion et génération relevés académiques.",
            },
          },
          {},
        ],
      },

      //PORTFOLIO CONTENT
      myWorks: {
        isVisible: true,
        title: { en: "Selected work & project archive", fr: "Réalisations & archive de projets" },
        subtitle1: {
          en: `Products built`,
          fr: `Des produits construits`,
        },
        subtitle2: {
          en: "under real constraints",
          fr: "sous contraintes réelles",
        },
        text: {
          en: `The highlighted case studies show the level of responsibility involved. The complete archive keeps every project visible and can be filtered by type of work.`,
          fr: `Les réalisations mises en avant montrent le niveau de responsabilité engagé. L'archive complète conserve chaque projet visible et permet de filtrer par type d'intervention.`,
        },
        featuredKicker: { en: "In-depth selection", fr: "Sélection approfondie" },
        featuredTitle: { en: "Five projects that show how I work", fr: "Cinq projets qui montrent ma manière d'intervenir" },
        featuredText: {
          en: "Scoping, architecture, delivery, team leadership and production constraints across different business contexts.",
          fr: "Cadrage, architecture, delivery, leadership d'équipe et contraintes de production dans plusieurs contextes métiers.",
        },
        catalogKicker: { en: "Complete archive", fr: "Archive complète" },
        catalogTitle: { en: "All projects", fr: "Tous les projets" },
        catalogText: {
          en: "Browse the complete range of web, mobile, full-stack, automation and applied-AI work.",
          fr: "Parcourez l'ensemble des réalisations web, mobile, full-stack, automatisation et IA appliquée.",
        },
        filterLabel: { en: "Filter projects", fr: "Filtrer les projets" },
      },

      portfolioFilters: [
        { key: "all", label: { en: "All", fr: "Tous" } },
        { key: "fullstack", label: { en: "Full-stack", fr: "Full-stack" } },
        { key: "web", label: { en: "Web", fr: "Web" } },
        { key: "mobile", label: { en: "Mobile", fr: "Mobile" } },
        { key: "ai", label: { en: "AI & automation", fr: "IA & automatisation" } },
        { key: "business", label: { en: "Business tools", fr: "Outils métiers" } },
      ],

      allPortfolioItems: [
        {
          url: "#contact",
          imgUrl: "assets/images/portfolio/projects/mora-market.jpg",
          featured: true,
          categories: ["fullstack", "web", "business"],
          title: {
            en: "Marketplace, ERP, CRM and seller space",
            fr: "Marketplace, ERP, CRM et espace vendeur",
          },
          meta: {
            en: "Mora Market · e-commerce operations and internal tools",
            fr: "Mora Market · e-commerce, opérations et outils internes",
          },
          role: {
            en: "Team Lead Developer",
            fr: "Team Lead Developer",
          },
          contributions: {
            en: "Technical scoping, stack selection, software architecture, management of a five-developer team, backlog management, delivery steering, code review, training, quality standards and CI/CD.",
            fr: "Cadrage technique, choix de stack, architecture logicielle, management d’une équipe de 5 développeurs, gestion du backlog, pilotage du delivery, code review, formation, standards qualité et CI/CD.",
          },
          desc: {
            en: "A complete digital backbone bringing together online sales, seller management and internal operations to support marketplace growth on stronger foundations.",
            fr: "Un socle digital complet qui relie vente en ligne, gestion vendeur et opérations internes pour faire grandir une marketplace sur des bases plus solides.",
          },
          points: [
            {
              en: "Unifies catalog, orders, sellers and internal follow-up inside one coherent system",
              fr: "Unifie catalogue, commandes, vendeurs et suivi interne dans un même système",
            },
            {
              en: "Gives teams clearer visibility on commercial activity, bottlenecks and priorities",
              fr: "Donne aux équipes plus de visibilité sur l'activité commerciale, les blocages et les priorités",
            },
            {
              en: "Creates a scalable operational base for an e-commerce startup moving into structured growth",
              fr: "Pose une base évolutive pour une startup e-commerce qui passe à une organisation plus structurée",
            },
          ],
          cta: {
            en: "Discuss a marketplace and ERP platform",
            fr: "Parler d'une marketplace et d'un ERP e-commerce",
          },
        },
        {
          url: "#contact",
          imgUrl: "assets/images/portfolio/projects/unicargo-express.jpg",
          featured: true,
          categories: ["fullstack", "web", "mobile", "business"],
          title: {
            en: "Internal ERP and parcel tracking for Unicargo Express",
            fr: "ERP interne et suivi colis pour Unicargo Express",
          },
          meta: {
            en: "Unicargo Express · internal operations and parcel tracking",
            fr: "Unicargo Express · opérations internes et suivi logistique",
          },
          role: {
            en: "Freelance Fullstack Lead Developer",
            fr: "Lead Developer Fullstack freelance",
          },
          contributions: {
            en: "Functional and technical scoping, stack selection, fullstack architecture, desktop and mobile development, project coordination, delivery follow-through, production rollout and store releases.",
            fr: "Cadrage fonctionnel et technique, choix de stack, architecture fullstack, développement desktop et mobile, coordination du projet, suivi du delivery, mise en production et publication sur les stores.",
          },
          desc: {
            en: "A logistics platform with operator and admin back-office plus parcel tracking to organize internal work and improve shipment visibility.",
            fr: "Une plateforme logistique avec back-offices opérateur et administrateur, plus un suivi des colis, pour mieux organiser le travail interne et la visibilité des expéditions.",
          },
          points: [
            {
              en: "Centralizes internal processing, parcel statuses and team coordination in one workflow",
              fr: "Centralise traitement interne, statuts colis et coordination des équipes dans un même flux",
            },
            {
              en: "Improves traceability and service quality at each stage of the delivery journey",
              fr: "Améliore la traçabilité et la qualité d'information à chaque étape du parcours colis",
            },
            {
              en: "Reduces the friction caused by manual tracking and scattered operational tools",
              fr: "Réduit les pertes de temps liées aux suivis manuels et aux outils opérationnels dispersés",
            },
          ],
          cta: {
            en: "Discuss a logistics platform",
            fr: "Parler d'une plateforme logistique",
          },
        },
        {
          url: "#contact",
          imgUrl: "assets/images/portfolio/projects/rotaract-amontana.jpg",
          categories: ["fullstack", "web", "ai"],
          title: {
            en: "Web platform and back-office for Rotaract Amontana",
            fr: "Plateforme web et back-office pour Rotaract Amontana",
          },
          meta: {
            en: "Rotaract Club Antananarivo Amontana · institutional platform and secure admin space",
            fr: "Rotaract Club Antananarivo Amontana · plateforme institutionnelle et administration sécurisée",
          },
          role: {
            en: "Volunteer Fullstack Developer",
            fr: "Développeur Fullstack bénévole",
          },
          contributions: {
            en: "Requirements gathering, functional scoping, architecture design, technology selection, fullstack development, AI integration, project management, deployment and maintenance.",
            fr: "Recueil des besoins, cadrage fonctionnel, conception de l’architecture, choix technologiques, développement fullstack, intégration IA, gestion du projet, déploiement et maintenance.",
          },
          desc: {
            en: "A full-stack institutional platform combining public website, recruitment, galleries, annual reports and secure administration tools for the club.",
            fr: "Une plateforme institutionnelle full-stack qui combine site public, recrutement, galeries, bilans annuels et outils d'administration sécurisés pour le club.",
          },
          points: [
            {
              en: "Strengthens credibility with members, partners, sponsors and future applicants",
              fr: "Renforce la credibilite du club aupres des membres, partenaires, sponsors et futurs candidats",
            },
            {
              en: "Simplifies management of content, partners, applications, archives and communication",
              fr: "Simplifie la gestion des contenus, des partenaires, des candidatures, des archives et de la communication",
            },
            {
              en: "Turns a simple showcase site into a day-to-day tool that also serves internal organization",
              fr: "Transforme un simple site vitrine en outil utile au quotidien pour l'organisation interne",
            },
          ],
          cta: {
            en: "Discuss a web platform",
            fr: "Parler d'une plateforme web",
          },
        },
        {
          url: "#contact",
          imgUrl: "assets/images/portfolio/projects/trackeo.jpg",
          featured: true,
          categories: ["fullstack", "web", "mobile", "business"],
          title: {
            en: "Real-time geolocation platform Trackeo",
            fr: "Plateforme de géolocalisation temps réel Trackeo",
          },
          meta: {
            en: "Trackeo · real-time geolocation and field operations",
            fr: "Trackeo · géolocalisation temps réel et opérations terrain",
          },
          role: {
            en: "Software Architect and Fullstack Lead Developer",
            fr: "Architecte et Lead Developer Fullstack",
          },
          contributions: {
            en: "Product scoping, feasibility study, stack selection, real-time architecture, fullstack development, technical integration, delivery steering and production readiness.",
            fr: "Cadrage produit, étude de faisabilité, choix de stack, architecture temps réel, développement fullstack, intégration technique, pilotage du delivery et préparation de la mise en production.",
          },
          desc: {
            en: "A real-time geolocation solution to monitor vehicles, trip history, geofences and alerts from an architecture built for operational use.",
            fr: "Une solution de géolocalisation en temps réel pour suivre les véhicules, les historiques, les zones géographiques et les alertes depuis une architecture pensée pour un usage opérationnel.",
          },
          points: [
            {
              en: "Gives operations teams an immediate view of fleet activity and movements",
              fr: "Donne aux équipes opérations une lecture immédiate de l'activité terrain et des mouvements de flotte",
            },
            {
              en: "Helps detect delays, route deviations and zone exits much faster",
              fr: "Permet de detecter plus vite les retards, les ecarts de trajet et les sorties de zone",
            },
            {
              en: "Creates a solid base for a connected tracking offer in logistics, security or field services",
              fr: "Prépare une offre de suivi connecté exploitable pour la logistique, la sécurité ou les services terrain",
            },
          ],
          cta: {
            en: "Discuss a geolocation platform",
            fr: "Parler d'une plateforme de géolocalisation",
          },
        },
        {
          url: "#contact",
          imgUrl: "assets/images/portfolio/projects/mora-market-mobile.jpg",
          categories: ["mobile"],
          title: {
            en: "Mobile e-commerce application for Mora Market",
            fr: "Application mobile e-commerce pour Mora Market",
          },
          meta: {
            en: "Mora Market · mobile commerce product",
            fr: "Mora Market · produit mobile e-commerce",
          },
          role: {
            en: "Flutter Architect and Lead Developer",
            fr: "Architecte et Lead Developer Flutter",
          },
          contributions: {
            en: "Mobile scoping, architecture design, Flutter library and standard selection, development, back-end service integration, code review, team support and release preparation.",
            fr: "Cadrage mobile, conception de l’architecture, choix des bibliothèques et standards Flutter, développement, intégration avec les services back-end, code review, accompagnement de l’équipe et préparation des publications.",
          },
          desc: {
            en: "A mobile commerce application designed to make ordering, discovery and engagement more direct from the smartphone.",
            fr: "Une application mobile e-commerce conçue pour rendre l'achat, la découverte et l'engagement plus directs depuis le smartphone.",
          },
          points: [
            {
              en: "Opens a sales channel that is closer to everyday customer habits",
              fr: "Ouvre un canal de vente plus proche des usages quotidiens des clients",
            },
            {
              en: "Supports repeat usage, promotions and ongoing interaction with the brand",
              fr: "Favorise la recurrence d'usage, les promotions et les interactions avec la marque",
            },
            {
              en: "Completes the web platform with a mobile experience that stays aligned with business goals",
              fr: "Complete la plateforme web avec une expérience mobile coherente avec les objectifs business",
            },
          ],
          cta: {
            en: "Discuss a mobile product",
            fr: "Parler d'un produit mobile",
          },
        },
        {
          url: "#contact",
          imgUrl: "assets/images/portfolio/projects/btp-versusmind.jpg",
          categories: ["fullstack", "web", "mobile", "business"],
          title: {
            en: "Planning, events and tasks for construction teams",
            fr: "Planning, événements et tâches pour équipes BTP",
          },
          meta: {
            en: "Versusmind · field coordination tool",
            fr: "Versusmind · outil de coordination terrain",
          },
          role: {
            en: "New Technologies Consultant, Web & Mobile Developer",
            fr: "Consultant nouvelles technologies, développeur Web & Mobile",
          },
          contributions: {
            en: "Web and mobile development, integration into an existing architecture, evolutionary maintenance, refactoring, code review, contribution to technical decisions and Agile delivery.",
            fr: "Développement web et mobile, intégration dans une architecture existante, maintenance évolutive, refactoring, revue de code, contribution aux décisions techniques et suivi Agile.",
          },
          desc: {
            en: "A coordination tool to organize planning, events and tasks in a construction environment involving multiple stakeholders.",
            fr: "Un outil de coordination pour organiser planning, événements et tâches dans un environnement BTP impliquant plusieurs intervenants.",
          },
          points: [
            {
              en: "Clarifies who does what, when and on which priority",
              fr: "Clarifie qui fait quoi, quand et sur quelles priorités",
            },
            {
              en: "Reduces missed actions and fragmented communication between field actors",
              fr: "Réduit les oublis et la dispersion de l'information entre les acteurs terrain",
            },
            {
              en: "Accelerates the digitalization of internal coordination that is often still informal",
              fr: "Accelere la digitalisation d'une coordination interne souvent geree de facon informelle",
            },
          ],
          cta: {
            en: "Discuss an internal tool",
            fr: "Parler d'un outil interne",
          },
        },
        {
          url: "#contact",
          imgUrl: "assets/images/portfolio/portfolio-4.png",
          featured: true,
          categories: ["fullstack", "web", "mobile", "business"],
          title: {
            en: "Patient management, medical record and billing",
            fr: "Gestion patient, dossier médical et facturation",
          },
          meta: {
            en: "Versusmind · healthcare operations",
            fr: "Versusmind · opérations et parcours de soin",
          },
          role: {
            en: "New Technologies Consultant, Fullstack Developer",
            fr: "Consultant nouvelles technologies, développeur Fullstack",
          },
          contributions: {
            en: "Technical analysis, fullstack development, integration into a complex business system, evolutionary maintenance, refactoring, quality strategy, code review and collaboration within a team of 6 to 12 people.",
            fr: "Analyse technique, développement fullstack, intégration dans un système métier complexe, maintenance évolutive, refactoring, stratégie qualité, code review et collaboration avec une équipe de 6 à 12 personnes.",
          },
          desc: {
            en: "A healthcare system linking patient registration, consultation, examination, medical records, appointments and billing in one continuous flow.",
            fr: "Un système santé qui relie enregistrement patient, consultation, examen, dossier médical, rendez-vous et facturation dans un même flux continu.",
          },
          points: [
            {
              en: "Makes the patient journey smoother from intake to discharge",
              fr: "Fluidifie le parcours patient depuis l'accueil jusqu'à la sortie",
            },
            {
              en: "Improves data reliability between care teams, administration and billing",
              fr: "Fiabilise les informations partagees entre les équipes de soin, l'administratif et la facturation",
            },
            {
              en: "Reduces duplicate entry and everyday friction in healthcare operations",
              fr: "Réduit les doubles saisies et les frictions quotidiennes dans le fonctionnement de la structure",
            },
          ],
          cta: {
            en: "Discuss a healthcare platform",
            fr: "Parler d'une plateforme santé",
          },
        },
        {
          url: "#contact",
          imgUrl: "assets/images/portfolio/projects/myzenkaifit.jpg",
          categories: ["mobile"],
          title: {
            en: "Nutrition and exercise tracking on iOS and Android",
            fr: "Suivi nutritionnel et exercice sur iOS et Android",
          },
          meta: {
            en: "MyZenkaiFit · nutrition, strength and cardio tracking",
            fr: "MyZenkaiFit · nutrition, musculation et cardio",
          },
          role: {
            en: "Product Developer and Freelance Mobile Lead",
            fr: "Product Developer et Lead Mobile freelance",
          },
          contributions: {
            en: "Product scoping, mobile experience definition, stack selection, application architecture, mobile development, data structuring, delivery steering and iOS and Android release preparation.",
            fr: "Cadrage produit, définition de l’expérience mobile, choix de stack, architecture applicative, développement mobile, structuration des données, pilotage du delivery et préparation des versions iOS et Android.",
          },
          desc: {
            en: "A premium mobile product for nutrition, strength training, cardio routines and long-term progress tracking.",
            fr: "Un produit mobile premium pour la nutrition, la musculation, le cardio et le suivi de progression dans la durée.",
          },
          points: [
            {
              en: "Helps users follow routines, goals and progress much more easily",
              fr: "Aide les utilisateurs à suivre plus facilement leurs routines, leurs objectifs et leur progression",
            },
            {
              en: "Supports a stronger premium positioning for coaching, wellness and fitness offers",
              fr: "Valorise une offre coaching, bien-etre ou fitness avec un produit mobile plus premium",
            },
            {
              en: "Fits subscription, retention and long-term engagement models very well",
              fr: "Soutient très bien une logique d'abonnement, de fidélisation et d'engagement dans le temps",
            },
          ],
          cta: {
            en: "Discuss a fitness application",
            fr: "Parler d'une application fitness",
          },
        },
        {
          url: "#contact",
          imgUrl: "assets/images/portfolio/projects/rotary-medical-pwa.jpg",
          featured: true,
          categories: ["fullstack", "web", "mobile", "business"],
          title: {
            en: "Field PWA for Rotary surgical campaigns",
            fr: "PWA terrain pour campagnes chirurgicales Rotary",
          },
          meta: {
            en: "Rotary Club Antananarivo · offline-first medical field operations",
            fr: "Rotary Club Antananarivo · opérations médicales terrain offline-first",
          },
          role: {
            en: "Volunteer Project Manager and IS Developer",
            fr: "Chef de projet et développeur SI bénévole",
          },
          contributions: {
            en: "Field requirements gathering, functional scoping, project management, offline-first architecture, technology selection, development, deployment, training and user support.",
            fr: "Recueil des besoins terrain, cadrage fonctionnel, gestion de projet, conception de l’architecture offline-first, choix technologiques, développement, déploiement, formation et accompagnement des utilisateurs.",
          },
          desc: {
            en: "An offline-first PWA used during surgical campaigns to manage patient registration, operating schedules, post-op follow-up and field statistics.",
            fr: "Une PWA offline-first utilisée pendant des campagnes chirurgicales pour gérer enregistrement patient, programmes opératoires, suivis post-opératoires et statistiques terrain.",
          },
          points: [
            {
              en: "Keeps teams operational even when connectivity is unstable or unavailable",
              fr: "Permet aux équipes de rester opérationnelles même quand la connectivité est instable ou absente",
            },
            {
              en: "Centralizes critical patient, operation and follow-up information in one field tool",
              fr: "Centralise les informations critiques du patient, de l'opération et du suivi dans un seul outil terrain",
            },
            {
              en: "Improves both medical and logistical coordination during demanding field missions",
              fr: "Améliore à la fois la coordination médicale et logistique pendant des missions terrain exigeantes",
            },
          ],
          cta: {
            en: "Discuss a field operations tool",
            fr: "Parler d'un outil terrain",
          },
        },
        {
          url: "#contact",
          imgUrl: "assets/images/portfolio/projects/bocasay-business-apps.jpg",
          categories: ["fullstack", "web", "mobile", "business"],
          title: {
            en: "Business apps for accounting, document and HR workflows",
            fr: "Applications métier compta, GED et RH",
          },
          meta: {
            en: "Bocasay · multi-module business apps",
            fr: "Bocasay · applications métier multi-modules",
          },
          role: {
            en: "Web & Mobile Application Developer",
            fr: "Développeur d’applications Web & Mobile",
          },
          contributions: {
            en: "Flutter and web development, evolutionary maintenance, integration into a modular architecture, incident resolution, continuous improvement, CI/CD, deployment automation and store releases.",
            fr: "Développement Flutter et web, maintenance évolutive, intégration dans une architecture modulaire, résolution d’incidents, amélioration continue, CI/CD, automatisation des déploiements et publication sur les stores.",
          },
          desc: {
            en: "A suite of mobile business applications for accounting firms and HR workflows covering document management, file sharing, mileage, expenses, payroll inputs and alerts.",
            fr: "Une suite d'applications mobiles métier pour cabinets comptables et workflows RH couvrant GED, partage de fichiers, kilométrage, frais, variables de paie et alertes.",
          },
          points: [
            {
              en: "Digitalizes several repetitive administrative tasks inside a simpler mobile experience",
              fr: "Digitalise plusieurs tâches administratives répétitives dans une expérience mobile plus simple",
            },
            {
              en: "Supports service continuity for apps used regularly by both teams and clients",
              fr: "Améliore la continuité de service sur des applications utilisées régulièrement par les équipes et les clients",
            },
            {
              en: "Helps service organizations gain fluidity and responsiveness in day-to-day operations",
              fr: "Aide les structures de services à gagner en fluidité et en réactivité au quotidien",
            },
          ],
          cta: {
            en: "Discuss a business app suite",
            fr: "Parler d'une suite applicative métier",
          },
        },
        {
          url: "#contact",
          imgUrl: "assets/images/portfolio/portfolio-3.png",
          categories: ["mobile"],
          title: {
            en: "Premium Malagasy learning application",
            fr: "Application premium d'apprentissage du malgache",
          },
          meta: {
            en: "Sekolygasy · premium language learning product",
            fr: "Sekolygasy · produit premium d'apprentissage linguistique",
          },
          role: {
            en: "Freelance Mobile Lead Developer",
            fr: "Lead Mobile Developer freelance",
          },
          contributions: {
            en: "Product scoping, stack selection, fullstack architecture, API development, iOS and Android development, technical project structuring, quality monitoring, version management and closed testing release.",
            fr: "Cadrage du produit, choix de stack, architecture fullstack, développement API, iOS et Android, structuration technique du projet, suivi qualité, gestion des versions et publication en test fermé.",
          },
          desc: {
            en: "A premium Android and iOS learning product built to make Malagasy practice more regular, engaging and easier to follow.",
            fr: "Un produit premium Android et iOS conçu pour rendre la pratique du malgache plus régulière, plus engageante et plus simple à suivre.",
          },
          points: [
            {
              en: "Turns a niche learning need into an accessible and engaging mobile habit",
              fr: "Transforme un besoin d'apprentissage niche en expérience mobile accessible et engageante",
            },
            {
              en: "Supports a premium positioning around content, community and subscription",
              fr: "Soutient un positionnement premium autour du contenu, de la communaute et de l'abonnement",
            },
            {
              en: "Fits EdTech, language and recurring-content products very well",
              fr: "Convient très bien aux produits EdTech, langues et contenus à forte récurrence",
            },
          ],
          cta: {
            en: "Discuss an EdTech application",
            fr: "Parler d'une application EdTech",
          },
        },
        {
          url: "#contact",
          imgUrl: "assets/images/portfolio/portfolio-3.png",
          categories: ["web"],
          title: {
            en: "Video streaming e-learning platform",
            fr: "Plateforme e-learning de cours vidéo en streaming",
          },
          meta: {
            en: "Bocasay · learning and content platform",
            fr: "Bocasay · plateforme de formation et de contenu",
          },
          role: {
            en: "Frontend and Mobile Developer",
            fr: "Développeur Frontend et mobile",
          },
          contributions: {
            en: "Vue and Nuxt.js development, performance optimization, evolutionary maintenance, incident monitoring, quality improvements and contribution to CI/CD.",
            fr: "Développement Vue et Nuxt.js, optimisation des performances, maintenance évolutive, suivi des incidents, amélioration de la qualité et contribution au CI/CD.",
          },
          desc: {
            en: "An online learning platform built to deliver video courses in streaming and make a training catalog easier to access and monetize.",
            fr: "Une plateforme de formation en ligne conçue pour diffuser des cours vidéo en streaming et mieux valoriser, diffuser et monétiser un catalogue de contenus.",
          },
          points: [
            {
              en: "Makes training content easier to access and follow over time",
              fr: "Rend les contenus de formation plus simples à consulter et à suivre dans la durée",
            },
            {
              en: "Provides a stronger base for monetizing a training catalog",
              fr: "Donne une base plus solide pour monétiser un catalogue de formation",
            },
            {
              en: "Supports a continuous delivery model for training or premium content businesses",
              fr: "Soutient un modele de diffusion continue pour la formation ou les contenus premium",
            },
          ],
          cta: {
            en: "Discuss a learning platform",
            fr: "Parler d'une plateforme de formation",
          },
        },
        {
          url: "#contact",
          imgUrl: "assets/images/portfolio/portfolio-4.png",
          categories: ["fullstack", "web", "business"],
          title: {
            en: "Fablab activity tracking application",
            fr: "Application de suivi d'activité pour fablab",
          },
          meta: {
            en: "ONG HABAKA · association and member operations",
            fr: "ONG HABAKA · opérations associatives et suivi des membres",
          },
          role: {
            en: "Fullstack Developer Intern",
            fr: "Développeur Fullstack stagiaire",
          },
          contributions: {
            en: "Requirements analysis, solution design, technical choices, data modeling, fullstack development, testing and application delivery.",
            fr: "Analyse des besoins, conception de la solution, choix techniques, modélisation des données, développement fullstack, tests et livraison de l’application.",
          },
          desc: {
            en: "An activity tracking application for a fablab designed to replace manual logs with a more reliable operational base.",
            fr: "Une application de suivi d'activité pour fablab conçue pour remplacer les registres manuels par une base de travail plus fiable et plus exploitable.",
          },
          points: [
            {
              en: "Gives better visibility on attendance and use of shared spaces",
              fr: "Donne une meilleure visibilité sur la fréquentation et l'utilisation des espaces partagés",
            },
            {
              en: "Makes member tracking and day-to-day organization much easier to manage",
              fr: "Facilite nettement le suivi des membres et l'organisation quotidienne du lieu",
            },
            {
              en: "Creates a first real digitalization step for associations, labs and shared spaces",
              fr: "Constitue un premier vrai pas de digitalisation pour des associations, labs et espaces partagés",
            },
          ],
          cta: {
            en: "Discuss a digitalization project",
            fr: "Parler d'un projet de digitalisation",
          },
        },
        {
          url: "#contact",
          imgUrl: "assets/images/portfolio/portfolio-1.png",
          categories: ["web", "ai", "business"],
          title: {
            en: "Automation for vehicle fleet operations",
            fr: "Automatisation du parc automobile",
          },
          meta: {
            en: "BMOI · internal automation and productivity",
            fr: "BMOI · automatisation interne et productivité",
          },
          role: {
            en: "Software Developer Intern",
            fr: "Développeur logiciel stagiaire",
          },
          contributions: {
            en: "Business process analysis, identification of automation opportunities, technical design, internal tool development, testing and rollout support.",
            fr: "Analyse des processus métier, identification des possibilités d’automatisation, conception technique, développement de l’outil interne, tests et accompagnement à la mise en service.",
          },
          desc: {
            en: "An internal application built to automate manual tasks in the vehicle fleet department and make daily processing more reliable.",
            fr: "Une application interne conçue pour automatiser les tâches manuelles du service parc automobile et fiabiliser les traitements du quotidien.",
          },
          points: [
            {
              en: "Reduces the time spent on repetitive low-value administrative work",
              fr: "Réduit le temps passé sur des opérations répétitives à faible valeur ajoutée",
            },
            {
              en: "Limits the risk of errors caused by fully manual processing",
              fr: "Diminue le risque d'erreurs liées à des traitements entièrement manuels",
            },
            {
              en: "Improves productivity in a support department without disrupting work habits",
              fr: "Améliore la productivité d'un service support sans alourdir les habitudes de travail",
            },
          ],
          cta: {
            en: "Discuss an internal automation tool",
            fr: "Parler d'un outil d'automatisation interne",
          },
        },
        {
          url: "#contact",
          imgUrl: "assets/images/portfolio/portfolio-2.png",
          categories: ["web", "business"],
          title: {
            en: "Academic records management and generation",
            fr: "Gestion et génération de relevés académiques",
          },
          meta: {
            en: "Sainte Famille Mahamasina · school administration",
            fr: "Sainte Famille Mahamasina · gestion scolaire",
          },
          role: {
            en: "Web Developer Intern",
            fr: "Développeur Web stagiaire",
          },
          contributions: {
            en: "Requirements gathering, functional scoping, technical design, data modeling, web development, testing and application delivery.",
            fr: "Recueil des besoins, cadrage fonctionnel, conception technique, modélisation des données, développement web, tests et livraison de l’application.",
          },
          desc: {
            en: "A web application to manage academic records and speed up their generation in a more reliable way for the institution.",
            fr: "Une application web pour gérer les relevés académiques et accélérer leur génération de manière plus fiable pour l'institution.",
          },
          points: [
            {
              en: "Simplifies record preparation and edition for the administrative team",
              fr: "Simplifie la préparation et l'édition des relevés pour l'administration",
            },
            {
              en: "Reduces manual handling and the risk of academic reporting errors",
              fr: "Réduit les manipulations manuelles et les risques d'erreur sur les relevés",
            },
            {
              en: "Delivers a very concrete time-saving gain for an educational structure",
              fr: "Apporte un gain de temps très concret à une structure éducative",
            },
          ],
          cta: {
            en: "Discuss a school management tool",
            fr: "Parler d'un outil de gestion scolaire",
          },
        },
      ],

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
        subtitle1: { en: "A project, an audit or extra delivery capacity?", fr: "Un projet, un audit ou un renfort d'équipe ?" },
        subtitle2: {
          en: "Let's discuss it clearly",
          fr: "Échangeons simplement",
        },
        text: {
          en: "Reach out if you need to frame a web or mobile application, recover a delayed project, digitalize an internal process or reinforce your team for a key phase.",
          fr: "Écrivez-moi si vous souhaitez cadrer une application web ou mobile, reprendre un projet en retard, digitaliser un processus interne ou renforcer votre équipe pendant une phase clé.",
        },
        responseNote: {
          en: "I usually reply with a useful first read: scope, technical angle and recommended next step.",
          fr: "Je reviens en général avec une première lecture utile : cadrage, angle technique et prochaine étape recommandée.",
        },
        addressLabel: { en: "Address", fr: "Adresse" },
        address: "Madagascar, Antananarivo, 101",
        phoneLabel: { en: "Phone", fr: "Téléphone" },
        phone1: "(+261) 34 20 905 72",
        phone2: "",
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
            en: "e.g. jean@company.com",
            fr: "ex. jean@entreprise.com",
          },
          customerPhoneLabel: { en: "Phone", fr: "Téléphone" },
          customerPhonePlaceholder: {
            en: "e.g. +261 34 20 905 72",
            fr: "ex. +261 34 20 905 72",
          },
          messageLabel: { en: "Message", fr: "Message" },
          messagePlaceholder: {
            en: "Tell me about the context, objective, constraints and ideal timeline...",
            fr: "Présentez le contexte, l'objectif, les contraintes et le calendrier idéal...",
          },
          optionalLabel: { en: "Optional", fr: "Optionnel" },
          submitLabel: {
            en: "Send your brief",
            fr: "Envoyer votre demande",
          },
        },
      },
    };
  },

  created() {
    // get a theme to use
    this.getAppTheme();
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

    // Keep the loader independent from slow third-party resources.
    setTimeout(() => (this.isPreloading = false), 450);

    // scrolling options
    this.scrollingOptions();
    document.addEventListener("scroll", () => this.scrollingOptions());
    document.addEventListener("keydown", this.handlePortfolioKeydown);

    // initialize popper.js plugin
    document.querySelectorAll(".has-ultimate-tooltip").forEach((el) => {
      Popper.createPopper(el, el.querySelector(".ultimate-tooltip"), {
        placement: "top",
        modifiers: [{ name: "offset", options: { offset: [0, 30] } }],
      });
    });
  },

  beforeUnmount() {
    document.removeEventListener("keydown", this.handlePortfolioKeydown);
    document.body.classList.remove("portfolio-modal-open");
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
    },

    getLanguageCode() {
      return this.language == "english" ? "en" : "fr";
    },

    localizedValue(value) {
      if (value && typeof value === "object") {
        return value[this.getLanguageCode()] || value.en || value.fr || "";
      }

      return value;
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
      const portfolioItems = [
        ...(this.$refs.portfolioItems?.querySelectorAll(".portfolio-item") || []),
      ].filter((item) => !item.vanillaTilt);

      if (portfolioItems.length) {
        VanillaTilt.init(portfolioItems, {
          max: 8,
          speed: 400,
          glare: true,
          "max-glare": 0.3,
        });
      }
    },

    openPortfolioItem(work, event) {
      this.portfolioLastFocusedElement = event?.currentTarget || document.activeElement;
      this.selectedPortfolioItem = work;
      document.body.classList.add("portfolio-modal-open");

      this.$nextTick(() => this.$refs.portfolioModalDialog?.focus());
    },

    closePortfolioItem() {
      if (!this.selectedPortfolioItem) {
        return;
      }

      const lastFocusedElement = this.portfolioLastFocusedElement;

      this.selectedPortfolioItem = null;
      this.portfolioLastFocusedElement = null;
      document.body.classList.remove("portfolio-modal-open");

      this.$nextTick(() => lastFocusedElement?.focus?.());
    },

    handlePortfolioKeydown(event) {
      if (event.key === "Escape" && this.selectedPortfolioItem) {
        this.closePortfolioItem();
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
        !/^\+?[0-9().\s-]{6,20}$/im.test(
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
          } else {
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

    featuredPortfolioItems() {
      return this.allPortfolioItems.filter((item) => item.featured);
    },

    filteredPortfolioItems() {
      if (this.portfolioCategory === "all") {
        return this.allPortfolioItems;
      }

      return this.allPortfolioItems.filter((item) =>
        item.categories?.includes(this.portfolioCategory)
      );
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
      const items = this.education.items
        .filter((item) => Object.keys(item).length > 0)
        .reverse();
      return [...Array(Math.ceil(items.length / 2))].map((_, i) =>
        items.slice(i * 2, i * 2 + 2)
      );
    },

    // split experience items into chunks of 2 items
    experienceChunks() {
      const items = this.experience.items
        .filter((item) => Object.keys(item).length > 0)
        .reverse();
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
