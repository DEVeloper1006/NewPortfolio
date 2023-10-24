import { data } from "autoprefixer";
import {
    camera,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    threejs,
    macai,
    tutorax,
    dcm,
    java,
    python,
    c,
    haskell,
    dataAnalytics,
    proweather,
    oskarcuts
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Photographer",
      icon: camera,
    },
    {
      title: "Front-End Developer",
      icon: web
    },
    {
      title: "Data Analyst",
      icon: dataAnalytics
    }

  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "java",
      icon: java
    },
    {
      name: "python",
      icon: python
    },
    {
      name: 'c',
      icon: c
    },
    {
      name: 'haskell',
      icon: haskell
    }
  ];
  
  const experiences = [
    {
      title: "Envelope Catcher",
      company_name: "DCM Group",
      icon: dcm,
      iconBg: "#ffffff",
      date: "May 2023 - June 2023",
      points: [
        "Transported envelopes produced by a printing machine to designated counters, as directed by the print operator, in preparation for shipping",
        "Cleaned and maintained various operational stations, ensuring a higher standard of work hygiene and organization",
        "Collaborated with the print operator to ensure a seamless process of transporting printed envelopes to the designated counters for shipment."
      ],
    },
    {
      title: "Mathematics Tutor",
      company_name: "Tutorax",
      icon: tutorax,
      iconBg: "#ffffff",
      date: "July 2023 - Present",
      points: [
        "Delivered tailored tutoring sessions to students, catering to their unique requirements, academic objectives, and preferred learning approaches",
        "Created individualized lesson plans and learning resources that cater to students' specific learning needs",
        "Employed a range of teaching techniques to enhance comprehension and engagement, ensuring effective knowledge transfer",
        "Maintained open and effective communication with students to address concerns, provide clarifications, and facilitate learning",
        "Motivated students to excel academically through positive reinforcement and recognition of their achievements"
      ],
    },
    {
      title: "Project Team Member",
      company_name: "McMaster Artificial Intelligence Society",
      icon: macai,
      iconBg: "#ffffff",
      date: "October 2023 - Present",
      points: [
        "Collaborating on innovative AI/ML projects, enhancing my skills and knowledge in the field",
        "Involved in a Syllabus AI Chat Bot Project For the McMaster AI Society Project Expo",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "ProWeather",
      description:
        "User-friendly weather web application to simplify weather information, which would be accessible by everyone, using the OpenWeatherMap REST API",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient"
        },
        {
          name: "tailwind",
          color: "red-text-gradient",
        },
      ],
      image: proweather,
      source_code_link: "https://github.com/DEVeloper1006/ProWeather",
    },
    {
      name: "OskarCuts Official Website",
      description:
        "A website developed for a local barber to make booking appointments more visually pleasing and efficient",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: oskarcuts,
      source_code_link: "https://github.com/DEVeloper1006/OCWebsite",
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };