"use client";

import { useEffect, useState } from "react";
import { CardContent, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import WebIcon from "@mui/icons-material/Web";
import ApiIcon from "@mui/icons-material/Api";
import { motion } from "framer-motion";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

// Icon Map
const iconComponents = {
  CodeIcon: CodeIcon,
  StorageIcon: StorageIcon,
  WebIcon: WebIcon,
  ApiIcon: ApiIcon,
};

// Service Interface
interface Service {
  title: string;
  description: string;
  icon: keyof typeof iconComponents;
}

// Background colors for cards
const cardColors = [
  "bg-blue-600",
  "bg-green-600",
  "bg-purple-600",
  "bg-pink-600",
];

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);

  const fetchBlog = async () => {
    try {
      const blogs = await client.fetch(groq`*[_type=="Services"]`);
      console.log(blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

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
      className="min-h-screen flex flex-col items-center justify-center text-white py-16 px-6"
      style={{
        background: "linear-gradient(to bottom right, skyblue, purple)",
      }}      
    >
      <h2 className="text-4xl font-bold shadow-text">
        My Services
      </h2>
      <p className="mt-4 max-w-2xl text-center text-lg text-gray-100">
        I specialize in <span className="font-semibold">Advanced JavaScript, React.js, and PHP development</span> to create high-performance, scalable web applications.
      </p>

      {/* Services Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl">
        {services.map((service, index) => {
          const IconComponent = iconComponents[service.icon];
          const cardColor = cardColors[index % cardColors.length];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                scale: 1.08,
                rotateX: 10,
                rotateY: -10,
                boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.4)",
              }}
              className={`rounded-2xl ${cardColor} shadow-2xl transition-all duration-500`}
            >
              <CardContent className="p-10 flex flex-col items-center text-center">
                {/* Icon Animation */}
                <motion.div whileHover={{ rotate: 15, scale: 1.3 }} className="mb-6">
                  <IconComponent sx={{ fontSize: 80, color: "#ffffff" }} />
                </motion.div>

                <Typography variant="h5" className="font-bold text-white mb-4">
                  {service.title}
                </Typography>
                <Typography variant="body1" className="text-gray-200">
                  {service.description}
                </Typography>
              </CardContent>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
