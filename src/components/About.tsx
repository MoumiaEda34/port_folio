"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Email, LocationOn, Phone, Cake, LinkedIn } from "@mui/icons-material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import WebIcon from "@mui/icons-material/Web";
import ApiIcon from "@mui/icons-material/Api";

interface Skill {
  name: string;
  icon: keyof typeof iconComponents;
  color: string;
}

interface AboutData {
  name: string;
  dob: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  description: string;
  skills: Skill[];
}

// Define icons as components
const iconComponents = {
  WebIcon: WebIcon,
  CodeIcon: CodeIcon,
  StorageIcon: StorageIcon,
  ApiIcon: ApiIcon,
};

export default function About() {
  const [about, setAbout] = useState<AboutData | null>(null);

  useEffect(() => {
    fetch("http://localhost:5000/about")
      .then((res) => res.json())
      .then((data) => setAbout(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  if (!about) return <p className="text-center text-gray-700">Loading...</p>;

  return (
    <section
      id="about"
      className="min-h-screen bg-white text-gray-900 py-16 px-6"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-yellow-600 text-center"
      >
        <span className="underline decoration-yellow-600">About</span> Me
      </motion.h2>

      {/* About Me Description */}
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-6 text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed"
      >
        {about.description}
      </motion.p>

      {/* Skills & Personal Info Section */}
      <div className="mt-10 max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {/* Skills Section */}
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
  className="bg-gray-100 p-6 rounded-lg shadow-md border"
>

          <h3 className="text-xl font-semibold text-blue-600 flex items-center">
            <CodeIcon className="mr-2" /> Technical Skills
          </h3>
          <ul className="mt-3 space-y-2 text-gray-700">
            {about.skills.map((skill, index) => {
              const IconComponent = iconComponents[skill.icon];
              return (
                <li key={index} className="flex items-center">
                  <IconComponent className={`mr-2 ${skill.color}`} />
                  {skill.name}
                </li>
              );
            })}
          </ul>
        </motion.div>

        {/* Personal Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="bg-gray-100 p-6 rounded-lg shadow-md border-3 border-gray-500 border-dotted"
        >
          <h3 className="text-xl font-semibold text-blue-600 flex items-center">
            <LocationOn className="mr-2" /> Personal Details
          </h3>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li className="flex items-center">
              <Cake className="mr-2 text-pink-500" /> <strong>DOB:</strong>{" "}
              {about.dob}
            </li>
            <li className="flex items-center">
              <LocationOn className="mr-2 text-red-500" /> <strong>Location:</strong>{" "}
              {about.location}
            </li>
            <li className="flex items-center">
              <Email className="mr-2 text-blue-500" /> <strong>Email:</strong>{" "}
              {about.email}
            </li>
            <li className="flex items-center">
              <Phone className="mr-2 text-green-500" /> <strong>Phone:</strong>{" "}
              {about.phone}
            </li>
            <li className="flex items-center">
              <LinkedIn className="mr-2 text-blue-600" />
              <strong>LinkedIn:</strong>
              <a
                href={about.linkedin}
                className="text-blue-500 hover:underline ml-2"
                target="_blank"
              >
                Profile
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
