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

export interface DomainInterest {
  title: string;
  category: string;
  icon: string;
  gradient: string;
  summary: string;
  topics: string[];
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  profile = {
    name: 'Nithya Shree V S',
    title: 'Software Engineer | Backend Development | Data Platform Engineering',
    email: 'nithyashree242003@gmail.com',
    phone: '+353 852193644',
    location: 'Bengaluru, India • Dublin, Ireland',
    ucdGpa: '3.46 / 4.2',
    dsuCgpa: '9.12 / 10',
    summary: 'Software Engineer with an MSc in Information Systems (GPA: 3.46/4.2) and a B.Tech in Computer Science and Engineering (CGPA: 9.12/10), with hands-on experience in Python software development, backend systems, data engineering, MLOps, and AI-driven applications. Experienced in designing RESTful APIs, automating ETL and machine learning workflows, building CI/CD pipelines, and developing containerised applications using Docker and Kubernetes-based tooling. Worked with Kubeflow, MLflow, GitHub Actions, Flask, and cloud platform fundamentals, contributing to scalable data-processing workflows, internal engineering tools, and reliable software solutions. Familiar with LLM application prototyping and emerging agentic AI concepts. Strong foundation in data structures, database modelling, system design fundamentals, performance optimisation, and cross-functional collaboration. Interested in developing scalable data platforms and AI-powered solutions for complex use cases, including healthcare payment intelligence and claims processing.'
  };

  private domainInterestsSignal = signal<DomainInterest[]>([
    {
      title: 'Healthcare Payment Intelligence & Claims Lifecycle',
      category: 'Healthcare & Payment Systems',
      icon: 'shield-check',
      gradient: 'from-sky-500/20 via-cyan-500/20 to-indigo-500/20',
      summary: 'Deep focus on US healthcare claims processing, payment integrity, and predictive intelligence across the claims journey.',
      topics: [
        'AI-Powered Healthcare Payment Intelligence',
        'End-to-End US Healthcare Claims Lifecycle',
        'Payment Integrity & Waste/Abuse Detection',
        'Pre-Pay & Post-Pay Claims Processing',
        'Commercial Healthcare, Medicare & Medicaid Workflows',
        'Rules Engines & Anomaly Flagging for Claims'
      ]
    },
    {
      title: 'Scalable Data Platforms & Distributed Processing',
      category: 'Data Platform Architecture',
      icon: 'database',
      gradient: 'from-cyan-500/20 via-indigo-500/20 to-purple-500/20',
      summary: 'Architecting resilient data pipelines, relational storage schemas, and high-throughput internal engineering tooling.',
      topics: [
        'Data Platform Architecture & Engineering',
        'Distributed Systems & Data Processing',
        'Multi-Stage ETL Workflows & Data Pipelines',
        'Relational Database Modeling & Query Optimization',
        'Persistent Volumes & Container Storage Workflows',
        'High-Reliability Internal Engineering Tooling'
      ]
    },
    {
      title: 'Agentic AI & Automated Data Engineering',
      category: 'Applied AI & Automation',
      icon: 'cpu',
      gradient: 'from-indigo-500/20 via-purple-500/20 to-sky-500/20',
      summary: 'Prototyping next-generation autonomous workflows, semantic retrieval, and self-validating data engineering pipelines.',
      topics: [
        'Emerging Agentic AI Concepts & Architectures',
        'LLM Application Prototyping (Flowise, Groq, NLP)',
        'Custom TF-IDF & Vector Semantic Search',
        'Knowledge-Graph Exploration & Data Modeling',
        'Automated CI/CD Validation & Verification',
        'MLflow Tracking & Reproducible Model Builds'
      ]
    }
  ]);

  private projectsSignal = signal<Project[]>([
    {
      id: 'nasa-space-apps',
      title: 'NASA Space Apps Challenge – Research Analytics Platform',
      subtitle: 'Knowledge-Graph Exploration, TF-IDF Indexing & Containerised Query Engine',
      category: 'ai',
      categoryLabel: 'Data & Platform Engineering',
      date: 'NASA Space Apps Challenge',
      description: 'Architected a research analytics platform indexing 600+ scientific publications, processing large collections of research data to support efficient information retrieval and discovery.',
      longDescription: 'Architected a research analytics platform indexing 600+ scientific publications, processing large collections of research data to support efficient information retrieval and discovery. Implemented custom TF-IDF indexing, search ranking algorithms, and knowledge-graph exploration to improve data modelling, information discovery, and search relevance. Developed backend data-processing and query workflows and containerised application services using Docker to support consistent deployment and maintainable platform development. Presented product capabilities and technical design decisions to stakeholders, communicating system functionality and implementation trade-offs.',
      architectureHighlights: [
        'Architected research analytics platform indexing 600+ scientific publications for efficient retrieval.',
        'Implemented custom TF-IDF indexing, search ranking algorithms, and knowledge-graph exploration.',
        'Developed backend data-processing and query workflows containerised with Docker for consistent deployment.',
        'Communicated system architecture, trade-offs, and product capabilities in stakeholder presentations.'
      ],
      metrics: [
        { value: '600+', label: 'Scientific Publications Indexed' },
        { value: 'TF-IDF + Graph', label: 'Search & Knowledge Discovery' },
        { value: 'Docker', label: 'Containerised Application' }
      ],
      tags: ['Python', 'NLP', 'TF-IDF', 'NetworkX', 'Docker', 'Knowledge Graphs', 'Search Algorithms', 'Data Processing'],
      featured: true,
      githubUrl: 'https://github.com/nithyashree2403/nasa-space-apps-analytics',
      liveUrl: 'https://github.com/nithyashree2403/nasa-space-apps-analytics',
      badge: 'Resume Project',
      icon: 'globe',
      gradient: 'from-sky-500/20 via-indigo-500/20 to-purple-500/20'
    },
    {
      id: 'multilayer-auth-microservice',
      title: 'Multilayer Authentication & Verification Microservice',
      subtitle: 'Biometric Face Validation, Liveness Detection & Low-Latency REST APIs',
      category: 'fullstack',
      categoryLabel: 'Backend & Microservices',
      date: 'Engineering Project',
      description: 'Developed a Python-based biometric verification microservice using OpenCV for face validation, liveness detection, and anomaly identification, achieving 99% authentication accuracy during project testing.',
      longDescription: 'Developed a Python-based biometric verification microservice using OpenCV for face validation, liveness detection, and anomaly identification, achieving 99% authentication accuracy during project testing. Optimised relational database queries and backend data-processing operations, reducing API response latency by 25% under concurrent workloads. Integrated frontend interfaces with secure REST API endpoints and developed integration tests to strengthen application security and service reliability.',
      architectureHighlights: [
        'Developed Python-based biometric verification microservice with OpenCV for face validation and liveness detection.',
        'Achieved 99% authentication accuracy during project testing with anomaly identification.',
        'Optimised relational database queries and backend data-processing operations, reducing latency by 25%.',
        'Integrated frontend interfaces with secure REST API endpoints and authored comprehensive integration tests.'
      ],
      metrics: [
        { value: '99%', label: 'Authentication Accuracy' },
        { value: '25% Faster', label: 'API Response Latency Reduction' },
        { value: 'REST API', label: 'Secure Microservice' }
      ],
      tags: ['Python', 'OpenCV', 'SQLite', 'REST APIs', 'Biometrics', 'Liveness Detection', 'Database Optimization', 'Integration Testing'],
      featured: true,
      githubUrl: 'https://github.com/nithyashree2403/smart-voting-multilayer-auth',
      liveUrl: 'https://github.com/nithyashree2403/smart-voting-multilayer-auth',
      badge: 'Resume Project',
      icon: 'shield',
      gradient: 'from-purple-500/20 via-indigo-500/20 to-sky-500/20'
    },
    {
      id: 'bosch-demand-forecasting',
      title: 'Backend Demand Forecasting & Latency Optimization',
      subtitle: 'Python Flask APIs, SQLite & 3–9-Month Predictive Forecasting at Bosch',
      category: 'fullstack',
      categoryLabel: 'Backend & ML Systems',
      date: 'Feb 2025 – May 2025',
      description: 'Designed Python backend services and RESTful APIs using Flask and SQLite at Bosch Global Software Technologies, integrating Angular interfaces and reducing query latency by 20%.',
      longDescription: 'Designed and developed Python backend services and RESTful APIs using Flask and SQLite, supporting internal application workflows, data persistence, and risk categorisation. Engineered full-stack software solutions integrating Angular interfaces with backend services, optimising database queries to reduce application latency by 20%. Developed machine learning-based demand forecasting solutions using LSTM-CNN and XGBoost architectures to support predictive business use cases across 3–9-month forecasting horizons.',
      architectureHighlights: [
        'Engineered Python backend services and RESTful APIs using Flask and SQLite for risk categorisation.',
        'Optimised database queries and integrated Angular frontend, reducing latency by 20%.',
        'Developed LSTM-CNN and XGBoost demand forecasting models across 3–9-month horizons.',
        'Executed automated testing, debugging workflows, and cross-functional technical design reviews.'
      ],
      metrics: [
        { value: '20% Lower', label: 'Database Latency' },
        { value: '3–9 Mo', label: 'Forecast Horizon' },
        { value: 'Flask + SQLite', label: 'Backend Architecture' }
      ],
      tags: ['Python', 'Flask', 'REST APIs', 'SQLite', 'Angular', 'LSTM-CNN', 'XGBoost', 'Automated Testing'],
      featured: true,
      githubUrl: 'https://github.com/nithyashree2403/ai-demand-forecasting',
      liveUrl: 'https://github.com/nithyashree2403/ai-demand-forecasting',
      badge: 'Bosch Engineering',
      icon: 'trending-up',
      gradient: 'from-cyan-500/20 via-sky-500/20 to-emerald-500/20'
    },
    {
      id: 'continental-mlops-pipelines',
      title: 'Automated Multi-Stage ETL & Kubeflow ML Pipelines',
      subtitle: 'CI/CD with Self-Hosted Runners, Minikube & MLflow Tracking at Continental',
      category: 'mlops',
      categoryLabel: 'Data & MLOps Pipelines',
      date: 'Jul 2024 – Sep 2024',
      description: 'Automated multi-stage ETL and ML data workflows using Kubeflow Pipelines and Linux shell scripting at Continental Automotive, eliminating 100% of manual verification checks.',
      longDescription: 'Designed and automated multi-stage ETL and machine learning data-processing workflows using Kubeflow Pipelines and Linux shell scripting, eliminating 100% of manual verification checks. Developed CI/CD automation using GitHub Actions and self-hosted runners to support repeatable testing, pipeline validation, and reliable software deployment. Containerised workloads with Docker and Kubernetes (Minikube), configured persistent volume claims (PVCs), and integrated MLflow experiment tracking.',
      architectureHighlights: [
        'Eliminated 100% of manual verification checks with Kubeflow Pipelines and shell automation.',
        'Built CI/CD automation with GitHub Actions and self-hosted runners for reliable deployment.',
        'Containerised workloads with Docker, Minikube Kubernetes orchestration, and persistent storage.',
        'Integrated MLflow experiment tracking and managed CSV-based pipeline metrics.'
      ],
      metrics: [
        { value: '100%', label: 'Manual Checks Eliminated' },
        { value: 'Kubeflow', label: 'Multi-Stage ETL' },
        { value: 'Minikube & PVC', label: 'Container Orchestration' }
      ],
      tags: ['Kubeflow Pipelines', 'GitHub Actions', 'Docker', 'Kubernetes', 'MLflow', 'Shell Scripting', 'ETL Automation'],
      featured: true,
      githubUrl: 'https://github.com/nithyashree2403/mlops-kubeflow-mlflow',
      liveUrl: 'https://github.com/nithyashree2403/mlops-kubeflow-mlflow',
      badge: 'Continental Engineering',
      icon: 'cpu',
      gradient: 'from-indigo-500/20 via-sky-500/20 to-cyan-500/20'
    }
  ]);

  private experiencesSignal = signal<WorkExperience[]>([
    {
      company: 'Bosch Global Software Technologies',
      role: 'AI Engineering Intern',
      location: 'Bengaluru, India',
      period: 'Feb 2025 – May 2025',
      badge: 'AI & Backend Development',
      description: [
        'Designed and developed Python backend services and RESTful APIs using Flask and SQLite, supporting internal application workflows, data persistence, and risk categorisation.',
        'Engineered full-stack software solutions integrating Angular interfaces with backend services, optimising database queries to reduce application latency by 20%.',
        'Developed machine learning-based demand forecasting solutions using LSTM-CNN and XGBoost architectures to support predictive business use cases across 3–9-month forecasting horizons.',
        'Performed model experimentation, hyperparameter tuning, data validation, and performance benchmarking using synthetic datasets to evaluate machine learning workflows.',
        'Implemented automated testing and debugging workflows to identify software defects, improve application reliability, and support clean, maintainable code.',
        'Collaborated with cross-functional engineering teams in technical design reviews, written documentation, and solution development, communicating implementation decisions and performance findings.'
      ],
      technologies: ['Python', 'Flask', 'RESTful APIs', 'SQLite', 'Angular', 'LSTM-CNN', 'XGBoost', 'Automated Testing', 'Cross-Functional Collaboration']
    },
    {
      company: 'Continental Automotive',
      role: 'Data & MLOps Engineering Intern',
      location: 'Bengaluru, India',
      period: 'Jul 2024 – Sep 2024',
      badge: 'Data & MLOps Engineering',
      description: [
        'Designed and automated multi-stage ETL and machine learning data-processing workflows using Kubeflow Pipelines and Linux shell scripting, eliminating 100% of manual verification checks.',
        'Developed CI/CD automation using GitHub Actions and self-hosted runners to support repeatable testing, pipeline validation, and reliable software deployment.',
        'Containerised machine learning workloads using Docker and worked with Kubernetes-based environments through Minikube to understand container orchestration and application deployment.',
        'Integrated MLflow experiment tracking and managed pipeline metrics through CSV-based workflows, supporting reproducibility and analytical review of model execution.',
        'Configured persistent volume and persistent volume claim workflows to support storage requirements for containerised machine learning applications.',
        'Contributed to data platform architecture discussions, internal engineering workflows, technical documentation, and deployment improvements through collaboration with senior engineering teams.'
      ],
      technologies: ['Kubeflow Pipelines', 'Linux Shell Scripting', 'GitHub Actions', 'Self-Hosted Runners', 'Docker', 'Kubernetes (Minikube)', 'MLflow', 'PVC Storage', 'ETL Workflows']
    }
  ]);

  private educationSignal = signal<Education[]>([
    {
      institution: 'University College Dublin (UCD)',
      degree: 'MSc in Information Systems',
      location: 'Dublin, Ireland',
      period: '2025 – 2026',
      grade: '3.46 / 4.2',
      gradeLabel: 'Academic GPA',
      badge: 'Master of Science',
      details: 'Pursuing MSc coursework in scalable systems, information architecture, machine learning systems, data governance, and enterprise cloud solutions.',
      status: 'Enrolled (2025–2026)'
    },
    {
      institution: 'Dayananda Sagar University',
      degree: 'B.Tech in Computer Science and Engineering',
      location: 'Bengaluru, India',
      period: '2021 – 2025',
      grade: '9.12 / 10',
      gradeLabel: 'Academic CGPA',
      badge: 'Bachelor of Technology',
      details: 'Strong core computer science foundation in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Distributed Computing.',
      status: 'Graduated'
    }
  ]);

  private certificationsSignal = signal<Certification[]>([
    { year: 'Duke University', issuer: 'Duke University / Coursera', title: 'Python Essentials for MLOps', badge: 'MLOps' },
    { year: 'IBM', issuer: 'IBM / Coursera', title: 'Generative AI and LLMs', badge: 'GenAI & LLMs' },
    { year: 'ICTRD', issuer: 'ICTRD Kaushalpith', title: 'Artificial Intelligence and Machine Learning Programme', badge: 'AI/ML' }
  ]);

  // Exact 7 skill categories directly from the resume's CORE TECHNICAL SKILLS section
  private skillCategoriesSignal = signal<SkillCategory[]>([
    {
      title: 'Programming & Software Development',
      description: 'Core languages, data structures, and algorithmic software engineering.',
      icon: 'code',
      gradient: 'from-sky-500 to-cyan-500',
      skills: [
        { name: 'Python', level: 95, category: 'programming', badge: 'Primary' },
        { name: 'SQL', level: 92, category: 'programming', badge: 'Data' },
        { name: 'Java', level: 88, category: 'programming', badge: 'OOP' },
        { name: 'JavaScript & TypeScript', level: 90, category: 'programming', badge: 'Full-Stack' },
        { name: 'C & C++', level: 84, category: 'programming', badge: 'Systems' },
        { name: 'Bash / Shell Scripting', level: 90, category: 'programming', badge: 'Automation' },
        { name: 'Data Structures and Algorithms', level: 92, category: 'programming', badge: 'Core CS' },
        { name: 'Object-Oriented Programming', level: 94, category: 'programming', badge: 'Design' }
      ]
    },
    {
      title: 'Backend & Platform Development',
      description: 'RESTful APIs, microservices, database tuning, and maintainable services.',
      icon: 'server',
      gradient: 'from-cyan-500 to-indigo-500',
      skills: [
        { name: 'Flask & RESTful APIs', level: 94, category: 'backend', badge: 'Backend' },
        { name: 'Microservices & Backend Services', level: 90, category: 'backend', badge: 'Architecture' },
        { name: 'Internal Tooling & API Integration', level: 92, category: 'backend', badge: 'Tooling' },
        { name: 'Database Optimisation (SQLite, Relational)', level: 88, category: 'backend', badge: 'Optimization' },
        { name: 'Software Development & Clean Code', level: 94, category: 'backend', badge: 'Maintainability' }
      ]
    },
    {
      title: 'Data Engineering & Architecture',
      description: 'ETL pipelines, data modeling, transformations, and large-scale processing.',
      icon: 'database',
      gradient: 'from-indigo-500 to-sky-500',
      skills: [
        { name: 'ETL Concepts & Automated Pipelines', level: 95, category: 'data', badge: 'Pipelines' },
        { name: 'Data Modelling & Data Architecture', level: 90, category: 'data', badge: 'Modeling' },
        { name: 'Data Transformation & Processing', level: 92, category: 'data', badge: 'Transform' },
        { name: 'Relational Databases & Schemas', level: 90, category: 'data', badge: 'Databases' },
        { name: 'Large Dataset Processing Workflows', level: 88, category: 'data', badge: 'Scale' },
        { name: 'Machine Learning Workflows', level: 92, category: 'data', badge: 'ML Data' }
      ]
    },
    {
      title: 'Cloud & Containerization',
      description: 'Docker containers, Kubernetes orchestration, Kubeflow, and cloud infrastructure.',
      icon: 'cloud',
      gradient: 'from-sky-400 to-indigo-600',
      skills: [
        { name: 'Docker & Containerised Applications', level: 94, category: 'cloud', badge: 'Containers' },
        { name: 'Kubernetes (Minikube)', level: 88, category: 'cloud', badge: 'K8s' },
        { name: 'Kubeflow Pipelines', level: 92, category: 'cloud', badge: 'Orchestration' },
        { name: 'Persistent Volumes & Claims (PVC)', level: 86, category: 'cloud', badge: 'Storage' },
        { name: 'Linux OS & Cloud Platforms (AWS, Azure, GCP)', level: 88, category: 'cloud', badge: 'Cloud' }
      ]
    },
    {
      title: 'DevOps & CI/CD',
      description: 'GitHub Actions automation, self-hosted runners, testing, and ML experiment tracking.',
      icon: 'git-branch',
      gradient: 'from-indigo-500 to-violet-500',
      skills: [
        { name: 'Git & GitHub Actions CI/CD Pipelines', level: 94, category: 'devops', badge: 'CI/CD' },
        { name: 'Self-Hosted Runners & Pipeline Validation', level: 90, category: 'devops', badge: 'Runners' },
        { name: 'Automated Testing & Reproducible Builds', level: 92, category: 'devops', badge: 'Testing' },
        { name: 'Deployment Automation', level: 88, category: 'devops', badge: 'Deployment' },
        { name: 'MLflow Experiment Tracking', level: 92, category: 'devops', badge: 'MLflow' }
      ]
    },
    {
      title: 'AI, LLMs & Frameworks',
      description: 'Machine learning, Generative AI, LLM prototyping, NLP, and vision models.',
      icon: 'brain',
      gradient: 'from-violet-500 to-fuchsia-500',
      skills: [
        { name: 'Machine Learning & Generative AI', level: 94, category: 'ai', badge: 'AI / GenAI' },
        { name: 'LLM Application Prototyping (Flowise, Groq)', level: 90, category: 'ai', badge: 'LLMs' },
        { name: 'NLP, Semantic Search & TF-IDF', level: 92, category: 'ai', badge: 'NLP' },
        { name: 'PyTorch, TensorFlow & Scikit-learn', level: 88, category: 'ai', badge: 'Frameworks' },
        { name: 'OpenCV (Computer Vision & Biometrics)', level: 90, category: 'ai', badge: 'Vision' }
      ]
    },
    {
      title: 'Engineering & Collaboration',
      description: 'System design fundamentals, performance optimization, reviews, and cross-functional delivery.',
      icon: 'users',
      gradient: 'from-cyan-500 to-emerald-500',
      skills: [
        { name: 'System Design & Distributed Systems Fundamentals', level: 90, category: 'collaboration', badge: 'System Design' },
        { name: 'Performance Optimisation & Latency Tuning', level: 92, category: 'collaboration', badge: 'Performance' },
        { name: 'Debugging, Code Reviews & Application Security', level: 94, category: 'collaboration', badge: 'Code Review' },
        { name: 'Technical Documentation & Communication', level: 94, category: 'collaboration', badge: 'Documentation' },
        { name: 'Cross-Functional Teamwork & Problem Solving', level: 96, category: 'collaboration', badge: 'Teamwork' }
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

  getDomainInterests() {
    return this.domainInterestsSignal.asReadonly();
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
