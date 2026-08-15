// ============================================================
// portfolioData.js — Centralized configuration for Arun Sarvesh R's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Arun Sarvesh R",
  firstName: "Arun Sarvesh",
  brandName: "Arun Sarvesh",
  title: "Data Science Enthusiast | Python • SQL • AI & Computer Vision",
  location: "Srirangam, Tamil Nadu, India",
  phone: "+91 8667794520",
  emails: {
    primary: "iamarunsarvesh@gmail.com",
    secondary: "iamarunsarvesh@gmail.com",
  },
  summary:
    "Passionate Data Science Enthusiast and B.E. Computer Science student at K. Ramakrishnan College of Engineering (2024 - 2028). Skilled in Python, SQL, Machine Learning, Computer Vision, and building AI-driven real-time applications.",
  resumeUrl: "/Arun_Sarvesh_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/iamarunsarvesh12",
  linkedin: "https://www.linkedin.com/in/arun-sarvesh-r-34252a373",
  instagram: "https://instagram.com",
};

export const heroContent = {
  greeting: "Hi, I'm Arun Sarvesh",
  titleHighlight: "Data Science Enthusiast",
  subtitle:
    "Python • SQL • AI & Computer Vision | Building intelligent solutions, predictive models, and real-time AI systems.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:iamarunsarvesh@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Arun Sarvesh,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Arun_Sarvesh_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Arun Sarvesh R</span>, a Data Science Enthusiast pursuing B.E. Computer Science at K. Ramakrishnan College of Engineering (2024 - 2028). Dedicated to leveraging Python, SQL, Machine Learning, and Computer Vision to solve real-world engineering challenges.`,
  techStack: ["Python", "SQL", "AI & Computer Vision"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn complex data into intelligent solutions",
  description:
    "I follow a structured, data-driven methodology to process raw data, train robust models, and deploy scalable computer vision and AI applications.",
  cards: [
    {
      number: "01",
      title: "Data Preparation",
      text: "Gathering, cleaning, and preprocessing structured and unstructured data to build high-quality model training pipelines.",
    },
    {
      number: "02",
      title: "Model Architecture",
      text: "Designing and tuning Machine Learning algorithms and Neural Network architectures tailored to specific problem domains.",
    },
    {
      number: "03",
      title: "Computer Vision & AI",
      text: "Integrating real-time object detection models like YOLOv8 and NLTK for voice, image, and text intelligence.",
    },
    {
      number: "04",
      title: "Deployment & Optimization",
      text: "Rigorous testing, API integration, database management with SQL, and deploying end-to-end applications.",
    },
  ],
  endText: "Ready to innovate!",
};

// Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming & Querying",
      skills: [
        { name: "Python", level: 92 },
        { name: "SQL", level: 88 },
        { name: "C / C++ Basics", level: 75 }
      ]
    },
    {
      title: "AI & Computer Vision",
      skills: [
        { name: "Computer Vision", level: 85 },
        { name: "YOLOv8", level: 85 },
        { name: "Machine Learning", level: 82 }
      ]
    },
    {
      title: "Libraries & Frameworks",
      skills: [
        { name: "Scikit-Learn", level: 80 },
        { name: "NLTK", level: 78 },
        { name: "OpenCV", level: 82 },
        { name: "Pandas & NumPy", level: 85 }
      ]
    },
    {
      title: "Databases & Storage",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "Relational Databases", level: 82 },
        { name: "Data Warehousing", level: 78 }
      ]
    },
    {
      title: "Developer Tools",
      skills: [
        { name: "Git & GitHub", level: 88 },
        { name: "VS Code", level: 90 },
        { name: "Jupyter Notebook", level: 88 },
        { name: "Postman", level: 80 }
      ]
    },
    {
      title: "Computer Science Concepts",
      skills: [
        { name: "Data Structures", level: 85 },
        { name: "Algorithms", level: 82 },
        { name: "DBMS", level: 86 },
        { name: "OOP Principles", level: 88 },
        { name: "Software Engineering", level: 84 }
      ]
    }
  ]
};

// Creative & Technical Highlights Data
export const contentCreation = {
  badge: "Innovation & AI",
  heading: "Computer Vision & AI Innovations",
  description: "Beyond core data analysis, I explore cutting-edge AI models, voice-guided navigation systems, and smart automation.",
  categories: [
    {
      title: "Assistive AI Systems",
      description: "Building computer vision pipelines with YOLOv8 for spatial awareness and real-time obstacle detection.",
      stats: "Computer Vision",
      icon: "👁️"
    },
    {
      title: "Data Analytics & SQL",
      description: "Designing optimized database schemas, writing complex queries, and extracting actionable metrics.",
      stats: "Database Engineering",
      icon: "📊"
    },
    {
      title: "Machine Learning Models",
      description: "Developing predictive algorithms using Scikit-Learn, Pandas, and structured machine learning workflows.",
      stats: "Predictive AI",
      icon: "🧠"
    },
    {
      title: "Python Automation & APIs",
      description: "Integrating financial APIs, text-to-speech tools, and interactive chatbot solutions.",
      stats: "Python Stack",
      icon: "⚡"
    }
  ]
};

// Leadership Data
export const leadershipList = [
  {
    title: "Project Lead — Smart Blind Assistance System",
    description: "Spearheaded the development and architecture of an AI-powered visual assistance tool using YOLOv8 and voice navigation.",
    role: "Technical Lead",
    badge: "AI Innovation"
  },
  {
    title: "Computer Science Department Activities",
    description: "Active participant in technical symposiums, coding hackathons, and departmental workshops at K. Ramakrishnan College of Engineering.",
    role: "Department Student Member",
    badge: "Co-Curricular"
  },
  {
    title: "Open Source & GitHub Collaborations",
    description: "Building and contributing to Python, SQL, and Machine Learning repositories for peer learning and community sharing.",
    role: "Open Source Contributor",
    badge: "Community"
  }
];

// Internships Data
export const internshipsList = [
  {
    organization: "Vedupskilling",
    role: "Data Science Intern",
    duration: "July 2026 - Present",
    skills: ["Data Analysis", "Predictive Modeling", "Data Cleaning & Preprocessing", "Data Visualization"],
    tech: ["Python", "SQL", "Pandas", "Scikit-Learn", "Matplotlib"]
  },
  {
    organization: "InAmigos Foundation",
    role: "AI Web Development Intern",
    duration: "July 2026",
    skills: ["AI Web Integration", "Frontend Development", "API Connectivity", "UI Responsiveness"],
    tech: ["Python", "JavaScript", "HTML5", "CSS3", "REST APIs"]
  },
  {
    organization: "CodeAlpha",
    role: "Python Programming Intern",
    duration: "Jan 2026 - Feb 2026",
    skills: ["Python Scripting", "Algorithm Implementation", "Data Handling", "Code Optimization"],
    tech: ["Python", "Git", "Data Structures", "OOP"]
  }
];

// Soft Skills Data
export const softSkillsList = [
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex data and computer vision tasks into modular, efficient code." },
  { name: "Analytical Thinking", icon: "📈", desc: "Extracting insights from data and optimizing algorithms for maximum accuracy." },
  { name: "Team Collaboration", icon: "🤝", desc: "Working seamlessly with cross-functional project teams and peer developers." },
  { name: "Communication", icon: "💬", desc: "Translating technical data findings and AI model results into clear insights." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to master new frameworks, libraries, and AI vision tools like YOLOv8." },
  { name: "Time Management", icon: "⏰", desc: "Balancing B.E. coursework, internship deliverables, and hands-on AI projects." },
  { name: "Attention to Detail", icon: "🔍", desc: "Ensuring clean data pipelines, precise query logic, and accurate model evaluation." },
  { name: "Continuous Learning", icon: "🚀", desc: "Constantly expanding knowledge in Python, SQL, Machine Learning, and Computer Vision." }
];

// Projects Data
export const projects = [
  {
    id: "smart-blind-assistance",
    number: "01",
    badge: "🚀 Flagship AI Project",
    title: "Smart Blind Assistance System",
    description:
      "An assistive vision system powered by YOLOv8 object detection, Python, and real-time voice-guided navigation to empower visually impaired individuals with spatial awareness, obstacle identification, and audio feedback.",
    techTags: [
      "YOLOv8",
      "Python",
      "Computer Vision",
      "OpenCV",
      "Voice Navigation",
      "Text-to-Speech",
      "AI",
    ],
    links: {
      github: "https://github.com",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "task-management-system",
    number: "02",
    badge: null,
    title: "Task Management System",
    description:
      "A robust task management application built with Python and MySQL. Features secure user authentication, priority tracking, deadline reminders, and an intuitive relational schema for efficient productivity workflows.",
    techTags: ["Python", "MySQL", "Authentication", "Database Design", "CRUD", "SQL"],
    links: {
      github: "https://github.com",
    },
    isFlagship: false,
  },
  {
    id: "stock-portfolio-tracker",
    number: "03",
    badge: null,
    title: "Stock Portfolio Tracker & Chatbot",
    description:
      "A real-time financial tracking application and conversational AI chatbot built in Python. Integrates market data APIs to compute portfolio metrics, perform live valuation, and answer user queries using natural language processing.",
    techTags: ["Python", "Real-time API", "NLTK", "Financial Data", "Chatbot", "AI"],
    links: {
      github: "https://github.com",
    },
    isFlagship: false,
  },
];

// Certifications Data
export const certificates = {
  featured: [
    {
      name: "SQL Certification",
      issuer: "Simplilearn",
      icon: "📊",
    },
    {
      name: "Data Science & Python",
      issuer: "Scaler",
      icon: "🐍",
    },
    {
      name: "Basics of Python",
      issuer: "Online Learning",
      icon: "⚡",
    },
  ],
  viewAllUrl:
    "https://www.linkedin.com/in/arun-sarvesh-r-34252a373",
};

// Education Data
export const education = {
  degree: "B.E. – Computer Science & Engineering",
  institution: "K. Ramakrishnan College of Engineering",
  cgpa: "Pursuing",
  graduation: "2028",
  twelfth: "Higher Secondary (12th Science)",
  tenth: "Secondary School (10th)",
};

export const footerContent = {
  taglines: [
    "Data Science & Artificial Intelligence",
    "Python · SQL · Computer Vision",
    "Smart Assistance & Predictive Systems",
  ],
  credential: "B.E. CSE · K. Ramakrishnan College of Engg (2024 - 2028)",
  copyright: `© ${new Date().getFullYear()} Arun Sarvesh R | Built with React & Vite`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};

