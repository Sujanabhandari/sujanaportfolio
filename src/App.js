import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTips from './ProTips';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Experience from './components/Experience';
import AboutMe from './components/AboutMe';
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <AboutMe />
        <Projects />
        <Experience />
      </div>
      <ContactForm />

    </>

  );
}