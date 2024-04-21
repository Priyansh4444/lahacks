"use client";
import React from "react";
import { Github } from "lucide-react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "~/utils/motion";
import { MemoizedCard } from "../_components/cardss";
import Cursor from "../_components/Cursor";
function page() {
  const people = [
    {
      title: "Priyansh Shah",
      time: "1 year",
      desription: "CS Major UCI",
      link: "/pronsh.jpeg",
      github: "https://github.com/Priyansh4444"
    },
    {
      title: "Leah",
      time: "2nd year",
      desription: "CS Major UCI",
      link: "/Leah.jpeg",
      github: "https://github.com/leahs4"
    },
    {
      title: "Benjamin Cates",
      time: " 3rd year",
      desription: "CS Major UCI",
      link: "/benjamin.jpeg",
      github: "https://github.com/benjamin-cates"
    },
    {
      title: "Tam",
      time: "2nd year",
      desription: "CS Major not Florida",
      link: "/Tam.png",
      github: "https://github.com/ball2004244"
    },
  ];
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="px-25 z-[20] mt-40 flex w-full flex-col items-center justify-center"
    >
      {" "}
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="mt-6 flex h-auto w-auto max-w-[600px] flex-col gap-6 py-[50px] text-6xl font-bold text-white"
      >
        <span>
          <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
            {" "}
            Hobbies{" "}
          </span>
        </span>
      </motion.div>
      <div
        className="flex flex-wrap items-center justify-center gap-4"
        id="cards"
      >
        {people.map((skill, index) => {
          return <MemoizedCard key={index} skill={skill} index={index} />;
        })}
      </div>
    </motion.div>
  );
}

export default page;
