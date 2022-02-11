// -------------------------------------
// vue app
// -------------------------------------

const app = Vue.createApp({
  data() {
    return {
      language: 'english',
      careerStartDate: 2021,
      copyrightStartDate: 2022,
      completedProjects: 5,
      happyClients: 5,

      appTheme: 'light_theme',
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

      experienceNumber : 0,

      // list of nav links to loop through it
      navLinks: [
        {
          url: '#hero',
          title: { en: 'Home', fr: 'Accueil' }
        }, {
          url: '#about',
          title: { en: 'About', fr: 'A propos' }
        }, {
          url: '#skills',
          title: { en: 'Skills', fr: 'Compétences' }
        }, {
          url: '#portfolio',
          title: { en: 'Portfolio', fr: 'Portfolio' }
        }, {
          url: '#contact',
          title: { en: 'Contact', fr: 'Contact' }
        }
      ],

      staticTexts : {
        presentation: {
          greeting: {en: 'Hi, I\'m Stéphan', fr: 'Salut, je suis Stéphan'},
          currentJobTitle: {en: 'Developer & Designer', fr: 'Designeur & Développeur'}
        },
        getInTouch: {en: 'Get In Touch', fr: 'Entrer En Contact'},
        scroll: {en: 'Scroll', fr: 'Défiler'},
        experienceYearLabel: {en: 'Year Of Experience', fr: 'Année d\'expérience'},
        completedProjectLabel: {en: 'Completed Projects', fr: 'Projets Terminés'},
        happyClientLabel: {en: 'Happy Clients', fr: 'Clients Satisfaits'},
        hireMe: {en: 'Hire Me', fr: 'Engagez moi'},
        toCV: {en: 'Download CV', fr: 'Télécharger CV'},
      },

      aboutMe: {
        title: {en: 'about Me', fr:'à propos'},
        subtitle1: {en: 'Need a Creative Product?', fr:"Besoin d'un produit créatif ?"},
        subtitle2: {en:'I can Help You!', fr:'Je peux vous aider!'},
        text: {en:"Hi! I’m Stéphan Josué Christian, and I’m a developer who has passion for building clean web applications with intuitive functionality. I enjoy the process of turning ideas into reality using creative solutions. I’m always curious about learning new skills, tools, and concepts. In addition to working on various solo full stack projects, I have worked with creative teams, which involves daily stand-ups and communications, source control, and project management."
              ,fr:"Salut! Je m'appelle Stéphan Josué Christian et je suis un développeur passionné par la création d'applications propres avec des fonctionnalités intuitives. J'aime le processus de transformer des idées en réalité en utilisant des solutions créatives. Je suis toujours curieux d'apprendre de nouvelles compétences, outils et concepts. En plus de travailler sur divers projets solo full stack, j'ai travaillé avec des équipes créatives, ce qui implique des stand-ups et des communications quotidiennes, le contrôle de source et la gestion de projet."
        },
        quoteDescription: {
          en: 'I love making things simple, intuitive and expertly crafted!', 
          fr: 'J\'aime rendre les choses simples, intuitives et conçues par des expertise !'
        },
        quoteText: {
          en: 'Product is the vital essence of what i do, truly great product is born of meticulous planning and process. This is where i specialized!', 
          fr: 'Le produit est l\'essence vitale de ce que je fais, un produit vraiment génial est né d\'une planification et d\'un processus méticuleux. C\'est là que je me suis spécialisé !'
        },
      },

      //SKILLS CONTENT

      // toggle between skills and tools in skills section
      isSkillsOrTools: 'skills',
      
      mySkills: {
        title: {en: 'my skills', fr:'mes compétences'},
        subtitle1: {en: 'What My Programming', fr:"Que comprenne mes "},
        subtitle2: {en:'Skills Included?', fr:'Compétences en programmation?'},
        text: {en:"I develop simple, intuitive and responsive user interface that helps users get things done with less effort and time with those technologies."
              ,fr:"Je développe de simple, intuitive et réactive interface utilisateur qui aide les utilisateurs à faire les choses avec moins d'effort et de temps avec ces technologies."
        },
        skillsLabel: {en: 'Skills', fr: 'Compétences'},
        toolsLabel: {en: 'Tools', fr: 'Outils'},
        skillsItems: [
          {
            imgUrl: 'assets/images/skills/html5.png',
            title: 'HTML5'
          }, {
            imgUrl: 'assets/images/skills/css3.png',
            title: 'CSS3'
          }, {
            imgUrl: 'assets/images/skills/javascript.png',
            title: 'JavaScript'
          }, {
            imgUrl: 'assets/images/skills/typescript.png',
            title: 'TypeScript'
          }, {
            imgUrl: 'assets/images/skills/dart.png',
            title: 'Dart'
          }, {
            imgUrl: 'assets/images/skills/bootstrap.png',
            title: 'Bootstrap'
          }, {
            imgUrl: 'assets/images/skills/angular.png',
            title: 'Angular'
          }, {
            imgUrl: 'assets/images/skills/vue.png',
            title: 'Vue'
          }, {
            imgUrl: 'assets/images/skills/firebase.png',
            title: 'Firebase'
          }, {
            imgUrl: 'assets/images/skills/flutter.png',
            title: 'Flutter'
          }, {
            imgUrl: 'assets/images/skills/ionic.png',
            title: 'Ionic'
          }, {
            imgUrl: 'assets/images/skills/sass.png',
            title: 'SASS'
          }, {
            imgUrl: 'assets/images/skills/php.png',
            title: 'PHP'
          }, {
            imgUrl: 'assets/images/skills/codeigniter.png',
            title: 'CodeIgniter'
          }
        ],
        toolsItems: [
          {
            imgUrl: 'assets/images/skills/gitlab.png',
            title: 'Gitlab'
          }, {
            imgUrl: 'assets/images/skills/webpack.png',
            title: 'Webpack'
          }, {
            imgUrl: 'assets/images/skills/git.png',
            title: 'Git (Github)'
          }, {
            imgUrl: 'assets/images/skills/npm.png',
            title: 'Npm'
          }, {
            imgUrl: 'assets/images/skills/command.png',
            title: 'Command Line'
          }, {
            imgUrl: 'assets/images/skills/vs-code.png',
            title: 'VS Code'
          }, {
            imgUrl: 'assets/images/skills/lighthouse.png',
            title: 'Google Lighthouse'
          }, {
            imgUrl: 'assets/images/skills/yarn.png',
            title: 'Yarn'
          }, {
            imgUrl: 'assets/images/skills/slack.png',
            title: 'Slack'
          }, {
            imgUrl: 'assets/images/skills/photoshop.png',
            title: 'Photoshop'
          }, {
            imgUrl: 'assets/images/skills/adobe-xd.png',
            title: 'Adobe XD'
          }
        ],
      },


      // EDUCATION CONTENT 
      education: {
        title: {en: 'Education', fr: 'Education',},
        subtitle: {en: 'Education', fr: 'Education'},
        text: {
          en: 'I have been studying in multiple universities in Madagascar, and also have gotten a scholarship in one of the best university in China. I have chosen the Information Technology domain. So, I will always need to learn new things to be up to date on latest news and shine among others. For that, I also plan to take multiple master degree in different majors',
          fr: `J'ai étudié dans plusieurs universités à Madagascar et j'ai également obtenu une bourse d'excellence dans l'une des meilleures universités de Chine. Puisque j'ai choisi le domaine des technologies de l'information. Alors, j'aurai toujours besoin d'apprendre de nouvelles choses pour être au courant des dernières nouveautés et briller parmis les autres. Pour cela, je prévois également de prendre plusieurs masters dans différentes majeures.`
        },
        items: [
          {
            date: '2014',
            schoolName: { fr: 'Infocentre de La Salle Soavimbahoaka.', en: 'Infocentre de La Salle Soavimbahoaka' },
            degreeTitle: { fr: 'Licence en Informatique', en: 'Bachelor degree in Software Engineering' },
            desc: {
              fr: 'De 2014 à 2017, un cursus de 3 ans en informatique, parcours Développement Logiciel',
              en: 'From 2014 to 2017, a 3 years path in computer science, with software development major.'
            }
          },
          {
            date: '2018',
            schoolName: { fr: 'Beijing University of Technology', en: 'Beijing University of Technology' },
            degreeTitle: { fr: 'Langue & littératue Chinoise', en: 'Chinese Language' },
            desc: {
              fr: 'De 2018 en 2019, une formation en langue chinoise, certification HSK 5',
              en: 'From 2018 to 2019, a one year of Chinese Language Study , HSK 5 level.'
            }
          },
          {
            date: '2019',
            schoolName: { fr: 'Beijing University of Technology', en: 'Beijing University of Technology' },
            degreeTitle: { fr: 'Master en Informatique', en: 'Master degree in computer science' },
            desc: {
              fr: 'De 2018 en 2022, un cursus de 3 ans en informatique, parcours vision par ordinateur',
              en: 'From 2018 to 2022, a 3 year computer science study, with computer vision major.'
            }
          },
          {
            date: '2021',
            schoolName: { fr: 'CNTEMAD', en: 'CNTEMAD' },
            degreeTitle: { fr: 'Master en Informatique', en: 'Master degree in computer science' },
            desc: {
              fr: 'Depuis 2021, un cursus de 2 ans, parcours Base de données et Génie Logiciel',
              en: 'From early 2021, a master degree study in database and software enginering.'
            }
          }, {}, {}
        ],
      },
      
      // EXPERIENCE CONTENT
      experience: {
        title: {en: 'Experience', fr: 'Expérience'},
        subtitle1: {
          en: `1 Year of enterprise experience`,
          fr: `1 Année d'Experience en entreprise`,
        },
        subtitle2:{
          en: 'With much more on personal projects!', fr: 'Avec beaucoup plus sur des projets personnels!'
        },
        text:{
          en: `I have been developing sites and apps for 1 year, and I know for sure the main trends and directions of modern design, I\'m have been a visionary and a reliable software engineering partner for world-class brands. You will get a decent result as you expect.`,
          fr: `Je développe des sites et des applications depuis une année et je connais avec certitude les principales tendances et orientations du design moderne, je suis un visionnaire et un partenaire fiable en ingénierie logicielle pour des marques de classe mondiale. Vous obtiendrez un résultat décent comme vous l'attendez.`
        },
        items: [
          {
            date: '2016',
            companyName: { fr: 'Sainte Famille, Mahamasina, Antananarivo', en: 'Sainte Famille, Mahamasina, Antananarivo' },
            jobTitle: { fr: 'Développeur PHP', en: 'PHP Developer' },
            desc: {
              fr: 'Application de génération automatique des relevés académiques des étudiants.',
              en: 'Application for automatic generation of student academic records.'
            }
          }, {
            date: '2017',
            companyName: { fr: 'BMOI Antaninarenina, Antananarivo', en: 'BMOI Antaninarenina, Antananarivo' },
            jobTitle: { fr: 'Développeur Fullstack', en: 'Fullstack developer' },
            desc: {
              fr: 'Logiciel d&quot;automatisation de tâches au niveau du département parc automobile.',
              en: 'Software for task automation at the fleet department.'
            }
          },
          {
            date: '2018',
            companyName: { fr: 'ONG HABAKA Tsimbazaza, Antananarivo', en: 'ONG HABAKA Tsimbazaza, Antananarivo' },
            jobTitle: { fr: 'Développeur PHP', en: 'PHP developer' },
            desc: {
              fr: 'Système de vérification des entrées et sorties des membres au Fablab.',
              en: 'Entry and exit verification system for Fablab members.'
            }
          },
          {
            date: '2021',
            companyName: { fr: 'Bocasay Madagascar', en: 'Bocasay Madagascar' },
            jobTitle: { fr: 'Développeur JavaScript', en: 'JavaScript developer' },
            desc: {
              fr: 'Plateforme française de cours vidéo en ligne.',
              en: 'French online video course platform.'
            }
          }, {}, {}
        ],
      },
      

      //PORTFOLIO CONTENT
      // filter type for items in portfolio section
      worksFilter: 'all',

      myWorks:{
        title: {en: 'my works', fr: 'Mes Travaux'},
        subtitle1: {
          en: `See My Works Which`,
          fr: `Mes travaux`,
        },
        subtitle2:{
          en: 'Will Amaze You!', fr: 'vous étonnera! '
        },
        text:{
          en: `I develop good quality application and website that serve for the long-term. Well-documented, clean, easy and elegant interface helps any non-technical clients.`,
          fr: `Je développe une application et un site Web de qualité qui sert à long terme. Une interface bien documentée, propre, simple et élégante aide tous les clients non techniques.`
        },
        loadMore: {
          en: 'Load more works',
          fr: 'Charger plus de travaux'
        }
      },

      allPortfolioItems: [
        {
          url: '#',
          imgUrl: 'assets/images/portfolio/portfolio-1.png',
          title: { en: 'Lorem Ipsum Dolor', fr:  'Lorem Ipsum Dolor' },
          desc: { en: 'April 2021', fr: 'Avril 2021' },
          category: { slug: 'desktop', name: 'Desktop' }
        }, {
          url: '#',
          imgUrl: 'assets/images/portfolio/portfolio-2.png',
          title: { en: 'Lorem Ipsum Dolor', fr:  'Lorem Ipsum Dolor' },
          desc: { en: 'April 2021', fr: 'Avril 2021' },
          category: { slug: 'web', name: 'Web' }
        }, {
          url: '#',
          imgUrl: 'assets/images/portfolio/portfolio-3.png',
          title: { en: 'Lorem Ipsum Dolor', fr:  'Lorem Ipsum Dolor' },
          desc: { en: 'April 2021', fr: 'Avril 2021' },
          category: { slug: 'mobile', name: 'Mobile' }
        }, {
          url: '#',
          imgUrl: 'assets/images/portfolio/portfolio-4.png',
          title: { en: 'Lorem Ipsum Dolor', fr:  'Lorem Ipsum Dolor' },
          desc: { en: 'April 2021', fr: 'Avril 2021' },
          category: { slug: 'ui/ux', name: 'UI/UX' }
        }, {
          url: '#',
          imgUrl: 'assets/images/portfolio/portfolio-5.png',
          title: { en: 'Lorem Ipsum Dolor', fr:  'Lorem Ipsum Dolor' },
          desc: { en: 'April 2021', fr: 'Avril 2021' },
          category: { slug: 'desktop', name: 'Desktop' }
        }, {
          url: '#',
          imgUrl: 'assets/images/portfolio/portfolio-6.png',
          title: { en: 'Lorem Ipsum Dolor', fr:  'Lorem Ipsum Dolor' },
          desc: { en: 'April 2021', fr: 'Avril 2021' },
          category: { slug: 'web', name: 'Web' }
        }, {
          url: '#',
          imgUrl: 'assets/images/portfolio/portfolio-7.png',
          title: { en: 'Lorem Ipsum Dolor', fr:  'Lorem Ipsum Dolor' },
          desc: { en: 'April 2021', fr: 'Avril 2021' },
          category: { slug: 'mobile', name: 'Mobile' }
        }
      ].reverse(),

      // current page of portfolio items
      portfolioItemsPage: 0,

      // viewed portfolio items
      portfolioItems: [],


      //TESTIMONIALS CONTENT
      testimonials: {
        title: {
          en: 'testimonials',
          fr: 'témoignages'
        },
        subtitle1: {
          en: 'Check what\'s people',
          fr: 'Voyez ce que les gens'
        },
        subtitle2: {
          en: 'say about me',
          fr: 'disent de moi'
        },
      },
      testimonialsItems: [
        {
          imgUrl: 'assets/images/testimonials/testimonials-2.jpg',
          quoteContent: {
            en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla justo at odio sodales hendrerit. Mauris molestie pellentesque quam, sit amet ultricies ex sagittis non.',
            fr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla justo at odio sodales hendrerit. Mauris molestie pellentesque quam, sit amet ultricies ex sagittis non.'
          },
          quoteAuthor: { en: 'John Doe', fr: 'John Doe' },
          jobTitle: { en: 'Photographer', fr: 'Photographer' }
        },
        {
          imgUrl: 'assets/images/testimonials/testimonials-2.jpg',
          quoteContent: {
            en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla justo at odio sodales hendrerit. Mauris molestie pellentesque quam, sit amet ultricies ex sagittis non.',
            fr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla justo at odio sodales hendrerit. Mauris molestie pellentesque quam, sit amet ultricies ex sagittis non.'
          },
          quoteAuthor: { en: 'John Doe', fr: 'John Doe' },
          jobTitle: { en: 'Photographer', fr: 'Photographer' }
        },
        {
          imgUrl: 'assets/images/testimonials/testimonials-2.jpg',
          quoteContent: {
            en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla justo at odio sodales hendrerit. Mauris molestie pellentesque quam, sit amet ultricies ex sagittis non.',
            fr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla justo at odio sodales hendrerit. Mauris molestie pellentesque quam, sit amet ultricies ex sagittis non.'
          },
          quoteAuthor: { en: 'John Doe', fr: 'John Doe' },
          jobTitle: { en: 'Photographer', fr: 'Photographer' }
        },
        {
          imgUrl: 'assets/images/testimonials/testimonials-2.jpg',
          quoteContent: {
            en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla justo at odio sodales hendrerit. Mauris molestie pellentesque quam, sit amet ultricies ex sagittis non.',
            fr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla justo at odio sodales hendrerit. Mauris molestie pellentesque quam, sit amet ultricies ex sagittis non.'
          },
          quoteAuthor: { en: 'John Doe', fr: 'John Doe' },
          jobTitle: { en: 'Photographer', fr: 'Photographer' }
        },
        {
          imgUrl: 'assets/images/testimonials/testimonials-2.jpg',
          quoteContent: {
            en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla justo at odio sodales hendrerit. Mauris molestie pellentesque quam, sit amet ultricies ex sagittis non.',
            fr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla justo at odio sodales hendrerit. Mauris molestie pellentesque quam, sit amet ultricies ex sagittis non.'
          },
          quoteAuthor: { en: 'John Doe', fr: 'John Doe' },
          jobTitle: { en: 'Photographer', fr: 'Photographer' }
        },
      ],

      contact: {
        title: {en:'Contact', fr:'Contact'},
        subtitle1: {en:'Have You Any Project?', fr:'Vous avez un projet?'},
        subtitle2: {en:'Please Drop a Message', fr:'Veuillez laisser un message'},
        text: {
          en: 'Get in touch and let me know how I can help. Fill out the form and I’ll be in touch as soon as possible.', 
          fr:'Contactez-moi et dites-moi comment je peux vous aider. Remplissez le formulaire et je vous contacterai dès que possible.'
        },
        addressLabel: {en:'Address', fr:'Adresse'},
        address: '', 
        phoneLabel: {en:'Phone', fr:'Téléphone'},
        phone1: '(+261) 34 20 905 72',
        phone2: '(+261) 32 84 688 57',
        emailLabel: {en:'Email', fr:'Email'},
        email1: 'christianstephanjosue@gmail.com',
        email2: 'schristian@bocasay.com',

        form: {
          customerNameLabel: {en: 'Name', fr:'Nom',},
          customerNamePlaceholder: {en: 'e.g. Jean Rakoto', fr:'ex. Jean Rakoto',},
          customerEmailLabel: {en: 'Email', fr:'Email',},
          customerEmailPlaceholder: {en: 'e.g. jean.rakoto@gmail.com', fr:'ex. jean.rakoto@gmail.com',},
          customerPhoneLabel: {en: 'Phone', fr:'Téléphone',},
          customerPhonePlaceholder: {en: 'Phone Number', fr:'Numéro de télephone',},
          messageLabel: {en: 'Message', fr:'Message',},
          messagePlaceholder: {en: 'Write message...', fr:'Ecrire un message...',},
          optionalLabel: {en: 'Optional', fr:'Optionelle',},
        }
      },
    }
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
    window.addEventListener('load', () => this.isPreloading = false);

    // scrolling options
    this.scrollingOptions();
    document.addEventListener('scroll', () => this.scrollingOptions());

    // initialize popper.js plugin
    document.querySelectorAll('.has-ultimate-tooltip').forEach(el => {
      Popper.createPopper(el, el.querySelector('.ultimate-tooltip'), {
        placement: 'top',
        modifiers: [{ name: 'offset', options: { offset: [0, 30] }}]
      });
    });
  },


  methods: {

    // initialize circle cursor
    initCircleCursor() {
      const app = this.$refs.appRef;
      const outer = this.$refs.circleCursorOuter;
      const inner = this.$refs.circleCursorInner;

      app.addEventListener('mousemove', e => {
        // make the circles follow the cursor
        outer.setAttribute('style', `visibility: visible; top: ${e.clientY}px; left: ${e.clientX}px;`);
        inner.setAttribute('style', `visibility: visible; top: ${e.clientY}px; left: ${e.clientX}px;`);

        // add link hover style
        (e.target.closest('a') || e.target.closest('button') || e.target.closest('.link-hover')) ? inner.classList.add('cursor-link-hover') : inner.classList.remove('cursor-link-hover');
      });

      app.addEventListener('click', () => {
        // add pulse effect on click
        inner.classList.add('cursor-click-effect');
        setTimeout(() => inner.classList.remove('cursor-click-effect'), 200);
      });
    },

    // get a theme to use
    getAppTheme() {
      // get the saved theme from the localStorage
      const storageSavedTheme = localStorage.getItem('nafieSavedTheme');
    
      // Check to see if there a saved theme
      if (storageSavedTheme) {
        this.savedTheme = storageSavedTheme;
    
      } else {
        // So, try to get the browser default theme or make your own default
    
        // Check to see if Media-Queries are supported
        if (window.matchMedia) {
    
          // Check if the dark-mode Media-Query matches
          if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.savedTheme = 'dark_theme';
          } else { this.savedTheme = 'light_theme'; }
    
        } else {
          // Default (when Media-Queries are not supported)
          this.savedTheme = appTheme;
        }
      }
    
      // save the new theme in the localStorage
      localStorage.setItem('nafieSavedTheme', this.savedTheme);
    },

    // detect the theme changes
    changeAppTheme() {
      (this.savedTheme === 'light_theme') ? this.savedTheme = 'dark_theme' : this.savedTheme = 'light_theme';

      // save the new theme in the localStorage
      localStorage.setItem('nafieSavedTheme', this.savedTheme);
    },

    switchLanguage(){
      this.language = this.language === 'english' ? 'french' : 'english';
      console.log(this.language, this.getLanguageCode());
    },

    getLanguageCode(){
      return this.language == 'english' ? 'en' : 'fr';
    },

    // toggle nav menu
    toggleNavMenu() {
      this.isNavMenuOpen = !this.isNavMenuOpen;
      this.isNavMenuOpen ? this.openNavMenu() : this.closeNavMenu();
    },

    // open nav menu
    openNavMenu() {
      const bodyEl = document.getElementsByTagName('body')[0];

      this.isNavMenuOpen = true;

      bodyEl.setAttribute('style', 'overflow-y: hidden;');

      // set focus on nav menu
      this.$refs.headerNav.querySelector('.desktop-menu-content').focus();
    },

    // close nav menu
    closeNavMenu() {
      const bodyEl = document.getElementsByTagName('body')[0];

      this.isNavMenuOpen = false;

      bodyEl.removeAttribute('style');

      // set focus on nav menu toggle button
      this.$refs.navMenuToggleBtn.focus();
    },

    // nav menu tab trap
    navMenuTabTrap() {
      const nav = this.$refs.headerNav;
      const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]';
      let firstTabStop;
      let lastTabStop;
      let isFirstTabStop;
      let isLastTabStop;

      document.addEventListener('keyup', e => {
        if (nav.classList.contains('menu-open')) {
          // get first & last focusable elements in the side menu for the tab trap
          const visibleFocusableEls = [...nav.querySelectorAll(focusableElementsString)]
            .filter(el => window.getComputedStyle(el).getPropertyValue('visibility') !== 'hidden');
          firstTabStop = visibleFocusableEls[0];
          lastTabStop = visibleFocusableEls[visibleFocusableEls.length -1];

          if (e.code === 'Tab') {
            if (e.shiftKey) /* shift + tab */ {
              // if this is the first item, move to the last item
              isFirstTabStop && lastTabStop.focus();
            } else /* tab */ {
              // if this is the last item, go back to the first item
              isLastTabStop && firstTabStop.focus();
            }

            // close nav menu on Escape button press
          } else if (e.code === 'Escape') { this.toggleNavMenu(); }

          // get current active element
          const activeEl = document.activeElement;

          // check if last item or not
          isLastTabStop = (activeEl === lastTabStop) ? true : false;

          // check if first item or not
          isFirstTabStop = (activeEl === firstTabStop) ? true : false;
        }
      });
    },

    // apply pan effect hero image
    heroImgPanEffect() {
      const parent = this.$refs.heroSection;
      const layer1 = parent.querySelectorAll('.layer')[0];
      const layer2 = parent.querySelectorAll('.layer')[1];

      parent.addEventListener('mousemove', (e) => {
        const x = ((e.x - parent.getBoundingClientRect().x) / parent.offsetWidth) * 100;
        const y = ((e.y - parent.getBoundingClientRect().y) / parent.offsetHeight) * 100;

        parent.classList.add('parallax-animation');

        layer1.setAttribute('style', `transform-origin: ${x}vw ${y}vh;`);
        layer2.setAttribute('style', `transform-origin: ${x}vw ${y}vh;`);
      });
    },

    // scrolling options
    scrollingOptions() {
      const scrollPosition = window.pageYOffset;
    
      // check for current scroll position to minimize the header
      this.isHeaderBig = (scrollPosition >= this.startMinimizingHeaderAt) ? false : true;
    
      // check for current scroll position to toggle the header
      this.isHeaderHidden = ((scrollPosition > 100) && (scrollPosition > this.lastScrollPosition)) ? true : false;
      this.lastScrollPosition = scrollPosition;
    
      // check for current scroll position to show the scrollTop button
      this.isScrollTopBtnDisplayed = (scrollPosition >= this.startShowingScrollTopBtnAt) ? true : false;
    },

    // scroll to top
    scrollToTop() {
      window.scroll({ top: 0, behavior: 'smooth' });
    },

    // initialize VanillaTilt library in portfolio section
    initializeTilt() {
      VanillaTilt.init(this.$refs.portfolioItems.querySelectorAll('.portfolio-item'), {
        max: 8,
        speed: 400,
        glare: true,
        'max-glare': 0.3
      });
    },

    // get portfolio items
    getPortfolioItems() {
      const size = 7;

      // check if there is more works or not
      if ((this.portfolioItemsPage - 1) * size + size < this.allPortfolioItems.length) {
        this.portfolioItemsPage++;
        const itemsArr = this.allPortfolioItems.slice((this.portfolioItemsPage - 1) * size, this.portfolioItemsPage * size);
  
        this.portfolioItems.push(...itemsArr);
  
        // initialize VanillaTilt for new items
        setTimeout(() => this.portfolioItemsPage > 1 && this.initializeTilt(), 0);

      } else {

        // show the message "No more works" to the user
        this.setNotify({
          className: 'danger',
          msg: this.$refs.portfolioItems.getAttribute('data-no-more-works-msg'),
          time: 3000
        });
      }
    },

    // contact form validation
    contactFormValidation() {

      // contact form
      const contactForm = this.$refs.contactForm;

      // form controls
      const name        = contactForm.querySelector('input[name="name"]');
      const email       = contactForm.querySelector('input[name="email"]');
      const phone       = contactForm.querySelector('input[name="phone"]');
      const message     = contactForm.querySelector('textarea');

      // form validation status
      let errors = {
        name: { required: true, minLength: true },
        email: { required: true, invalid: true },
        phone: { invalid: true },
        message: { required: true }
      };

      /* --------------- */
      /* name validation */
      /* --------------- */

      // required validation
      if (name.value === '') {
        errors.name.required = true;
        this.setNotify({
          id: 'nameRequired',
          className: 'danger',
          msg: name.closest('.control').querySelector('.errors-msgs .required').value
        });

      } else {
        errors.name.required = false;
        this.dismissNotify('nameRequired');
      }

      // minlength validation
      if (name.value.length > 0 && name.value.length < name.getAttribute('minlength')) {
        errors.name.minLength = true;
        this.setNotify({
          id: 'nameMinLength',
          className: 'danger',
          msg: name.closest('.control').querySelector('.errors-msgs .minLength').value
        });

      } else {
        errors.name.minLength = false;
        this.dismissNotify('nameMinLength');
      }

      // toggle invalid errors & style classes
      if (Object.keys(errors.name).some(err => errors.name[err] === true)) {
        name.classList.remove('valid');
        name.classList.add('invalid');
      } else {
        name.classList.remove('invalid');
        name.classList.add('valid');
      }

      /* ---------------- */
      /* email validation */
      /* ---------------- */

      // required validation
      if (email.value === '') {
        errors.email.required = true;
        this.setNotify({
          id: 'emailRequired',
          className: 'danger',
          msg: email.closest('.control').querySelector('.errors-msgs .required').value
        });

      } else {
        errors.email.required = false;
        this.dismissNotify('emailRequired');
      }

      // email validation
      if (email.value.length > 0 && !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
        errors.email.invalid = true;
        this.setNotify({
          id: 'emailInvalid',
          className: 'danger',
          msg: email.closest('.control').querySelector('.errors-msgs .invalid').value
        });

      } else {
        errors.email.invalid = false;
        this.dismissNotify('emailInvalid');
      }

      // toggle invalid errors & style classes
      if (Object.keys(errors.email).some(err => errors.email[err] === true)) {
        email.classList.remove('valid');
        email.classList.add('invalid');
      } else {
        email.classList.remove('invalid');
        email.classList.add('valid');
      }

      /* ---------------- */
      /* phone validation */
      /* ---------------- */

      // phone validation
      if (phone.value.length > 0 && !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone.value)) {
        errors.phone.invalid = true;
        this.setNotify({
          id: 'phoneInvalid',
          className: 'danger',
          msg: phone.closest('.control').querySelector('.errors-msgs .invalid').value
        });

      } else {
        errors.phone.invalid = false;
        this.dismissNotify('phoneInvalid');
      }

      // toggle invalid errors & style classes
      if (Object.keys(errors.phone).some(err => errors.phone[err] === true)) {
        phone.classList.remove('valid');
        phone.classList.add('invalid');
      } else {
        phone.classList.remove('invalid');
        phone.classList.add('valid');
      }

      /* ------------------ */
      /* message validation */
      /* ------------------ */

      // required validation
      if (message.value === '') {
        errors.message.required = true;
        this.setNotify({
          id: 'messageRequired',
          className: 'danger',
          msg: message.closest('.control').querySelector('.errors-msgs .required').value
        });

      } else {
        errors.message.required = false;
        this.dismissNotify('messageRequired');
      }

      // toggle invalid errors & style classes
      if (Object.keys(errors.message).some(err => errors.message[err] === true)) {
        message.classList.remove('valid');
        message.classList.add('invalid');
      } else {
        message.classList.remove('invalid');
        message.classList.add('valid');
      }

      // send the message if the form is valid
      (!Object.values(errors).some(control => Object.values(control).some(Boolean))) && this.sendContactFormMessage(contactForm);
    },

    // send message from contact form
    sendContactFormMessage(form) {
      const url = form.getAttribute('action');
      const formData = new FormData(form);

      // start loading spinner
      this.startLoading();

      // send post request
      fetch(url, { method: 'POST', body: formData })
        .then(res => res.text())
        .then(data => {
          if (data === 'success') {
            // show success message
            this.setNotify({ className: 'success', msg: form.getAttribute('data-success-msg'), time: 5000 });

            // reset all form inputs
            form.reset();

            // remove inputs valid classes
            form.querySelectorAll('.valid').forEach(el => el.classList.remove('valid'));

          } else if (data === 'error') {
            // show error message
            this.setNotify({ className: 'danger', msg: form.getAttribute('data-err-msg'), time: 5000 });
          }

          // end loading spinner
          this.endLoading();

          console.log(data);
        })
        .catch(err => console.log(err));
    },

    // show messages by toast notifications
    setNotify({id, className, msg, time}) {
      const notify = {
        id: id || `${Date.now()}${this.notifications.length}`,
        className,
        msg,
        time
      };

      if (id) {
        (!this.notifications.some(e => e.id === id)) && this.notifications.push(notify);

      } else { this.notifications.push(notify); }

      // remove this notification from the array after (n) seconds
      time && setTimeout(() => this.dismissNotify(notify.id), time);
    },

    // dismiss the notifications
    dismissNotify(id) {
      const index = this.notifications.findIndex(notify => notify.id === id);
      (index > -1) && this.notifications.splice(index, 1);
    },

    // add ajax loading spinner
    startLoading() {
      this.ajaxLoading.push(true);
    },

    // remove ajax loading spinner
    endLoading() {
      this.ajaxLoading.pop();
    }
  },
  computed: {
    // flag to toggle ajax loading spinner
    isAjaxLoading() {
      return this.ajaxLoading.some(state => state === true);
    },

    // get the total years of experience
    experienceYears() {
      return new Date(new Date() - new Date(String(this.careerStartDate))).getFullYear() - 1970;
    },

    // split education items into chunks of 3 items
    educationChunks() {
      return [...Array(Math.ceil(this.education.items.length / 3))].map(() => this.education.items.splice(0, 3));
    },

    // split experience items into chunks of 3 items
    experienceChunks() {
      return [...Array(Math.ceil(this.experience.items.length / 3))].map(() => this.experience.items.splice(0, 3));
    },

    // get the total years of copyright
    copyrightDate() {
      const yearsDuration = new Date(new Date() - new Date(String(this.copyrightStartDate))).getFullYear() - 1970;
      return yearsDuration === 0 ? this.copyrightStartDate : `${this.copyrightStartDate} - ${this.copyrightStartDate + yearsDuration}`;
    }
  },
  directives: {
    // clone directive
    clone: {
      mounted(el) {
        el.parentNode.insertBefore(el.cloneNode(true), el.nextSibling);
      }
    },

    // add stagger delay to children elements
    staggerdelay: {
      mounted(el, binding) {
        [...el.children].forEach((child, i) => {
          child.setAttribute('style', `animation-delay: ${(i + 1) * (binding.value || 100)}ms`);
        });
      }
    },

    // tooltip directive
    tooltip: {
      mounted(el, binding) {
        el.classList.add('has-tooltip');
        el.insertAdjacentHTML('beforeend', `<div class="custom-tooltip custom-tooltip-${binding.value.dir}">${binding.value.text}</div>`);
      }
    }
  }

});

app.mount('#app');
