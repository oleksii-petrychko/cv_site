export interface Experience {
  company: string;
  roles: Role[];
}

export interface Role {
  title: string;
  period: string;
  description?: string;
}

export interface ResumeData {
  personal: {
    name: string;
    title: string;
    summary: string;
    contact: {
      email: string;
      phone: string;
      linkedin: string;
      location: string;
    };
  };
  skills: { name: string, icon: string }[];
  experience: Experience[];
  education: {
    institution: string;
    degree: string;
    period: string;
  }[];
  ui: {
    nav: {
      home: string;
      experience: string;
      skills: string;
      contact: string;
    };
    hero: {
      subtitle: string;
      explore: string;
      getInTouch: string;
    };
    sections: {
      experience: string;
      skills: string;
      skillsSubtitle: string;
      contact: string;
      contactSubtitle: string;
    };
    common: {
      rights: string;
      copied: string;
      notFound: string;
      goHome: string;
    };
  };
}

export const resumeData: Record<string, ResumeData> = {
  en: {
    personal: {
      name: "Oleksii Petrychko",
      title: "Engineering Manager / Solution Architect",
      summary: "Forward-thinking Engineering Manager and Solution Architect with over 15 years of experience in FinTech, Esports, and Media. Proven track record of designing scalable, high-performance architectures, pioneering AI integration across the entire SDLC, and leading complex cloud transformations. Passionate about aligning technical strategy with business goals to deliver robust and innovative products.",
      contact: {
        email: "oleksii.petrychko@gmail.com",
        phone: "+380951058218",
        linkedin: "https://www.linkedin.com/in/oleksii-petrychko-45051933",
        location: "Kyiv, Ukraine"
      }
    },
    skills: [
      { name: "Solution Architecture", icon: "ph-blueprint" },
      { name: "AI Integration in SDLC", icon: "ph-brain" },
      { name: "Engineering Leadership", icon: "ph-crown" },
      { name: "Microservices & Cloud", icon: "ph-cloud" },
      { name: "Cloud Infrastructure (AWS/GCP)", icon: "ph-hard-drives" },
      { name: "Kubernetes & Docker", icon: "ph-package" },
      { name: "High-Load Systems", icon: "ph-rocket" },
      { name: "CI/CD Pipelines", icon: "ph-arrows-clockwise" },
      { name: "Test Automation Frameworks", icon: "ph-robot" },
      { name: "QA Architecture", icon: "ph-check-square-offset" },
      { name: "Release Management", icon: "ph-rocket-launch" },
      { name: "Technical Delivery", icon: "ph-truck" },
      { name: "Agile & Scrum Methodologies", icon: "ph-kanban" },
      { name: "FinOps Strategy", icon: "ph-chart-line-up" },
      { name: "Budgeting & Cost Optimization", icon: "ph-piggy-bank" },
      { name: "Team Building & Mentoring", icon: "ph-users" }
    ],
    experience: [
      {
        company: "PrivatBank",
        roles: [
          { 
            title: "Domain Architect Lead – Retail Channels", 
            period: "April 2026 - Present",
            description: "Spearheading the architectural vision for retail banking channels. Designing resilient microservices, leading the migration to modern cloud infrastructure, and driving AI integration across the entire SDLC to boost engineering productivity and code quality."
          },
          { 
            title: "Chief Manager in IT", 
            period: "December 2024 - April 2026",
            description: "Directed a large engineering department. Optimized CI/CD pipelines, streamlined cross-team collaboration, and improved overall system reliability and deployment frequency across the retail banking ecosystem."
          }
        ]
      },
      {
        company: "Tango",
        roles: [
          { 
            title: "Head of QA", 
            period: "January 2024 - November 2024",
            description: "Defined and implemented the global quality assurance strategy. Built AI-augmented automated testing frameworks and integrated continuous testing into the deployment pipeline, significantly reducing time-to-market."
          }
        ]
      },
      {
        company: "Self-employed",
        roles: [
          { 
            title: "Finance Operations (FinOps Consulting)", 
            period: "October 2022 - January 2024",
            description: "Consulted tech companies on optimizing cloud expenditures and streamlining financial operations in IT. Conducted infrastructure audits and implemented cost-saving architectures without sacrificing performance."
          }
        ]
      },
      {
        company: "WePlay Holding",
        roles: [
          { 
            title: "Head Of Engineering", 
            period: "December 2021 - March 2023",
            description: "Led the engineering division for a global esports media platform. Scaled the technical team and architecture to handle millions of concurrent users during major tournaments, ensuring seamless broadcasting and interactive features."
          },
          { 
            title: "Technical Delivery Manager", 
            period: "July 2019 - December 2021",
            description: "Managed the end-to-to technical delivery of complex tournament platforms. Bridged the gap between product requirements and engineering execution."
          },
          { 
            title: "QA Manager", 
            period: "July 2018 - July 2019",
            description: "Established comprehensive QA processes for esports products. Shifted the testing culture towards automation, improving release stability and predictability."
          }
        ]
      },
      {
        company: "Playtech",
        roles: [
          { 
            title: "QA Technical Lead", 
            period: "February 2016 - July 2018",
            description: "Managed technical QA teams for high-load gaming platforms. Engineered complex automation frameworks and load-testing strategies to guarantee zero downtime during peak gaming events."
          }
        ]
      },
      {
        company: "B2B Soft",
        roles: [
          { 
            title: "QA Lead", 
            period: "October 2014 - February 2016",
            description: "Led the quality assurance efforts for enterprise retail management software. Standardized testing protocols, introduced API testing, and mentored a team of QA engineers."
          }
        ]
      },
      {
        company: "RS Print",
        roles: [
          { 
            title: "Automation Engineer", 
            period: "July 2014 - October 2014",
            description: "Developed automated test scripts for internal production tools, reducing manual testing effort by over 70% and increasing test coverage."
          }
        ]
      },
      {
        company: "Ciklum",
        roles: [
          { 
            title: "Senior Quality Engineer", 
            period: "October 2011 - July 2014",
            description: "Collaborated with international clients to deliver high-quality software solutions. Established best practices for agile testing methodologies and continuous integration."
          }
        ]
      },
      {
        company: "MAXXmarketing GmbH",
        roles: [
          { 
            title: "Project Manager", 
            period: "September 2010 - October 2011",
            description: "Coordinated digital projects from conception to delivery. Managed timelines, resources, and client expectations to ensure successful and on-time launches."
          }
        ]
      },
      {
        company: "SecurStar GmbH",
        roles: [
          { 
            title: "QA engineer", 
            period: "July 2007 - September 2010",
            description: "Performed comprehensive security and functional testing for data encryption software, ensuring strict compliance with security standards."
          }
        ]
      },
      {
        company: "Balaccom",
        roles: [
          { 
            title: "System administrator", 
            period: "March 2006 - September 2006",
            description: "Maintained IT infrastructure, network security, and hardware for the organization, ensuring high availability of internal services."
          }
        ]
      }
    ],
    education: [
      {
        institution: "Chernivtsi Trade and Economics Institute",
        degree: "Master, Economic Cybernetics",
        period: "2003 - 2008"
      }
    ],
    ui: {
      nav: {
        home: "Home",
        experience: "Experience",
        skills: "Skills",
        contact: "Contact"
      },
      hero: {
        subtitle: "& Solution Architect",
        explore: "Explore Experience",
        getInTouch: "Get In Touch"
      },
      sections: {
        experience: "Professional Experience",
        skills: "Core Skills & Expertise",
        skillsSubtitle: "A comprehensive overview of my technical stack, architectural knowledge, and leadership capabilities.",
        contact: "Let's Connect",
        contactSubtitle: "Open to new opportunities and interesting projects."
      },
      common: {
        rights: "All rights reserved.",
        copied: "Copied!",
        notFound: "404 - Page Not Found",
        goHome: "Go back Home"
      }
    }
  },
  uk: {
    personal: {
      name: "Олексій Петричко",
      title: "Engineering Manager / Solution Architect",
      summary: "Прогресивний Engineering Manager та Solution Architect з понад 15-річним досвідом у сферах FinTech, Esports та Media. Маю успішний досвід проектування масштабованих високонавантажених архітектур, впровадження ШІ (AI) в усі етапи SDLC та керівництва комплексними хмарними трансформаціями. Прагну поєднувати технічну стратегію з бізнес-цілями для створення надійних та інноваційних продуктів.",
      contact: {
        email: "oleksii.petrychko@gmail.com",
        phone: "+380951058218",
        linkedin: "https://www.linkedin.com/in/oleksii-petrychko-45051933",
        location: "Київ, Україна"
      }
    },
    skills: [
      { name: "Архітектура рішень (Solution Architecture)", icon: "ph-blueprint" },
      { name: "Інтеграція ШІ в SDLC", icon: "ph-brain" },
      { name: "Технічне лідерство", icon: "ph-crown" },
      { name: "Мікросервіси та хмарні технології", icon: "ph-cloud" },
      { name: "Хмарна інфраструктура (AWS/GCP)", icon: "ph-hard-drives" },
      { name: "Kubernetes & Docker", icon: "ph-package" },
      { name: "Високонавантажені системи", icon: "ph-rocket" },
      { name: "CI/CD Pipelines", icon: "ph-arrows-clockwise" },
      { name: "Фреймворки автоматизації тестування", icon: "ph-robot" },
      { name: "QA архітектура", icon: "ph-check-square-offset" },
      { name: "Управління релізами", icon: "ph-rocket-launch" },
      { name: "Технічна доставка (Technical Delivery)", icon: "ph-truck" },
      { name: "Методології Agile & Scrum", icon: "ph-kanban" },
      { name: "Стратегія FinOps", icon: "ph-chart-line-up" },
      { name: "Бюджетування та оптимізація витрат", icon: "ph-piggy-bank" },
      { name: "Побудова команд та менторство", icon: "ph-users" }
    ],
    experience: [
      {
        company: "ПриватБанк",
        roles: [
          { 
            title: "Domain Architect Lead – Retail Channels", 
            period: "Квітень 2026 - Теперішній час",
            description: "Очолюю архітектурне бачення каналів роздрібного банкінгу. Проектую стійкі мікросервіси, керую міграцією на сучасну хмарну інфраструктуру та впроваджую інтеграцію ШІ в SDLC для підвищення продуктивності розробки та якості коду."
          },
          { 
            title: "Chief Manager in IT", 
            period: "Грудень 2024 - Квітень 2026",
            description: "Керував великим інженерним департаментом. Оптимізував CI/CD пайплайни, налагодив міжкомандну взаємодію та підвищив надійність систем і частоту деплоїв в екосистемі роздрібного банкінгу."
          }
        ]
      },
      {
        company: "Tango",
        roles: [
          { 
            title: "Head of QA", 
            period: "Січень 2024 - Листопад 2024",
            description: "Визначив та впровадив глобальну стратегію забезпечення якості. Побудував фреймворки автоматизованого тестування з використанням ШІ та інтегрував безперервне тестування в пайплайн розгортання, що значно скоротило час виходу продукту на ринок."
          }
        ]
      },
      {
        company: "Self-employed",
        roles: [
          { 
            title: "Finance Operations (FinOps Consulting)", 
            period: "Жовтень 2022 - Січень 2024",
            description: "Консультував технологічні компанії щодо оптимізації витрат на хмарні сервіси та впорядкування фінансових операцій в ІТ. Проводив аудити інфраструктури та впроваджував економічно вигідні архітектури без втрати продуктивності."
          }
        ]
      },
      {
        company: "WePlay Holding",
        roles: [
          { 
            title: "Head Of Engineering", 
            period: "Грудень 2021 - Березень 2023",
            description: "Очолював інженерний підрозділ глобальної медіа-платформи для кіберспорту. Масштабував технічну команду та архітектуру для підтримки мільйонів одночасних користувачів під час великих турнірів, забезпечуючи стабільну трансляцію та інтерактивні функції."
          },
          { 
            title: "Technical Delivery Manager", 
            period: "Липень 2019 - Грудень 2021",
            description: "Керував повноцінною технічною доставкою складних турнірних платформ. Забезпечував зв'язок між вимогами продукту та інженерним виконанням."
          },
          { 
            title: "QA Manager", 
            period: "Липень 2018 - Липень 2019",
            description: "Встановив комплексні QA-процеси для кіберспортивних продуктів. Змінив культуру тестування у бік автоматизації, покращивши стабільність та передбачуваність релізів."
          }
        ]
      },
      {
        company: "Playtech",
        roles: [
          { 
            title: "QA Technical Lead", 
            period: "Лютий 2016 - Липень 2018",
            description: "Керував технічними QA-командами для високонавантажених ігрових платформ. Проектував складні фреймворки автоматизації та стратегії навантажувального тестування для гарантії безперебійної роботи під час пікових ігрових подій."
          }
        ]
      },
      {
        company: "B2B Soft",
        roles: [
          { 
            title: "QA Lead", 
            period: "Жовтень 2014 - Лютий 2016",
            description: "Очолював зусилля із забезпечення якості корпоративного ПЗ для управління роздрібною торгівлею. Стандартизував протоколи тестування, впровадив тестування API та займався менторством команди QA-інженерів."
          }
        ]
      },
      {
        company: "RS Print",
        roles: [
          { 
            title: "Automation Engineer", 
            period: "Липень 2014 - Жовтень 2014",
            description: "Розробляв автоматизовані скрипти тестування для внутрішніх виробничих інструментів, що скоротило ручне тестування на понад 70% та збільшило покриття тестами."
          }
        ]
      },
      {
        company: "Ciklum",
        roles: [
          { 
            title: "Senior Quality Engineer", 
            period: "Жовтень 2011 - Липень 2014",
            description: "Співпрацював з міжнародними клієнтами для надання високоякісних програмних рішень. Впровадив найкращі практики гнучких методологій тестування та безперервної інтеграції."
          }
        ]
      },
      {
        company: "MAXXmarketing GmbH",
        roles: [
          { 
            title: "Project Manager", 
            period: "Вересень 2010 - Жовтень 2011",
            description: "Координував цифрові проекти від концепції до реалізації. Керував термінами, ресурсами та очікуваннями клієнтів для успішного та вчасного запуску."
          }
        ]
      },
      {
        company: "SecurStar GmbH",
        roles: [
          { 
            title: "QA engineer", 
            period: "Липень 2007 - Вересень 2010",
            description: "Виконував комплексне тестування безпеки та функціональності ПЗ для шифрування даних, забезпечуючи сувору відповідність стандартам безпеки."
          }
        ]
      },
      {
        company: "Balaccom",
        roles: [
          { 
            title: "System administrator", 
            period: "Березень 2006 - Вересень 2006",
            description: "Підтримував ІТ-інфраструктуру, мережеву безпеку та обладнання організації, забезпечуючи високу доступність внутрішніх сервісів."
          }
        ]
      }
    ],
    education: [
      {
        institution: "Чернівецький торговельно-економічний інститут",
        degree: "Магістр, Економічна кібернетика",
        period: "2003 - 2008"
      }
    ],
    ui: {
      nav: {
        home: "Головна",
        experience: "Досвід",
        skills: "Навички",
        contact: "Контакти"
      },
      hero: {
        subtitle: "& Solution Architect",
        explore: "Мій досвід",
        getInTouch: "Зв'язатися"
      },
      sections: {
        experience: "Професійний досвід",
        skills: "Ключові навички та експертиза",
        skillsSubtitle: "Комплексний огляд мого технологічного стеку, архітектурних знань та лідерських якостей.",
        contact: "Давайте спілкуватися",
        contactSubtitle: "Відкритий до нових можливостей та цікавих проектів."
      },
      common: {
        rights: "Усі права захищені.",
        copied: "Скопійовано!",
        notFound: "404 - Сторінку не знайдено",
        goHome: "Повернутися на головну"
      }
    }
  }
};
