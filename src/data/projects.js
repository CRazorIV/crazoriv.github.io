import projectImage3 from "../assets/quizzie.png";
import projectImage4 from "../assets/2048py.png";
// Import other images as needed

export const projects = [
  {
    id: 1,
    title: "Quizzie",
    image: projectImage3, // Use the imported image
    problem:
      "The client asked me and my team to make a quiz application like Kahoot.",
    solution:
      "A quiz application that allows users to create and take quizzes, with features like multiple choice questions, timers, and score tracking.",
    technologies: ["HTML", "CSS", "JavaScript"],
    projectUrl: "https://101356.stu.sd-lab.nl/quizzie/index.html",
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
  // ... other projects
];
