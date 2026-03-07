import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  django,
  mysql,
  postgre,
  python,
  java,
  food,
  st2,
  github,
  springboot,
  redis,
  kubernetes,
  kafka,
  apachecamel,
  apache,
  debezium,
  atlas,
  anku,
  activemq,
  postman,
  gitlab,
  junit,
  core1,
  core2,
  core3,
  core4,
  mobilebanking1,
  mobilebanking4,
  mobilebanking3,
  mobilebanking2,
  backoffice,
  core5,
  bargraph,
  api,
  microservice,
  coding,
  OpenTelemetry,
  keycloak,
  consul,
  vault,
  elasticsearch,
  ksks1,
  ksks2,
  ksks3,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },

  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "challenges",
    title: "Real-World Challenges",
  },

  {
    id: "tech",
    title: "Technologies & Tools",
  },
  {
    id: "feedbacks",
    title: "Testimonials",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Fullstack Web Development",
    icon: coding,
  },
  {
    title: "Microservices Architecture Design",
    icon: microservice,
  },
  {
    title: "Real-Time Data Integration & CDC",
    icon: debezium,
  },

  {
    title: "Data analysis and visualization",
    icon: bargraph,
  },

  {
    title: "API Development and Integration",
    icon: api,
  },
  {
    title: "DevOps",
    icon: docker,
  },
  {
    title: "Version Control and Collaboration",
    icon: gitlab,
  },
  {
    title: "Testing and Quality Assurance",
    icon: junit,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "PostgreSQL",
    icon: postgre,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Gitlab",
    icon: github,
  },
  {
    name: "Gitlab",
    icon: gitlab,
  },
];

const experiences = [
  {
    title: "Software Engineer | Team Lead",
    company_name: "Atlas Computer Technology",
    icon: atlas,
    iconBg: "#E6DEDD",
    date: "Oct 2025 - Present",
    link: "https://www.act.com.et/",
    code: "",
    userImpact: "Led critical development & production deployments",
    points: [
      "Led the development and production deployment of the Integrated Justice and Court Management System (IJCMS).",
      "Participated in building and deploying a Core Mobile Banking System, utilizing Docker and Kubernetes to run large-scale platforms in production.",
      "Implemented full observability and distributed tracing using OpenTelemetry for microservices.",
      "Configured Change Data Capture (CDC) utilizing Debezium and Kafka Connect for real-time data synchronization.",
      "Optimized PostgreSQL and Redis architectures to significantly cut response times in high-throughput systems.",
    ],
  },
  {
    title: "Mid level Fullstack Developer",
    company_name: "Atlas Computer Technology",
    icon: atlas,
    iconBg: "#E6DEDD",
    date: "Jun 2024 - Oct 2025",
    link: "https://www.act.com.et/",
    code: "",
    userImpact: "Scaled systems for 500,000+ monthly active users",
    points: [
      "Built scalable Spring Boot microservices, improving system uptime by 40%.",
      "Automated critical business processes with Cron jobs, streamlining operations for 200,000+ daily users.",
      "Secured sensitive application data using HashiCorp Vault, enhancing overall system reliability and compliance.",
      "Developed Metabase and Superset dashboards, enabling data-driven insights for 200+ internal stakeholders.",
      "Integrated SMS and email notification frameworks, improving user communication efficiency by 30%.",
    ],
  },
  {
    title: "Junior Full-stack Developer",
    company_name: "Atlas Computer Technology",
    icon: atlas,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Jun 2024",
    link: "https://www.act.com.et/",
    code: "",
    userImpact: "Improved frontend engagement and backend efficiency",
    points: [
      "Enhanced React-based UI components, boosting user engagement and responsiveness across mobile and web devices.",
      "Assisted in the optimization of baseline PostgreSQL queries, reducing initial load times for core application features.",
      "Collaborated with senior engineers to implement and test RESTful APIs for internal tools.",
    ],
  },
  {
    title: "Fullstack Developer Intern",
    company_name: "Anku ICT Consulting",
    icon: anku,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Oct 2022",
    link: "https://dreamblog-23ek.onrender.com/",
    code: "https://github.com/Muse-Semu/dreams-blog-deployed",
    userImpact: "Reached 10,000+ monthly visitors",
    points: [
      "Built responsive blog frontend using HTML, CSS, and JavaScript.",
      "Developed Django backend with PostgreSQL, improving data handling efficiency.",
      "Deployed application on Render, ",
    ],
  },
];

const testimonials = [
  // "I had the privilege of leading a team where Muse Semu was a core member for over a year, primarily focused on backend development. Throughout our time working together, Muse consistently demonstrated exceptional growth and technical capability, quickly establishing himself as a highly reliable and skilled developer. His attention to detail is outstanding, and he approaches every task with precision and thoughtfulness. Muse has a proactive mindset he's thorough in gathering requirements early on, often asking well structured and insightful questions that help clarify objectives and avoid ambiguity. He’s also excellent at identifying potential issues ahead of time and either resolving them independently or raising them for discussion before they escalate. His research skills are top notch; he frequently explores new technologies and proposes innovative solutions that improve performance and efficiency. What stands out most is his ability to write clean, maintainable, and efficient code, paired with a solid understanding of backend architecture and best practices. Muse was a key contributor to our team’s success, and his dedication, problem solving ability, and collaborative spirit made him a pleasure to work with. Muse’s dedication, problem solving ability, and collaborative spirit made him an invaluable part of our team, and his contributions had a lasting positive impact on our projects."
];

const projects = [
  {
    category: "Professional Projects",
    contents: [
      {
        name: "Integrated Justice and Court Management System (IJCMS)",
        description:
          "Served as Team Lead for the IJCMS project, driving both development and production deployment. Orchestrated a microservices architecture using Spring Boot and managed complex deployment strategies with Docker and Kubernetes to ensure high availability and reliability for legal and judicial operations.",
        tags: [
          { name: "springboot", color: "blue-text-gradient" },
          { name: "kubernetes", color: "blue-text-gradient" },
          { name: "docker", color: "green-text-gradient" },
          { name: "postgresql", color: "pink-text-gradient" },
        ],
        image: ksks1,
        images: [ksks2, ksks3],
        source_code_link: "",
      },
      {
        name: "Core Banking System",
        description:
          "Developed a robust core banking system at Atlas Computer Technology, leveraging Spring Boot and microservices. Implemented service discovery and health checks using Consul for resilient communication. Integrated secure authentication via Keycloak and designed a notification service with dynamic SMS/email templates. Created PostgreSQL procedures to enforce complex business rules.",
        tags: [
          { name: "springboot", color: "blue-text-gradient" },
          { name: "postgresql", color: "green-text-gradient" },
          { name: "debezium", color: "blue-text-gradient" },
          { name: "consul", color: "green-text-gradient" },
          { name: "keycloak", color: "pink-text-gradient" },
        ],
        image: core5,
        images: [core2, core3, core4],
        source_code_link: "",
      },
      {
        name: "Mobile Banking System",
        description:
          "Participated in building and deploying a large-scale Core Mobile Banking System. Modernized legacy JEE services by migrating them to Spring Boot to enhance performance and maintainability. Led the production deployment strategy utilizing Docker and Kubernetes, ensuring the platform runs reliably at scale for end users.",
        tags: [
          { name: "springboot", color: "blue-text-gradient" },
          { name: "kubernetes", color: "blue-text-gradient" },
          { name: "docker", color: "green-text-gradient" },
          { name: "java", color: "green-text-gradient" },
        ],
        image: mobilebanking1,
        images: [mobilebanking2, mobilebanking3, mobilebanking4],
        source_code_link: "",
      },
      {
        name: "Backoffice System",
        description:
          "Built a backoffice system with interactive React UI components for customer interactions and message template management. Implemented dynamic, responsive designs to enhance user experience. Integrated the frontend with Spring Boot microservices for seamless data flow, ensuring maintainability and scalability with modular React components.",
        tags: [
          { name: "react", color: "blue-text-gradient" },
          {
            name: "springboot",
            color:
              "grehttps://github.com/Muse-Semu/e-commerce-microserviceen-text-gradient",
          },
          { name: "java", color: "green-text-gradient" },
          { name: "redux", color: "pink-text-gradient" },
          { name: "tailwind", color: "blue-text-gradient" },
          { name: "shadcn", color: "green-text-gradient" },
        ],
        image: backoffice,
        images: [mobilebanking2, mobilebanking3, mobilebanking4],
        source_code_link: "",
      },
    ],
  },

  {
    category: "Personal Projects",
    contents: [
      {
        name: "E-commerce Microservices System",
        description:
          "Designed a scalable e-commerce platform using Spring Boot and microservices architecture. Implemented Eureka Server for service discovery and Kafka for real-time event streaming. Utilized MongoDB for flexible NoSQL storage and PostgreSQL for relational data, ensuring high availability, fault tolerance, and efficient processing for high-traffic transactions.",
        tags: [
          { name: "springboot", color: "blue-text-gradient" },
          { name: "kafka", color: "green-text-gradient" },
          { name: "mongodb", color: "pink-text-gradient" },
          { name: "postgresql", color: "blue-text-gradient" },
          { name: "eureka", color: "green-text-gradient" },
        ],
        image: carrent,
        images: [carrent, tripguide, shopify],
        source_code_link:
          "https://github.com/Muse-Semu/e-commerce-microservice",
      },
      {
        name: "Food Delivery",
        description:
          "Built with React, Django, Tailwind CSS, Redux, and PostgreSQL, offers a user-friendly experience with key features for seamless food ordering. Users can easily register, log in, and explore a dynamic menu with various categories. The platform supports secure online transactions and enables users to track the real-time status of their orders. Additionally, the system includes personalized user profiles for managing information and viewing order history. For administrators, an intuitive backend dashboard facilitates order management and menu updates.",
        tags: [
          { name: "react", color: "blue-text-gradient" },
          { name: "django", color: "green-text-gradient" },
          { name: "tailwind", color: "pink-text-gradient" },
          { name: "javascript", color: "blue-text-gradient" },
          { name: "python", color: "green-text-gradient" },
          { name: "postgres", color: "white-text-gradient" },
          { name: "redux", color: "pink-text-gradient" },
        ],
        image: food,
        images: [food, creator, tesla],
        source_code_link:
          "https://github.com/Muse-Semu/django-react-final_project",
      },
      {
        name: "Student Record Management",
        description:
          "Student Management System is a comprehensive desktop application that combines the power of Java and JavaFX for a robust frontend, SceneBuilder for intuitive UI design, and MySQL for efficient data management. The incorporation of analytics tools elevates the system, providing administrators with valuable insights through clear and visually appealing charts. This application stands as a testament to your skillful integration of various technologies to create a powerful and user-friendly solution for student and department management.",
        tags: [
          { name: "java", color: "blue-text-gradient" },
          { name: "javaFX", color: "green-text-gradient" },
          { name: "MySQL", color: "pink-text-gradient" },
        ],
        image: st2,
        images: [st2, mobile, jobit],
        source_code_link:
          "https://github.com/Muse-Semu/javafx_student_record_system/tree/javafx/",
      },
    ],
  },

  {
    category: "Freelance Projects",
    contents: [
      {
        name: "Banking Management System",
        description:
          "Developed a secure banking management platform using Django, Django REST Framework, React, and Redux. Implemented role-based access control (RBAC) with granular permissions, ensuring secure user access. Integrated email notification services for user actions, improving communication efficiency by 25%. Optimized PostgreSQL database for high-performance transaction processing, reducing query times by 40%. Built a responsive UI with Tailwind CSS, enhancing user experience across 10,000+ monthly active users.",
        tags: [
          { name: "django", color: "green-text-gradient" },
          { name: "DiangoRestframework(DRF)", color: "blue-text-gradient" },
          { name: "react", color: "blue-text-gradient" },
          { name: "redux", color: "pink-text-gradient" },
          { name: "postgresql", color: "green-text-gradient" },
          { name: "tailwind", color: "blue-text-gradient" },
        ],
        image: ksks1,
        images: [ksks2, ksks3],
        source_code_link: "",
      },
    ],
  },
];

const tech = [
  {
    title: "Backend Development",
    items: [
      { name: "Spring Boot", icon: springboot },
      { name: "Node.js", icon: nodejs },
      { name: "Django", icon: django },
    ],
  },
  {
    title: "Event Streaming & Messaging",
    items: [
      { name: "Apache Kafka", icon: kafka },
      { name: "Apache ActiveMQ", icon: activemq },
      { name: "Apache Camel", icon: apachecamel },
      { name: "Kafka Connect", icon: kafka },
      { name: "Debezium", icon: debezium },
    ],
  },
  {
    title: "Security & Service Management",
    items: [
      { name: "OpenTelemetry", icon: OpenTelemetry },
      { name: "Keycloak", icon: keycloak },
      { name: "Consul", icon: consul },
      { name: "HashiCorp Vault", icon: vault },
      { name: "Elasticsearch", icon: elasticsearch },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      { name: "React JS", icon: reactjs },
      { name: "Redux Toolkit", icon: redux },
      { name: "Tailwind CSS", icon: tailwind },
    ],
  },
  {
    title: "Database & Caching",
    items: [
      { name: "PostgreSQL", icon: postgre },
      { name: "MySQL", icon: mysql },
      { name: "MongoDB", icon: mongodb },
      { name: "Redis", icon: redis },
    ],
  },
  {
    title: "Programming & Web Development",
    items: [
      { name: "Java", icon: java },
      { name: "JavaScript", icon: javascript },
      { name: "TypeScript", icon: typescript },
      { name: "Python", icon: python },
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
    ],
  },
  {
    title: "Testing & Quality Assurance",
    items: [
      { name: "JUnit", icon: junit },
      { name: "Mockito", icon: java },
      { name: "Postman", icon: postman },
    ],
  },
  {
    title: "DevOps & Version Control",
    items: [
      { name: "Docker", icon: docker },
      { name: "Kubernetes", icon: kubernetes },
      { name: "Git", icon: git },
      { name: "GitHub", icon: github },
      { name: "GitLab", icon: gitlab },
    ],
  },
];

const achievements = [
  {
        title: "Large-Scale Production Deployments",
        company_name: "Atlas Computer Technology",
        icon: kubernetes,
        iconBg: "#E6DEDD",
        date: "2024 - Present",
        link: "",
        code: "",
        points: [
          "Optimized CI/CD pipelines using Jenkins, converting raw code to Native Images for Docker. Fully automated Kubernetes deployments, significantly reducing human effort and cycle time.",
          "Ran large-scale platforms in production utilizing Docker and Kubernetes, ensuring zero-downtime deployments.",
          "Orchestrated the production deployment for the Integrated Justice and Court Management System (IJCMS) as Team Lead.",
          "Deployed a mission-critical Core Mobile Banking System to Kubernetes clusters.",
          "Implemented full system observability and distributed tracing using OpenTelemetry to monitor container health and isolate performance bottlenecks.",
        ],
      },
      {
        title: "Change Data Capture Implementation",
        company_name: "Atlas Computer Technology",
        icon: debezium,
        iconBg: "#E6DEDD",
        date: "2025 ",
        link: "",
        code: "",
        points: [
          "Designed and implemented Change Data Capture (CDC) using Debezium and Kafka Connect to capture real-time database changes from PostgreSQL.",
          "Enabled auditing by streaming change events to a dedicated Kafka topic, tracking what changes occurred and when for compliance and monitoring.",
          "Facilitated database replication by duplicating data to a secondary database, ensuring data consistency for analytics and backup purposes.",
          "Configured topic-specific triggers to initiate processes like system restarts or custom workflows based on captured events, enhancing automation.",
        ],
      },
  {
    title: "Caching Management for Performance",
    company_name: "Atlas Computer Technology",
    icon: "redis",
    iconBg: "#E6DEDD",
    date: "2025",
    link: "",
    code: "",
    points: [
      "Resolved critical database bottleneck by replacing expensive stored procedure validations.",
      "Implemented a dynamic Groovy script engine leveraging Spring Boot application beans to execute complex validation rules.",
      "Stored and executed the Groovy scripts directly from the cache to achieve sub-millisecond validation times, falling back to the database only on cache miss.",
      "Implemented Redisson Distributed Locks to completely eliminate race conditions occurring when concurrent requests accessed the same resource.",
      "Generated cache keys using SHA-256 hashing of input data to ensure unique and secure identification of cached results, processing 10,000+ unique keys daily.",
      "Reduced database load by caching frequently accessed data, decreasing database CPU usage by 45% in high-traffic scenarios.",
    ],
  },
  {
    title: "Business Logic Optimization in PostgreSQL",
    company_name: "Atlas Computer Technology",
    icon: "postgre",
    iconBg: "#E6DEDD",
    date: "2024 - Present",
    link: "",
    code: "",
    points: [
      "Developed PL/pgSQL procedures to implement complex business rule validations, reducing validation processing time by 50% compared to application-layer logic.",
      "Optimized query performance using indexing strategies, improving query execution times by 70% for frequently accessed rules and datasets.",
      "Resolved race conditions in concurrent transactions through proper locking mechanisms, ensuring 100% data integrity across 5,000 daily transactions.",
      "Integrated database procedures with Spring Boot applications, enabling seamless rule evaluation with a 30% reduction in application-to-database round-trip latency.",
      "Designed reusable and maintainable rule logic to support evolving business requirements, cutting development time for new rules by 40% and reducing technical debt.",
    ],
  },
  {
    title: "Notification Service Implementation",
    company_name: "Atlas Computer Technology",
    icon: activemq,
    iconBg: "#E6DEDD",
    date: "2025",
    link: "",
    code: "",
    points: [
      "Designed and implemented a reliable notification service using Artemis ActiveMQ queues to manage and process message delivery.",
      "Integrated SMS and email interfaces with client APIs, enabling timely and consistent user notifications for critical updates.",
      "Developed error-handling mechanisms to maintain service reliability during network or API disruptions, minimizing notification failures.",
      "Collaborated with stakeholders to customize notification workflows, improving user engagement and operational efficiency.",
    ],
  },
];

const realWorldChallenges = [
  {
    title: "Race Conditions in Concurrent Transactions",
    company_name: "Atlas Computer Technology",
    icon: redis,
    iconBg: "#E6DEDD",
    date: "Issue & Resolution",
    link: "",
    code: "",
    points: [
      "The Challenge: High-throughput identical requests colliding on identical targets caused severe race conditions and data corruption risks.",
      "The Solution: Engineered robust distributed locking utilizing Redisson.",
      "The Impact: Completely eradicated race conditions by ensuring only one thread can acquire the lock for a specific resource, ensuring 100% data integrity across concurrent requests.",
    ],
  },
  {
    title: "Performance Bottlenecks via Database Validations",
    company_name: "Atlas Computer Technology",
    icon: postgre,
    iconBg: "#E6DEDD",
    date: "Issue & Resolution",
    link: "",
    code: "",
    points: [
      "The Challenge: Expensive PL/pgSQL database stored procedures for complex business rules were causing massive CPU spikes and slow response times.",
      "The Solution: Implemented a dynamic Groovy script engine leveraging Spring Boot application beans to execute validation rules natively.",
      "The Impact: Stored and executed the scripts directly from the cache to achieve sub-millisecond validation times. Fell back to the database only on a cache miss, resulting in massive efficiency gains and a 45% reduction in database CPU usage.",
    ],
  },
  {
    title: "Inefficient & Error-Prone Deployments",
    company_name: "Atlas Computer Technology",
    icon: docker,
    iconBg: "#E6DEDD",
    date: "Issue & Resolution",
    link: "",
    code: "",
    points: [
      "The Challenge: Deployment processes for large-scale platforms were manual, slow, and prone to human error, risking downtime.",
      "The Solution: Optimized CI/CD pipelines using Jenkins and converted raw code to Native Images for Docker.",
      "The Impact: Fully automated Kubernetes deployments. Significantly reduced human effort, eliminated deployment errors, and ensured zero-downtime upgrades for mission-critical core banking systems.",
    ],
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  tech,
  achievements,
  realWorldChallenges,
};
