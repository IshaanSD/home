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
  message: "Unraveling the complexities of the genome, its variation and evolution, particularly implications in the immune system, using Bioinformatics Algorithms and ML",
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
    "Immune system is the hub connecting Cancer, Infections, Autoimmunity, Allergies, and almost all disorders we face. However, 'immunity' is driven by hundreds of different classes of proteins. The main players, Antibodies and TCRs, originate from the allegedly most complicated region in the human genome, making personalized treatments nontrivial. My drive is to leverage Bioinformatics Algorithms and AI combined with deep Biological understanding to attain Personalized Immunogenomics -i.e predict immune respone and recommend therapies for each unique patient.",
  resume: require("https://docs.google.com/document/d/1RMcYDYB_lx-uJ98JoV91SaXBJMfhAcHRVyB8Qgp_CTk/edit?usp=sharing"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "IshaanSD",
  reposLength: 4,
  specificRepos: ['iPlots','TreeHacks']
};

// Leadership SECTION
const leadership = {
  show: true,
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
  show: true,
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
    "I'm currently looking for Bioinformatics summer internship opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "i3gupta@ucsd.edu",
};

const experiences = {
  show: true,
  heading: "Experience",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      company: 'Illumina',
      companylogo: require('../assets/img/illumina.png'),
      date: 'June 2022 – December 2022',
    },
    {
      role: 'Bioinformatics intern',
      company: 'AbterraBio',
      companylogo: require('../assets/img/Abterra-bio.jpeg'),
      date: 'June 2021 – August 2021',
    },
    {
      role: 'Bioinformatics intern',
      company: 'AbterraBio',
      companylogo: require('../assets/img/Abterra-bio.jpeg'),
      date: 'June 2021 – August 2021',
    },
    {
      role: 'Bioinformatics intern',
      company: 'AbterraBio',
      companylogo: require('../assets/img/Abterra-bio.jpeg'),
      date: 'June 2021 – August 2021',
    }    
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
