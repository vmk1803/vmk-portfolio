const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://rajshekhar26.github.io/cleanfolio",
  title: "VMK.",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Murali Krishna",
  role: "Full-Stack Web Developer",
  description: "INNOVATION. CREATIVITY .ANALYSIS",
  resume:
    "https://drive.google.com/file/d/11ltpuqLrbtuj3r2CeNuzIV1imWvG2Bfg/view?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/vasantha-murali-krishna-716496205/",
    github: "https://github.com/vmk1803",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "JioMart Clone",
    image_url: "https://github.com/vmk1803/Jiomart/raw/main/rsc/home.png",
    description:
      "Jio Mart is online E-commerce website with wide vareity of items like Grocery, home needs and clothing for all gender groups.",
    stack: ["JavaScipt", "HTML", "CSS"],
    sourceCode: "https://github.com/vmk1803/Jiomart",
    livePreview: "loving-euler-653170.netlify.app/",
  },
  {
    name: "LyndaClone",
    image_url: "https://miro.medium.com/max/1050/1*xq62yhMyV26VhuNTDMKL6w.png",
    description:
      "Lynda is a subsciption based web application to learn Tech Skills. Contains wide variety of courses divided and categorized into different sections.",
    stack: ["HTML", "JavaScript", "CSS"],
    sourceCode: "https://github.com/vmk1803/LyndaCloneTeam18_U3",
    livePreview:
      "https://620641ea7e475d9219b99401--affectionate-leakey-0e07e7.netlify.app/",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Material UI",
  "Git",
  "VS code",
  "Express Js",
  "Node Js",
  "CLI Bash",
  "MongoDB",
  "AWS",
  "NPM",
  "Postman",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "vmk1803@gmail.com",
};

export { header, about, projects, skills, contact };
