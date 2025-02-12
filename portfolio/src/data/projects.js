import projectImage1 from "../assets/Frame.png";
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
    solution: "Lorem ipsum dolor amet, consectetuer adipiscing elit...",
    technologies: ["HTML", "CSS", "Javascript"],
    projectUrl: "under development",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    image: projectImage2, // Use the imported image
    problem: "Small businesses struggle to establish...",
    solution: "Developed a user-friendly e-commerce platform...",
    technologies: ["React", "Node.js", "MongoDB"],
    projectUrl: "https://ecommerce-demo.com",
  },
  // ... other projects
];
