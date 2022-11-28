import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Experience from './components/Experience';
import AboutMe from './components/AboutMe';

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