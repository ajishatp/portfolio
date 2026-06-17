
import { BackgroundEffect } from './components/BackgroundEffect';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';

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
        <Contact />
      </main>

      {/* Professional Footer */}
      <Footer />

      {/* Interactive Chatbot */}
      <Chatbot />
    </div>
  );
}

export default App;
