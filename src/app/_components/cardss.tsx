"use client";
import React from "react";
import { Card, CardHeader, CardFooter, Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "~/utils/motion";
import { Github } from "lucide-react";
import Link from "next/link";

export const MemoizedCard: React.FC<{ skill: any; index: number }> = React.memo(
  ({ skill, index }) => {
    return (
      <motion.div
        key={index}
        variants={slideInFromLeft(index * 0.3 + 1.3)}
        className="cursor-pointers relative z-[30]"
      >
        <motion.div
          key={index}
          variants={slideInFromLeft(index * 0.3 + 1.3)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="z-[30] cursor-pointer"
        >
          <Card
            isFooterBlurred
            className="col-span-12 h-[300px] w-[250px] cursor-pointer gap-4 sm:col-span-7"
          >
            <CardHeader className="absolute top-1 z-10 z-[3001] flex-col items-start">
              <p className="text-tiny z-[3001] font-bold uppercase text-blue-800 opacity-100">
                {skill.time}
              </p>
              <h4 className="z-[3001] text-xl font-medium text-green-900">
                {skill.title}
              </h4>
            </CardHeader>
            <Image
              className="z-1 h-[300px] w-full object-cover opacity-100"
              src={skill.link}
              alt="FUCK YOU"
            />
            <Link href={skill.github}>
              <CardFooter className="border-t-1 border-default-600 dark:border-default-100 absolute bottom-0 z-10 bg-black/40  p-3">
                <div className="flex flex-grow items-center gap-2">
                  <Github />
                  <div className="flex flex-col">
                    <p className="text-xs font-light text-white/60">
                      {skill.desription}
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Link>
          </Card>
        </motion.div>
      </motion.div>
    );
  },
);
MemoizedCard.displayName = "MemoizedCard";
