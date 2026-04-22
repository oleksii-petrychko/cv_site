export interface Experience {
  company: string;
  roles: Role[];
}

export interface Role {
  title: string;
  period: string;
  description?: string;
}

export const resumeData: {
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
} = {
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
    { name: "Team Building & Mentoring", icon: "ph-users" },
    { name: "AI Integration in SDLC", icon: "ph-brain" }
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
  ]
};
