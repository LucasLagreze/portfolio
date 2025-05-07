import Contact from './components/Contact';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Hobbies from './components/Hobbies';
import Projects from './components/Projects';

export default function CVPage() {
  return (
    <>
      <Experience />
      <Education />
      <Skills />
      <Languages />
      <Hobbies />
      <Projects />
      <Contact />
    </>
  );
}