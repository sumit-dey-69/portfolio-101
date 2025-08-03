"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  className?: string;
  children?: ReactNode;
};

export function GridBackground({ className, children }: Props) {
  return (
    <div
      className={cn(
        "relative grid h-screen items-center justify-center bg-[#ff5e0023]",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:30px_30px] sm:[background-size:45px_45px] md:[background-size:60px_60px]",
          "[background-image:linear-gradient(to_right,#f7c59a_1px,transparent_0.5px),linear-gradient(to_bottom,#f7c59a_1px,transparent_0.5px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_5%,white)]"></div>
      {children}
    </div>
  );
}
