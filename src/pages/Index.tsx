import React, { useState, useEffect, useRef, KeyboardEvent } from "react";
import memojiDev from "../../assets/memoji-dev.png";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";
import { FaUserGraduate } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { FloatingDock } from "../components/ui/floating-dock";
import SplitText from "../components/reactbits/split-text";
import { IoIosHome } from "react-icons/io";
import { MdError } from "react-icons/md";

const KEY_QUESTIONS = [
  {
    text: "Experience with React",
    color: "blue",
  },
  {
    text: "Python experience",
    color: "green",
  },
  {
    text: "AI knowledge",
    color: "purple",
  },
  {
    text: "Frontend skills",
    color: "pink",
  },
  {
    text: "Backend skills",
    color: "yellow",
  },
  {
    text: "Education",
    color: "red",
  },
  {
    text: "Work history",
    color: "blue",
  },
  {
    text: "Tech stack",
    color: "green",
  },
  {
    text: "Soft skills",
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
      className={`inline-flex items-center rounded-md px-1.5 md:px-2 py-0.5 md:py-1 text-[10px] md:text-xs font-medium ring-1 ring-inset cursor-pointer hover:opacity-80 transition-opacity hover:shadow-sm hover:shadow-white/20 ${
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
  const [apiResponse, setApiResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
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

  const handleSubmit = async (text: string) => {
    if (!text.trim()) return;

    setIsLoading(true);
    setShowResponse(true);
    setErrorMessage(null);

    try {
      const response = await fetch("https://laticacr.com/api/chatbot/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: text }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle error responses from the API
        setErrorMessage(
          data.message || "An error occurred while processing your request"
        );
        setApiResponse("");
      } else {
        setApiResponse(data.answer);
        setInputValue("");
      }
    } catch (error) {
      console.error("Error fetching from API:", error);
      setErrorMessage(
        "Sorry, there was an error connecting to the server. Please try again."
      );
      setApiResponse("");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit(inputValue);
    }
  };

  const handleBadgeClick = (text: string) => {
    setInputValue(`Tell me about Alejandro's ${text.toLowerCase()}`);
  };

  return (
    <BackgroundBeamsWithCollision>
      <div className="w-full min-h-[100dvh]  flex flex-col items-center md:justify-center pt-16 md:pt-0">
        <div className="flex  py-10 flex-col items-center space-y-4 md:space-y-5 max-w-[90%] md:max-w-2xl">
          {!showResponse ? (
            <div className="fixed z-50 left-4 bottom-4 md:bottom-5 md:left-1/2 md:-translate-x-1/2 animate-fade-up animate-duration-[1500ms] animate-delay-2500">
              <FloatingDock items={Links} />
            </div>
          ) : null}
          <img
            src={memojiDev}
            alt="Developer Memoji"
            className="h-24 md:h-30 mb-2 md:mb-3 animate-fade-up animate-duration-[800ms]"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center animate-fade-up animate-duration-[1500ms] animate-delay-500">
            Welcome to <span className="text-green-800">Alejandro's</span>{" "}
            portfolio
          </h1>
          <p className="text-white text-xs md:text-sm font-thin text-center animate-fade-up animate-duration-[1500ms] animate-delay-1000">
            Ask AI about anything you want to know about me.
          </p>
          <div className="relative w-full animate-fade-up animate-duration-[1500ms] animate-delay-1500">
            {showResponse && (
              <div className="w-full bg-[#1a1a1a] rounded-4xl p-6 mb-4">
                {isLoading ? (
                  <div className="flex justify-center items-center h-20">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-800"></div>
                  </div>
                ) : errorMessage ? (
                  <div className="flex flex-col items-center text-center">
                    <MdError className="text-red-500 text-2xl mb-2" />
                    <p className="text-red-400 text-sm md:text-base">
                      {errorMessage}
                    </p>
                  </div>
                ) : (
                  <SplitText
                    text={apiResponse}
                    className="text-white text-sm md:text-base"
                    delay={20}
                    animationFrom={{
                      opacity: 0,
                      transform: "translate3d(0,10px,0)",
                    }}
                    animationTo={{
                      opacity: 1,
                      transform: "translate3d(0,0,0)",
                    }}
                    easing={(t) => t}
                    threshold={0.1}
                    rootMargin="-20px"
                  />
                )}
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
                disabled={isLoading}
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
                className={`absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="h-5 w-5 md:h-6 md:w-6 animate-spin rounded-full border-2 border-t-transparent border-white"></div>
                ) : (
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
                )}
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5 md:gap-2 mt-3 md:mt-4 justify-center animate-fade-up animate-duration-[1500ms] animate-delay-2000">
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
          <div className="fixed z-50 left-4 bottom-4 md:mb-10 md:static md:flex animate-fade-up animate-duration-[1500ms]">
            <FloatingDock items={Links} />
          </div>
        )}
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Index;
