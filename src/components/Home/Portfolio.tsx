"use client";

import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "GrowPlus",
      description: "Platform pengembangan diri dan produktivitas untuk membantu mencapai tujuan dengan fitur personalisasi dan progress tracking.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Web App",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "", // Kalau ada link live, bisa kamu tambahkan
      githubUrl: "https://github.com/ckckckcz/growplus",
    },
    {
      id: 2,
      title: "Warisan-Kita",
      description: "Situs web untuk melestarikan dan memperkenalkan warisan budaya Indonesia secara interaktif dan edukatif.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Website",
      technologies: ["Next.js", "Tailwind CSS"],
      liveUrl: "",
      githubUrl: "https://github.com/ckckckcz/Warisan-Kita",
    },
    {
      id: 3,
      title: "Sora-Official",
      description: "Website resmi proyek Sora yang menyediakan informasi produk, fitur, dan update terkini.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Website",
      technologies: ["Next.js", "React"],
      liveUrl: "",
      githubUrl: "https://github.com/ckckckcz/Sora-Official",
    },
    {
      id: 4,
      title: "RedHope",
      description: "Platform komunitas yang menghubungkan pengguna untuk berbagai aktivitas sosial dan donasi secara transparan.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Web App",
      technologies: ["Vue.js", "Firebase"],
      liveUrl: "",
      githubUrl: "https://github.com/ckckckcz/RedHope",
    },
    {
      id: 5,
      title: "BahasaKu",
      description: "Aplikasi pembelajaran bahasa lokal dengan fitur interaktif dan kuis untuk meningkatkan kemampuan bahasa pengguna.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Mobile App",
      technologies: ["React Native", "Expo"],
      liveUrl: "",
      githubUrl: "https://github.com/ckckckcz/BahasaKu",
    },
    {
      id: 6,
      title: "Hackthon-JTI",
      description: "Proyek hasil hackathon dari jurusan Teknik Informatika yang mengusung solusi kreatif berbasis teknologi terbaru.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Web App",
      technologies: ["React", "Node.js"],
      liveUrl: "",
      githubUrl: "https://github.com/ckckckcz/Hackthon-JTI",
    },
    {
      id: 7,
      title: "Grit-and-Grind",
      description: "Website motivasi dan pengembangan mental untuk meningkatkan ketekunan dan kerja keras pengguna.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Website",
      technologies: ["Next.js", "Tailwind CSS"],
      liveUrl: "",
      githubUrl: "https://github.com/ckckckcz/Grit-and-Grind",
    },
    {
      id: 8,
      title: "pusaka-bahasa",
      description: "Platform pelestarian bahasa daerah dengan fitur kursus interaktif dan komunitas pembelajar bahasa.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Web App",
      technologies: ["React", "Firebase"],
      liveUrl: "",
      githubUrl: "https://github.com/ckckckcz/pusaka-bahasa",
    },
    {
      id: 9,
      title: "SkillQuest",
      description: "Aplikasi kuis dan tantangan pengembangan skill untuk meningkatkan kemampuan profesional dan hobi pengguna.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Web App",
      technologies: ["React", "Node.js", "Express"],
      liveUrl: "",
      githubUrl: "https://github.com/ckckckcz/SkillQuest",
    },
    {
      id: 10,
      title: "kajekaito",
      description: "Sebuah proyek dengan fokus pada pendidikan atau teknologi (harap koreksi dan update deskripsi).",
      image: "/placeholder.svg?height=400&width=600",
      category: "Website",
      technologies: ["Next.js", "React"],
      liveUrl: "",
      githubUrl: "https://github.com/ckckckcz/kajekaito",
    },
    {
      id: 11,
      title: "Nutri-Delight",
      description: "Aplikasi untuk membantu pengguna memantau asupan nutrisi dengan rekomendasi menu sehat dan personalisasi diet.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Mobile App",
      technologies: ["React Native", "Firebase"],
      liveUrl: "",
      githubUrl: "https://github.com/ckckckcz/Nutri-Delight",
    },
    {
      id: 12,
      title: "Bento-Kaito",
      description: "Website atau aplikasi dengan fokus pada penyediaan layanan Bento atau katering dengan sistem pemesanan online.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Website",
      technologies: ["Vue.js", "Laravel"],
      liveUrl: "",
      githubUrl: "https://github.com/ckckckcz/Bento-Kaito",
    },
  ];

  const categories = ["All", "Website", "Web App", "Mobile App"];

  const filteredProjects = activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="mb-14">
            <div className="flex justify-start">
              <div className="relative text-white border-2 border-gray-800 text-center lg:w-56 mb-6 lg:text-2xl text-sm w-36 font-semibold lg:p-2 p-1">
                <span className="font-bold">The Goods I Use</span>
                <div>
                  <span className="absolute -top-1 -left-1 w-2 h-2 bg-[#32fb00]"></span>
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#32fb00]"></span>
                  <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#32fb00]"></span>
                  <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#32fb00]"></span>
                </div>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8">
              Exploring the Tools <br />
              <span className="text-[#32fb00]">Behind My Projects</span>
            </h2>
          </div>

          {/* Filter buttons */}
          {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeFilter === category ? "bg-[#32fb00] text-black" : "bg-[#2a2a2a] text-white border-2 border-[#303030] hover:border-[#32fb00]"}`}
              >
                {category}
              </button>
            ))}
          </div> */}

          {/* Projects grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-[#2a2a2a] rounded-3xl border-2 border-[#303030] overflow-hidden hover:border-[#32fb00] transition-all duration-500 transform hover:scale-[1.02] ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-[#32fb00] text-black rounded-full hover:bg-[#28d400] transition-colors duration-300">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors duration-300">
                      <Github className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4 items-center">
                    <div className="text-black bg-[#32fb00] font-bold rounded-full text-sm px-4 py-2">{project.category}</div>
                    <div className="border border-white opacity-10 h-6"></div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-xs text-gray-400 bg-[#1a1a1a] px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">{project.title}</h3>

                  <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex gap-4">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#32fb00] text-black font-semibold rounded-full hover:bg-[#28d400] transition-colors duration-300">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border-2 border-[#303030] text-white font-semibold rounded-full hover:border-[#32fb00] transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
