// ============================================================
// portfolioData.js — Centralized configuration for Arun Sarvesh R's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Arun Sarvesh R",
  firstName: "Arun Sarvesh",
  brandName: "Arun Sarvesh",
  title: "Computer Science & Engineering Student | Java • Python • DSA • AI",
  email: "iamarunsarvesh@gmail.com",
  location: "Trichy, Tamil Nadu",
  linkedin: "https://www.linkedin.com/in/arun-sarvesh-r-34252a373",
  github: "https://github.com/iamarunsarvesh12",
  emails: {
    primary: "iamarunsarvesh@gmail.com",
    secondary: "iamarunsarvesh@gmail.com",
  },
  summary:
    "Computer Science and Engineering student with hands-on experience in Python development, Java programming, Data Structures & Algorithms, AI-powered applications, SQL, and Git/GitHub. Actively solving DSA problems on LeetCode.",
  resumeUrl: "/Arun_Sarvesh_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/iamarunsarvesh12",
  linkedin: "https://www.linkedin.com/in/arun-sarvesh-r-34252a373",
  email: "mailto:iamarunsarvesh@gmail.com",
};

export const heroContent = {
  greeting: "Hi, I'm Arun Sarvesh",
  titleHighlight: "Computer Science & Engineering Student",
  subtitle:
    "Java • Python • DSA • AI | Building intelligent solutions, predictive models, and real-time AI systems.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:iamarunsarvesh@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Arun Sarvesh,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Arun_Sarvesh_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Computer Science and Engineering student at K. Ramakrishnan College of Engineering, Trichy (2024 – 2028) with a <span class="font-black text-black">CGPA of 8.14</span>. Experienced in Python development, Java programming, Data Structures & Algorithms (DSA), AI-powered applications, SQL, and Git/GitHub. Actively solving DSA problems on LeetCode.`,
  techStack: ["Java", "Python", "DSA", "SQL", "AI & Computer Vision"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn complex problems into scalable solutions",
  description:
    "I follow a structured methodology to build robust software pipelines, develop intelligent ML/CV models, and deploy desktop and web applications.",
  cards: [
    {
      number: "01",
      title: "Problem Analysis & DSA",
      text: "Designing efficient algorithms, analyzing space/time complexity, and applying robust data structures to solve core computational problems.",
    },
    {
      number: "02",
      title: "Software Architecture & OOP",
      text: "Structuring modular Java and Python applications using Object-Oriented Design principles and persistent file/database storage.",
    },
    {
      number: "03",
      title: "AI & Vision Engineering",
      text: "Integrating real-time object detection models like YOLOv8 and Google Gemini API for voice, vision, and natural language intelligence.",
    },
    {
      number: "04",
      title: "Full-Stack & GUI Deployment",
      text: "Building responsive desktop GUIs (Java Swing, CustomTkinter) and web interfaces backed by MySQL databases and REST APIs.",
    },
  ],
  endText: "Ready to innovate!",
};

// Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 92 },
        { name: "SQL", level: 88 },
        { name: "HTML & CSS", level: 85 },
        { name: "JavaScript", level: 82 }
      ]
    },
    {
      title: "Core & Problem Solving",
      skills: [
        { name: "Data Structures & Algorithms (DSA)", level: 88 },
        { name: "Object-Oriented Programming (OOP)", level: 90 },
        { name: "File Handling & Persistence", level: 85 },
        { name: "API Integration", level: 86 }
      ]
    },
    {
      title: "AI & Computer Vision",
      skills: [
        { name: "Machine Learning", level: 82 },
        { name: "Computer Vision", level: 85 },
        { name: "YOLOv8", level: 85 },
        { name: "Google Gemini API", level: 88 },
        { name: "Data Analytics", level: 84 }
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "MySQL & Workbench", level: 86 },
        { name: "Git & GitHub", level: 88 },
        { name: "VS Code", level: 90 }
      ]
    },
    {
      title: "UI & App Development",
      skills: [
        { name: "Java Swing", level: 86 },
        { name: "CustomTkinter (Python)", level: 88 },
        { name: "Python Desktop Apps", level: 90 },
        { name: "Responsive Web", level: 85 }
      ]
    }
  ]
};

// Creative & Technical Highlights Data
export const contentCreation = {
  badge: "Innovation & AI",
  heading: "AI Innovations & Engineering Projects",
  description: "Exploring cutting-edge AI models, vision-guided navigation systems, automated task scheduling, and desktop application engineering.",
  categories: [
    {
      title: "AI Task Manager",
      description: "Full-stack AI desktop app with OTP authentication, MySQL database, and Google Gemini goal-planning capabilities.",
      stats: "Gemini API & CustomTkinter",
      icon: "⚡"
    },
    {
      title: "Smart Blind Assistance",
      description: "AI wearable visual assistance system powered by YOLOv8 obstacle detection and voice-guided audio navigation.",
      stats: "2nd Place @ AKKADIANZ’26",
      icon: "👁️"
    },
    {
      title: "Library Management System",
      description: "Modular Java Swing desktop app featuring role-based book borrowing workflows and CSV text persistence.",
      stats: "Java Swing & OOP",
      icon: "📚"
    },
    {
      title: "Stock Portfolio Tracker",
      description: "Real-time investment calculation and asset valuation application built in Python CLI with text persistence.",
      stats: "Python CLI & Analytics",
      icon: "📈"
    }
  ]
};

// Leadership & Engagement Data (Co-Curricular section removed)
export const leadershipList = [
  {
    title: "Project Lead — Smart Blind Assistance System",
    description: "Spearheaded the development and architecture of an AI-powered visual assistance tool using YOLOv8 and voice navigation, earning 2nd Place at AKKADIANZ’26.",
    role: "Technical Lead",
    badge: "AI Innovation"
  },
  {
    title: "Open Source & GitHub Collaborations",
    description: "Building and contributing to Python, Java, SQL, and AI vision repositories for peer learning and community sharing.",
    role: "Open Source Contributor",
    badge: "Community"
  }
];

// Internships & Experience Data
export const internshipsList = [
  {
    organization: "Vedupskilling",
    role: "Data Science Intern",
    duration: "Jul 2026 - Present",
    skills: ["Data Analysis", "Predictive Modeling", "Data Cleaning & Preprocessing", "Data Visualization"],
    tech: ["Python", "SQL", "Pandas", "Scikit-Learn", "Matplotlib"]
  },
  {
    organization: "InAmigos Foundation",
    role: "AI Web Development Intern",
    duration: "Jul 2026",
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
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex DSA problems and computer vision tasks into modular, efficient code." },
  { name: "Analytical Thinking", icon: "📈", desc: "Optimizing algorithms, analyzing complexity, and extracting insights from structured data." },
  { name: "Team Collaboration", icon: "🤝", desc: "Working seamlessly with cross-functional project teams, mentors, and peer developers." },
  { name: "Communication", icon: "💬", desc: "Translating technical architecture, DSA concepts, and AI model results into clear documentation." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to master new frameworks, libraries, Java Swing tools, and AI vision models like YOLOv8." },
  { name: "Time Management", icon: "⏰", desc: "Balancing B.E. CSE coursework, internship deliverables, and hands-on software development." },
  { name: "Attention to Detail", icon: "🔍", desc: "Ensuring clean OOP code structure, precise database queries, and accurate model evaluation." },
  { name: "Continuous Learning", icon: "🚀", desc: "Constantly expanding expertise in Java, Python, Data Structures & Algorithms, and AI." }
];

// Selected Projects Data
export const projects = [
  {
    id: "ai-task-manager",
    number: "01",
    badge: "🚀 Flagship AI Desktop App",
    title: "AI Task Manager",
    description:
      "A full-stack AI desktop application built with Python, MySQL, Google Gemini API, and CustomTkinter. Features secure OTP authentication, automated task scheduling, relational database persistence, and intelligent Gemini goal-planning capabilities.",
    techTags: [
      "Python",
      "MySQL",
      "Google Gemini API",
      "CustomTkinter",
      "OTP Auth",
      "Desktop App",
      "Automated Scheduling"
    ],
    links: {
      github: "https://github.com/iamarunsarvesh12",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "smart-blind-assistance",
    number: "02",
    badge: "🏆 2nd Place – AKKADIANZ’26",
    title: "Smart Blind Assistance System",
    description:
      "An AI obstacle detection wearable system built with YOLOv8 object detection, computer vision, and real-time voice-guided navigation to empower visually impaired individuals with spatial awareness and audio feedback. Awarded 2nd Place at the AKKADIANZ’26 National Technical Symposium.",
    techTags: [
      "Python",
      "Computer Vision",
      "YOLOv8",
      "OpenCV",
      "Voice Navigation",
      "Text-to-Speech",
      "AI",
    ],
    links: {
      github: "https://github.com/iamarunsarvesh12",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "library-management-system",
    number: "03",
    badge: "☕ Java Swing Desktop System",
    title: "Library Management System",
    description:
      "An Object-Oriented Programming (OOP) modular GUI desktop application built using Java Swing and CSV text persistence. Implements role-based book indexing, student borrowing workflows, and automated transaction management.",
    techTags: ["Java", "Java Swing", "OOP", "CSV Persistence", "File Handling", "Desktop GUI"],
    links: {
      github: "https://github.com/iamarunsarvesh12",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "stock-portfolio-tracker",
    number: "04",
    badge: "🐍 Python CLI App",
    title: "Stock Portfolio Tracker",
    description:
      "A real-time investment calculation and asset tracking application built in Python CLI with text persistence. Calculates portfolio valuation metrics, tracks buy/sell transactions, and performs performance analytics.",
    techTags: ["Python", "CLI", "Text Persistence", "Investment Tracker", "Real-time Calculation"],
    links: {
      github: "https://github.com/iamarunsarvesh12",
      demo: null,
    },
    isFlagship: false,
  },
];

// Certifications & Achievements Data
export const certificates = {
  featured: [
    {
      name: "2nd Place – National Technical Symposium",
      issuer: "AKKADIANZ’26",
      icon: "🏆",
    },
    {
      name: "NPTEL Elite – Cloud Computing Fundamentals",
      issuer: "IIT Kharagpur",
      icon: "☁️",
    },
    {
      name: "Python Programming Certification",
      issuer: "HackerRank",
      icon: "🐍",
    },
    {
      name: "Basics of Python",
      issuer: "Cambridge / UniAthena",
      icon: "⚡",
    },
    {
      name: "Python Development Internship Certificate",
      issuer: "CodeAlpha",
      icon: "📜",
    },
  ],
  viewAllUrl: "https://www.linkedin.com/in/arun-sarvesh-r-34252a373",
};

// Education Data
export const education = {
  degree: "B.E. – Computer Science & Engineering",
  institution: "K. Ramakrishnan College of Engineering, Trichy",
  cgpa: "8.14",
  duration: "2024 – 2028",
  twelfth: "Higher Secondary (12th Science)",
  tenth: "Secondary School (10th)",
};

export const footerContent = {
  taglines: [
    "Computer Science & Engineering Student",
    "Java · Python · DSA · AI",
    "Building Scalable & Intelligent Applications",
  ],
  credential: "B.E. CSE (2024 - 2028) · CGPA: 8.14 · K. Ramakrishnan College of Engg, Trichy",
  copyright: `© ${new Date().getFullYear()} Arun Sarvesh R | Built with React & Vite`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};


