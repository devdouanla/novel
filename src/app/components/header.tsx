"use client";

import React, { useState } from "react";
import Link from 'next/link'
import CustomizedSwitches from './switch'
import Search from './search';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const navLinks = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "Series",
    href: "/series"
  },
  {
    name: "Library",
    href: "/library"
  },
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  
  const open = Boolean(anchorEl);
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(!menuOpen)
  };
  
  const handleClose = () => {
    setAnchorEl(null);
    setMenuOpen(!menuOpen)
  };

  return (
    <header className="bg-blue-900 text-white">
      <div className="flex justify-between items-center p-4">
        <button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          className="md:hidden"
          onClick={handleClick}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        
        <h3 className="text-lg font-bold">LOGO</h3>

        <nav className="hidden md:flex gap-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-gray-400">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex gap-4 items-center">
          <Search />
          <CustomizedSwitches />
        </div>
      </div>

      {menuOpen && (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            list: {
              'aria-labelledby': 'basic-button',
            },
          }}
        >
          {navLinks.map((link) => (
            <MenuItem key={link.href}>
              <Link
                onClick={handleClose}
                href={link.href}
                className="block hover:text-gray-400"
              >
                {link.name}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      )}
    </header>
  );
}

export default Header
