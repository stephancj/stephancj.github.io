import Hero from "../components/Hero";
import Statistics from "../components/Statistics";
import About from "../components/About";
import Services from "../components/Services";
import Skills from "../components/Skills";
import EducationExperience from "../components/EducationExperience";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Statistics />
      <About />
      <Services />
      <Skills />
      <EducationExperience />
      <Portfolio />
      <Testimonials />
      <Contact />
    </main>
  );
}
