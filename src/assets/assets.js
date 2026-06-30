export const dummyResumeData = [
  {
    _id: "1",
    resumeId: "RES001",
    resumeTemplate: "classic", // modern | classic | minimal | professional
    updatedAt: "2026-06-20",

    personalInfo: {
      fullName: "John Doe",
      jobTitle: "Frontend Developer",
      email: "johndoe@example.com",
      phone: "+91 9876543210",
      location: "Delhi, India",
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
    },

    summary:
      "Passionate Frontend Developer with experience in React, JavaScript, and Tailwind CSS. Skilled in building responsive and user-friendly web applications.",

    education: [
      {
        id: "edu1",
        degree: "B.Tech in Computer Science",
        institution: "ABC University",
        startDate: "2021-08",
        endDate: "2025-05",
        cgpa: "8.5",
      },
    ],

    experience: [
      {
        id: "exp1",
        company: "XYZ Pvt Ltd",
        position: "Frontend Developer Intern",
        startDate: "2025-01",
        endDate: "2025-06",
        description:
          "Developed responsive UI components using React and Tailwind CSS.",
      },
    ],

    projects: [
      {
        id: "proj1",
        title: "Resume Builder",
        description:
          "Built an AI-powered resume builder using React, Tailwind CSS, and Node.js.",
        technologies: ["React", "Tailwind CSS", "Node.js"],
        github: "https://github.com/johndoe/resume-builder",
        startDate: "2025-01",
        endDate: "2025-03",
      },
      {
        id: "proj2",
        title: "Nestify",
        description:
          "A property rental platform with modern UI and authentication.",
        technologies: ["React", "Firebase", "Tailwind CSS"],
        github: "https://github.com/johndoe/nestify",
        startDate: "2025-01",
        endDate: "2025-03",
      },
    ],

    skills: [
      { id: "skill1", name: "HTML" },
      { id: "skill2", name: "CSS" },
      { id: "skill3", name: "JavaScript" },
      { id: "skill4", name: "React" },
      { id: "skill5", name: "Tailwind CSS" },
      { id: "skill6", name: "Node.js" },
      { id: "skill7", name: "MongoDB" },
      { id: "skill8", name: "Git" },
      { id: "skill9", name: "GitHub" },
    ],

    certifications: [
      {
        id: "cert1",
        name: "Frontend Development Certification",
      },
      {
        id: "cert2",
        name: "JavaScript Essentials",
      },
    ],

    languages: [
      { id: "lang1", name: "English" },
      { id: "lang2", name: "Hindi" },
    ],
  },
];