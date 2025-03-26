"use client";

import { useState } from "react";
import Link from "next/link";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setAnchorEl(null);
  };

  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white py-4 z-50 uppercase">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-600">My Portfolio.</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {["home", "services", "about", "my work", "contact"].map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section);
              }}
              className={`text-base font-medium transition-colors ${
                active === section ? "text-purple-600 font-semibold" : "text-gray-600 hover:text-gray-600"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}

          {/* Resume Link */}
         {/* <Link
            href="/resume"
            className="text-lg font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            Resume
          </Link> */}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <IconButton onClick={toggleMenu} color="primary">
            {anchorEl ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>

        {/* Mobile Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={closeMenu}
          keepMounted
          PaperProps={{
            className: "bg-white shadow-lg rounded-lg mt-2",
          }}
        >
          {["home", "about", "services","my work", "contact"].map((section) => (
            <MenuItem
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-lg font-medium ${
                active === section ? "text-blue-600 font-semibold" : "text-purple-700"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </MenuItem>
          ))}

          {/* Resume Link in Mobile Menu */}
          <MenuItem onClick={closeMenu}>
            <Link href="/resume" className="text-lg font-medium text-gray-700">
              Resume
            </Link>
          </MenuItem>
        </Menu>
      </div>
    </nav>
  );
}
