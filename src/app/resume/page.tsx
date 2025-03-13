"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent, Typography, Button } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";

export default function Resume() {
  const router = useRouter();

  return (
    <section className="min-h-screen bg-gray-900 text-white pt-24 pb-12 px-6">
      <div className="container mx-auto max-w-4xl">
        
        {/* Back to Homepage Button */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="flex justify-end mb-4"
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => router.push("/")}
          >
            Back to Homepage
          </Button>
        </motion.div>

        {/* Sections */}
        {[
          {
            title: "Experience",
            icon: <WorkIcon className="text-yellow-400" />,
            items: [
              "PHP Developer - Fast Info Legal Services (2022-2023)",
              "Software Engineer - TSG Global Services (2021-2022)",
              "Web Developer - Zinavo Private Limited (2019-2020)"
            ]
          },
          {
            title: "Education",
            icon: <SchoolIcon className="text-yellow-400" />,
            items: [
              "B.Tech in CSE - 2019",
              "Higher Secondary - 2014",
              "Secondary - 2012"
            ]
          },
          {
            title: "Skills & Certifications",
            icon: <CodeIcon className="text-yellow-400" />,
            items: [
              "React.js, JavaScript, PHP (CodeIgniter, Laravel)",
              "MySQL, MongoDB",
              "HTML, CSS, Bootstrap, Tailwind CSS",
              "Advanced JavaScript, React.js, PHP with MySQL"
            ]
          },
          {
            title: "Projects",
            icon: <FolderOpenIcon className="text-yellow-400" />,
            items: [
              <a href="https://github.com/MoumiaEda34/book-orchid" className="text-blue-400" key="1">Book Orchid</a>,
              <a href="https://github.com/MoumiaEda34/yumdrop" className="text-blue-400" key="2">YumDrop Cuisine</a>,
              <a href="https://github.com/MoumiaEda34/shop-online" className="text-blue-400" key="3">Shop Online</a>,
              <a href="https://fastinfosoft.com/login" className="text-blue-400" key="4">FastInfo Attendance Portal</a>,
              <a href="https://pujapariseva.com/" className="text-blue-400" key="5">Puja Pariseva</a>
            ]
          },
        ].map(({ title, icon, items }, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="mt-4 bg-gray-800 text-white shadow-md">
              <CardContent>
                <Typography variant="h5" className="flex items-center gap-2 text-yellow-400">
                  {icon} {title}
                </Typography>
                <ul className="mt-2 space-y-2">
                  {items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {/* Contact Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Card className="mt-4 bg-gray-800 text-white shadow-md">
            <CardContent>
              <Typography variant="h5" className="flex items-center gap-2 text-yellow-400">
                <EmailIcon className="text-yellow-400" /> Contact
              </Typography>
              <div className="mt-2 space-y-2">
                <p><EmailIcon className="mr-2 text-blue-400" /> <a href="mailto:ahamed.moumita786@gmail.com" className="text-blue-400">ahamed.moumita786@gmail.com</a></p>
                <p><PhoneIcon className="mr-2 text-blue-400" /> +91 6296168624</p>
                <p><LocationOnIcon className="mr-2 text-blue-400" /> Flat-118, Prantik Apartment, Sec-V, New Town, Kolkata</p>
                <p>
                  <LinkedInIcon className="mr-2 text-blue-400" />
                  <a href="https://www.linkedin.com/in/moumita-ahamed/" className="text-blue-400">LinkedIn Profile</a>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </section>
  );
}
