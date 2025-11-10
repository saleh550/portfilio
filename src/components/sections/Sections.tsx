import React, { type ReactNode } from "react";
import Navbar from "../header/Navbar";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Home from "./home/Home";
import About from "./about/About";
import Services from "./services/Services";
import Projects from "./projects/Projects";

const Section = ({ id, bg, color, title,children }: { id: string; bg?: string; color: string; title: string,children?:ReactNode }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8 }}
      className={`  flex   ${bg} ${color}`}
    >
     {children}
    </motion.section>
  );
};

const Sections = () => {
  return (
    <div>
      
      <Section id="home"  color="text-white" title="Home" children={<Home/>} />
      <Section id="about" bg="bg-gray-100" color="text-gray-900" title="About" children={<About/>} />
      <Section id="services" bg="bg-red-100" color="text-gray-900" title="Services" children={<Services/>} />
      <Section id="projects" bg="b" color="text-white" title="Projects" children={<Projects/>}/>
    </div>
  );
};

export default Sections;
