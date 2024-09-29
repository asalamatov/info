import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    nau,
    cs,
    acm,
    google,
    portfolio,
    pdf_audio,
    threejs,
    c,
    cpp,
    django,
    java,
    jdbc,
    pyin,
    python,
    sql,
    google0,
    meta0,
    ucpp,
    uexcel,
    ufront,
    ugit,
    ujava,
    upython100,
    usql,
    ibm_ai_engineering_badge,
    ibm_ful_stack_badge,
    meta_full_stack_badge,
    google_adv_data_badge,
    google_python_badge,
    nau_badge,
    meta_backend_badge,
    meta_frontend_badge,
    uc_logo,
} from "../assets";

export const badges = [
  meta_full_stack_badge,
  google_adv_data_badge,
  ibm_ai_engineering_badge,
  meta_backend_badge,
  google_python_badge,
  ibm_ful_stack_badge,
  nau_badge,
  meta_frontend_badge,
  uc_logo,
]

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
      title: "Data Scientist",
      icon: web,
    },
    {
      title: "Full Stack Developer",
      icon: mobile,
    },
    {
      title: "PhD Researcher",
      icon: backend,
    },
    {
      title: "Data Analyst",
      icon: creator,
    },
  ];

  const technologies = [
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    // {
    //   name: "JavaScript",
    //   icon: javascript,
    // },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
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
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    // {
    //   name: "C",
    //   icon: c,
    // },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Django",
      icon: django,
    },
    // {
    //   name: "GitHub",
    //   icon: githubpng,
    // },
    {
      name: "SQL",
      icon: sql,
    },
  ];

/*
Contributed to the development of a computer vision app using Python Tensorflow with 6 CNN models, achieving 91-99% accuracy.
Created Demo video with UI explanation for YouTube and potential customers, companies.
Authored automation scripts, boosting efficiency and speed.
Collaborated to writing and publishing a 15-page research paper detailing project innovations in AI.
Contributed to thorough documentation and intuitive UI with Streamlit.
*/


  const experiences = [
    {
      title: 'Software Engineer',
      company_name: 'North American University (NAU)',
      icon: nau,
      iconBg: '#383E56',
      date: 'Oct 2022 - Present',
      points: [
        'Developing New Student Application Portal Front-End App with Next.js for NAU Admissions Office.',
        'Leveraged Salesforce and Selenium WebDriver, combining people skills with tech expertise for process automation, quality assurance, web scraping and data analysis.',
        'Increased process efficiency by 30%, improving the admissions experience for all involved parties using automation scripts for WhatsApp Web, and LLMs for automatic replies.',
        'Automated the creation of HR reports using Python, Excel, reducing the process time by 70%.',
        'Used SQL to preprocess data, as well as MS Visual Basic to automate Excel processes, enabling efficient analysis of HR records by 40% and reducing manual data entry by 70%.',
      ],
    },
    {
      title: 'AI Enabler Intern',
      company_name: 'Rediminds, Inc',
      icon: cs,
      iconBg: '#E6DEDD',
      date: 'Mar 2023 - Present',
      points: [
        'Mentored students in using Linux as a development environment, providing guidance on installation, configuration, and command-line tools.',
        'Instructed on computer networks and cyber security concepts with a focus on software engineering applications, including secure coding practices, network protocols, version control, and cloud infrastructure security',
      ],
    },
    {
      title: 'ICPC-ACM Club Vice-President',
      company_name: 'ICPC-ACM',
      icon: acm,
      iconBg: '#383E56',
      date: 'Jan 2023 - Present',
      points: [
        'Leading in Hackathon, building Projects using Python, React.js, Front-End',
        'Organizing events on computing, AI, Technology, Internships, Career Paths.',
        'Building websites with responsive design and ensuring cross-browser compatibility.',
        'Participating in code reviews and providing constructive feedback to other developers.',
      ],
    },
    {
      title: 'Google Data Analytics Bootcamp',
      company_name: 'Certified by Google',
      icon: google,
      iconBg: '#E6DEDD',
      date: 'Mar 2023 - Present',
      points: [
        'Predicted Employee Leaving a Company & identified its factors with Machine Learning',
        'Used regression for California House Price predictions, integrated with BackEnd App using FastAPI',
        'Developed an automated catalog update system for an online fruit store.',
        'Incorporated server health monitoring and alerts. Automation: Linux, Python, Computer Vision, Google Cloud, Git, GitHub',
      ],
    },
    {
      title: 'Meta Full Stack Bootcamp',
      company_name: 'Certified by Meta',
      icon: meta,
      iconBg: '#E6DEDD',
      date: 'Apr 2023 - Present',
      points: [
        'Developed "LittleLemon", a Django-based restaurant web app with MySQL integration.',
        'Implemented RESTful APIs, user authentication, and unit tests.',
        'Created user-centric design and consistent branding using React, UX/UI for "LittleLemon".',
        'Designed reservation system, user feedback, and confirmation mechanisms.',
      ],
    },
  ];

  const testimonials = [
    {
      testimonial:
        "Azamat Salamatov has successfully completed the online, non-credit Professional Certificate Meta Front-end Developer.",
      name: "Meta",
      designation: "Staff",
      company: "Meta",
      image: meta,
    },
    {
      testimonial:
        "Azamat Salamatov has successfully completed Professional Certificate Google IT Automation with Python.",
      name: "Google",
      designation: "Staff",
      company: "Google",
      image: google,
    },
    {
      testimonial:
        "Here could be Your Message to the World! Contact me by the form below. And your message may be placed here.",
      name: "Your Name",
      designation: "CEO",
      company: "Your Company",
      image: "https://randomuser.me/api/portraits/lego/9.jpg",
    },
  ];

  const projects = [
    {
      name: "Portfolio Website",
      description:
        "Web-based platform that allows users to learn about myself.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://www.azamatsalamatov.com",
    },
    {
      name: "People Database Management with Java, SQL, OOP.",
      description:
        "Web application that enables users to search for jewelry, view estimated price ranges for items.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "database",
          color: "green-text-gradient",
        },
        {
          name: "oop",
          color: "pink-text-gradient",
        },
      ],
      image: jdbc,
      source_code_link: "https://github.com/asalamatov/JavaCourse",
    },
    {
      name: "Automated LinkedIn Application with Python",
      description:
        "An automated code to easy-apply in LinkedIn for software engineer jobs in 100 mile radius",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "selenium",
          color: "green-text-gradient",
        },
        {
          name: "automation",
          color: "pink-text-gradient",
        },
      ],
      image: pyin,
      source_code_link: "https://github.com/asalamatov/100-days-of-python-projects/blob/main/Day_49_LinkedIn_Application_Automation/main.py",
    },
  ];

  const accomplishments = [
    {
      name: "Google IT Automation with Python",//0
      description:
        "Professional Specialization by Google.",
      tags: [
        {
          name: "automation",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "linux",
          color: "pink-text-gradient",
        },
      ],
      image: google0,
      source_code_link: "https://www.coursera.org/account/accomplishments/specialization/certificate/QVTJ2M3TG548",
    },
    {
      name: "Meta Front End Developer", //0
      description:
        "Professional Front-End Developer Certificate by Meta.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "ux/ui",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "js",
          color: "pink-text-gradient",
        },
      ],
      image: meta0,
      source_code_link: "https://coursera.org/verify/professional-cert/NQT3Q389WDGX",
    },
    // {
    //   name: "C++ Programming: Beginner to Advanced",//9
    //   description:
    //     "Complete C++ Certificate",
    //   tags: [
    //     {
    //       name: "c++",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "stl",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "algorithms",
    //       color: "pink-text-gradient",
    //     },
    //     {
    //       name: "datastructures",
    //       color: "blue-text-gradient",
    //     },
    //   ],
    //   image: ucpp,
    //   source_code_link: "https://www.udemy.com/certificate/UC-a1a64c1e-bd65-42f1-9432-f5d91fbf8921/",
    // },
    // {
    //   name: "Complete SQL Mastery",//9
    //   description:
    //     "MySQL Database Certificate",
    //   tags: [
    //     {
    //       name: "sql",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "database",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "mysql",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: usql,
    //   source_code_link: "https://codewithmosh.com/courses/525068/certificate",
    // },
    {
      name: "100 Day of Code: Complete Python Pro",//9
      description:
        "Professional Python Certificate",
      tags: [
        {
          name: "automation",
          color: "blue-text-gradient",
        },
        {
          name: "datascience",
          color: "green-text-gradient",
        },
        {
          name: "webdevelopment",
          color: "pink-text-gradient",
        },
      ],
      image: upython100,
      source_code_link: "https://www.udemy.com/certificate/UC-9e76c763-926c-427d-97e1-a5b0ff1ffc02/",
    },
    {
      name: "Prefessional Java Developer Certificate",//9
      description:
        "Complete Java Certificate",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "oop",
          color: "green-text-gradient",
        },
        {
          name: "database",
          color: "pink-text-gradient",
        },
      ],
      image: ujava,
      source_code_link: "https://www.udemy.com/certificate/UC-995b7708-d32f-487d-bbb6-470654b5781c/",
    },
  ];

  export { services, technologies, experiences, testimonials, projects, accomplishments };