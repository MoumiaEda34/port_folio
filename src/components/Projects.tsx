'use client';
import { useState, useEffect } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Modal,
  Box,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { client } from "@/sanity/lib/client";
import groq from 'groq'; // ✅ Added groq import

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Online Puja Services, Online Puja Booking',
    description:
      'Pujapariseva.com is an online platform offering a wide range of puja services, rituals, and spiritual ceremonies, allowing users to book them effortlessly.',
    image: '/images/puja-pariseva.png',
    category: 'ASP.NET Development',
  },
  {
    id: 2,
    title: 'Yum Drop - Food Delivery App',
    description:
      'A mobile application designed for smooth food ordering, real-time delivery tracking, and secure online payment integration.',
    image: '/images/yum-drop.png',
    category: 'React.js Development',
  },
  {
    id: 3,
    title: 'Fastinfo Attendance Portal',
    description:
      'A web-based attendance management portal designed to simplify employee tracking, attendance monitoring, and reporting.',
    image: '/images/fast-info.png',
    category: 'Web',
  },
  {
    id: 4,
    title: 'Travel Company',
    description:
      'A professionally designed landing page for a travel agency, highlighting tour packages, destinations, and easy booking options.',
    image: '/images/travel-company.png',
    category: 'React.js Development',
  },
  {
    id: 5,
    title: 'Laravel Blog Application',
    description:
      'A feature-rich blog platform built with Laravel, including post management, category filtering, comments, and an admin dashboard.',
    image: '/images/laravel-blog.png',
    category: 'PHP Development',
  },
  {
    id: 6,
    title: 'Online Store',
    description:
      'A fully responsive e-commerce website featuring product listings, shopping cart functionality, and secure checkout integration.',
    image: '/images/online-store.png',
    category: 'React.js Development',
  },
  {
    id: 7,
    title: 'DigitalEdgeX - Driving Revenue with Digital Maturity',
    description:
      'DigitalEdgeX enables businesses to achieve digital maturity by automating marketing operations, improving efficiency, and driving revenue growth.',
    image: '/images/digital-edge.png',
    category: 'PHP Development',
  },
  {
    id: 8,
    title: 'Book Orchid - Online Library Management System',
    description:
      'An online library management system designed to manage book collections, user registrations, and borrowing activities efficiently with a user-friendly interface.',
    image: '/images/book-orchid.png',
    category: 'React.js Development',
  },
  {
    id: 9,
    title: 'Shop Online',
    description:
      'A modern online shopping platform featuring responsive design, product catalogs, cart management, and secure checkout for a seamless user experience.',
    image: '/images/shop-online.png',
    category: 'React.js Development',
  },
];

const categories = ['All', 'PHP Development', 'ASP.NET Development', 'React.js Development'];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const fetchProjects = async () => {
    try {
      const blogs = await client.fetch(groq`*[_type=="Projects"]`);
      console.log(blogs);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProject(null);
  };

  return (
    <section id="my work" className="bg-white-700 py-16" style={{
      background: "linear-gradient(to bottom right, skyblue, purple)",
    }}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold shadow-text text-center">
          My Work
        </h2>

        {/* Category Tabs */}
        <div className="flex gap-4 justify-center mb-10 mt-8">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? 'contained' : 'outlined'}
              color="secondary"
              onClick={() => setActiveCategory(cat)}
              sx={{
                borderRadius: '9999px',
                textTransform: 'capitalize',
                backgroundColor: activeCategory === cat ? 'white' : 'transparent',
                color: activeCategory === cat ? '#9333ea' : 'white',
                borderColor: 'white',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'white',
                  color: '#9333ea',
                  borderColor: 'white',
                },
              }}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project) => (
            <Card
              key={project.id}
              sx={{
                borderRadius: '20px',
                boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.3)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
                sx={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  className="font-semibold mb-2 text-purple-600 text-center"
                >
                  {project.title}
                </Typography>
                <div className="flex justify-center mt-4">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#ec4899',
                      textTransform: 'capitalize',
                      '&:hover': { backgroundColor: '#db2777' },
                      borderRadius: '9999px',
                      paddingX: '24px',
                    }}
                    onClick={() => handleOpenModal(project)}
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal for Project Details */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute' as const, // ✅ TS-safe cast
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            maxWidth: '800px',
            bgcolor: 'background.paper',
            borderRadius: '16px',
            boxShadow: 24,
            p: 4,
          }}
        >
          {/* Close Button */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton
              onClick={handleCloseModal}
              sx={{
                backgroundColor: '#ec4899',
                color: 'white',
                '&:hover': { backgroundColor: '#db2777' },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {selectedProject && (
            <>
              <CardMedia
                component="img"
                height="300"
                image={selectedProject.image}
                alt={selectedProject.title}
                sx={{
                  borderRadius: '12px',
                  mb: 3,
                  objectFit: 'cover',
                  width: '100%',
                }}
              />
              <Typography variant="h4" gutterBottom className="text-purple-600">
                {selectedProject.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {selectedProject.description}
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </section>
  );
}
