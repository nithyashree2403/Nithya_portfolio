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
    title: 'AI/ML Engineer — Associate Engineer (Agentic / Applied AI)',
    email: 'nithyashree242003@gmail.com',
    phone: '+353 852193644',
    location: 'Dublin, Ireland',
    ucdGpa: '3.51 / 4.2',
    dsuCgpa: '9.12 / 10',
    summary: 'AI/ML Engineer (Associate Engineer) pursuing an MSc in Information Systems at UCD (GPA 3.51/4.2), on a CS & Engineering foundation from Dayananda Sagar University (CGPA 9.12). Hands-on across the AI/ML lifecycle — architecture, data structures, model training, evaluation, version control, CI/CD, containerization (Docker, Kubernetes), and cloud deployment (Azure, GCP) — through AI/ML, MLOps, and full-stack internships, collaborating with product managers and business stakeholders across corporate functions. Strong fundamentals in Python, Java, C#, and TypeScript, with coursework in agentic AI, generative AI/LLMs, and cybersecurity. Passionate about building secure, reliable AI workflow solutions using cutting-edge technologies for financial-services environments.'
  };

  private projectsSignal = signal<Project[]>([
    {
      id: 'nasa-space-apps',
      title: 'NASA Space Apps Challenge 2025',
      subtitle: 'AI Analytics Dashboards & Knowledge-Graph Retrieval System',
      category: 'ai',
      categoryLabel: 'AI & Data Science',
      date: '2025',
      description: 'Spearheaded a team building AI analytics dashboards and knowledge-graph tools processing 600+ scientific datasets, for reasoning over complex relationships.',
      longDescription: 'Spearheaded a team building AI analytics dashboards and knowledge-graph tools processing 600+ scientific datasets, for reasoning over complex relationships. Implemented semantic search and knowledge retrieval by embedding text into vector space for intelligent, context-aware data discovery.',
      architectureHighlights: [
        'Spearheaded a team building AI analytics dashboards and knowledge-graph tools for 600+ scientific datasets.',
        'Implemented semantic search and knowledge retrieval by embedding text into vector space.',
        'Enabled reasoning over complex relationships across multi-dimensional astronomical dataset connections.'
      ],
      metrics: [
        { value: '600+', label: 'Scientific Datasets' },
        { value: 'Vector Space', label: 'Semantic Search' },
        { value: 'Knowledge Graph', label: 'Data Discovery' }
      ],
      tags: ['Python', 'AI Analytics', 'Semantic Search', 'Vector Search', 'Knowledge Graphs', 'REST APIs'],
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
      date: 'Feb 2025 – May 2025',
      description: 'Designed the system architecture for an AI/ML forecasting platform (LSTM-CNN/XGBoost) predicting supply-demand trends, collaborating with product managers and business stakeholders at Bosch.',
      longDescription: 'Designed the system architecture for an AI/ML forecasting platform (LSTM-CNN/XGBoost) predicting supply-demand trends, collaborating with product managers and business stakeholders. Built a full-stack production-support app (Angular, Flask APIs, SQLite) with RESTful APIs, Git version control, and CI/CD-driven deployment across environments. Enabled real-time forecasting and risk categorisation; instrumented accuracy, latency, and cost metrics for reliable, production-ready workflows.',
      architectureHighlights: [
        'Designed system architecture for AI/ML forecasting platform (LSTM-CNN/XGBoost) predicting supply-demand trends.',
        'Built full-stack production-support app (Angular, Flask APIs, SQLite) with RESTful APIs and CI/CD-driven deployment.',
        'Enabled real-time forecasting and risk categorisation; instrumented accuracy, latency, and cost metrics.'
      ],
      metrics: [
        { value: 'LSTM-CNN/XGBoost', label: 'Forecasting Architecture' },
        { value: 'Angular + Flask', label: 'Production-Support App' },
        { value: 'Bosch Global', label: 'AI & Full Stack Intern' }
      ],
      tags: ['Python', 'LSTM-CNN', 'XGBoost', 'Angular', 'Flask APIs', 'SQLite', 'CI/CD', 'Git'],
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
      subtitle: 'MLflow Tracking, Kubeflow Pipelines, Docker & Governance Documentation',
      category: 'mlops',
      categoryLabel: 'MLOps Infrastructure',
      date: 'Jul 2024 – Sep 2024',
      description: 'Implemented experiment tracking, model/prompt versioning, deployment monitoring, and safety monitoring using MLflow; containerized workflows (Docker/Kubernetes) via Kubeflow Pipelines at Continental.',
      longDescription: 'Implemented experiment tracking, model/prompt versioning, deployment monitoring, and safety monitoring using MLflow; containerized workflows (Docker/Kubernetes) via Kubeflow Pipelines for release management. Collaborated with cross-functional teams, product managers, and business stakeholders; authored audit-ready deployment playbooks and governance documentation for automated ML workflow solutions. Contributed across the ML lifecycle — preprocessing, model training, evaluation-framework building, and regression testing — supporting production deployment for corporate teams.',
      architectureHighlights: [
        'Implemented experiment tracking, model/prompt versioning, deployment & safety monitoring using MLflow.',
        'Containerized workflows (Docker/Kubernetes) via Kubeflow Pipelines for release management.',
        'Authored audit-ready deployment playbooks and governance documentation for automated ML workflow solutions.',
        'Contributed across ML lifecycle: preprocessing, training, evaluation-framework building, and regression testing.'
      ],
      metrics: [
        { value: 'MLflow & Kubeflow', label: 'Release Management' },
        { value: 'Audit-Ready', label: 'Governance Playbooks' },
        { value: 'Continental', label: 'Data & MLOps Intern' }
      ],
      tags: ['MLflow', 'Kubeflow Pipelines', 'Docker', 'Kubernetes', 'Python', 'Model Versioning', 'Governance & Audit'],
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
      subtitle: 'Full-Stack MERN Architecture with REST API Routing & DB Abstraction',
      category: 'fullstack',
      categoryLabel: 'Full-Stack Web',
      date: 'Jan 2024 – Apr 2024',
      description: 'Engineered prototypes and developed "Homely Hub," a property-renting product, under mentor guidance using the MERN stack with REST API routing and database abstraction.',
      longDescription: 'Engineered prototypes and developed "Homely Hub," a property-renting product, under mentor guidance using the MERN stack. Authored clean, maintainable, testable code across front-end UI design patterns, REST API routing, and a database abstraction layer, using version control.',
      architectureHighlights: [
        'Engineered prototypes and developed "Homely Hub" property-renting product using the MERN stack.',
        'Authored clean, maintainable, testable code across front-end UI design patterns and REST API routing.',
        'Designed database abstraction layer for seamless data access and schema management.'
      ],
      metrics: [
        { value: 'MERN Stack', label: 'MongoDB Express React Node' },
        { value: 'REST API', label: 'Routing & DB Abstraction' },
        { value: 'WSA Intern', label: 'Property-Renting Product' }
      ],
      tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'MERN', 'REST API', 'Git'],
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
      description: 'Directed data augmentation and comparative evaluation of VGG16, VGG19, ResNet, and InceptionV3 models, contributing 60% to the overall project with VGG16 superior performance.',
      longDescription: 'Directed data augmentation and comparative evaluation of VGG16, VGG19, ResNet, and InceptionV3 models, contributing 60% to the overall project. Highlighted VGG16\'s superior performance, a key 10% contribution to project success.',
      architectureHighlights: [
        'Directed data augmentation and comparative evaluation of deep learning architectures.',
        'Evaluated VGG16, VGG19, ResNet, and InceptionV3 computer vision models.',
        'Highlighted VGG16\'s superior performance, contributing 60% to overall project execution.'
      ],
      metrics: [
        { value: '60%', label: 'Project Leadership' },
        { value: 'VGG16', label: 'Top Model Accuracy' },
        { value: '4 Vision', label: 'Architectures Evaluated' }
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
      subtitle: 'Biometric Face Recognition, Spoofing Detection & OTP Access Control',
      category: 'fullstack',
      categoryLabel: 'Full-Stack Security',
      date: 'Sep – Dec 2023',
      description: 'Implemented multi-level access control (face recognition, spoofing detection, OTP verification) with audit logging for a secure, fraud resistant voting workflow.',
      longDescription: 'Implemented multi-level access control (face recognition, spoofing detection, OTP verification) with audit logging for a secure, fraud resistant voting workflow. Optimised MySQL performance and revitalised the voting UI, database integration, and admin/vote-counting workflows.',
      architectureHighlights: [
        'Implemented multi-level access control (face recognition, spoofing detection, OTP verification).',
        'Built comprehensive audit logging for secure, fraud-resistant voting workflow.',
        'Optimised MySQL performance and revitalised voting UI, DB integration, and admin/vote-counting workflows.'
      ],
      metrics: [
        { value: 'Multi-Level', label: 'Access Control' },
        { value: 'Face + OTP', label: 'Spoofing Detection' },
        { value: 'MySQL', label: 'Query Optimization' }
      ],
      tags: ['Python', 'OpenCV', 'MySQL', 'Flask', 'Face Recognition', 'OTP Verification', 'Audit Logging'],
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
      role: 'Intern – AI & Full Stack',
      location: 'Bengaluru, India',
      period: 'Feb 2025 – May 2025',
      badge: 'AI & Full Stack',
      description: [
        'Designed the system architecture for an AI/ML forecasting platform (LSTM-CNN/XGBoost) predicting supply-demand trends, collaborating with product managers and business stakeholders.',
        'Built a full-stack production-support app (Angular, Flask APIs, SQLite) with RESTful APIs, Git version control, and CI/CD-driven deployment across environments.',
        'Enabled real-time forecasting and risk categorisation; instrumented accuracy, latency, and cost metrics for reliable, production-ready workflows.'
      ],
      technologies: ['Angular', 'Flask APIs', 'Python', 'LSTM-CNN', 'XGBoost', 'SQLite', 'RESTful APIs', 'Git', 'CI/CD']
    },
    {
      company: 'Continental Automotive Components (India) Pvt. Ltd',
      role: 'Data & MLOps Engineering Intern',
      location: 'Bengaluru, India',
      period: 'Jul 2024 – Sep 2024',
      badge: 'Data & MLOps',
      description: [
        'Implemented experiment tracking, model/prompt versioning, deployment monitoring, and safety monitoring using MLflow; containerized workflows (Docker/Kubernetes) via Kubeflow Pipelines for release management.',
        'Collaborated with cross-functional teams, product managers, and business stakeholders; authored audit-ready deployment playbooks and governance documentation for automated ML workflow solutions.',
        'Contributed across the ML lifecycle — preprocessing, model training, evaluation-framework building, and regression testing — supporting production deployment for corporate teams.'
      ],
      technologies: ['MLflow', 'Kubeflow Pipelines', 'Docker', 'Kubernetes', 'Python', 'Model/Prompt Versioning', 'Governance & Audit']
    },
    {
      company: 'Webstack Academy (WSA)',
      role: 'Full Stack Web Development Intern (MERN)',
      location: 'Online',
      period: 'Jan 2024 – Apr 2024',
      badge: 'Full Stack MERN',
      description: [
        'Engineered prototypes and developed "Homely Hub," a property-renting product, under mentor guidance using the MERN stack.',
        'Authored clean, maintainable, testable code across front-end UI design patterns, REST API routing, and a database abstraction layer, using version control.'
      ],
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js (MERN)', 'REST API Routing', 'Database Abstraction', 'Version Control']
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

