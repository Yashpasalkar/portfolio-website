
import { Project, Skill, Education, ContactInfo } from './types';

export const NAME = "Yash Pasalkar";
export const HEADLINE = "Aspiring Software Developer passionate about Java, Spring Boot, and Web Development";

export const PROFESSIONAL_OVERVIEW = "Motivated MCA graduate with strong skills in Java programming, backend development, and web technologies. Proficient in Java, Python, HTML, CSS, and JavaScript, with a solid foundation in object-oriented programming, data structures, and problem-solving. Demonstrates a commitment to continuous learning and adaptability, with strong analytical thinking and collaboration skills. Keen to contribute to innovative software solutions and grow as a Java developer in the IT industry";


export const CONTACT_INFO: ContactInfo = {
  phone: "7019880291",
  email: "yashpasalkar816@gmail.com",
  location: "Karnataka, India",
  linkedin: "https://www.linkedin.com/in/yash-pasalkar/",
  github: "https://github.com/Yashpasalkar" // Placeholder
};

export const PROJECTS: Project[] = [
  {
    title: "E-Cart Website",
    goal: "To create an online platform for shopping with a simple cart interface.",
    features: "Product listing, add-to-cart functionality, responsive design.",
    technologies: ["HTML", "CSS", "Java","SpringBoot","Mysql","Spring MVC","Spring JPA"],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUu6QZjVyzhmgHimt1C8bNsH3XtWCvxPwxYw&s"
  },
    {
    title: "Real-Time Chat Application",
    goal: "To develop a web-based chat application enabling real-time communication.",
    features: "user authentication,muiltiple chat rooms",
    technologies: ["HTML", "CSS", "Java","SpringBoot","Mysql","Spring MVC","Spring JPA","Spring Security","Thymeleaf"],
    imageUrl: "https://thecrazyprogrammer.com/wp-content/uploads/2020/08/How-a-Real-Time-Chat-Application-Works.png"
  },
  
  {
    title: "Portfolio Website",
    goal: "To build a personal portfolio to showcase skills and projects.",
    features: "About section, projects display, contact form, responsive layout.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    imageUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop"
  }
];

export const SKILLS: Skill[] = [
    { name: "Java", category: "Languages" },
    { name: "Python", category: "Languages" },
    { name: "C", category: "Languages" },
    { name: "JavaScript", category: "Web Development" },
    { name: "HTML5", category: "Web Development" },
    { name: "CSS3", category: "Web Development" },
    { name: "React.js", category: "Web Development" },
    { name: "Node.js", category: "Web Development" },
    { name: "Express.js", category: "Web Development" },
    { name: "MongoDB", category: "Databases" },
     { name: "Postgres", category: "Databases" },
    { name: "MERN Stack", category: "Web Development" },
    { name: "Bootstrap", category: "Web Development" },
    { name: "Git & GitHub", category: "Tools" },
    { name: "Postman", category: "Tools" },
    { name: "Spring Boot", category: "Framework" },
    { name: "Hibernate", category: "Framework" },
     { name: "Spring MVC", category: "Framework" },
      { name: "Spring Security", category: "Framework" },
       { name: "Spring JPA", category: "Framework" },
       { name: "React",category: "Framework" },
       { name: "Thymeleaf",category:"Framework"},
       { name: "Tailwind CSS",category:"Framework"}
       
];

export const EDUCATION_DATA: Education[] =[ {
  degree: "Master's of Computer Applications (MCA)",
  institution: "Visvesvaraya Technological University, Belagavi",
  cgpa: "7.1",
  year: "Year of Passing: 2025"
  
},
{
  degree: "Bachlor's of Computer Applications (MCA)",
  institution: "JSS INSTITUTE OF UG AND PG STUDIES, DHARWAD",
  cgpa: "7.0",
  year: "Year of Passing: 2023",
}
];


export const LANGUAGES_KNOWN = "English, Kannada and Hindi";
