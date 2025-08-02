"use client";
import { GridBackground } from "@/components/grid-background";
import MovingText from "@/components/moving-text";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <GridBackground>
        <div className="space-y-[0.25em] z-20 flex flex-col">
          <p className="-rotate-12 text-[1.05em] my-[3.5em]">Hi, I&apos;m</p>
          <p className="font-pangaia space-x-4 font-bold text-8xl text-[#ff6200] mx-auto">
            <span>Sumit</span>
            <span>Dey</span>
          </p>
          <div className="flex flex-col gap-[0.5em] items-center justify-center">
            <p className="flex flex-col text-[1.35em] items-center hover:transition-all w-full">
              <span>Specialized in building fast, responsive web apps</span>
              <span className="font-serif">
                with ReactJS, NextJS & Tailwind CSS
              </span>
            </p>
            <p className="text-[1.75em] font-extrabold font-pangaia text-[#ff7700]">
              Modern Front-end Developer
            </p>
          </div>
        </div>
      </GridBackground>
      <MovingText />
    </div>
  );
}
