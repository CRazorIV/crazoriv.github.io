import projectImage3 from "../assets/quizzie.png";
import projectImage4 from "../assets/2048py.png";
import projectImage5 from "../assets/ymp4.png";
import projectImage6 from "../assets/luxury-autos.png";
// Import other images as needed

export const projects = [
  {
    id: 1,
    title: "Luxury Autos",
    image: projectImage6,
    problem:
      "I wanted to practice my React skills and build a modern frontend for a car dealership.",
    solution: "A nice sleek modern frontend that showcases luxury cars.",
    technologies: ["React", "JavaScript", "CSS", "HTML"],
    projectUrl: "https://github.com/CRazorIV/Luxury-Autosport",
  },
  {
    id: 2,
    title: "2048py",
    image: projectImage4, // Use the imported image
    problem:
      "I wanted to practice my Python skills with general programming concepts and building UI's with TKinter",
    solution:
      "A game I made to practice my Python skills and building UI's with TKinter",
    technologies: ["Python"],
    projectUrl: "https://github.com/CRazorIV/2048py",
  },
  {
    id: 3,
    title: "Youtube mp4 downloader",
    image: projectImage5, // Use the imported image
    problem:
      "I wanted a convient tool for downloading .mp4 files for my projects from Youtube. But every website or tool I used contained some form of ads",
    solution:
      "So I made a Python script to download .mp4 videos from Youtube URLS without annoying ads.",
    technologies: ["Python"],
    projectUrl: "https://github.com/CRazorIV/YT_downloader",
  },
  {
    id: 4,
    title: "Quizzie",
    image: projectImage3, // Use the imported image
    problem:
      "The client asked me and my team to make a quiz application like Kahoot.",
    solution:
      "A quiz application that allows users to create and take quizzes, with features like multiple choice questions, timers, and score tracking.",
    technologies: ["HTML", "CSS", "JavaScript"],
    projectUrl: "https://101356.stu.sd-lab.nl/quizzie/index.html",
  },
  // ... other projects
];
