import { Injectable, signal } from '@angular/core';
import { Project, WorkExperience, Certification } from '../models/project.model';
import { SkillCategory } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  profile = {
    name: 'Nithya Shree V.S',
    title: 'MLOps & Full-Stack Engineer',
    email: 'nithyashree242003@gmail.com',
    phone: '+353 852193644',
    location: 'Dublin, Ireland',
    ucdGpa: '3.51 / 4.2',
    dsuCgpa: '9.12 / 10',
    summary: 'Results-driven technologist currently pursuing an MSc in Information Systems at University College Dublin (GPA 3.51/4.2), building on a strong undergraduate foundation in Computer Science from Dayananda Sagar University (CGPA 9.12). Hands-on internship experience in AI/ML engineering and full-stack development at Bosch and Continental, with a track record of building end-to-end machine learning pipelines, deploying predictive models, and designing interactive web applications using Python, Angular, Flask, and MLflow.'
  };

  private projectsSignal = signal<Project[]>([
    {
      id: 'nasa-space-apps',
      title: 'NASA Space Apps AI Analytics Suite',
      subtitle: '600+ Scientific Datasets & Knowledge-Graph Discovery Platform',
      category: 'ai',
      categoryLabel: 'AI & Data Science',
      date: '2025',
      description: 'Built AI analytics dashboards processing over 600+ scientific datasets with semantic search ranking and knowledge-graph exploration tools for complex scientific relationships.',
      longDescription: 'Engineered an interactive analytics platform for NASA Space Apps Challenge 2025. Integrated semantic search algorithms with graph database representations to enable researchers to discover multi-dimensional dataset connections instantly.',
      architectureHighlights: [
        'Processed and indexed 600+ scientific datasets with automated semantic metadata extraction.',
        'Implemented vector ranking algorithms for high-relevance scientific search queries.',
        'Developed interactive knowledge-graph exploration tools for mapping complex astronomical relationships.',
        'Built reactive dashboard UI components for high-density dataset visualization.'
      ],
      metrics: [
        { value: '600+', label: 'Datasets Processed' },
        { value: 'Sub-second', label: 'Semantic Search' },
        { value: 'Knowledge Graph', label: 'Relationship Mapping' }
      ],
      tags: ['Python', 'AI Analytics', 'Semantic Search', 'Knowledge Graphs', 'Angular', 'REST APIs'],
      featured: true,
      githubUrl: 'https://github.com/nithyashree2403/nasa-space-apps-analytics',
      liveUrl: 'https://github.com/nithyashree2403/nasa-space-apps-analytics',
      badge: 'NASA Challenge 2025',
      icon: 'globe',
      gradient: 'from-sky-500/20 via-indigo-500/20 to-purple-500/20'
    },
    {
      id: 'bosch-demand-forecasting',
      title: 'AI Demand Forecasting Platform',
      subtitle: 'Hybrid LSTM-CNN & XGBoost Predictive Engine with Angular & Flask',
      category: 'fullstack',
      categoryLabel: 'Full-Stack & AI',
      date: 'Feb 2025 – May 2025',
      description: 'Developed an AI-powered platform for Bosch Global Software Technologies to forecast project demand trends using hybrid LSTM-CNN and XGBoost models integrated with Angular and Flask.',
      longDescription: 'Created an enterprise full-stack web application at Bosch Global Software Technologies. Features an Angular HTML/CSS frontend, Flask REST API middleware, SQLite database, and real-time demand forecasting dashboards with automated risk categorisation.',
      architectureHighlights: [
        'Architected hybrid LSTM-CNN deep learning and XGBoost model pipeline for time-series forecasting.',
        'Developed full-stack architecture with Angular SPA frontend, Flask middleware REST APIs, and SQLite backend.',
        'Built automated risk categorisation engine and interactive visual forecasting dashboards.',
        'Optimized model inference latency for instant predictive analytics.'
      ],
      metrics: [
        { value: 'LSTM-CNN', label: 'Hybrid AI Architecture' },
        { value: 'Real-time', label: 'REST API Forecasting' },
        { value: 'Bosch Intern', label: 'Enterprise Impact' }
      ],
      tags: ['Python', 'LSTM-CNN', 'XGBoost', 'Angular', 'Flask', 'SQLite', 'RESTful APIs'],
      featured: true,
      githubUrl: 'https://github.com/nithyashree2403/ai-demand-forecasting',
      liveUrl: 'https://github.com/nithyashree2403/ai-demand-forecasting',
      badge: 'Bosch Enterprise AI',
      icon: 'trending-up',
      gradient: 'from-cyan-500/20 via-sky-500/20 to-emerald-500/20'
    },
    {
      id: 'continental-mlops-pipelines',
      title: 'MLflow & Kubeflow MLOps Pipeline Suite',
      subtitle: 'End-to-End Experiment Tracking & Production ML Deployment',
      category: 'mlops',
      categoryLabel: 'MLOps Infrastructure',
      date: 'Jul 2024 – Sep 2024',
      description: 'Designed and deployed end-to-end machine learning workflows at Continental Automotive Components using MLflow for experiment tracking and Kubeflow Pipelines for automated orchestration.',
      longDescription: 'Spearheaded ML engineering workflows during internship at Continental. Focused on experiment tracking, model registry versioning, automated Kubeflow pipeline execution, data preprocessing, model evaluation, and production deployment.',
      architectureHighlights: [
        'Implemented MLflow experiment tracking and model registry management across ML lifecycle.',
        'Designed end-to-end automated machine learning pipelines using Kubeflow Pipelines on Kubernetes.',
        'Streamlined data preprocessing, feature engineering, automated validation, and production deployment.',
        'Enhanced reproducibility and metrics logging for deep learning model iterations.'
      ],
      metrics: [
        { value: '100%', label: 'Tracked Experiments' },
        { value: 'Kubeflow', label: 'Pipeline Automation' },
        { value: 'Continental', label: 'Automotive MLOps' }
      ],
      tags: ['Python', 'MLflow', 'Kubeflow Pipelines', 'Docker', 'Kubernetes', 'MLOps', 'PyTorch'],
      featured: true,
      githubUrl: 'https://github.com/nithyashree2403/mlops-kubeflow-mlflow',
      liveUrl: 'https://github.com/nithyashree2403/mlops-kubeflow-mlflow',
      badge: 'Continental MLOps',
      icon: 'cpu',
      gradient: 'from-indigo-500/20 via-sky-500/20 to-cyan-500/20'
    },
    {
      id: 'smart-voting-auth',
      title: 'Multilayer Authentication Smart Voting UI',
      subtitle: 'Face Recognition, Live Spoofing Detection & OTP Verification',
      category: 'fullstack',
      categoryLabel: 'Full-Stack Security',
      date: 'Sep – Dec 2023',
      description: 'Implemented a high-security electronic voting UI combining computer vision face recognition, live spoofing detection, and OTP-based verification with optimized MySQL backend storage.',
      longDescription: 'Spearheaded the development of a fraud-resistant voting UI and database architecture. Integrated OpenCV computer vision models for biometric liveness detection, multi-factor OTP verification, optimized MySQL query execution, and automated vote-tallying admin tools.',
      architectureHighlights: [
        'Combined OpenCV facial recognition with live anti-spoofing detection algorithms.',
        'Implemented multi-layer OTP authentication flow for fraud-resistant user identity verification.',
        'Optimized MySQL database indexing for high-speed credential matching and vote storage.',
        'Designed admin control panel with automated vote-counting mechanisms and audit logs.'
      ],
      metrics: [
        { value: '3-Factor', label: 'Security Auth' },
        { value: 'OpenCV', label: 'Face Spoof Detection' },
        { value: 'Optimized', label: 'MySQL Performance' }
      ],
      tags: ['Python', 'OpenCV', 'Angular', 'MySQL', 'Flask', 'Computer Vision', 'Security'],
      featured: true,
      githubUrl: 'https://github.com/nithyashree2403/smart-voting-multilayer-auth',
      liveUrl: 'https://github.com/nithyashree2403/smart-voting-multilayer-auth',
      badge: 'Biometric Security',
      icon: 'shield',
      gradient: 'from-purple-500/20 via-indigo-500/20 to-sky-500/20'
    },
    {
      id: 'breast-cancer-detection',
      title: 'Deep Learning Breast Cancer Detection Engine',
      subtitle: 'Comparative Analysis with VGG16, VGG19, ResNet & InceptionV3',
      category: 'ai',
      categoryLabel: 'Deep Learning & Vision',
      date: 'March 2024',
      description: 'Led data augmentation and comparative deep learning model evaluation using VGG16, VGG19, ResNet, and InceptionV3 architectures, demonstrating VGG16 superior diagnostic accuracy.',
      longDescription: 'Executed deep learning research and computer vision pipelines for medical image classification. Spearheaded image augmentation techniques, model fine-tuning, performance evaluation metrics, and comparative analysis across transfer learning models.',
      architectureHighlights: [
        'Led data augmentation strategies to prevent model overfitting on medical image datasets.',
        'Evaluated transfer learning architectures: VGG16, VGG19, ResNet50, and InceptionV3.',
        'Identified VGG16 as top-performing model, contributing significantly to project diagnostic accuracy.',
        'Implemented ROC-AUC evaluation curves and confusion matrix visualization tools.'
      ],
      metrics: [
        { value: '60%', label: 'Project Contribution' },
        { value: 'VGG16', label: 'Top Model Accuracy' },
        { value: '4 Vision', label: 'Architectures Evaluated' }
      ],
      tags: ['Python', 'PyTorch', 'Keras', 'TensorFlow', 'OpenCV', 'VGG16', 'ResNet'],
      featured: false,
      githubUrl: 'https://github.com/nithyashree2403/breast-cancer-detection-dl',
      liveUrl: 'https://github.com/nithyashree2403/breast-cancer-detection-dl',
      badge: 'Medical AI',
      icon: 'activity',
      gradient: 'from-rose-500/20 via-purple-500/20 to-indigo-500/20'
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
        'Developed an AI-powered platform to forecast project demand trends using hybrid LSTM-CNN and XGBoost models.',
        'Built a full-stack web application with Angular and HTML/CSS (frontend), Flask (middle tier), and SQLite (backend).',
        'Enabled real-time forecasting and automated risk categorisation through RESTful APIs and interactive visual dashboards.'
      ],
      technologies: ['Angular', 'Python', 'Flask', 'LSTM-CNN', 'XGBoost', 'SQLite', 'RESTful APIs', 'HTML/CSS']
    },
    {
      company: 'Continental Automotive Components (India) Pvt. Ltd',
      role: 'Data & MLOps Engineering Intern',
      location: 'Bengaluru, India',
      period: 'Jul 2024 – Sep 2024',
      badge: 'MLOps Engineering',
      description: [
        'Gained hands-on experience in experiment tracking, model management, and production deployment using MLflow.',
        'Assisted in designing and implementing end-to-end machine learning workflows using Kubeflow Pipelines.',
        'Contributed across the full ML lifecycle: data preprocessing, model training, validation evaluation, and production deployment.'
      ],
      technologies: ['MLflow', 'Kubeflow Pipelines', 'Python', 'Docker', 'Kubernetes', 'Data Preprocessing', 'Model Training']
    }
  ]);

  private certificationsSignal = signal<Certification[]>([
    { year: '2026', issuer: 'Coursera / Duke University', title: 'Python Essentials for MLOps', badge: 'MLOps' },
    { year: '2026', issuer: 'Coursera / IBM', title: 'Generative AI and LLMs', badge: 'GenAI & LLMs' },
    { year: '2025', issuer: 'ICTRD', title: 'AI and ML Program', badge: 'AI/ML' },
    { year: '2024', issuer: 'Coursera / Google', title: 'Foundations of Cybersecurity', badge: 'Cybersecurity' },
    { year: '2024', issuer: 'RapidMiner', title: 'Machine Learning Professional Certification', badge: 'ML Professional' },
    { year: '2024', issuer: 'DSU', title: 'IoT Workshop with Hackathon', badge: 'IoT & Hackathon' },
    { year: '2024', issuer: 'MathWorks', title: 'MATLAB Onramp', badge: 'MATLAB' },
    { year: '2024', issuer: 'Coursera / Google', title: 'Introduction to Generative AI', badge: 'GenAI' },
    { year: '2023', issuer: 'Udemy', title: 'Cloud Computing & AWS Fundamentals', badge: 'Cloud & AWS' },
    { year: '2023', issuer: 'Udemy', title: 'Project Development with Java', badge: 'Java' },
    { year: '2022', issuer: 'Inlingua', title: 'German A2 Language Certification', badge: 'German A2' },
    { year: '2021', issuer: 'Inlingua', title: 'German A1 Language Certification', badge: 'German A1' }
  ]);

  private skillCategoriesSignal = signal<SkillCategory[]>([
    {
      title: 'MLOps & AI Engineering',
      description: 'Experiment tracking, pipeline orchestration, model training, and deep learning.',
      icon: 'brain',
      gradient: 'from-sky-500 to-indigo-500',
      skills: [
        { name: 'MLflow & Kubeflow Pipelines', level: 92, category: 'mlops', badge: 'MLOps Deploy' },
        { name: 'Python, PyTorch, Keras & TensorFlow', level: 94, category: 'mlops', badge: 'Deep Learning' },
        { name: 'OpenCV & PyTesseract', level: 88, category: 'mlops', badge: 'Computer Vision' },
        { name: 'Generative AI & LLM Engineering', level: 88, category: 'mlops', badge: 'Duke/IBM Cert' },
        { name: 'LSTM-CNN & XGBoost Modeling', level: 90, category: 'mlops', badge: 'Bosch Forecast' }
      ]
    },
    {
      title: 'Full-Stack & Web Engineering',
      description: 'Building modern Angular interfaces, RESTful Flask APIs, and reactive web applications.',
      icon: 'layout',
      gradient: 'from-sky-400 to-cyan-400',
      skills: [
        { name: 'Angular 18 & TypeScript', level: 92, category: 'frontend', badge: 'Frontend SPA' },
        { name: 'Python & Flask RESTful APIs', level: 90, category: 'backend', badge: 'API Middleware' },
        { name: 'HTML5, CSS3 & Tailwind CSS', level: 92, category: 'frontend', badge: 'Modern Design' },
        { name: 'JavaScript & Java', level: 86, category: 'programming', badge: 'Core Languages' },
        { name: 'MySQL & SQLite Database Optimization', level: 88, category: 'backend', badge: 'Relational DB' }
      ]
    },
    {
      title: 'Cloud, Cybersecurity & Tools',
      description: 'Linux systems, cloud infrastructure, containerization, and security fundamentals.',
      icon: 'server',
      gradient: 'from-indigo-500 to-violet-500',
      skills: [
        { name: 'Docker & Kubernetes (K8s)', level: 85, category: 'cloud', badge: 'Containers' },
        { name: 'AWS & Cloud Computing', level: 84, category: 'cloud', badge: 'AWS Fundamentals' },
        { name: 'Linux, Shell Scripting & Cybersecurity', level: 86, category: 'security', badge: 'Google Cert' },
        { name: 'C, MATLAB & Assembly', level: 82, category: 'programming', badge: 'Systems Code' },
        { name: 'Git & Agile Collaboration', level: 90, category: 'tools', badge: 'Dev Workflows' }
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
