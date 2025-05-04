import React from "react";
import { cn } from "../../lib/utils";

export const SimpleBackground = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "min-h-screen bg-[#111111] relative flex items-center w-full justify-center overflow-hidden",
        className
      )}
    >
      {/* Static beam effect */}
      <div className="absolute left-[10%] top-0 h-[80vh] w-px rounded-full bg-gradient-to-b from-transparent via-indigo-500 to-transparent opacity-20"></div>
      <div className="absolute left-[20%] top-0 h-[70vh] w-px rounded-full bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-20"></div>
      <div className="absolute left-[50%] top-0 h-[65vh] w-px rounded-full bg-gradient-to-b from-transparent via-indigo-500 to-transparent opacity-20"></div>
      <div className="absolute left-[70%] top-0 h-[80vh] w-px rounded-full bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-20"></div>
      <div className="absolute left-[85%] top-0 h-[75vh] w-px rounded-full bg-gradient-to-b from-transparent via-indigo-500 to-transparent opacity-20"></div>

      {/* Fixed glow at bottom */}
      <div className="absolute bottom-0 w-full h-[20vh] bg-gradient-to-t from-indigo-500/5 to-transparent"></div>

      {children}
    </div>
  );
};
