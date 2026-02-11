import { create } from "zustand";

export const useSkillStore = create(() => ({
  skillCategories: [
    {
      id: "programming",
      title: "Programming Skills",
      skills: ["Java", "C", "C++", "Python"]
    },
    {
      id: "web",
      title: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: "frameworks",
      title: "Frameworks & Libraries",
      skills: ["Spring Boot", "React", "Hibernate"]
    },
    {
      id: "databases",
      title: "Databases & Tools",
      skills: ["MySQL", "Git", "Postman"]
    },
    {
      id: "core",
      title: "Core Concepts",
      skills: ["OOPs", "DSA", "REST APIs"]
    },
    {
      id: "soft",
      title: "Soft Skills",
      skills: ["Communication", "Problem Solving", "Team Work"]
    }
  ]
}));
