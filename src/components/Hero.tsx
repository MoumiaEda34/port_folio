"use client";

import Image from "next/image";
import { useEffect, useState, Suspense } from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

export default function Hero() {
  const [profile, setProfile] = useState<{ name: string; role: string; image: string } | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("http://localhost:5000/profile");
        const data = await res.json();
        setProfile(data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchProfile();
  }, []);

  if (!profile) return <p className="text-white">Loading...</p>;

  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between h-screen 
                 bg-gradient-to-r from-[#0f172a] to-[#0f172a] px-6 max-w-7xl mx-auto gap-16"
    >
      {/* Left Side - Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative flex-shrink-0 md:w-1/3 w-44 h-100 p-4 bg-[#1e293b] rounded-lg shadow-lg flex justify-center"
      >
        <Suspense fallback={<div className="w-full h-full bg-gray-700 animate-pulse"></div>}>
          <Image
            src={profile.image}
            alt={profile.name}
            width={300}
            height={300}
            className="object-cover w-full h-auto rounded-md"
            loading="lazy"
          />
        </Suspense>
      </motion.div>

      {/* Right Side - Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 w-full flex flex-col justify-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide text-white mb-4">
          I am <span className="text-gray-500">{profile.name}</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, staggerChildren: 0.1 }}
          className="text-lg md:text-2xl font-medium text-gray-300 mb-6"
        >
          {profile.role.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.05,
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1,
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>

        {/* Download CV Button */}
        <a href="/cv.pdf" download="My_CV.pdf">
          <Button
            variant="contained"
            className="px-6 py-3 font-semibold shadow-lg transition-all 
                       bg-white text-gray-900 hover:bg-gray-100 hover:shadow-xl"
            startIcon={<FileDownloadIcon />}
          >
            Download CV
          </Button>
        </a>
      </motion.div>
    </section>
  );
}
