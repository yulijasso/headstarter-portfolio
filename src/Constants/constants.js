/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: constants.js
   Version: I
   Creation: 02/06/2023
   Last modification: 18/12/2023
*/



import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  vercelIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  pawsitivePrototype,
  memoryGame,
  article,
  lungPrototype,
  bookSystem,
  streamFiesta,
  avatar,
  discordBot,
  leafBot,
  albumDb,
  tutorAi,
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  vercelIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hello there, I'm so happy you are here! (:",

		"My name is Yuliana, I'm a master computer science student based in Texas. I have a strong passion for the technologies related to SWE and AI.",
    "Outside of my regular activities, I'm a sneaker enthusiast, coca-cola aficionado, ping pong player, and a guinea pig lover.",
    "I'm continuously thrilled to partner with individuals and teams who wholeheartedly embrace my fervor for crafting extraordinary experiences. Your visit to my portfolio is deeply appreciated !",
    "You can download my resume here."
  ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const projects = [
  {
    name: "AI Tutoring System",
    description: 'AI Tutoring System, developed during Hack Research 2023 and took the 1st place win in AI Healthcare, is an innovative app that uses GPT-4 and advanced data extraction techniques to enhance healthcare education. By combining web scraping, embeddings, and retrieval-augmented generation, it sets a new standard for AI-driven learning tools in the medical field.',
    image: tutorAi,
    source_code_link: 'https://github.com/yuyi444/hack-research-proj.git',
    demo_link: 'https://youtu.be/ReinaBoNaWo',
  },
  {
    name: 'Bin Fiesta',
    description: 'In Bin Fiesta, I developed a Google Gemini AI-powered chatbot that provides users with personalized recycling guidance, contributing to our 1st place win in Sustainability at Frontera Hacks. The project combines real-time AI interaction with a user-friendly interface built in Next.js, encouraging eco-friendly practices through accessible recycling information.',
    image: leafBot,
    source_code_link: 'https://github.com/yuyi444/binfiesta.git',
    demo_link: 'https://youtu.be/tXxWyIuusXI',
  },
  {
    name: 'Balanced Perspective',
    description: 'The project, Balanced Perspective, aims to use deep learning for unbiased news summarization. By leveraging a CNN classifier to detect political bias and the PEGASUS transformer model for abstractive summarization, it produces summaries intended to present balanced perspectives across articles from different political spectrums​.',
    image: article,
    source_code_link: 'https://github.com/yuyi444/deep-learning-proj.git',
    demo_link: 'https://github.com/yuyi444/deep-learning-proj.git',
  },
  {
    name: 'Album Database',
    description: 'This project focuses on transferring data from an original SQLite database to a new relational schema. It involves creating tables for musicians, albums, and instruments, importing data from a CSV, and setting up relationships between these tables to support efficient data retrieval and reporting.',
    image: albumDb,
    source_code_link: 'https://github.com/yuyi444/album-database.git',
    demo_link: 'https://github.com/yuyi444/album-database.git',
  },
  {
    name: 'Image Analysis and Interpolation with Fourier Transforms',
    description: 'This project utilizes Fourier transforms to analyze and process a lung CT scan, extracting magnitude and phase spectrums and downsampling the image. Linear interpolation and zero-padding techniques are then applied to upsample the image, with mean squared error calculated to evaluate the quality of the interpolated images.',
    image: lungPrototype,
    source_code_link: 'https://github.com/yuyi444/digital-image-processing-proj.git',
    demo_link: 'https://github.com/yuyi444/digital-image-processing-proj.git',
  },
  {
    name: 'Rails Book System',
    description: 'I developed a book club management app providing the organizer, with full CRUD functionality to manage book suggestions, track reading status, and approve or reject recommendations from members. The app allows members to sign up, suggest books, and view read/unread lists, while the organizer can control the visibility of suggestions to maintain a high-quality selection process.',
    image: bookSystem,
    source_code_link: 'https://github.com/yuyi444/rails-book-system.git',
    demo_link: 'https://youtu.be/Tg-l2x3FodU',
  },

  {
    name: 'Discord Bot',
    description: 'I built a Discord bot that responds directly when users type in, #chat, followed by their message. This bot enhances interaction by providing instant replies within the same message thread, making communication seamless and engaging.',
    image: discordBot,
    source_code_link: 'https://github.com/yuyi444/discord-bot.git',
    demo_link: 'https://www.youtube.com/watch?v=mXgZDO253z4',
  }
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'html',
    title: 'HTML',
    icon: htmlIcon,
    description:
      'I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.',
  },
  {
    id: 'css',
    title: 'CSS',
    icon: cssIcon,
    description:
    'I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: jsIcon,
    description:
    'I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.',
  },
  {
    id: 'react',
    title: 'React',
    icon: reactIcon,
    description:
      'I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.',
  },
  {
    id: 'java',
    title: 'C++',
    icon: javaIcon,
    description:
      'I have extensive experience utilizing C++ for object-oriented programming (OOP) and implementing data structures.',
  },
  {
    id: 'aws',
    title: 'OpenAI',
    icon: awsIcon,
    description:
      'In my OpenAI skills, I leverage advanced AI tools to create interactive and innovative applications, pushing the boundaries of what technology can achieve in user engagement and automation',
  },
  {
    id: 'figma',
    title: 'Google Gemini AI',
    icon: figmaIcon,
    description: 'With my Google Gemini AI skills, I integrate advanced conversational AI, enhancing applications with intuitive, intelligent interactions.',
  },
  {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
    description:
    'I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.',
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: githubIcon,
    description:
      'I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.',
  },
  {
    id: 'psql',
    title: 'Firebase',
    icon: psqlIcon,
    description:
      'My Firebase skills enable me to build robust, scalable backends with real-time database functionality, authentication, and cloud storage, streamlining development and enhancing app responsiveness.',
  },
  {
    id: 'vite',
    title: 'Vercel',
    icon: vercelIcon,
    description:
      'My Vercel deployment skills enable me to streamline application launches with optimized, serverless deployment workflows, ensuring fast, secure, and scalable web projects that provide users with an exceptional experience.',
  },
  {
    id: 'py',
    title: 'Python',
    icon: pyIcon,
    description:
      'With several years of Python experience, I am adept at coding functions and creating python-based AI applications.',
  },
  {
    id: 'node',
    title: 'Node',
    icon: nodeIcon,
    description:
      'When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.',
  },
  {
    id: 'neo',
    title: 'Next',
    icon: neoIcon,
    description:
      'My Next.js skills allow me to develop dynamic, server-rendered applications with optimized performance, seamless API routing, and static generation, creating fast, SEO-friendly, and highly interactive web experiences.',
  },
  {
    id: 'raspi',
    title: 'Gradio',
    icon: raspIcon,
    description:
      'My Gradio skills empower me to create user-friendly web interfaces for machine learning models, allowing users to interact with complex models through simple, customizable interfaces, ideal for demos, rapid prototyping, and real-time model testing.',
  },
  {
    id: 'eslint',
    title: 'Docker',
    icon: eslintIcon,
    description:
      'My Docker skills enable me to streamline application development and deployment by creating portable, consistent containerized environments, ensuring seamless scalability, efficient resource management, and simplified orchestration for both development and production workflows.',
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
};
