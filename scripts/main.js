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
      showAllPortfolioItems: false,
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
            en: "Startups · digitalizing SMEs · team reinforcement",
            fr: "Startups · PME en digitalisation · renfort d'equipe",
          },
          titleTop: {
            en: "I design and structure",
            fr: "Je conçois et structure",
          },
          titleBottom: {
            en: "web and mobile applications.",
            fr: "des applications web & mobiles.",
          },
          lead: {
            en: "For a new product, a business application or a team that needs support, I step in on architecture, web/mobile development, back-end, practical AI integration and CI/CD to move the project forward on solid foundations.",
            fr: "Pour un nouveau produit, une application metier ou une equipe a accompagner, j'interviens sur l'architecture, le developpement web/mobile, le back-end, l'integration IA utile et le CI/CD afin de faire avancer le projet sur des bases solides.",
          },
        },
        getInTouch: { en: "Discuss project", fr: "Parler projet" },
        viewWork: { en: "View projects", fr: "Voir projets" },
        scroll: { en: "How I help", fr: "Comment j'interviens" },
        experienceYearLabel: {
          en: "Years of experience",
          fr: "Ans d'experience",
        },
        completedProjectLabel: {
          en: "Projects and engagements",
          fr: "Projets et missions",
        },
        happyClientLabel: { en: "Client collaborations", fr: "Collaborations client" },
        hireMe: { en: "Contact me", fr: "Me contacter" },
        toCV: { en: "Download CV", fr: "Télécharger CV" },
        availability: {
          en: "Available for scoping, web/mobile implementation, practical AI integration and team reinforcement.",
          fr: "Disponible pour cadrage, developpement web/mobile, integration IA utile et renfort d'equipe.",
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
          clientHighlights: {
            en: "Concrete value delivered",
            fr: "Ce que le projet apporte concretement",
          },
        },
      },

      heroProof: {
        kicker: {
          en: "Most requested contexts",
          fr: "Contextes les plus demandes",
        },
      },

      heroProofBadges: [
        {
          en: "9+ years in production",
          fr: "9+ ans en production",
        },
        {
          en: "E-commerce, health, logistics",
          fr: "E-commerce, sante, logistique",
        },
      ],

      heroHighlights: [
        {
          value: { en: "Launching startups", fr: "Startups en lancement" },
          label: {
            en: "scoping, MVP and solid product foundations",
            fr: "cadrage, MVP et bases produit solides",
          },
        },
        {
          value: { en: "SMEs digitizing operations", fr: "PME en digitalisation" },
          label: {
            en: "internal tools, portals and business applications",
            fr: "outils internes, portails et applications metier",
          },
        },
        {
          value: { en: "Products already in production", fr: "Produits deja en production" },
          label: {
            en: "targeted reinforcement, reliability and practical AI integration",
            fr: "renfort cible, fiabilisation et integration IA utile",
          },
        },
      ],

      aboutMe: {
        title: { en: "Positioning", fr: "Positionnement" },
        subtitle1: {
          en: "A technical partner to",
          fr: "Un partenaire technique pour",
        },
        subtitle2: {
          en: "scope, build and evolve.",
          fr: "cadrer, construire et faire évoluer.",
        },
        text: {
          en: "I combine software architecture, web and mobile development, Agile delivery and team coordination. In practice, I can turn an unclear need into a concrete plan, set the right technical foundations and move the product forward with your team or independently.",
          fr: "Je combine architecture logicielle, developpement web et mobile, gestion Agile et coordination d'equipe. Concretement, je peux transformer un besoin encore flou en plan d'action, poser les bonnes bases techniques puis faire avancer le produit avec votre equipe ou en autonomie.",
        },
        quoteDescription: {
          en: "Structure, clarity, execution.",
          fr: "Structure, clarté, exécution.",
        },
        quoteText: {
          en: "My role does not stop at implementation. I help clarify the need, reduce technical risk and keep the project moving with solid decisions.",
          fr: "Mon role ne se limite pas au developpement. J'interviens pour clarifier le besoin, reduire le risque technique et faire avancer le projet avec des decisions solides.",
        },
        highlights: [
          {
            title: { en: "Audit & roadmap", fr: "Audit & feuille de route" },
            text: {
              en: "Architecture review, fragility analysis and a prioritized action plan.",
              fr: "Revue d'architecture, analyse des points de fragilite et plan d'action priorise.",
            },
          },
          {
            title: { en: "Web, mobile & back-end", fr: "Web, mobile & back-end" },
            text: {
              en: "Web, mobile and back-end implementation with product, data and release constraints in mind.",
              fr: "Conception et mise en oeuvre web, mobile et back-end avec une vraie attention au produit, a la donnee et a la mise en production.",
            },
          },
          {
            title: { en: "Team reinforcement", fr: "Renfort d'equipe" },
            text: {
              en: "Operational contribution inside an existing team, with autonomy, code review and knowledge sharing.",
              fr: "Contribution operationnelle dans une equipe existante, avec autonomie, code review et transmission des bonnes pratiques.",
            },
          },
          {
            title: { en: "AI & automation", fr: "IA & automatisation" },
            text: {
              en: "Useful AI features, assistants, summaries or workflow automations integrated where they genuinely save time.",
              fr: "Fonctionnalites IA utiles, assistants, resumes ou automatisations integrees la ou elles font vraiment gagner du temps.",
            },
          },
        ],
        hireMe: { en: "Let's scope your need", fr: "Cadrons votre besoin" },
        downloadCv: { en: "Download Resume", fr: "Télécharger CV" },
      },

      services: {
        title: { en: "Where I step in", fr: "Contextes d'intervention" },
        subtitle: { en: "Four contexts where I create value", fr: "Quatre contextes ou j'interviens" },
        text: {
          en: "I step in where business needs, product decisions, technical execution and useful automation must meet clearly and move forward without noise.",
          fr: "J'interviens la ou besoin metier, produit, execution technique et automatisation utile doivent se rejoindre clairement et avancer sans friction inutile.",
        },
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
              en: "For founders or product teams who need to turn an idea into a usable first version without improvising the technical base.",
              fr: "Pour les fondateurs et equipes produit qui doivent transformer une idee en premiere version utile, sans improviser la base technique.",
            },
            points: [
              {
                en: "Product framing and prioritization",
                fr: "Cadrage produit et priorisation",
              },
              {
                en: "Tech stack, architecture and data choices",
                fr: "Choix de stack, architecture et donnees",
              },
              {
                en: "Web or mobile implementation guided by real usage",
                fr: "Conception web ou mobile guidee par les usages",
              },
            ],
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
              en: "For companies that want to turn an operational need into an internal tool, a portal or a business application.",
              fr: "Pour les entreprises qui veulent transformer un besoin operationnel en outil interne, portail ou application metier.",
            },
            points: [
              {
                en: "Process mapping and functional framing",
                fr: "Cartographie du processus et cadrage fonctionnel",
              },
              {
                en: "Interfaces designed around real field usage",
                fr: "Interfaces pensees autour des usages terrain",
              },
              {
                en: "Maintainable solution and progressive scale-up",
                fr: "Solution maintenable et evolutive",
              },
            ],
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
              fr: "Pour les equipes qui veulent ajouter assistance, recherche, resumes, extraction ou automatisations intelligentes dans un produit existant ou un workflow interne.",
            },
            points: [
              {
                en: "Identify the use case where AI creates real value for users or teams",
                fr: "Identifier le cas d'usage ou l'IA cree une vraie valeur pour les utilisateurs ou l'equipe",
              },
              {
                en: "Integrate AI into the current product without breaking the user experience",
                fr: "Integrer l'IA dans le produit actuel sans casser l'experience utilisateur",
              },
              {
                en: "Keep reliability, cost and operating rules under control from day one",
                fr: "Garder fiabilite, cout et regles d'usage sous controle des le depart",
              },
            ],
          },
          {
            className: "marketing",
            imgUrl: "assets/images/services/platform-icon.png",
            kicker: {
              en: "For existing teams",
              fr: "Pour les equipes en place",
            },
            title: {
              en: "Reinforce a team without breaking its pace",
              fr: "Renforcer une equipe sans casser son rythme",
            },
            text: {
              en: "For teams that need someone able to produce, structure and support good engineering practices at the same time.",
              fr: "Pour les equipes qui ont besoin d'un profil capable de produire, structurer et accompagner les bonnes pratiques en meme temps.",
            },
            points: [
              {
                en: "Technical coordination and operational support",
                fr: "Coordination technique et appui operationnel",
              },
              {
                en: "Code review, mentoring and developer autonomy",
                fr: "Code review, mentoring et autonomie de l'equipe",
              },
              {
                en: "CI/CD, technical backlog and release stabilization",
                fr: "CI/CD, backlog technique et stabilisation des mises en production",
              },
            ],
          },
        ],
      },

      //SKILLS CONTENT

      // toggle between skills and tools in skills section
      isSkillsOrTools: "skills",

      mySkills: {
        title: { en: "technical foundation", fr: "socle technique" },
        subtitle1: { en: "A stack built", fr: "Une stack pensée" },
        subtitle2: {
          en: "for production",
          fr: "pour la production",
        },
        text: {
          en: "I rely on a modern stack already proven in production to build, maintain and evolve web and mobile applications.",
          fr: "Je m'appuie sur un socle technique deja eprouve en production pour concevoir, maintenir et faire evoluer des applications web et mobiles.",
        },
        businessItems: [
          {
            en: "React, Next.js, Vue, Angular and Flutter for web and mobile interfaces that need to be adopted.",
            fr: "React, Next.js, Vue, Angular et Flutter pour des interfaces web et mobiles qui doivent etre vraiment adoptees.",
          },
          {
            en: "TypeScript, Node.js and data layers designed for maintainability.",
            fr: "TypeScript, Node.js et des couches data pensees pour la maintenabilite.",
          },
          {
            en: "Azure DevOps, GitLab CI, GitHub Actions and release pipelines for web and store deployments.",
            fr: "Azure DevOps, GitLab CI, GitHub Actions et des pipelines de livraison pour le web comme pour les stores.",
          },
        ],
        skillsLabel: { en: "Technologies", fr: "Technologies" },
        toolsLabel: { en: "CI/CD & Tools", fr: "CI/CD & outils" },
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
          fr: `Entre produit, ESN, associatif et freelance, j'ai surtout appris a proteger ce qui compte le plus pour un client: un logiciel utile, un plan clair, une execution fiable et assez de structure pour garder l'elan.`,
        },
        items: [
          {
            date: "Nov 2025 - Present",
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
              fr: "Conception, developpement et maintenance d'applications web et mobiles, avec pilotage Agile, cadrage technique et suivi de mise en production.",
            },
          },
          {
            date: "Feb 2025 - Oct 2025",
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
              fr: "Encadrement du pole developpement sur une marketplace, un ERP, un CRM et une plateforme vendeur. Mise en place CI/CD, optimisation des workflows, gestion du backlog et contribution a l'architecture de l'application mobile.\nOutils: ReactJS, NextJS, Flutter, Docker, GitlabCI.",
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
              en: "Consulting, maintenance and development of web and mobile applications for construction and healthcare, including a complete patient management, appointment and billing system.\nTools: Flutter, Azure DevOps, React, Next.js, TypeScript.",
              fr: "Conseil, maintenance evolutive et developpement d'applications web et mobiles pour le BTP et la sante, dont une solution complete de gestion patient, rendez-vous, dossier medical et facturation.\nOutils: Flutter, Azure DevOps, React, Next.js, TypeScript.",
            },
          },
          {
            date: "Oct 2023 - Present",
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
              fr: "Pilotage, developpement et formation utilisateur autour d'une application terrain offline-first utilisee pendant des campagnes chirurgicales.\nOutils: Flutter, Firebase, MariaDB.",
            },
          },
          {
            date: "Jun 2023 - Present",
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
            date: "Jun 2021 - Dec 2023",
            companyName: { fr: "Bocasay", en: "Bocasay" },
            jobTitle: {
              fr: "Développeur d'Applications",
              en: "Application Developer",
            },
            desc: {
              en: "Maintenance and store releases for custom mobile applications (EDM, HR, expenses, payroll variables) as well as an e-learning platform.\nTools: Flutter, Vue.js, React, Node.js, Docker, Gitlab CI.",
              fr: "Maintenance evolutive et mises en production d'applications mobiles sur mesure (GED, RH, notes de frais, variables de paie) ainsi que d'une plateforme e-learning.\nOutils: Flutter, Vue.js, React, Node.js, Docker, Gitlab CI.",
            },
          },
          {
            date: "Jan 2018 - Jun 2018",
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
            date: "Aug 2017 - Oct 2017",
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
            date: "Aug 2016 - Oct 2016",
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
        title: { en: "completed projects", fr: "projets realises" },
        subtitle1: {
          en: `Projects delivered`,
          fr: `Des projets realises`,
        },
        subtitle2: {
          en: "for real business needs",
          fr: "pour des besoins concrets",
        },
        text: {
          en: `An expanded selection of platforms, mobile applications and internal tools delivered for startups, SMEs, associations, healthcare teams and operations-heavy organizations.`,
          fr: `Une selection elargie de plateformes, applications mobiles et outils metier livres pour des startups, des PME, des associations, des structures de sante et des equipes operationnelles.`,
        },
      },

      allPortfolioItems: [
        {
          url: "#contact",
          imgUrl: "assets/images/portfolio/portfolio-1.png",
          title: {
            en: "Marketplace, ERP, CRM and seller space",
            fr: "Marketplace, ERP, CRM et espace vendeur",
          },
          meta: {
            en: "Mora Market · e-commerce operations and internal tools",
            fr: "Mora Market · e-commerce, operations et outils internes",
          },
          desc: {
            en: "A complete digital backbone bringing together online sales, seller management and internal operations to support marketplace growth on stronger foundations.",
            fr: "Un socle digital complet qui relie vente en ligne, gestion vendeur et operations internes pour faire grandir une marketplace sur des bases plus solides.",
          },
          points: [
            {
              en: "Unifies catalog, orders, sellers and internal follow-up inside one coherent system",
              fr: "Unifie catalogue, commandes, vendeurs et suivi interne dans un meme systeme",
            },
            {
              en: "Gives teams clearer visibility on commercial activity, bottlenecks and priorities",
              fr: "Donne aux equipes plus de visibilite sur l'activite commerciale, les blocages et les priorites",
            },
            {
              en: "Creates a scalable operational base for an e-commerce startup moving into structured growth",
              fr: "Pose une base scalable pour une startup e-commerce qui passe a une organisation plus structuree",
            },
          ],
          cta: {
            en: "Discuss a marketplace and ERP platform",
            fr: "Parler d'une marketplace et d'un ERP e-commerce",
          },
        },
        {
          url: "#contact",
          imgUrl: "assets/images/portfolio/portfolio-2.png",
          title: {
            en: "Internal ERP and parcel tracking for Unicargo Express",
            fr: "ERP interne et suivi colis pour Unicargo Express",
          },
          meta: {
            en: "Unicargo Express · internal operations and parcel tracking",
            fr: "Unicargo Express · operations internes et suivi logistique",
          },
          desc: {
            en: "A logistics platform with operator and admin back-office plus parcel tracking to organize internal work and improve shipment visibility.",
            fr: "Une plateforme logistique avec back-office operator et admin, plus suivi colis, pour mieux organiser le travail interne et la visibilite des expeditions.",
          },
          points: [
            {
              en: "Centralizes internal processing, parcel statuses and team coordination in one workflow",
              fr: "Centralise traitement interne, statuts colis et coordination des equipes dans un meme flux",
            },
            {
              en: "Improves traceability and service quality at each stage of the delivery journey",
              fr: "Ameliore la tracabilite et la qualite d'information a chaque etape du parcours colis",
            },
            {
              en: "Reduces the friction caused by manual tracking and scattered operational tools",
              fr: "Reduit les pertes de temps liees aux suivis manuels et aux outils operationnels disperses",
            },
          ],
          cta: {
            en: "Discuss a logistics platform",
            fr: "Parler d'une plateforme logistique",
          },
        },
        {
          url: "#contact",
          imgUrl: "assets/images/portfolio/portfolio-6.png",
          title: {
            en: "Web platform and back-office for Rotaract Amontana",
            fr: "Plateforme web et back-office pour Rotaract Amontana",
          },
          meta: {
            en: "Rotaract Club Antananarivo Amontana · institutional platform and secure admin space",
            fr: "Rotaract Club Antananarivo Amontana · plateforme institutionnelle et administration securisee",
          },
          desc: {
            en: "A full-stack institutional platform combining public website, recruitment, galleries, annual reports and secure administration tools for the club.",
            fr: "Une plateforme institutionnelle full-stack qui combine site public, recrutement, galeries, bilans annuels et outils d'administration securises pour le club.",
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
          imgUrl: "assets/images/portfolio/portfolio-5.png",
          title: {
            en: "Real-time geolocation platform Trackeo",
            fr: "Plateforme de geolocalisation temps reel Trackeo",
          },
          meta: {
            en: "Trackeo · real-time geolocation and field operations",
            fr: "Trackeo · geolocalisation temps reel et operations terrain",
          },
          desc: {
            en: "A real-time geolocation solution to monitor vehicles, trip history, geofences and alerts from an architecture built for operational use.",
            fr: "Une solution de geolocalisation temps reel pour suivre vehicules, historiques, geofences et alertes depuis une architecture pensee pour un usage operationnel.",
          },
          points: [
            {
              en: "Gives operations teams an immediate view of fleet activity and movements",
              fr: "Donne aux equipes operations une lecture immediate de l'activite terrain et des mouvements de flotte",
            },
            {
              en: "Helps detect delays, route deviations and zone exits much faster",
              fr: "Permet de detecter plus vite les retards, les ecarts de trajet et les sorties de zone",
            },
            {
              en: "Creates a solid base for a connected tracking offer in logistics, security or field services",
              fr: "Prepare une offre de suivi connecte exploitable pour la logistique, la securite ou les services terrain",
            },
          ],
          cta: {
            en: "Discuss a geolocation platform",
            fr: "Parler d'une plateforme de geolocalisation",
          },
        },
        {
          url: "#contact",
          imgUrl: "assets/images/portfolio/portfolio-2.png",
          title: {
            en: "Mobile e-commerce application for Mora Market",
            fr: "Application mobile e-commerce pour Mora Market",
          },
          meta: {
            en: "Mora Market · mobile commerce product",
            fr: "Mora Market · produit mobile e-commerce",
          },
          desc: {
            en: "A mobile commerce application designed to make ordering, discovery and engagement more direct from the smartphone.",
            fr: "Une application mobile e-commerce concue pour rendre l'achat, la decouverte et l'engagement plus directs depuis le smartphone.",
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
              fr: "Complete la plateforme web avec une experience mobile coherente avec les objectifs business",
            },
          ],
          cta: {
            en: "Discuss a mobile product",
            fr: "Parler d'un produit mobile",
          },
        },
        {
          url: "#contact",
          imgUrl: "assets/images/portfolio/portfolio-3.png",
          title: {
            en: "Planning, events and tasks for construction teams",
            fr: "Planning, evenements et taches pour equipes BTP",
          },
          meta: {
            en: "Versusmind · field coordination tool",
            fr: "Versusmind · outil de coordination terrain",
          },
          desc: {
            en: "A coordination tool to organize planning, events and tasks in a construction environment involving multiple stakeholders.",
            fr: "Un outil de coordination pour organiser planning, evenements et taches dans un environnement BTP impliquant plusieurs intervenants.",
          },
          points: [
            {
              en: "Clarifies who does what, when and on which priority",
              fr: "Clarifie qui fait quoi, quand et sur quelles priorites",
            },
            {
              en: "Reduces missed actions and fragmented communication between field actors",
              fr: "Reduit les oublis et la dispersion de l'information entre les acteurs terrain",
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
          title: {
            en: "Patient management, medical record and billing",
            fr: "Gestion patient, dossier medical et facturation",
          },
          meta: {
            en: "Versusmind · healthcare operations",
            fr: "Versusmind · operations et parcours de soin",
          },
          desc: {
            en: "A healthcare system linking patient registration, consultation, examination, medical records, appointments and billing in one continuous flow.",
            fr: "Un systeme sante qui relie enregistrement patient, consultation, examen, dossier medical, rendez-vous et facturation dans un meme flux continu.",
          },
          points: [
            {
              en: "Makes the patient journey smoother from intake to discharge",
              fr: "Fluidifie le parcours patient depuis l'accueil jusqu'a la sortie",
            },
            {
              en: "Improves data reliability between care teams, administration and billing",
              fr: "Fiabilise les informations partagees entre les equipes de soin, l'administratif et la facturation",
            },
            {
              en: "Reduces duplicate entry and everyday friction in healthcare operations",
              fr: "Reduit les doubles saisies et les frictions quotidiennes dans le fonctionnement de la structure",
            },
          ],
          cta: {
            en: "Discuss a healthcare platform",
            fr: "Parler d'une plateforme sante",
          },
        },
        {
          url: "#contact",
          imgUrl: "assets/images/portfolio/portfolio-5.png",
          title: {
            en: "Nutrition and exercise tracking on iOS and Android",
            fr: "Suivi nutritionnel et exercice sur iOS et Android",
          },
          meta: {
            en: "MyZenkaiFit · nutrition, strength and cardio tracking",
            fr: "MyZenkaiFit · nutrition, musculation et cardio",
          },
          desc: {
            en: "A premium mobile product for nutrition, strength training, cardio routines and long-term progress tracking.",
            fr: "Un produit mobile premium pour la nutrition, la musculation, le cardio et le suivi de progression dans la duree.",
          },
          points: [
            {
              en: "Helps users follow routines, goals and progress much more easily",
              fr: "Aide les utilisateurs a suivre plus facilement leurs routines, leurs objectifs et leur progression",
            },
            {
              en: "Supports a stronger premium positioning for coaching, wellness and fitness offers",
              fr: "Valorise une offre coaching, bien-etre ou fitness avec un produit mobile plus premium",
            },
            {
              en: "Fits subscription, retention and long-term engagement models very well",
              fr: "Soutient tres bien une logique d'abonnement, de fidelisation et d'engagement dans le temps",
            },
          ],
          cta: {
            en: "Discuss a fitness application",
            fr: "Parler d'une application fitness",
          },
        },
        {
          url: "#contact",
          imgUrl: "assets/images/portfolio/portfolio-5.png",
          title: {
            en: "Field PWA for Rotary surgical campaigns",
            fr: "PWA terrain pour campagnes chirurgicales Rotary",
          },
          meta: {
            en: "Rotary Club Antananarivo · offline-first medical field operations",
            fr: "Rotary Club Antananarivo · operations medicales terrain offline-first",
          },
          desc: {
            en: "An offline-first PWA used during surgical campaigns to manage patient registration, operating schedules, post-op follow-up and field statistics.",
            fr: "Une PWA offline-first utilisee pendant des campagnes chirurgicales pour gerer enregistrement patient, programmes operatoires, suivis post-operatoires et statistiques terrain.",
          },
          points: [
            {
              en: "Keeps teams operational even when connectivity is unstable or unavailable",
              fr: "Permet aux equipes de rester operationnelles meme quand la connectivite est instable ou absente",
            },
            {
              en: "Centralizes critical patient, operation and follow-up information in one field tool",
              fr: "Centralise les informations critiques du patient, de l'operation et du suivi dans un seul outil terrain",
            },
            {
              en: "Improves both medical and logistical coordination during demanding field missions",
              fr: "Ameliore a la fois la coordination medicale et logistique pendant des missions terrain exigeantes",
            },
          ],
          cta: {
            en: "Discuss a field operations tool",
            fr: "Parler d'un outil terrain",
          },
        },
        {
          url: "#contact",
          imgUrl: "assets/images/portfolio/portfolio-6.png",
          title: {
            en: "Business apps for accounting, document and HR workflows",
            fr: "Applications metier compta, GED et RH",
          },
          meta: {
            en: "Bocasay · multi-module business apps",
            fr: "Bocasay · applications metier multi-modules",
          },
          desc: {
            en: "A suite of mobile business applications for accounting firms and HR workflows covering document management, file sharing, mileage, expenses, payroll inputs and alerts.",
            fr: "Une suite d'applications mobiles metier pour cabinets comptables et workflows RH couvrant GED, partage de fichiers, kilometrage, frais, variables de paie et alertes.",
          },
          points: [
            {
              en: "Digitalizes several repetitive administrative tasks inside a simpler mobile experience",
              fr: "Digitalise plusieurs taches administratives repetitives dans une experience mobile plus simple",
            },
            {
              en: "Supports service continuity for apps used regularly by both teams and clients",
              fr: "Ameliore la continuite de service sur des applications utilisees regulierement par les equipes et les clients",
            },
            {
              en: "Helps service organizations gain fluidity and responsiveness in day-to-day operations",
              fr: "Aide les structures de services a gagner en fluidite et en reactivite au quotidien",
            },
          ],
          cta: {
            en: "Discuss a business app suite",
            fr: "Parler d'une suite applicative metier",
          },
        },
        {
          url: "#contact",
          imgUrl: "assets/images/portfolio/portfolio-3.png",
          title: {
            en: "Premium Malagasy learning application",
            fr: "Application premium d'apprentissage du malgache",
          },
          meta: {
            en: "Sekolygasy · premium language learning product",
            fr: "Sekolygasy · produit premium d'apprentissage linguistique",
          },
          desc: {
            en: "A premium Android and iOS learning product built to make Malagasy practice more regular, engaging and easier to follow.",
            fr: "Un produit premium Android et iOS concu pour rendre la pratique du malgache plus reguliere, plus engageante et plus simple a suivre.",
          },
          points: [
            {
              en: "Turns a niche learning need into an accessible and engaging mobile habit",
              fr: "Transforme un besoin d'apprentissage niche en experience mobile accessible et engageante",
            },
            {
              en: "Supports a premium positioning around content, community and subscription",
              fr: "Soutient un positionnement premium autour du contenu, de la communaute et de l'abonnement",
            },
            {
              en: "Fits EdTech, language and recurring-content products very well",
              fr: "Convient tres bien aux produits EdTech, langues et contenus a forte recurrence",
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
          title: {
            en: "Video streaming e-learning platform",
            fr: "Plateforme e-learning de cours video en streaming",
          },
          meta: {
            en: "Bocasay · learning and content platform",
            fr: "Bocasay · plateforme de formation et de contenu",
          },
          desc: {
            en: "An online learning platform built to deliver video courses in streaming and make a training catalog easier to access and monetize.",
            fr: "Une plateforme de formation en ligne concue pour diffuser des cours video en streaming et mieux valoriser, diffuser et monetiser un catalogue de contenus.",
          },
          points: [
            {
              en: "Makes training content easier to access and follow over time",
              fr: "Rend les contenus de formation plus simples a consulter et a suivre dans la duree",
            },
            {
              en: "Provides a stronger base for monetizing a training catalog",
              fr: "Donne une base plus solide pour monetiser un catalogue de formation",
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
          title: {
            en: "Fablab activity tracking application",
            fr: "Application de suivi d'activite pour fablab",
          },
          meta: {
            en: "ONG HABAKA · association and member operations",
            fr: "ONG HABAKA · operations associatives et suivi des membres",
          },
          desc: {
            en: "An activity tracking application for a fablab designed to replace manual logs with a more reliable operational base.",
            fr: "Une application de suivi d'activite pour fablab concue pour remplacer les registres manuels par une base de travail plus fiable et plus exploitable.",
          },
          points: [
            {
              en: "Gives better visibility on attendance and use of shared spaces",
              fr: "Donne une meilleure visibilite sur la frequentation et l'utilisation des espaces partages",
            },
            {
              en: "Makes member tracking and day-to-day organization much easier to manage",
              fr: "Facilite nettement le suivi des membres et l'organisation quotidienne du lieu",
            },
            {
              en: "Creates a first real digitalization step for associations, labs and shared spaces",
              fr: "Constitue un premier vrai pas de digitalisation pour des associations, labs et espaces partages",
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
          title: {
            en: "Automation for vehicle fleet operations",
            fr: "Automatisation du parc automobile",
          },
          meta: {
            en: "BMOI · internal automation and productivity",
            fr: "BMOI · automatisation interne et productivite",
          },
          desc: {
            en: "An internal application built to automate manual tasks in the vehicle fleet department and make daily processing more reliable.",
            fr: "Une application interne concue pour automatiser les taches manuelles du service parc automobile et fiabiliser les traitements du quotidien.",
          },
          points: [
            {
              en: "Reduces the time spent on repetitive low-value administrative work",
              fr: "Reduit le temps passe sur des operations repetitives a faible valeur ajoutee",
            },
            {
              en: "Limits the risk of errors caused by fully manual processing",
              fr: "Diminue le risque d'erreurs liees a des traitements entierement manuels",
            },
            {
              en: "Improves productivity in a support department without disrupting work habits",
              fr: "Ameliore la productivite d'un service support sans alourdir les habitudes de travail",
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
          title: {
            en: "Academic records management and generation",
            fr: "Gestion et generation de releves academiques",
          },
          meta: {
            en: "Sainte Famille Mahamasina · school administration",
            fr: "Sainte Famille Mahamasina · gestion scolaire",
          },
          desc: {
            en: "A web application to manage academic records and speed up their generation in a more reliable way for the institution.",
            fr: "Une application web pour gerer les releves academiques et accelerer leur generation de maniere plus fiable pour l'institution.",
          },
          points: [
            {
              en: "Simplifies record preparation and edition for the administrative team",
              fr: "Simplifie la preparation et l'edition des releves pour l'administration",
            },
            {
              en: "Reduces manual handling and the risk of academic reporting errors",
              fr: "Reduit les manipulations manuelles et les risques d'erreur sur les releves",
            },
            {
              en: "Delivers a very concrete time-saving gain for an educational structure",
              fr: "Apporte un gain de temps tres concret a une structure educative",
            },
          ],
          cta: {
            en: "Discuss a school management tool",
            fr: "Parler d'un outil de gestion scolaire",
          },
        },
      ],

      portfolioPreviewCount: 8,

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
        subtitle1: { en: "A project, an audit or extra delivery capacity?", fr: "Un projet, un audit ou un renfort d'equipe ?" },
        subtitle2: {
          en: "Let's discuss it clearly",
          fr: "Échangeons simplement",
        },
        text: {
          en: "Reach out if you need to frame a web or mobile application, recover a delayed project, digitalize an internal process or reinforce your team for a key phase.",
          fr: "Écrivez-moi si vous souhaitez cadrer une application web ou mobile, reprendre un projet en retard, digitaliser un processus interne ou renforcer votre equipe pendant une phase clé.",
        },
        responseNote: {
          en: "I usually reply with a useful first read: scope, technical angle and recommended next step.",
          fr: "Je reviens en général avec une première lecture utile: cadrage, angle technique et prochaine étape recommandée.",
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
            fr: "Presentez le contexte, l'objectif, les contraintes et le calendrier ideal...",
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

    // hide the preloader screen after loading
    window.addEventListener("load", () =>
      setTimeout(() => (this.isPreloading = false), 700)
    );

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

    togglePortfolioItems() {
      this.showAllPortfolioItems = !this.showAllPortfolioItems;

      if (window.innerWidth >= 992) {
        this.$nextTick(() => this.initializeTilt());
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

    firstPortfolioItems() {
      return this.allPortfolioItems.slice(0, this.portfolioPreviewCount);
    },

    visiblePortfolioItems() {
      return this.showAllPortfolioItems ? this.allPortfolioItems : this.firstPortfolioItems;
    },

    extraPortfolioItems() {
      return this.allPortfolioItems.slice(this.portfolioPreviewCount);
    },

    remainingPortfolioItemsCount() {
      return this.extraPortfolioItems.length;
    },

    portfolioToggleLabel() {
      const count = this.remainingPortfolioItemsCount;
      const isFrench = this.getLanguageCode() === "fr";

      if (isFrench) {
        return `Voir ${count} projet${count > 1 ? "s" : ""} de plus`;
      }

      return `See ${count} more project${count > 1 ? "s" : ""}`;
    },

    portfolioToggleCloseLabel() {
      return this.getLanguageCode() === "fr"
        ? "Voir moins"
        : "Show fewer projects";
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
