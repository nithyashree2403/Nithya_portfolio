import { Injectable, signal } from '@angular/core';
import { Project, WorkExperience, Certification } from '../models/project.model';
import { SkillCategory } from '../models/skill.model';

export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
  grade: string;
  gradeLabel: string;
  badge: string;
  details: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  profile = {
    name: 'Nithya Shree V.S',
    title: 'Software Engineer — AI / Applied Machine Learning',
    email: 'nithyashree2403@gmail.com',
    phone: '+353 852193644',
    location: 'Dublin, Ireland',
    ucdGpa: '3.51 / 4.2',
    dsuCgpa: '9.12 / 10',
    summary: 'Software Engineer with a strong computer science foundation (BTech, CGPA 9.12) and an MSc in Information Systems in progress at UCD (GPA 3.51/4.2). Experience spans the full software and ML lifecycle — systems design, programming languages, testing, code reviews, model training, evaluation, and deployment — across Bosch, Continental, and Webstack Academy, working alongside talented people to support stakeholders, customers, and business operations. Proficient in Python, Java, C, JavaScript, Angular, and Flask; quick to pick up languages such as Scala, Ruby, or Go given strong fundamentals. Skilled in REST/HTTP API design, independent research, and writing clearly for stakeholders.'
  };

  private projectsSignal = signal<Project[]>([
    {
      id: 'nasa-space-apps',
      title: 'NASA Space Apps Challenge 2025',
      subtitle: 'AI Analytics Dashboards & Knowledge-Graph Retrieval System',
      category: 'ai',
      categoryLabel: 'AI & Data Science',
      date: '2025',
      description: 'Spearheaded a team designing AI analytics dashboards processing 600+ scientific datasets; implemented semantic search via text embeddings and token-sequence processing.',
      longDescription: 'Spearheaded a team designing AI analytics dashboards processing 600+ scientific datasets; implemented semantic search via text embeddings and token-sequence processing for intelligent data discovery. Developed knowledge-graph exploration tools for navigating complex scientific relationships, supported by independent research into graph algorithms.',
      architectureHighlights: [
        'Spearheaded a team designing AI analytics dashboards processing 600+ scientific datasets.',
        'Implemented semantic search via text embeddings and token-sequence processing for intelligent data discovery.',
        'Developed knowledge-graph exploration tools for navigating complex scientific relationships.'
      ],
      metrics: [
        { value: '600+', label: 'Scientific Datasets' },
        { value: 'Vector Space', label: 'Semantic Search' },
        { value: 'Knowledge Graph', label: 'Data Discovery' }
      ],
      tags: ['Python', 'AI Analytics', 'Semantic Search', 'Vector Embeddings', 'Knowledge Graphs', 'Graph Algorithms'],
      featured: true,
      githubUrl: 'https://github.com/nithyashree2403/nasa-space-apps-analytics',
      liveUrl: 'https://github.com/nithyashree2403/nasa-space-apps-analytics',
      badge: 'NASA Challenge 2025',
      icon: 'globe',
      gradient: 'from-sky-500/20 via-indigo-500/20 to-purple-500/20'
    },
    {
      id: 'bosch-demand-forecasting',
      title: 'AI Supply-Demand Forecasting Platform',
      subtitle: 'LSTM-CNN & XGBoost Engine with Angular, Flask APIs & SQLite',
      category: 'fullstack',
      categoryLabel: 'Full-Stack & AI',
      date: 'Jan 2025 – May 2025',
      description: 'Led systems design and architecture for an AI platform forecasting supply-demand trends (LSTM-CNN/XGBoost), supporting internal stakeholders, customer service, and revenue-driving operations at Bosch.',
      longDescription: 'Led systems design and architecture for an AI platform forecasting supply-demand trends (LSTM-CNN/XGBoost), supporting internal stakeholders, customer service, and revenue-driving operations. Built and tested production software (Angular/HTML/CSS frontend, Flask middle tier, SQLite backend), developing RESTful, HTTP-based API routing across environments. Enabled low-latency, real-time forecasting and risk categorisation; tracked accuracy metrics and incorporated feedback from stakeholders and team members through iterative testing.',
      architectureHighlights: [
        'Led systems design and architecture for AI platform forecasting supply-demand trends (LSTM-CNN/XGBoost).',
        'Built and tested production software (Angular/HTML/CSS frontend, Flask middle tier, SQLite backend) with RESTful API routing.',
        'Enabled low-latency, real-time forecasting and risk categorisation; tracked accuracy metrics through iterative testing.'
      ],
      metrics: [
        { value: 'LSTM-CNN/XGBoost', label: 'Forecasting Architecture' },
        { value: 'Angular + Flask', label: 'Production Software' },
        { value: 'Bosch Global', label: 'Software Engineer' }
      ],
      tags: ['Python', 'LSTM-CNN', 'XGBoost', 'Angular', 'Flask APIs', 'SQLite', 'RESTful APIs', 'Iterative Testing'],
      featured: true,
      githubUrl: 'https://github.com/nithyashree2403/ai-demand-forecasting',
      liveUrl: 'https://github.com/nithyashree2403/ai-demand-forecasting',
      badge: 'Bosch Global Software',
      icon: 'trending-up',
      gradient: 'from-cyan-500/20 via-sky-500/20 to-emerald-500/20'
    },
    {
      id: 'continental-mlops-pipelines',
      title: 'Data & MLOps Pipeline & Governance Suite',
      subtitle: 'MLflow Tracking, Kubeflow Pipelines, Model Versioning & Safety Monitoring',
      category: 'mlops',
      categoryLabel: 'MLOps Infrastructure',
      date: 'Jul 2024 – Oct 2024',
      description: 'Implemented experiment tracking, model versioning, deployment monitoring, and safety monitoring using MLflow; documented deployment programs using Kubeflow Pipelines at Continental.',
      longDescription: 'Implemented experiment tracking, model versioning, deployment monitoring, and safety monitoring using MLflow, improving test coverage to reduce defects and support steady growth. Collaborated with cross-functional engineering teams and people across the organisation on technical design and code reviews; documented deployment programs using Kubeflow Pipelines. Contributed across the ML lifecycle — preprocessing, training, evaluation, and deployment — supporting client teams and customers, with feedback and guidance from mentors and peers.',
      architectureHighlights: [
        'Implemented experiment tracking, model versioning, deployment & safety monitoring using MLflow.',
        'Collaborated with cross-functional engineering teams on technical design and code reviews.',
        'Documented deployment programs using Kubeflow Pipelines.',
        'Contributed across ML lifecycle: preprocessing, training, evaluation, and deployment.'
      ],
      metrics: [
        { value: 'MLflow & Kubeflow', label: 'Model Versioning & Pipelines' },
        { value: 'ML Lifecycle', label: 'Prep, Train, Eval, Deploy' },
        { value: 'Continental', label: 'Software Engineer' }
      ],
      tags: ['MLflow', 'Kubeflow Pipelines', 'Python', 'Model Versioning', 'Safety Monitoring', 'Code Reviews'],
      featured: true,
      githubUrl: 'https://github.com/nithyashree2403/mlops-kubeflow-mlflow',
      liveUrl: 'https://github.com/nithyashree2403/mlops-kubeflow-mlflow',
      badge: 'Continental MLOps',
      icon: 'cpu',
      gradient: 'from-indigo-500/20 via-sky-500/20 to-cyan-500/20'
    },
    {
      id: 'homely-hub-mern',
      title: 'Homely Hub – Property Renting Platform',
      subtitle: 'Full-Stack MERN Architecture with REST/HTTP API Routing & Database Access',
      category: 'fullstack',
      categoryLabel: 'Full-Stack Web',
      date: 'Jan 2024 – Apr 2024',
      description: 'Engineered prototypes and developed "Homely Hub," a property-renting platform, under guidance from mentors using the MERN stack.',
      longDescription: 'Engineered prototypes and developed "Homely Hub," a property-renting platform, under guidance from mentors using the MERN stack. Delivered clean, maintainable, well-tested code across UI design, REST/HTTP API routing, and database access, with regular code reviews and support from mentors.',
      architectureHighlights: [
        'Engineered prototypes and developed "Homely Hub" property-renting platform using the MERN stack.',
        'Delivered clean, maintainable, well-tested code across UI design and REST/HTTP API routing.',
        'Built database access layer with regular code reviews and mentor support.'
      ],
      metrics: [
        { value: 'MERN Stack', label: 'MongoDB Express React Node' },
        { value: 'REST/HTTP API', label: 'Routing & DB Access' },
        { value: 'Webstack Academy', label: 'Software Engineer' }
      ],
      tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'MERN', 'REST/HTTP APIs', 'UI Design'],
      featured: true,
      githubUrl: 'https://github.com/nithyashree2403/homely-hub-mern',
      liveUrl: 'https://github.com/nithyashree2403/homely-hub-mern',
      badge: 'Webstack Academy',
      icon: 'home',
      gradient: 'from-emerald-500/20 via-teal-500/20 to-sky-500/20'
    },
    {
      id: 'breast-cancer-detection',
      title: 'Breast Cancer Detection Engine',
      subtitle: 'Comparative Evaluation of VGG16, VGG19, ResNet & InceptionV3',
      category: 'ai',
      categoryLabel: 'Deep Learning & Vision',
      date: 'March 2024',
      description: 'Directed data augmentation and model evaluation (60% of project) using VGG16, VGG19, ResNet, and InceptionV3 pre-trained models; VGG16 demonstrated superior performance.',
      longDescription: 'Directed data augmentation and model evaluation (60% of project) using VGG16, VGG19, ResNet, and InceptionV3 pre-trained models; VGG16 demonstrated superior performance, a key 10% contribution to project success.',
      architectureHighlights: [
        'Directed data augmentation and model evaluation (60% of project).',
        'Evaluated VGG16, VGG19, ResNet, and InceptionV3 pre-trained models.',
        'Demonstrated VGG16 superior performance, contributing 10% to overall project success.'
      ],
      metrics: [
        { value: '60%', label: 'Project Leadership' },
        { value: 'VGG16', label: 'Top Model Accuracy' },
        { value: '4 Vision', label: 'Pre-trained Models' }
      ],
      tags: ['Python', 'VGG16', 'VGG19', 'ResNet', 'InceptionV3', 'OpenCV', 'PyTorch', 'TensorFlow'],
      featured: false,
      githubUrl: 'https://github.com/nithyashree2403/breast-cancer-detection-dl',
      liveUrl: 'https://github.com/nithyashree2403/breast-cancer-detection-dl',
      badge: 'Medical AI',
      icon: 'activity',
      gradient: 'from-rose-500/20 via-purple-500/20 to-indigo-500/20'
    },
    {
      id: 'smart-voting-auth',
      title: 'Multilayer Authentication for Smart Voting System',
      subtitle: 'Biometric Face Recognition, Live Spoofing Detection & OTP Access Control',
      category: 'fullstack',
      categoryLabel: 'Full-Stack Security',
      date: 'Sep – Dec 2023',
      description: 'Implemented multi-level authentication combining face recognition, live spoofing detection, and OTP verification; optimised MySQL performance for secure credential matching and data storage.',
      longDescription: 'Implemented multi-level authentication combining face recognition, live spoofing detection, and OTP verification; optimised MySQL performance for secure credential matching and data storage.',
      architectureHighlights: [
        'Implemented multi-level authentication combining face recognition, live spoofing detection, and OTP verification.',
        'Optimised MySQL performance for secure credential matching and data storage.',
        'Designed anti-spoofing mechanism for fraud-resistant authentication.'
      ],
      metrics: [
        { value: 'Multi-Level', label: 'Authentication' },
        { value: 'Face + OTP', label: 'Live Spoofing Detection' },
        { value: 'MySQL', label: 'Performance Optimization' }
      ],
      tags: ['Python', 'OpenCV', 'MySQL', 'Flask', 'Face Recognition', 'Spoofing Detection', 'OTP Verification'],
      featured: false,
      githubUrl: 'https://github.com/nithyashree2403/smart-voting-multilayer-auth',
      liveUrl: 'https://github.com/nithyashree2403/smart-voting-multilayer-auth',
      badge: 'Biometric Security',
      icon: 'shield',
      gradient: 'from-purple-500/20 via-indigo-500/20 to-sky-500/20'
    }
  ]);

  private experiencesSignal = signal<WorkExperience[]>([
    {
      company: 'Bosch Global Software Technologies',
      role: 'Software Engineer — AI & Full Stack',
      location: 'Bengaluru, India',
      period: 'Jan 2025 – May 2025',
      badge: 'AI & Full Stack',
      description: [
        'Led systems design and architecture for an AI platform forecasting supply-demand trends (LSTM-CNN/XGBoost), supporting internal stakeholders, customer service, and revenue-driving operations.',
        'Built and tested production software (Angular/HTML/CSS frontend, Flask middle tier, SQLite backend), developing RESTful, HTTP-based API routing across environments.',
        'Enabled low-latency, real-time forecasting and risk categorisation; tracked accuracy metrics and incorporated feedback from stakeholders and team members through iterative testing.'
      ],
      technologies: ['Angular', 'Flask APIs', 'Python', 'LSTM-CNN', 'XGBoost', 'SQLite', 'RESTful APIs', 'Git', 'CI/CD']
    },
    {
      company: 'Continental Automotive Components (India) Pvt. Ltd',
      role: 'Software Engineer — Data & MLOps',
      location: 'Bengaluru, India',
      period: 'Jul 2024 – Oct 2024',
      badge: 'Data & MLOps',
      description: [
        'Implemented experiment tracking, model versioning, deployment monitoring, and safety monitoring using MLflow, improving test coverage to reduce defects and support steady growth.',
        'Collaborated with cross-functional engineering teams and people across the organisation on technical design and code reviews; documented deployment programs using Kubeflow Pipelines.',
        'Contributed across the ML lifecycle — preprocessing, training, evaluation, and deployment — supporting client teams and customers, with feedback and guidance from mentors and peers.'
      ],
      technologies: ['MLflow', 'Kubeflow Pipelines', 'Docker', 'Kubernetes', 'Python', 'Model Versioning', 'Safety Monitoring']
    },
    {
      company: 'Webstack Academy (WSA)',
      role: 'Full Stack Software Engineer (MERN)',
      location: 'Online',
      period: 'Jan 2024 – Apr 2024',
      badge: 'Full Stack MERN',
      description: [
        'Engineered prototypes and developed "Homely Hub," a property-renting platform, under guidance from mentors using the MERN stack.',
        'Delivered clean, maintainable, well-tested code across UI design, REST/HTTP API routing, and database access, with regular code reviews and support from mentors.'
      ],
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js (MERN)', 'REST/HTTP APIs', 'Database Access', 'Code Reviews']
    }
  ]);

  private educationSignal = signal<Education[]>([
    {
      institution: 'University College Dublin (UCD)',
      degree: 'MSc in Information Systems',
      location: 'Dublin, Ireland',
      period: '2025 – Present',
      grade: '3.51 / 4.2',
      gradeLabel: 'Academic GPA',
      badge: 'Master of Science',
      details: 'Pursuing MSc with coursework in Agentic AI, Generative AI/LLMs, Software Engineering, Data Architecture, Cloud Computing & Cybersecurity.',
      status: 'Enrolled'
    },
    {
      institution: 'Dayananda Sagar University',
      degree: 'B.Tech in Computer Science & Engineering',
      location: 'Bengaluru, India',
      period: '2021 – 2025',
      grade: '9.12 / 10.0',
      gradeLabel: 'Academic CGPA',
      badge: 'Bachelor of Technology',
      details: 'Strong foundation in Data Structures, Algorithms, AI/ML, Operating Systems, DBMS, Software Engineering & Computer Networks.',
      status: 'Graduated (First Class with Distinction)'
    },
    {
      institution: 'BGS National Public School',
      degree: 'Senior Secondary (CBSE Class XII)',
      location: 'Bengaluru, India',
      period: '2021',
      grade: '85.8%',
      gradeLabel: 'CBSE Percentage',
      badge: 'Senior Secondary',
      details: 'Science stream with Physics, Chemistry, Mathematics, and Computer Science.',
      status: 'Completed'
    },
    {
      institution: 'Maharishi Vidya Mandir',
      degree: 'Secondary (CBSE Class X)',
      location: 'Bengaluru, India',
      period: '2019',
      grade: '89.0%',
      gradeLabel: 'CBSE Percentage',
      badge: 'Secondary School',
      details: 'Core secondary education with high academic achievement in Mathematics & Science.',
      status: 'Completed'
    }
  ]);

  private certificationsSignal = signal<Certification[]>([
    { year: '2026', issuer: 'Coursera', title: 'AI Agents and Agentic AI with Python & Generative AI', badge: 'Agentic AI' },
    { year: '2026', issuer: 'Coursera / Duke University', title: 'Python Essentials for MLOps', badge: 'MLOps' },
    { year: '2026', issuer: 'Coursera / IBM', title: 'Generative AI and LLMs', badge: 'GenAI & LLMs' },
    { year: '2024', issuer: 'Coursera / Google', title: 'Foundations of Cybersecurity', badge: 'Cybersecurity' },
    { year: '2023', issuer: 'Udemy', title: 'Cloud Computing & AWS Fundamentals', badge: 'Cloud & AWS' },
    { year: '2025', issuer: 'ICTRD', title: 'AI and ML Program', badge: 'AI/ML' },
    { year: '2024', issuer: 'RapidMiner', title: 'Machine Learning Professional Certification', badge: 'ML Professional' },
    { year: '2024', issuer: 'DSU', title: 'IoT Workshop with Hackathon', badge: 'IoT & Hackathon' },
    { year: '2024', issuer: 'MathWorks', title: 'MATLAB Onramp', badge: 'MATLAB' },
    { year: '2024', issuer: 'Coursera / Google', title: 'Introduction to Generative AI', badge: 'GenAI' },
    { year: '2023', issuer: 'Udemy', title: 'Project Development with Java', badge: 'Java' },
    { year: '2022', issuer: 'Inlingua', title: 'German A2 Language Certification', badge: 'German A2' },
    { year: '2021', issuer: 'Inlingua', title: 'German A1 Language Certification', badge: 'German A1' }
  ]);

  private skillCategoriesSignal = signal<SkillCategory[]>([
    {
      title: 'Agentic AI, LLM & MLOps Engineering',
      description: 'Agentic workflows, RAG, tool calling, experiment tracking, and pipeline orchestration.',
      icon: 'brain',
      gradient: 'from-sky-500 to-indigo-500',
      skills: [
        { name: 'Agentic AI & LLM Concepts (State Mgmt, Tool Calling, RAG, Vector Search)', level: 95, category: 'mlops', badge: 'Agentic AI' },
        { name: 'MLflow (Experiment & Prompt Versioning, Model Registry)', level: 92, category: 'mlops', badge: 'Continental' },
        { name: 'Kubeflow Pipelines, Docker & Kubernetes (K8s)', level: 90, category: 'mlops', badge: 'MLOps Deploy' },
        { name: 'Python, PyTorch, Keras & TensorFlow', level: 94, category: 'mlops', badge: 'Deep Learning' },
        { name: 'LSTM-CNN, XGBoost & Computer Vision (OpenCV, PyTesseract)', level: 90, category: 'mlops', badge: 'Bosch Forecast' }
      ]
    },
    {
      title: 'Programming & Full-Stack Web',
      description: 'Languages, modern SPA frontends, REST APIs, and database engineering.',
      icon: 'layout',
      gradient: 'from-sky-400 to-cyan-400',
      skills: [
        { name: 'Python, Java, C#, TypeScript & JavaScript', level: 94, category: 'programming', badge: 'Core Languages' },
        { name: 'C, MATLAB, Shell & Assembly', level: 85, category: 'programming', badge: 'Systems Languages' },
        { name: 'Angular, HTML, CSS & Tailwind CSS', level: 92, category: 'frontend', badge: 'Frontend SPA' },
        { name: 'Flask RESTful APIs & MERN Stack (MongoDB, Express, React, Node)', level: 90, category: 'backend', badge: 'REST API & Web' },
        { name: 'MySQL & SQLite Database Optimization', level: 88, category: 'backend', badge: 'Relational DB' }
      ]
    },
    {
      title: 'Software Engineering Practices, Cloud & Soft Skills',
      description: 'CI/CD, observability, cloud platforms, governance, and collaborative leadership.',
      icon: 'server',
      gradient: 'from-indigo-500 to-violet-500',
      skills: [
        { name: 'Data Structures, Design Patterns & Architecture', level: 92, category: 'tools', badge: 'CS Core' },
        { name: 'CI/CD, Git, Release Management & Testing', level: 90, category: 'tools', badge: 'Dev Practices' },
        { name: 'Cloud Platforms: Azure, GCP & AWS (Coursework & Cert)', level: 86, category: 'cloud', badge: 'Cloud Deploy' },
        { name: 'Observability (Tracing, Cost Tracking), Governance & Audit', level: 88, category: 'security', badge: 'ML Ops Audit' },
        { name: 'Strategic Advice, Stakeholder Support & Teamwork', level: 95, category: 'tools', badge: 'Soft Skills' }
      ]
    }
  ]);

  selectedProject = signal<Project | null>(null);

  getProjects() {
    return this.projectsSignal.asReadonly();
  }

  getExperiences() {
    return this.experiencesSignal.asReadonly();
  }

  getEducation() {
    return this.educationSignal.asReadonly();
  }

  getCertifications() {
    return this.certificationsSignal.asReadonly();
  }

  getSkillCategories() {
    return this.skillCategoriesSignal.asReadonly();
  }

  openProjectModal(project: Project) {
    this.selectedProject.set(project);
    document.body.style.overflow = 'hidden';
  }

  closeProjectModal() {
    this.selectedProject.set(null);
    document.body.style.overflow = 'auto';
  }
}

