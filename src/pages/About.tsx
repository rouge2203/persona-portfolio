import React from "react";

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <div className="prose lg:prose-xl">
        <p className="text-lg text-gray-600 mb-4">
          I'm a software developer with a passion for creating elegant solutions
          to complex problems. With expertise in modern web technologies, I
          focus on building responsive and user-friendly applications.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">Skills</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>React & TypeScript</li>
          <li>Modern Web Development</li>
          <li>UI/UX Design</li>
          <li>Problem Solving</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
