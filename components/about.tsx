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
      className="mb-28 max-w-[65rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am Vishal Patil, <span className="font-medium">Founder of PrismGen AI</span> and a passionate <span className="font-medium">Data Science</span> Graduate from the <span className="font-medium">University of Michigan-Dearborn.</span>   My academic and hands-on experience in data analytics, machine learning, and business intelligence is now enriched by my venture into entrepreneurship with a focus on AI-driven content creation. With a strong foundation in <span className="font-medium">Python, R, and SQL</span>, and proficiency in data visualization tools like <span className="font-medium">Power BI</span> and <span className="font-medium">Tableau</span>, I have a proven track record in converting complex datasets into strategic insights.
      </p>
      <p className="mb-3">
        Through impactful internships, projects, and now as the driving force behind PrismGen AI, I have honed my expertise in predictive modeling, algorithm optimization, and deploying scalable AI solutions. At PrismGen AI, we're pioneering the use of generative AI services to transform the way content is created across text, visuals, and code, embodying a seamless synthesis of technology and creativity.
      </p>
      <p className="mb-3">
        I am driven by the challenge of employing data-driven strategies to solve complex problems and ignite innovation within the tech industry.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing table tennis. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">Large Language Models</span>.
      </p>
    </motion.section>
  );
}
