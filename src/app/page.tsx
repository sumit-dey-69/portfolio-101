"use client";
import { GridBackground } from "@/components/grid-background";
import MovingText from "@/components/moving-text";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <GridBackground>
        <div className="z-20 flex flex-col px-4 sm:px-6 md:px-8 md:mb-15">
          <p className="-rotate-12 text-[0.9em] sm:text-[1.05em] my-[2.5em]">Hi, I&apos;m</p>
          <p className="font-pangaia space-x-2 sm:space-x-4 font-bold text-7xl sm:text-6xl md:text-8xl text-[#ff6200] mx-auto text-center leading-tight">
            <span>Sumit</span>
            <span>Dey</span>
          </p>
          <div className="flex flex-col gap-[0.5em] md:text-sm items-center justify-center">
            <p className="flex flex-col text-[1em] sm:text-[1.35em] items-center hover:transition-all w-full text-center px-4">
              <span>Specialized in building fast, responsive web apps</span>
              <span className="font-serif text-lg sm:text-base md:text-[0.95em]">
                with ReactJS, NextJS & Tailwind CSS
              </span>
            </p>
            <p className="text-[1.65em] sm:text-[1.75em] font-extrabold font-pangaia text-[#222222] text-center">
              Modern Front-end Developer
            </p>
          </div>
        </div>
      </GridBackground>
      <MovingText />
    </div>
  );
}
