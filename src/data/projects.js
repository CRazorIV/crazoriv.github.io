import projectImage2 from "../assets/yuri.png";
import projectImage3 from "../assets/QuizzieScreenshot.png";
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
    // projectUrl: "under development",
  },
  {
    id: 2,
    title: "Work in progress...",
    image: projectImage2, // Use the imported image
    problem: "There is still a lot of work to do",
    solution: "So let me keep working on it ;)",
    // technologies: ["React", "Node.js"],
    projectUrl: "https://ecommerce-demo.com",
  },
  // ... other projects
];
