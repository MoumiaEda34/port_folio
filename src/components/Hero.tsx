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
      className="flex flex-col md:flex-row items-center justify-center h-screen 
                 bg-gradient-to-r from-[#0f172a] to-[#1e293b] px-6"
    >
      {/* Left Side - Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-shrink-0 w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-yellow-500 shadow-lg"
      >
        <Suspense fallback={<div className="w-full h-full bg-gray-700 animate-pulse"></div>}>
          <Image
            src={profile.image}
            alt={profile.name}
            width={200}
            height={200}
            className="object-cover"
            loading="lazy"
          />
        </Suspense>
      </motion.div>

      {/* Right Side - Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:ml-10 text-center md:text-left mt-6 md:mt-0"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide text-white">
          I'm <span className="text-yellow-500">{profile.name}</span>
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, staggerChildren: 0.1 }}
          className="mt-4 py-4 text-lg md:text-2xl font-medium text-gray-300"
        >
          {profile.role.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.05,
                repeat: Infinity, // Infinite loop
                repeatType: "reverse", // Reverse animation to make it smooth
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
            className="mt-6 px-6 py-3 font-semibold shadow-lg transition-all bg-white text-gray-900 hover:bg-gray-100 hover:shadow-xl"
            startIcon={<FileDownloadIcon />}
          >
            Download CV
          </Button>
        </a>
      </motion.div>
    </section>
  );
}
