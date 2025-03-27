import React, { useState, useEffect, useRef, KeyboardEvent } from "react";
import memojiDev from "../../assets/memoji-dev.png";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";
import { FaUserGraduate } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { FloatingDock } from "../components/ui/floating-dock";

import { IoIosHome } from "react-icons/io";

const KEY_QUESTIONS = [
  {
    text: "Experience with React",
    color: "blue",
  },
  {
    text: "Latest projects",
    color: "green",
  },
  {
    text: "Education",
    color: "yellow",
  },
  {
    text: "Work history",
    color: "red",
  },
  {
    text: "Tech stack",
    color: "purple",
  },
  {
    text: "Contact info",
    color: "pink",
  },
  {
    text: "Work history",
    color: "red",
  },
  {
    text: "Tech stack",
    color: "purple",
  },
  {
    text: "Contact info",
    color: "pink",
  },
];

const SUGGESTED_QUESTIONS = [
  {
    text: "What is Alejandro's experience with python?",
    color: "text-blue-600",
  },
  { text: "What projects has Alejandro worked on?", color: "text-green-400" },
  { text: "What are Alejandro's main skills?", color: "text-purple-400" },
  { text: "Where has Alejandro worked before?", color: "text-yellow-400" },
  {
    text: "What is Alejandro's educational background?",
    color: "text-pink-400",
  },
];

const Badge: React.FC<{ text: string; color: string; onClick: () => void }> = ({
  text,
  color,
  onClick,
}) => {
  const colorStyles = {
    blue: "bg-blue-400/10 text-blue-400 ring-blue-400/30",
    green: "bg-green-500/10 text-green-400 ring-green-500/20",
    yellow: "bg-yellow-400/10 text-yellow-500 ring-yellow-400/20",
    red: "bg-red-400/10 text-red-400 ring-red-400/20",
    purple: "bg-purple-400/10 text-purple-400 ring-purple-400/30",
    pink: "bg-pink-400/10 text-pink-400 ring-pink-400/20",
  };

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center rounded-md px-1.5 md:px-2 py-0.5 md:py-1 text-[10px] md:text-xs font-medium ring-1 ring-inset cursor-pointer hover:opacity-80 transition-opacity ${
        colorStyles[color as keyof typeof colorStyles]
      }`}
    >
      {text}
    </button>
  );
};

const Links = [
  {
    title: "Home",
    icon: <IoIosHome />,
    href: "/",
  },
  {
    title: "About",
    icon: <FaUserGraduate />,
    href: "/about",
  },
  {
    title: "Projects",
    icon: <GrProjects />,
    href: "/projects",
  },
];

const Index: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [currentSuggestionIndex, setCurrentSuggestionIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const suggestionTimeout = useRef<number | undefined>(undefined);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const rotateSuggestions = () => {
      setIsAnimating(true);
      suggestionTimeout.current = window.setTimeout(() => {
        setCurrentSuggestionIndex(
          (prev) => (prev + 1) % SUGGESTED_QUESTIONS.length
        );
        setIsAnimating(false);
      }, 500);
    };

    const interval = setInterval(rotateSuggestions, 4000);
    return () => {
      clearInterval(interval);
      if (suggestionTimeout.current) clearTimeout(suggestionTimeout.current);
    };
  }, []);

  const handleSubmit = (text: string) => {
    if (!text.trim()) return;
    setShowResponse(true);
    setInputValue("");
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit(inputValue);
    }
  };

  const handleBadgeClick = (text: string) => {
    setInputValue(`Tell me about Alejandro's ${text.toLowerCase()}`);
    inputRef.current?.focus();
  };

  return (
    <BackgroundBeamsWithCollision>
      <div className="w-full min-h-[100dvh]  flex flex-col items-center md:justify-center pt-16 md:pt-0">
        <div className="flex  py-10 flex-col items-center space-y-4 md:space-y-5 max-w-[90%] md:max-w-2xl">
          {!showResponse ? (
            <div className="fixed z-50 left-4 bottom-4 md:bottom-5 md:left-1/2 md:-translate-x-1/2">
              <FloatingDock items={Links} />
            </div>
          ) : null}
          <img
            src={memojiDev}
            alt="Developer Memoji"
            className="h-24 md:h-30 mb-2 md:mb-3"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
            Welcome to <span className="text-green-800">Alejandro's</span>{" "}
            portfolio
          </h1>
          <p className="text-white text-xs md:text-sm font-thin text-center">
            Ask AI about anything you want to know about me.
          </p>
          <div className="relative w-full">
            {showResponse && (
              <div className="w-full bg-[#1a1a1a] rounded-4xl p-6 mb-4">
                <p className="text-white text-sm md:text-base">
                  Alejandro is a great developer with experience about Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum. Alejandro is a great developer with
                  experience about Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                  Alejandro is a great developer with experience about Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum
                </p>
              </div>
            )}
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full px-4 md:px-6 py-3 md:py-4 bg-[#1a1a1a] rounded-full text-white text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-green-800 transition-all"
              />
              <div
                className={`absolute inset-y-0 left-4 md:left-6 right-10 md:right-12 flex items-center transition-all duration-500 ease-in-out pointer-events-none text-gray-400 text-sm md:text-base
                  ${
                    isAnimating
                      ? "opacity-0 translate-y-[20px]"
                      : "opacity-100 translate-y-0"
                  }
                  ${
                    !inputValue &&
                    SUGGESTED_QUESTIONS[currentSuggestionIndex].color
                  }`}
              >
                <span className="truncate">
                  {inputValue
                    ? ""
                    : SUGGESTED_QUESTIONS[currentSuggestionIndex].text}
                </span>
              </div>
              <button
                onClick={() => handleSubmit(inputValue)}
                className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 md:h-6 md:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5 md:gap-2 mt-3 md:mt-4 justify-center">
              {KEY_QUESTIONS.map((question, index) => (
                <Badge
                  key={index}
                  text={question.text}
                  color={question.color}
                  onClick={() => handleBadgeClick(question.text)}
                />
              ))}
            </div>
          </div>
        </div>
        {showResponse && (
          <div className="fixed z-50 left-4 bottom-4 md:mb-10 md:static md:flex">
            <FloatingDock items={Links} />
          </div>
        )}
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Index;
