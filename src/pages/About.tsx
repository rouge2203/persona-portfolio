import React from "react";
import { FloatingDock } from "../components/ui/floating-dock";
import { IoIosHome } from "react-icons/io";
import { FaUserGraduate } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";
import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGithub,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaLinux,
  FaWindows,
  FaApple,
  FaDigitalOcean,
  FaDatabase,
  FaBootstrap,
  FaServer,
  FaNpm,
  FaBitbucket,
  FaCode,
} from "react-icons/fa";
import {
  SiTypescript,
  SiDjango,
  SiPostgresql,
  SiSupabase,
  SiOpenai,
  SiJavascript,
  SiNextdotjs,
  SiFlask,
  SiMysql,
  SiOracle,
  SiFirebase,
  SiGraphql,
  SiGit,
  SiGnubash,
  SiNginx,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";

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

const SkillItem: React.FC<{
  icon: React.ReactNode;
  name: string;
  delay: number;
}> = ({ icon, name, delay }) => {
  return (
    <div
      className={`flex items-center space-x-2 text-white animate-fade-up animate-duration-[1200ms]`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-xl">{icon}</div>
      <span>{name}</span>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <BackgroundBeamsWithCollision>
      <div className="min-h-[100dvh] pt-10 pb-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-up animate-duration-[1000ms]">
            About <span className="text-green-800">Alejandro</span>
          </h1>

          <div className="prose prose-invert max-w-none lg:prose-lg">
            <p className="text-lg font-thin text-white md:text-xl leading-relaxed mb-6 animate-fade-up animate-duration-[1500ms] animate-delay-200">
              Alejandro Ruiz is a full-stack software engineer with over 5 years
              of hands-on experience building complete systems from scratch,
              both independently and collaboratively.
            </p>

            <section className="mb-10 animate-fade-up animate-duration-[1500ms] animate-delay-400">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-green-800">
                Background
              </h2>
              <p className="mb-4 font-thin text-white">
                With a background in Software Engineering and several years in
                Mechanical Engineering, Alejandro has developed a strong
                foundation in mathematics and problem-solving. He's fluent in
                both Spanish and English, based in Costa Rica, and open to
                working remotely or relocating globally.
              </p>
              <p className="font-thin ">
                He's the developer behind the pseudonym 'Lobster Labs',
                delivering robust, scalable applications for clients ranging
                from radio stations and gas stations to industrial stores and
                automotive businesses.
              </p>
            </section>

            <section className="mb-10 animate-fade-up animate-duration-[1500ms] animate-delay-600">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-green-800">
                Technical Expertise
              </h2>

              <h3 className="text-xl  underline mb-6 font-medium    text-white">
                Frontend
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                <SkillItem icon={<FaReact />} name="React" delay={700} />
                <SkillItem icon={<FaReact />} name="React Native" delay={750} />
                <SkillItem icon={<SiRedux />} name="Redux" delay={800} />
                <SkillItem
                  icon={<SiJavascript />}
                  name="JavaScript"
                  delay={850}
                />
                <SkillItem
                  icon={<SiTypescript />}
                  name="TypeScript"
                  delay={900}
                />
                <SkillItem icon={<FaHtml5 />} name="HTML5" delay={950} />
                <SkillItem icon={<FaCss3Alt />} name="CSS3" delay={1000} />
                <SkillItem
                  icon={<SiTailwindcss />}
                  name="Tailwind CSS"
                  delay={1050}
                />
                <SkillItem
                  icon={<FaBootstrap />}
                  name="Bootstrap"
                  delay={1100}
                />
                <SkillItem icon={<SiNextdotjs />} name="Next.js" delay={1150} />
              </div>

              <h3 className="text-xl underline mb-6 font-medium  text-white">
                Backend
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                <SkillItem icon={<SiDjango />} name="Django" delay={1200} />
                <SkillItem
                  icon={<SiDjango />}
                  name="Django REST"
                  delay={1250}
                />
                <SkillItem icon={<FaPython />} name="Python" delay={1300} />
                <SkillItem icon={<FaNodeJs />} name="Node.js" delay={1350} />
                <SkillItem icon={<FaJava />} name="Java" delay={1400} />
                <SkillItem icon={<SiFlask />} name="Flask" delay={1450} />
                <SkillItem icon={<FaServer />} name="REST APIs" delay={1500} />
              </div>

              <h3 className="text-xl underline mb-6 font-medium  text-white">
                Databases
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                <SkillItem
                  icon={<SiPostgresql />}
                  name="PostgreSQL"
                  delay={1550}
                />
                <SkillItem icon={<SiMysql />} name="MySQL" delay={1600} />
                <SkillItem icon={<SiOracle />} name="Oracle" delay={1650} />
                <SkillItem
                  icon={<FaDatabase />}
                  name="SQL Server"
                  delay={1700}
                />
                <SkillItem icon={<SiFirebase />} name="Firebase" delay={1750} />
                <SkillItem icon={<SiSupabase />} name="Supabase" delay={1800} />
                <SkillItem icon={<SiGraphql />} name="GraphQL" delay={1850} />
                <SkillItem
                  icon={<FaDatabase />}
                  name="Visual FoxPro"
                  delay={1900}
                />
              </div>

              <h3 className="text-xl underline mb-6 font-medium  text-white">
                DevOps & Tools
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                <SkillItem icon={<SiGit />} name="Git" delay={1950} />
                <SkillItem icon={<FaGithub />} name="GitHub" delay={2000} />
                <SkillItem
                  icon={<FaBitbucket />}
                  name="Bitbucket"
                  delay={2050}
                />
                <SkillItem icon={<SiGnubash />} name="Bash" delay={2100} />
                <SkillItem icon={<FaDocker />} name="Docker" delay={2150} />
                <SkillItem icon={<FaLinux />} name="Linux" delay={2200} />
                <SkillItem icon={<FaApple />} name="macOS" delay={2250} />
                <SkillItem icon={<FaWindows />} name="Windows" delay={2300} />
                <SkillItem icon={<FaAws />} name="AWS" delay={2350} />
                <SkillItem
                  icon={<FaDigitalOcean />}
                  name="DigitalOcean"
                  delay={2400}
                />
                <SkillItem icon={<SiNginx />} name="Nginx" delay={2450} />
                <SkillItem icon={<FaNpm />} name="Gunicorn" delay={2500} />
              </div>

              <h3 className="text-xl underline mb-6 font-medium  text-white">
                Integrations
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                <SkillItem icon={<FaCode />} name="Softland ERP" delay={2550} />
              </div>
            </section>

            <section className="mb-10 animate-fade-up animate-duration-[1500ms] animate-delay-1000">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-green-800">
                AI Knowledge
              </h2>
              <div className="flex items-center space-x-2 mb-4">
                <SiOpenai className="text-2xl" />
                <span className="text-lg">AI Integration Specialist</span>
              </div>
              <p className="font-thin text-white">
                Alejandro is passionate about AI and has implemented OpenAI
                tools into business workflows including internal assistants,
                automated email summarization, report generation, and
                prompt-based query resolution. He's currently studying advanced
                LLMs and AI integrations through platforms like Platzi and
                technical YouTube channels.
              </p>
            </section>

            <section className="mb-10 animate-fade-up animate-duration-[1500ms] animate-delay-1200">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-green-800">
                Projects & Impact
              </h2>
              <p className="font-thin text-white">
                Alejandro thrives under pressure and is especially drawn to
                projects with wide user impact—such as the Gracia Plus app for a
                live radio station, and loyalty platforms used daily by over
                35,000 Costa Ricans. He's delivered multiple high-impact
                applications that solve real business problems and improve user
                experiences.
              </p>
            </section>

            <section className="mb-10 animate-fade-up animate-duration-[1500ms] animate-delay-1400">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-green-800">
                Soft Skills & Values
              </h2>
              <p className="font-thin text-white">
                Alejandro is a detail-oriented, fast-moving developer who enjoys
                team collaboration but isn't afraid to lead. He's also deeply
                entrepreneurial and has experience giving product demos, selling
                solutions to clients, and working directly with stakeholders. He
                values intellectual curiosity, sharp execution, and continuous
                learning.
              </p>
              <p className="mt-4 font-thin text-white">
                He prefers clean, commented code, well-documented APIs, and user
                interfaces that feel elegant and purposeful. In short: he's the
                kind of developer who designs, builds, ships, maintains, and
                still obsesses over how to improve it.
              </p>
            </section>

            <section className="mb-10 animate-fade-up animate-duration-[1500ms] animate-delay-1600">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-green-800">
                Contact
              </h2>
              <p className="font-thin text-white">
                If you'd like to discuss potential collaborations or learn more
                about Alejandro's work, you can reach him directly at{" "}
                <a
                  href="mailto:aruiz@lobsterlabs.net"
                  className="text-green-500 hover:text-green-400 underline"
                >
                  aruiz@lobsterlabs.net
                </a>
                .
              </p>
            </section>
          </div>
        </div>

        <div className="fixed z-50 left-4 bottom-4 md:bottom-5 md:left-1/2 md:-translate-x-1/2 animate-fade-up animate-duration-[1500ms] animate-delay-2000">
          <FloatingDock items={Links} />
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default About;
