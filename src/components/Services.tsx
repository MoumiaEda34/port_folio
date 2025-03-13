"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import WebIcon from "@mui/icons-material/Web";
import ApiIcon from "@mui/icons-material/Api";
import { motion } from "framer-motion";

// Define icons as components
const iconComponents = {
  CodeIcon: CodeIcon,
  StorageIcon: StorageIcon,
  WebIcon: WebIcon,
  ApiIcon: ApiIcon,
};

// Define TypeScript interface for services
interface Service {
  title: string;
  description: string;
  icon: keyof typeof iconComponents; // Restrict values to available icons
}

// Background colors array (for 4 different cards)
const cardColors = [
  "bg-blue-600",
  "bg-green-600",
  "bg-purple-600",
  "bg-yellow-600",
];

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Error fetching services:", err));
  }, []);

  if (services.length === 0)
    return <p className="text-center text-gray-300">Loading...</p>;

  return (
    <section
      id="services"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white py-16 px-6"
    >
      <h2 className="text-4xl font-bold text-yellow-600">My Services</h2>
      <p className="mt-4 max-w-2xl text-center text-lg text-gray-300">
        I specialize in **Advanced JavaScript, React.js, and PHP development**
        to create high-performance, scalable web applications.
      </p>

      {/* Services Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl">
        {services.map((service, index) => {
          const IconComponent = iconComponents[service.icon];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }} // Staggered effect
            >
              <Card
                className={`${cardColors[index % cardColors.length]} text-white shadow-lg hover:shadow-2xl transition-all`}
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4">
                    <IconComponent fontSize="large" />
                  </div>
                  <Typography variant="h5" className="font-bold text-blue-500">
                    {service.title}
                  </Typography>
                  <Typography variant="body1" className="mt-2 text-gray-500">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
