"use client";

import Image from "next/image";
import { useEffect, useState, Suspense } from "react";
import { motion } from "framer-motion";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button } from "@mui/material";
import { FaRegHandPeace } from "react-icons/fa";
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

  if (!profile) return <p className="text-gray-800">Loading...</p>;

  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto px-8 py-20 bg-white"
    >
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1"
      >
        {/* Tagline */}
        <div className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-4">
          <span className="w-10 h-1 bg-purple-600 inline-block rounded"></span>
          Let &apos; s Build Together <FaRegHandPeace className="ml-1 text-purple-600 text-xl" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
          I am <span className="text-purple-700">{profile.name}</span> – Your <br />
          <motion.span
            initial={{ backgroundSize: '0% 100%' }}
            animate={{ backgroundSize: '100% 100%' }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent 
             bg-no-repeat bg-left-bottom"
          >
            Web & Software Partner
          </motion.span>
        </h1>
        {/* Description */}
        <p className="text-gray-600 text-lg mb-8 max-w-2xl">
          Together, we’ll craft powerful web and software solutions that drive impact. From building dynamic websites to developing robust software applications, I’m here to turn your ideas into reality. Let’s collaborate and create exceptional digital experiences!
        </p>
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="/cv.pdf" download="My_CV.pdf">
            <Button
              variant="contained"
              className="!bg-purple-700 !text-white hover:!bg-purple-800 px-6 py-3 rounded-lg shadow-lg"
              startIcon={<FileDownloadIcon />}
            >
              Download My Cv
            </Button>
          </a>

          <a href="#my work">
            <Button
              variant="outlined"
              className="!border-purple-700 !text-purple-700 hover:!bg-purple-100 px-6 py-3 rounded-lg shadow-md"
              endIcon={<ArrowForwardIcon />}
            >
              My Work
            </Button>
          </a>
        </div>
      </motion.div>

      {/* Right Image with Gradient */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center relative"
      >
        <Suspense fallback={<div className="w-full h-full bg-gray-300 animate-pulse"></div>}>
          {/* Gradient Background */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 flex justify-center relative"
          >
            <div className="relative w-[450px] h-[500px] flex items-center justify-center p-4">

              {/* Background Transparent Boxes */}
              {/* <div className="absolute w-40 h-40 bg-purple-400 opacity-30 rounded-xl -top-8 -left-6"></div> */}
              <div className="absolute w-48 h-48 bg-pink-400 opacity-30 rounded-xl top-16 right-8"></div>
              <div className="absolute w-52 h-52 bg-blue-400 opacity-30 rounded-xl bottom-0 left-10"></div>

              {/* Main Image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden z-10">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
            </div>


          </motion.div>

        </Suspense>
      </motion.div>
    </section>
  );
}
