
import { BackgroundEffect } from './components/BackgroundEffect';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Leadership } from './components/Leadership';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Premium Ambient Background Effects */}
      <BackgroundEffect />

      {/* Sticky Global Navigation */}
      <Navbar />

      {/* Sections Wrapper */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Leadership />
        <Contact />
      </main>

      {/* Professional Footer */}
      <Footer />
    </div>
  );
}

export default App;
