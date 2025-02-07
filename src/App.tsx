import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './components/Contact';
import { useInView } from 'framer-motion';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MainContent() {
  const location = useLocation();
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const homeInView = useInView(homeRef, { amount: 0.6 });
  const aboutInView = useInView(aboutRef, { amount: 0.6 });
  const experienceInView = useInView(experienceRef, { amount: 0.6 });
  const projectsInView = useInView(projectsRef, { amount: 0.6 });
  const contactInView = useInView(contactRef, { amount: 0.6 });

  const [currentSection, setCurrentSection] = React.useState('/');

  useEffect(() => {
    // Reverse order to prioritize later sections when scrolling down
    if (contactInView) {
      setCurrentSection('/contact');
    } else if (projectsInView) {
      setCurrentSection('/projects');
    } else if (experienceInView) {
      setCurrentSection('/experience');
    } else if (aboutInView) {
      setCurrentSection('/about');
    } else if (homeInView) {
      setCurrentSection('/');
    }
  }, [homeInView, aboutInView, experienceInView, projectsInView, contactInView]);

  useEffect(() => {
    // Handle direct navigation
    const sectionId = location.hash.replace('#', '');
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  if (location.pathname.includes('/projects/')) {
    return (
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </AnimatePresence>
    );
  }

  return (
    <div className="scroll-smooth">
      <Sidebar currentSection={currentSection} />
      <section ref={homeRef} id="home" className="min-h-screen">
        <Home />
      </section>
      <section ref={aboutRef} id="about" className="min-h-screen">
        <About />
      </section>
      <section ref={experienceRef} id="experience" className="min-h-screen">
        <Experience />
      </section>
      <section ref={projectsRef} id="projects" className="min-h-screen">
        <Projects />
      </section>
      <section ref={contactRef} id="contact" className="min-h-screen">
        <Contact />
      </section>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const isProjectDetail = location.pathname.includes('/projects/');

  return (
    <>
      <ScrollToTop />
      <div className={`flex ${isProjectDetail ? '' : 'ml-20'}`}>
        {!isProjectDetail && <main className="flex-1">
          <MainContent />
        </main>}
        {isProjectDetail && <main className="flex-1">
          <Routes>
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </main>}
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;