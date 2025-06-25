import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 animate-gradient">
        <div className="absolute inset-0">
          <div className="absolute h-32 w-32 rounded-full bg-blue-500/20 -top-16 -left-16 animate-blob"></div>
          <div className="absolute h-32 w-32 rounded-full bg-purple-500/20 top-1/3 -right-16 animate-blob animation-delay-2000"></div>
          <div className="absolute h-32 w-32 rounded-full bg-pink-500/20 -bottom-16 left-1/3 animate-blob animation-delay-4000"></div>
          <div className="absolute h-32 w-32 rounded-full bg-yellow-500/20 top-2/3 right-1/4 animate-blob animation-delay-3000"></div>
        </div>
      </div>

      <div className="relative w-full max-w-4xl">
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-start md:gap-8">
            <Avatar />
            <QuickInfo />
          </div>
          <div className="mt-6">
            <Intro />
            <SkillList />
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  console.log("Current Mode:", process.env.NODE_ENV);
  return (
    <div className="flex flex-col items-center gap-3 md:w-72">
      <img
        className="w-44 h-44 rounded-full object-cover border-4 border-white shadow-md"
        src={`${process.env.PUBLIC_URL}/imam.jpg`}
        alt="avatar_img"
      />
      <p className="text-2xl font-semibold text-gray-800 text-center">
        Imam Adli S.Kom
      </p>
    </div>
  );
}

function QuickInfo() {
  return (
    <div className="mt-6 md:mt-0 flex-1">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Info</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <QuickInfoCard icon="fa-map-marker-alt" text="Jakarta, Indonesia" />
        <QuickInfoCard
          icon="fa-graduation-cap"
          text="System Information Graduate"
        />
        <QuickInfoCard icon="fa-briefcase" text="Open to Work" />
        <QuickInfoCard icon="fa-code-branch" text="15+ Web Projects" />
      </div>
    </div>
  );
}

function QuickInfoCard({ icon, text }) {
  return (
    <div className="flex items-center gap-3 p-4 bg-gray-50/80 backdrop-blur-sm rounded-lg shadow-sm hover:transform hover:-translate-y-1 transition-transform duration-200 hover:bg-white/80">
      <i className={`fas ${icon} text-blue-600 text-xl`}></i>
      <span className="text-gray-700">{text}</span>
    </div>
  );
}

function Intro() {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-3">Intro</h1>
      <p className="text-gray-600 leading-relaxed">
        A passionate Junior Web Developer with hands-on experience in PHP
        frameworks like Laravel and CodeIgniter. Currently expanding my
        expertise into React JS, I combine strong problem-solving abilities with
        a quick learning mindset. I thrive both independently and in
        collaborative environments, consistently delivering projects on time.
        Eager to contribute and grow while bringing technical skills and
        enthusiasm for continuous learning to innovative projects.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="space-y-12">
      {/* Technical Skills Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Skill name="HTML" level="Advanced" />
          <Skill name="CSS" level="Advanced" />
          <Skill name="JavaScript" level="Intermediate" />
          <Skill name="PHP" level="Advanced" />
          <Skill name="Laravel" level="Intermediate" />
          <Skill name="CodeIgniter" level="Basic" />
          <Skill name="ReactJS" level="Basic" />
        </div>
      </div>

      {/* Projects Showcase Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            title="Employee Attendance with QR Code"
            techStack={["Laravel", "MySQL", "Bootstrap", "JavaScript"]}
            description="A full-featured e-commerce platform with user authentication, product management, and payment integration."
            githubLink="https://github.com/ImamAdli/e-commerce"
            previewImage="/project-1.png"
          />
          <ProjectCard
            title="Boarding House Booking System"
            techStack={["CodeIgniter", "MySQL", "jQuery", "Bootstrap"]}
            description="Dynamic company profile website with admin dashboard for content management."
            githubLink="https://github.com/ImamAdli/company-profile"
            previewImage="/company-preview.jpg"
          />
          <ProjectCard
            title="University Extracurricular Management System"
            techStack={["React", "Tailwind", "Firebase"]}
            description="Modern task management application with real-time updates and collaborative features."
            githubLink="https://github.com/ImamAdli/task-management"
            previewImage="/task-preview.jpg"
          />
        </div>
      </div>
    </div>
  );
}

function Skill({ name, level }) {
  const levelColors = {
    advanced: "bg-green-100 text-green-800 border-green-300",
    intermediate: "bg-yellow-100 text-yellow-800 border-yellow-300",
    basic: "bg-red-100 text-red-800 border-red-300",
  };

  const progressWidth = {
    advanced: "w-full",
    intermediate: "w-2/3",
    basic: "w-1/3",
  };

  // Detail skill untuk tooltip
  const skillDetails = {
    // HTML: "Pengalaman 3+ tahun dalam HTML5, semantic markup, dan accessibility best practices",
    HTML: "3+ years experience in HTML5, semantic markup, and accessibility best practices",
    // CSS: "Mahir dalam CSS3, Flexbox, Grid, dan responsive design (Bootstrap)",
    CSS: "Proficient in CSS3, Flexbox, Grid, and responsive design (Bootstrap)",
    // JavaScript:
    //   "Familiar dengan ES6+, DOM manipulation, dan asynchronous programming (jQuery)",
    JavaScript:
      "Familiar with ES6+, DOM manipulation, and asynchronous programming (jQuery)",
    // PHP: "Pengalaman membuat aplikasi web dengan PHP 7+ dengan CRUD",
    PHP: "Experience building web applications with PHP 7+ with CRUD",
    // Laravel:
    //   "Membuat berbagai aplikasi menggunakan Laravel 10+ (Blade templating, Eloquent ORM, CRUD, Database Migration, API, dan Authentication)",
    Laravel:
      "Built some applications using Laravel 10+ (Blade templating, Eloquent ORM, CRUD, Database Migration, and Authentication)",
    // CodeIgniter:
    //   "Pengalaman dengan CodeIgniter 4, routing, dan database migrations",
    CodeIgniter:
      "Experience with CodeIgniter 4, routing, and database migrations",
    // ReactJS:
    //   "Memahami dasar-dasar React (JSX, dan Conditional Rendering, Array Methods, Hooks, dan State Management) dan membuat aplikasi web dengan ReactJS",
    ReactJS:
      "Understanding React fundamentals (JSX, Conditional Rendering, Array Methods, Hooks, and State Management) and building web applications with ReactJS",
  };

  return (
    <div className="group relative">
      <div
        className="relative p-6 bg-white/80 backdrop-blur-lg rounded-xl border border-white/20 shadow-lg 
                    transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                    hover:bg-white/90"
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium border ${
              levelColors[level.toLowerCase()]
            }`}
          >
            {level}
          </span>
        </div>

        <div className="mt-4">
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full ${progressWidth[level.toLowerCase()]} ${
                levelColors[level.toLowerCase()]
              } transform transition-all duration-500 group-hover:opacity-80`}
            ></div>
          </div>
        </div>

        {/* Tooltip */}
        <div
          className="invisible group-hover:visible opacity-0 group-hover:opacity-100 
                      transition-all duration-300 absolute -top-16 left-0 right-0 mx-auto
                      bg-gray-900 text-white p-3 rounded-lg text-sm w-64 text-center
                      transform -translate-y-2 group-hover:translate-y-0"
        >
          {skillDetails[name] || `Pengalaman dalam ${name}`}
          {/* Arrow */}
          <div
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2
                        border-8 border-transparent border-t-gray-900"
          ></div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  title,
  techStack,
  description,
  githubLink,
  previewImage,
}) {
  const [showPreview, setShowPreview] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    console.error("Failed to load image:", previewImage);
    setImageError(true);
  };

  return (
    <div
      className="group relative bg-white/80 backdrop-blur-lg rounded-xl border border-white/20 shadow-lg 
                    transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
                    hover:bg-white/90 overflow-hidden"
    >
      <div className="p-6">
        {/* Project Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Description */}
        <p className="text-gray-600 mb-6">{description}</p>

        {/* Project Links */}
        <div className="flex items-center gap-3">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg 
                     transition-all duration-200 hover:bg-gray-700 
                     active:bg-gray-900 active:scale-95
                     focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            <i className="fab fa-github text-lg"></i>
            <span>View Code</span>
          </a>
          <button
            onClick={() => {
              setShowPreview(true);
              setImageError(false);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg 
                     transition-all duration-200 hover:bg-blue-500
                     active:bg-blue-700 active:scale-95
                     focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
          >
            <i className="fas fa-image text-lg"></i>
            <span>Preview</span>
          </button>
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div
          className="fixed inset-0 flex items-center justify-center p-4"
          onClick={() => setShowPreview(false)}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div
            className="relative max-w-4xl w-full bg-white rounded-xl shadow-2xl overflow-hidden
                     transform transition-all duration-300 animate-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {imageError ? (
                <div
                  className="flex flex-col items-center justify-center p-8 text-gray-500 cursor-pointer"
                  onClick={() => setShowPreview(false)}
                >
                  <i className="fas fa-image-slash text-4xl mb-2"></i>
                  <p>Failed to load image preview</p>
                </div>
              ) : (
                <img
                  src={process.env.PUBLIC_URL + previewImage}
                  alt={`${title} preview`}
                  className="w-full h-auto cursor-pointer"
                  onError={handleImageError}
                  onClick={() => setShowPreview(false)}
                />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Card Hover Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      ></div>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="pt-6 mt-6 border-t border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Contact & Social</h2>
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="flex gap-4">
          <a
            href="https://github.com/ImamAdli/"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/imam-adli/"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=imamimamimam717@gmail.com"
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
          >
            <i className="fas fa-envelope"></i> Gmail
          </a>
          <a
            href="https://wa.me/08990096343"
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
          >
            <i className="fab fa-whatsapp"></i> WhatsApp
          </a>
        </div>
        <div>
          <a
            href="imamadli-resume.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200"
          >
            <i className="fas fa-download"></i> Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
