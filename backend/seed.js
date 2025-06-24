import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from './models/Project.js';
import { connectDB } from './config/database.js';

dotenv.config();

const sampleProjects = [
  {
    title: "E-Commerce Website",
    description: "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
    longDescription: "Built with React, Node.js, Express, and MongoDB. Features include user registration/login, product catalog, shopping cart, order management, and Stripe payment integration. Responsive design with modern UI/UX.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT", "Tailwind CSS"],
    images: [
      {
        url: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
        alt: "E-commerce website screenshot"
      }
    ],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/chandumakavana/ecommerce-project",
    category: "web",
    status: "completed",
    featured: true,
    order: 1
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    longDescription: "Full-stack application built with MERN stack. Features include task creation, assignment, status tracking, team collaboration, real-time notifications, and project management dashboard.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
    images: [
      {
        url: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
        alt: "Task management app screenshot"
      }
    ],
    liveUrl: "https://example-taskmanager.com",
    githubUrl: "https://github.com/chandumakavana/task-manager",
    category: "web",
    status: "completed",
    featured: true,
    order: 2
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather application with location-based forecasts and interactive maps.",
    longDescription: "React-based weather application using OpenWeatherMap API. Features include current weather, 7-day forecast, location search, weather maps, and responsive design for all devices.",
    technologies: ["React", "JavaScript", "CSS3", "OpenWeatherMap API", "Chart.js"],
    images: [
      {
        url: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
        alt: "Weather dashboard screenshot"
      }
    ],
    liveUrl: "https://example-weather.com",
    githubUrl: "https://github.com/chandumakavana/weather-dashboard",
    category: "web",
    status: "completed",
    featured: false,
    order: 3
  },
  {
    title: "Blog Platform",
    description: "A modern blogging platform with rich text editor and content management system.",
    longDescription: "Full-featured blogging platform with user authentication, rich text editor, comment system, category management, and admin dashboard. Built with modern web technologies.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Quill.js", "Cloudinary"],
    images: [
      {
        url: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg",
        alt: "Blog platform screenshot"
      }
    ],
    liveUrl: "https://example-blog.com",
    githubUrl: "https://github.com/chandumakavana/blog-platform",
    category: "web",
    status: "in-progress",
    featured: false,
    order: 4
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects and skills with modern design.",
    longDescription: "Responsive portfolio website built with React and Tailwind CSS. Features include project showcase, contact form, smooth animations, and modern UI design.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Vite"],
    images: [
      {
        url: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
        alt: "Portfolio website screenshot"
      }
    ],
    liveUrl: "https://chandumakavana.com",
    githubUrl: "https://github.com/chandumakavana/portfolio",
    category: "web",
    status: "completed",
    featured: true,
    order: 5
  },
  {
    title: "REST API Server",
    description: "A robust REST API server with authentication, validation, and comprehensive documentation.",
    longDescription: "Node.js REST API with Express framework, MongoDB integration, JWT authentication, input validation, rate limiting, and comprehensive API documentation using Swagger.",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Joi", "Swagger"],
    images: [
      {
        url: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
        alt: "API documentation screenshot"
      }
    ],
    githubUrl: "https://github.com/chandumakavana/rest-api-server",
    category: "api",
    status: "completed",
    featured: false,
    order: 6
  }
];

const seedDatabase = async () => {
  try {
    await connectDB();
    
    // Clear existing projects
    await Project.deleteMany({});
    console.log('🗑️  Cleared existing projects');
    
    // Insert sample projects
    await Project.insertMany(sampleProjects);
    console.log('🌱 Sample projects seeded successfully');
    
    console.log('✅ Database seeding completed');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();