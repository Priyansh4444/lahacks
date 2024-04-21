"use client";
import React from "react";
import { gsap } from "gsap";
import { useEffect } from "react";

function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");
    const cursorText = document.querySelector<HTMLElement>(".cursor-text");
    setTimeout(() => {
      const links = document.querySelectorAll(".cursor-pointer");

      links.forEach((link) => {
        link.addEventListener("mouseenter", onMouseEnterLink);
        link.addEventListener("mouseleave", onMouseLeaveLink);
      });
    }, 3000);
    const onMouseMove = (e: any) => {
      const { clientX, clientY } = e;
      gsap.to(cursor, { x: clientX, y: clientY, duration: 0.1 });
    };
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("touchmove", onMouseMove);
    const onMouseEnterLink = (e: any) => {
      const link = e.target;
      if (link) {
        gsap.to(cursor, { scale: 4 });
        cursorText!.style.display = "block";
      } else {
        gsap.to(cursor, { scale: 1 });
      }
    };
    const onMouseLeaveLink = (e: any) => {
      gsap.to(cursor, { scale: 1 });
      cursorText!.style.display = "none";
    };
  });

  return (
    <div id="custom-cursor" className="custom-cursor">
      <span className="cursor-text"></span>
    </div>
  );
}

export default Cursor;