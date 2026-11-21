import { create } from "zustand";

export const useProjectStore = create(() => ({
    projects : [
        {
            id: "bus-reservation-app",
            title: "Bus Reservation System",
            description:
            "Full-stack bus reservation application with admin and user modules, ticket booking, validation, and email notifications.",
            techStack: [
            "Java",
            "Spring Boot",
            "REST APIs",
            "MySQL",
            "React",
            "HTML",
            "CSS",
            ],
            githubLink: "https://github.com/darshankognole/Reservation-API",
            liveLink: "",
        },
        {
            id: "health-fitness-app",
            title: "Health & Fitness App",
            description:
            "Backend-driven health and fitness application with user management, activity tracking, and RESTful services.",
            techStack: [
            "Java",
            "Spring Boot",
            "Spring MVC",
            "Spring Data JPA",
            "MySQL",
            ],
            githubLink: "https://github.com/your-username/health-fitness-app",
            liveLink: "",
        },
        {
            id: "appointment-booking-app",
            title: "Online Appointment Booking App",
            description:
            "React-based appointment booking application with reusable components, API integration, and responsive design.",
            techStack: ["React", "JavaScript", "HTML", "CSS"],
            githubLink: "https://github.com/darshankognole/Hospital-management-system",
            liveLink: "",
        }
    ]
}))