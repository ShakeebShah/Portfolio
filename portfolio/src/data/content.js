export const profile = {
  name: "Muhammad Shakeeb Khalid",
  role: "Full Stack MERN Developer",
  subrole: "Software Engineer",
  location: "Islamabad, Pakistan",
  email: "syedshakeebkhalid@gmail.com",
  phone: "+92 334 9494939",
  linkedin: "https://linkedin.com/in/m-shakeeb-shah-767314316",
  github: "https://github.com/ShakeebShah",
  summary:
    "Software Engineering graduate and Full Stack MERN Developer with hands-on experience designing and building production-style web applications using React.js, Node.js, Express.js, and MongoDB. Delivered three full-stack platforms — a real-time community marketplace, a multi-vendor service marketplace, and a vendor management & quotation system — implementing secure JWT authentication, role-based access control, RESTful APIs, and responsive UI/UX.",
};

export const stack = [
  { letter: "M", name: "MongoDB", detail: "Schema design & aggregation" },
  { letter: "E", name: "Express.js", detail: "REST APIs & middleware" },
  { letter: "R", name: "React.js", detail: "Component-driven UI" },
  { letter: "N", name: "Node.js", detail: "Server runtime & services" },
];

export const skills = [
  {
    group: "Frontend",
    items: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express.js", "RESTful API Design", "PHP"],
  },
  {
    group: "Databases",
    items: ["MongoDB", "SQL Server", "SQLite", "Query Optimization", "Schema Design"],
  },
  {
    group: "Security & Auth",
    items: ["JWT Authentication", "Role-Based Access Control", "bcrypt Hashing", "Input Validation"],
  },
  {
    group: "Languages",
    items: ["JavaScript", "Python", "C++", "Java", "C#"],
  },
  {
    group: "Tools & Platforms",
    items: ["Git & GitHub", "Postman", "Cloudinary", "VS Code", "Android Studio", "Unity"],
  },
  {
    group: "Other",
    items: ["n8n Workflow Automation", "Requirements Engineering", "Software Architecture", "Agile/SDLC"],
  },
];

export const experience = [
  {
    role: "Full Stack MERN Developer Intern",
    org: "Teyzix Core",
    period: "Jun 2026 – Jul 2026",
    location: "Islamabad, Pakistan",
    points: [
      "Completed three full-stack MERN projects within a structured, industry-based internship program, each delivered on schedule and evaluated against production-quality standards.",
      "Engineered secure JWT authentication and role-based access control across multiple user roles on every project.",
      "Built RESTful APIs, real-time features, and admin tooling spanning marketplaces and a procurement platform.",
    ],
  },
  {
    role: "Web Development Intern",
    org: "National Assembly of Pakistan",
    period: "2026",
    location: "Islamabad, Pakistan",
    points: [
      "Assisted in developing and maintaining internal web applications using PHP, improving the reliability of existing modules.",
      "Implemented feature updates in coordination with senior developers, following structured change-management practices.",
    ],
  },
  {
    role: "Web Development Intern",
    org: "VVT Globals",
    period: "2024",
    location: "Remote",
    points: [
      "Developed and shipped front-end and back-end features for client web applications using React.js and Node.js.",
      "Collaborated with the development team on API integration and UI implementation within an Agile workflow.",
    ],
  },
];

export const education = [
  { degree: "B.S. Software Engineering", school: "Capital University of Science and Technology, Islamabad", year: "2024" },
  { degree: "FSc Pre-Engineering", school: "Indus Group of Colleges, Islamabad", year: "2019" },
  { degree: "Matriculation (Science)", school: "Chanab Group of Colleges, Islamabad", year: "2017" },
];

export const projects = [
  {
    id: "vendorhub",
    name: "VendorHub",
    tagline: "Vendor Management & Quotation System",
    description:
      "A centralized platform for organizations to manage vendor records, raise quotation requests, and compare vendor proposals side by side — built to accelerate procurement decisions.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API"],
    points: [
      "Built RESTful CRUD APIs for vendor and quotation management with search, filtering, and status tracking.",
      "Designed a quotation comparison module that highlights the most cost-effective vendor proposal.",
      "Implemented a dashboard summarizing vendor counts and quotation activity, with full form validation.",
    ],
    accent: "blue",
    cover: "/images/Dashboard.png",
    images: [
      { src: "/images/Dashboard.png", label: "Dashboard overview" },
      { src: "/images/Vendors.png", label: "Vendor directory" },
      { src: "/images/Qutotions.png", label: "Quotations list" },
      { src: "/images/Compare_Qutotion.png", label: "Side-by-side quote comparison" },
      { src: "/images/Add_Vendor.png", label: "Add vendor form" },
    ],
  },
  {
    id: "communo",
    name: "Communo",
    tagline: "Smart Community Service & Local Marketplace",
    description:
      "A full-stack community marketplace enabling users to list products and services, manage bookings, and communicate in real time — with dedicated customer, provider, and admin experiences.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Socket.io", "Cloudinary", "Tailwind CSS"],
    points: [
      "Engineered secure JWT authentication and role-based access control across customer, provider, and admin roles.",
      "Built real-time messaging with Socket.io, an in-app notification system, and a full booking status workflow.",
      "Designed an admin panel for user management, listing approvals, content moderation, and platform analytics.",
    ],
    accent: "mint",
    cover: "/images/Main_Layout_1.png",
    images: [
      { src: "/images/Main_Layout_1.png", label: "Landing hero" },
      { src: "/images/Admin_Product_Marketplace.png", label: "Product marketplace" },
      { src: "/images/User_Dashboard_1.png", label: "User dashboard" },
      { src: "/images/Admin_Dashboard_1.png", label: "Admin dashboard" },
      { src: "/images/User_Chat_Feature.png", label: "Real-time chat" },
      { src: "/images/Login_Form.png", label: "Authentication" },
    ],
  },
  {
    id: "multivendor",
    name: "Multi-Vendor Service Marketplace",
    tagline: "Fiverr / Upwork-style freelance platform",
    description:
      "A marketplace connecting customers with freelancers and service providers, with a five-stage project workflow from request to delivery.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "bcrypt", "Cloudinary"],
    points: [
      "Implemented JWT authentication, RBAC, and secure bcrypt password hashing across Customer, Provider, and Admin roles.",
      "Created service-provider profiles with skills, portfolio, and pricing, plus category-based search and filtering.",
      "Delivered a five-stage project-tracking workflow (Pending → Accepted → In Progress → Completed → Delivered) with reviews.",
    ],
    accent: "blue",
    cover: null,
    images: [],
  },
];
