import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollMarquee = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;

    // Row 1 → moves right to left
    gsap.to(row1, {
      xPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: row1,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Row 2 → moves left to right
    gsap.to(row2, {
      xPercent: 10,
      ease: "none",
      scrollTrigger: {
        trigger: row2,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Cleanup
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div  className="overflow-hidden w-full scrolled-gradient py-1 flex flex-col gap-10">
      {/* Top Row */}
      <div
        ref={row1Ref}
        className=" scroll-row flex gap-8 md:gap-16 whitespace-nowrap text-[8vw] 
         font-bold uppercase text-gray-300"
      >
        <span>. Modern</span>
        <span>. Realistic</span>
        <span>. Creativity</span>
        <span>. Visual</span>
        <span>. Standarization</span>
      </div>

      {/* Bottom Row */}
      <div
        ref={row2Ref}
        className=" mt-[-5vh] md:mt-[-14vh] ml-[-50vw] scroll-row flex gap-8 md:gap-16 whitespace-nowrap text-[8vw] font-bold uppercase text-purple-400"
      >
        <span>. Modern</span>
        <span>. Standarization</span>
        <span>. Visual</span>
        <span>. Creativity</span>
        <span>. Realistic</span>
      </div>
    </div>
  );
};

export default ScrollMarquee;
