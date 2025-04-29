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
    title: "Fullstack Developer",
    company_name: "Atlas Computer Technology",
    icon: atlas,
    iconBg: "#E6DEDD",
    date: "2023 - Present",
    link: "https://www.act.com.et/",
    code: "",
    points: [
      "Designed and developed scalable backend systems using Spring Boot and microservices architecture, ensuring high availability and performance.",
      "Implemented PostgreSQL stored procedures to encapsulate complex business logic and rules, enhancing data processing efficiency and maintainability.",
      "Optimized system performance by integrating Redis caching mechanisms, significantly reducing database load and improving response times.",
      "Configured Apache Kafka and ActiveMQ for reliable, event-driven communication, enabling seamless message processing across distributed systems.",
      "Utilized Spring Cloud with Consul for service discovery and centralized configuration management, enhancing scalability and fault tolerance.",
      "Secured sensitive data and credentials using HashiCorp Vault for robust secrets management and secure storage.",
      "Designed and optimized PostgreSQL databases to efficiently store, manage, and process business rules and transactional data.",
      "Implemented Cron jobs for scheduling automated tasks, streamlining recurring processes and improving operational efficiency.",
      "Developed and enforced limit rules for mobile and USSD banking platforms using Spring Boot and PostgreSQL, ensuring compliance with regulatory and business requirements.",
      "Integrated SMS and email interfaces for a notification service, enabling timely and reliable communication with users.",
      "Built interactive reporting dashboards using Metabase and Apache Superset, enabling stakeholders to visualize and analyze key business metrics effectively.",
      "Integrated reporting tools with backend systems to provide real-time insights, supporting data-driven decision-making.",
      "Collaborated with cross-functional teams to integrate backend services with React-based frontend components, ensuring seamless functionality and user experience.",
      "Implemented dynamic and responsive UI designs using React, enhancing user engagement and accessibility across devices.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Intern at Anku ICT Consulting",
    icon: anku,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Oct 2022",
    link: "https://dreamblog-23ek.onrender.com/",
    code: "https://github.com/Muse-Semu/dreams-blog-deployed",
    points: [
      "I designed and implemented the frontend of the blog website, ensuring an appealing and responsive user interface through HTML for structure, CSS for styling, and JavaScript for interactive elements. ",
      "On the backend, I utilized Django, a powerful Python web framework, to manage server-side logic, routing, and data handling. ",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "PostgreSQL served as the database, providing a scalable and efficient storage solution for blog posts and related data.",
      "To make it accessible to the public, I deployed the application on the Render platform.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    category: "Professional Projects",
    contents: [
      {
        name: "Core Banking System",
        description:
          "Developed a robust core banking system at Atlas Computer Technology, leveraging Spring Boot and microservices. Implemented service discovery and health checks using Consul for resilient communication. Integrated secure authentication via Keycloak and designed a notification service with dynamic SMS/email templates. Created PostgreSQL procedures to enforce invoice cancellation limits per business rules. Built an API for financial system integration and implemented Change Data Capture using Debezium and Kafka Connect for real-time data replication and auditing.",
        tags: [
          { name: "springboot", color: "blue-text-gradient" },
          { name: "postgresql", color: "green-text-gradient" },
          { name: "kafka", color: "pink-text-gradient" },
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
          "Modernized a mobile banking system by migrating legacy JEE services to Spring Boot, enhancing performance and maintainability. Improved rule engines to manage banking transaction limits, ensuring compliance with financial regulations and efficient processing.",
        tags: [
          { name: "springboot", color: "blue-text-gradient" },
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
          { name: "postgreS", color: "green-text-gradient" },
          { name: "redux", color: "pink-text-gradient" },
          { name: "tailwind", color: "blue-text-gradient" },
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
];

const tech = [
  {
    title: "Backend & Integration",
    items: [
      { name: "Spring Boot", icon: springboot },
      { name: "Node.js", icon: nodejs },
      { name: "Django", icon: django },
      { name: "Apache Kafka", icon: kafka },
      { name: "Apache ActiveMQ", icon: activemq },
      { name: "Apache Camel", icon: apachecamel },
      { name: "Kafka Connect", icon: kafka },
      { name: "Debezium", icon: debezium },
      { name: "OpenTelemetry", icon: OpenTelemetry },
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
    title: "Change Data Capture Implementation",
    company_name: "Atlas Computer Technology",
    icon: debezium,
    iconBg: "#E6DEDD",
    date: "2025 ",
    link: "https://www.act.com.et/",
    code: "",
    points: [
      "Designed and implemented Change Data Capture (CDC) using Debezium and Kafka Connect to capture real-time database changes from PostgreSQL.",
      "Enabled auditing by streaming change events to a dedicated Kafka topic, tracking what changes occurred and when for compliance and monitoring.",
      "Facilitated database replication by duplicating data to a secondary database, ensuring data consistency for analytics and backup purposes.",
      "Configured topic-specific triggers to initiate processes like system restarts or custom workflows based on captured events, enhancing automation.",
      "Optimized CDC pipelines for low-latency streaming, ensuring minimal impact on source database performance while supporting critical use cases.",
    ],
  },
  {
    title: "Caching Management for Performance",
    company_name: "Atlas Computer Technology",
    icon: "redis",
    iconBg: "#E6DEDD",
    date: "2025",
    link: "https://www.act.com.et/",
    code: "",
    points: [
      "Implemented a Redis-based caching system to optimize resource-intensive operations like complex queries and procedural validations, achieving a 60% reduction in query response times.",
      "Generated cache keys using SHA-256 hashing of input data to ensure unique and secure identification of cached results, processing 10,000+ unique keys daily with zero collisions.",
      "Stored sensitive cache keys in Vault, enhancing security and compliance with data protection standards, securing 100% of sensitive cache data.",
      "Reduced database load by caching frequently accessed data, decreasing database CPU usage by 45% in high-traffic scenarios.",
      "Designed cache invalidation strategies to maintain data consistency, achieving 98% cache hit accuracy for dynamic datasets."
    ]
  },
  {
    title: "Business Logic Optimization in PostgreSQL",
    company_name: "Atlas Computer Technology",
    icon: "postgre",
    iconBg: "#E6DEDD",
    date: "2024 - Present",
    link: "https://www.act.com.et/",
    code: "",
    points: [
      "Developed PL/pgSQL procedures to implement complex business rule validations, reducing validation processing time by 50% compared to application-layer logic.",
      "Optimized query performance using indexing strategies, improving query execution times by 70% for frequently accessed rules and datasets.",
      "Resolved race conditions in concurrent transactions through proper locking mechanisms, ensuring 100% data integrity across 5,000 daily transactions.",
      "Integrated database procedures with Spring Boot applications, enabling seamless rule evaluation with a 30% reduction in application-to-database round-trip latency.",
      "Designed reusable and maintainable rule logic to support evolving business requirements, cutting development time for new rules by 40% and reducing technical debt."
    ]
  },

  {
    title: "Notification Service Implementation",
    company_name: "Atlas Computer Technology",
    icon: activemq,
    iconBg: "#E6DEDD",
    date: "2025",
    link: "https://www.act.com.et/",
    code: "",
    points: [
      "Designed and implemented a reliable notification service using Artemis ActiveMQ queues to manage and process message delivery.",
      "Integrated SMS and email interfaces with client APIs, enabling timely and consistent user notifications for critical updates.",
      "Developed error-handling mechanisms to maintain service reliability during network or API disruptions, minimizing notification failures.",
      "Collaborated with stakeholders to customize notification workflows, improving user engagement and operational efficiency.",
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
};
