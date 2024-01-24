"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am Vishal Patil, an enthusiastic and dedicated Data Science graduate student at the University of Michigan-Dearborn, with a robust academic foundation and hands-on experience in data analytics, machine learning, and business intelligence. Leveraging a blend of technical expertise in Python, R, and SQL, along with advanced data visualization tools such as Power BI and Tableau, I excel in transforming complex datasets into actionable insights. My professional journey includes impactful internships and projects that have honed my skills in predictive modeling, algorithm optimization, and the deployment of scalable AI solutions. I am passionate about employing data-driven strategies to solve challenging problems and drive innovation within the tech industry.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing table tennis. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">Large Language Models</span>. I'm also
        learning how to play the keyboard.
      </p>
    </motion.section>
  );
}
