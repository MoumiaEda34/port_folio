"use client";

import { IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo & Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-blue-400">My Portfolio</h2>
          <p className="text-sm mt-2">© {new Date().getFullYear()} All Rights Reserved.</p>
        </div>

        {/* Quick Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          {["home", "about", "services", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="hover:text-blue-400 transition-colors"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <IconButton color="primary" component="a" href="https://facebook.com" target="_blank">
            <FacebookIcon />
          </IconButton>
          <IconButton color="primary" component="a" href="https://twitter.com" target="_blank">
            <TwitterIcon />
          </IconButton>
          <IconButton color="primary" component="a" href="https://linkedin.com" target="_blank">
            <LinkedInIcon />
          </IconButton>
          <IconButton color="primary" component="a" href="https://github.com" target="_blank">
            <GitHubIcon />
          </IconButton>
        </div>
      </div>
    </footer>
  );
}
