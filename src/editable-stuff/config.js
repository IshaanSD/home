// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Ishaan",
  middleName: "",
  lastName: "Gupta",
  message: "ML Engineer · Deep Learning Researcher · PhD Candidate at UCSD",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/IshaanSD",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/IgAI",
    },
    {
      image: "fa-google",
      url: "mailto:i3gupta@ucsd.edu",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/ishaangupta.jpeg"),
  imageSize: 375,
  message:
    `ML PhD researcher in deep learning applications, building robust AI pipelines for noisy, limited-label real-world data, with experience spanning biotechnology, surgical analytics, recommendation systems, and data engineering.`,
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "IshaanSD",
  reposLength: 4,
  specificRepos: ['iPlots','TreeHacks']
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/ishaangupta.jpeg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/ishaangupta.jpeg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm always happy to connect — whether it's about research, ML engineering, or potential collaborations. Feel free to reach out at",
  email: "i3gupta@ucsd.edu",
};

const experiences = {
  show: true,
  heading: "Experience",
  data: [
    {
      role: ‘Graduate Student Researcher — Deep Learning (Dr. Tiffany Amariuta)’,
      company: ‘Halıcıoğlu Data Science Institute, UCSD’,
      companylogo: require(‘../assets/img/ucsd_cse.png’),
      link: ‘https://datascience.ucsd.edu/’,
      date: ‘Sep 2024 – Present’,
      info: `
        <ul>
          <li>Built DiploFormer, a Nextflow/PyTorch framework to adapt foundation models to personal genomes for disease mechanisms discovery.</li>
          <li>Fine-tuned a 186M-parameter FlashAttention transformer + CNN-based model across people and sequence contexts on multi-modal data.</li>
          <li>Implemented delayed pairwise-loss computation via output accumulation; ran W&B/MLflow sweeps of adaptation strategies and ablations.</li>
          <li>Optimized resource-aware CPU/GPU workflows with parallel jobs and model checkpoint recovery across preprocessing, training, and inference.</li>
          <li>Benchmarked against Elastic Net/XGBoost baselines, monitored data drift, verified discovery of causal features through external validation.</li>
        </ul>
      `
    },
    {
      role: ‘AI Data Scientist Intern’,
      company: ‘Intuitive Surgical, Inc.’,
      companylogo: require(‘../assets/img/intuitive_logo160.png’),
      link: ‘https://www.intuitive.com/’,
      date: ‘Jun 2026 – Sep 2026’,
      info: `
        <ul>
          <li>Engineered Python/SQL components across the full analytics pipeline, transforming action-recognition outputs from 100K+ surgical cases into validated event tables, benchmark metrics, and dashboard-ready user-facing insights for analyzing hospital operational efficiency.</li>
          <li>Improved temporal analytics robustness by evaluating outlier-detection strategies and implementing a custom GMM/IQR detector.</li>
          <li>Built an LLM-assisted data-ingestion and validation workflow to standardize inconsistent hospital observation spreadsheets for user research.</li>
          <li>Enabled detector robustness and longitudinal trend analyses that identified service-associated improvements in business outcomes.</li>
        </ul>
      `
    },
    {
      role: ‘Machine Learning Engineer Intern’,
      company: ‘Abterra Biosciences’,
      companylogo: require(‘../assets/img/Abterra-bio.jpeg’),
      link: ‘https://abterrabio.com/’,
      date: ‘Jul 2024 – Sep 2024’,
      info: `
        <ul>
          <li>Benchmarked autoregressive transformer models for de novo peptide sequencing, improving held-out performance 4× on in-house data.</li>
          <li>Built reproducible PyTorch Lightning + W&B training workflows for hyperparameter sweeps, model comparison, and failure-mode analysis.</li>
          <li>Achieved 95% accuracy (baseline: 60%) in resolving ambiguous antibodies through peptide–spectrum feature engineering and FNN classifiers.</li>
          <li>Deployed trained deep learning models in the company’s Java codebase using DL4J, enabling parallelized performance evaluation.</li>
        </ul>
      `
    },
    {
      role: ‘Graduate Student Researcher — Algorithms (Dr. Pavel A. Pevzner)’,
      company: ‘UCSD CSE Department’,
      companylogo: require(‘../assets/img/ucsd_cse.png’),
      link: ‘https://bioalgorithms.ucsd.edu/’,
      date: ‘Jan 2022 – Jul 2024’,
      info: `
        <ul>
          <li>Co-designed GenomeDecoder (C++) for finding 10K–1M long inexact repeats in 100M-long sequences by iteratively simplifying de Bruijn graphs.</li>
          <li>Outperformed SOTA on segmental duplication detection in immune loci; browser-friendly genome-scale visualization published in Bioinformatics (2025).</li>
          <li>Improved UniAligner (suffix-array-based alignment) runtime 4–10× and integrated with GenomeDecoder to discover gene deletions across primate genomes. Nature (2025).</li>
          <li>Developed signal-processing methods using cumulative sums, FFT, and clustering for delineating bidirectionality in noisy Nanopore signals.</li>
        </ul>
      `
    },
    {
      role: ‘Software Engineer I — Systems Integration’,
      company: ‘Illumina, Inc.’,
      companylogo: require(‘../assets/img/illumina.png’),
      link: ‘https://www.illumina.com/’,
      date: ‘Jun 2022 – Dec 2022’,
      info: `
        <ul>
          <li>Developed production-grade ETL infrastructure code for high-throughput lab automation workflows processing 10,000s of samples/day.</li>
          <li>Built REST APIs and event-driven microservices using Java Spring/JDBC, SQL databases, RabbitMQ, AWS S3/SQS, and TypeScript.</li>
          <li>Deployed Dockerized services on Kubernetes with SQL stored procedures, JUnit tests, and CI/CD release workflows.</li>
        </ul>
      `
    }
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
