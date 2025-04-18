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
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Fullstack Web Development",
    icon: web,
  },
  {
    title: "Microservices Architecture Design",
    icon: backend,
  },
  {
    title: "Real-Time Data Integration & CDC",
    icon: mobile,
  },
  {
    title: "Responsive Frontend Engineering",
    icon: reactjs,
  },
  {
    title: "Data analysis and visualization",
    icon: web,
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
      "Built and maintained scalable backend systems using Spring Boot and microservices architecture.",
      "Implemented caching mechanisms with Redis to optimize performance and reduce database load.",
      "Integrated Kafka and ActiveMQ for reliable message-driven communication and event processing.",
      "Utilized Spring Cloud with Consul for service discovery and configuration management in distributed systems.",
      "Secured sensitive data using Vault for secrets management and secure storage.",
      "Designed and managed PostgreSQL databases to store and process business rules efficiently.",
      "Collaborated with cross-functional teams to ensure seamless integration of backend services with frontend components.",
      "Implemented dynamic and responsive designs using React to enhance user experience.",
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

const testimonials = [
 
];

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
          { name: "springboot", color: "green-text-gradient" },
          { name: "redux", color: "pink-text-gradient" },
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
        source_code_link: "",
      },
      {
        name: "Food Delivery",
        description:
          "Built with React, Django, Tailwind CSS, Redux, and PostgreSQL, offers a user-friendly experience with key features for seamless food ordering. Users can easily register, log in, and explore a dynamic menu with various categories. The platform supports secure online transactions and enables users to track the real-time status of their orders. Additionally, the system includes personalized user profiles for managing information and viewing order history. For administrators, an intuitive backend dashboard facilitates order management and menu updates.",
        tags: [
          { name: "react", color: "blue-text-gradient" },
          { name: "postgre", color: "green-text-gradient" },
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
    icon: redis,
    iconBg: "#E6DEDD",
    date: "2025",
    link: "https://www.act.com.et/",
    code: "",
    points: [
      "Implemented a Redis-based caching system to optimize resource-intensive operations like complex queries and procedural validations.",
      "Generated cache keys using SHA-256 hashing of input data to ensure unique and secure identification of cached results.",
      "Stored sensitive cache keys in Vault, enhancing security and compliance with data protection standards.",
      "Reduced database load by caching frequently accessed data, improving application response times in high-traffic scenarios.",
      "Designed cache invalidation strategies to maintain data consistency, balancing performance and accuracy for dynamic datasets.",
    ],
  },
  {
    title: "Business Logic Optimization in PostgreSQL",
    company_name: "Atlas Computer Technology",
    icon: postgre,
    iconBg: "#E6DEDD",
    date: "2024 - Present",
    link: "https://www.act.com.et/",
    code: "",
    points: [
      "Developed PL/pgSQL procedures to implement complex business rule validations, enforcing logic at the database level for efficiency.",
      "Optimized query performance using indexing strategies, reducing execution times for frequently accessed rules and datasets.",
      "Resolved race conditions in concurrent transactions through proper locking mechanisms, ensuring data integrity.",
      "Integrated database procedures with Spring Boot applications, enabling seamless rule evaluation across application and database layers.",
      "Designed reusable and maintainable rule logic to support evolving business requirements, minimizing code duplication and technical debt.",
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
