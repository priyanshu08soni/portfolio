"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";

const projects = [
  {
    id: 1,
    title: "QuizTopia - Interactive Quiz Platform",
    description:
      "A full-stack interactive quiz application built using React.js for the frontend and Express.js with MongoDB for the backend. Features real-time scoring and user management.",
    image: "/interactive-quiz-app.png",
    technologies: ["React.js", "Express.js", "MongoDB", "Node.js", "REST API"],
    liveUrl: "https://luxury-sherbet-7950f9.netlify.app/home",
    githubUrl: "https://github.com/priyanshu08soni/quiz-app",
    period: "Sep 20 - Oct 25, 2024",
    category: "Full-Stack",
  },
  {
    id: 2,
    title: "MS - Market Screeners",
    description:
      "A stock market website showcasing data from over 50 historical stocks with visual analytics to enhance market understanding with the help of charts & calculations.",
    image: "/stock-market-dashboard.png",
    technologies: [
      "React.js",
      "Chart.js",
      "Python",
      "Kaggle Dataset",
      "Data Analytics",
    ],
    liveUrl: "https://ms-stock-market-website.vercel.app/",
    githubUrl: "https://github.com/priyanshu08soni/MS-Stock-Market-Website",
    period: "Nov 8 - Dec 2, 2024",
    category: "Data Analytics",
  },
  {
    id: 3,
    title: "Alabay - Gaming Website",
    description:
      "A gaming website highlighting new game releases, merchandise, and industry trends. Designed to help enthusiasts stay updated with new developments and exciting launches.",
    image: "/modern-gaming-website.png",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://alabay-game.vercel.app/",
    githubUrl: "https://github.com/priyanshu08soni/Alabay-Game",
    period: "Aug 12 - Sep 10, 2024",
    category: "Frontend",
  },
  {
    id: 4,
    title: "Properties - Real Estate NFT DApp",
    description:
      "A Blockchain Real Estate NFT DApp utilizing ERC-721 standard for seamless property transactions between buyer & seller, integrating lenders, inspectors, and appraisers.",
    image: "/blockchain-real-estate-nft-dapp-interface.png",
    technologies: ["Solidity", "React.js", "Hardhat", "Metamask", "ERC-721"],
    videoUrl:
      "https://drive.google.com/file/d/1D_fiKeI6i_aIWko2_pvKMeOM_D7IdVKp/view?usp=sharing",
    githubUrl: "https://github.com/priyanshu08soni/WEB3-property-dealing--NFT-",
    period: "Jan 12 - Mar 20, 2025",
    category: "Blockchain",
  },
];

export default function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Blockchain",
    "Full-Stack",
    "Data Analytics",
    "Frontend",
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-20 px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Header with Reveal Animation */}
          <div className="text-center mb-16">
            <div className="relative overflow-hidden mb-6">
              <h1
                className={`text-4xl md:text-6xl font-bold text-red-500 transition-all duration-1000 ${
                  isVisible ? "translate-y-0" : "translate-y-full"
                }`}
              >
                My{" "}
                <span className="bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
                  Projects
                </span>
              </h1>
              <div
                className={`absolute inset-0 bg-red-600 transition-all duration-1000 ease-out delay-200 ${
                  isVisible ? "translate-x-full" : "translate-x-0"
                }`}
              />
            </div>

            <div className="relative overflow-hidden">
              <p
                className={`text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                A showcase of my technical expertise across blockchain,
                full-stack development, data analytics, AI/ML, and modern web
                technologies.
              </p>
              <div
                className={`absolute inset-0 bg-black transition-all duration-1200 ease-out delay-300 ${
                  isVisible ? "translate-x-full" : "translate-x-0"
                }`}
              />
            </div>
          </div>

          {/* Category Filter */}
          <div
            className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "border-red-600 text-red-400 hover:bg-red-600/10"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="relative overflow-hidden">
                <Card
                  className={`bg-gray-900/80 border-gray-700/50 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/20 group ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${800 + index * 200}ms` }}
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-red-600/80 text-white border-red-600">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center text-sm text-gray-400 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.period}
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-red-300 transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-gray-700/50 text-gray-300 hover:bg-gray-700/70 transition-colors border-gray-600/50"
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                      {project?.liveUrl && (
                        <Link href={project.liveUrl}>
                          <Button
                            size="sm"
                            className="bg-red-600 hover:bg-red-700 text-white transition-all duration-300 hover:scale-105"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        </Link>
                      )}
                      {project?.videoUrl && (
                        <Link href={project.videoUrl}>
                          <Button
                            size="sm"
                            className="bg-red-600 hover:bg-red-700 text-white transition-all duration-300 hover:scale-105"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        </Link>
                      )}

                      <Link href={project.githubUrl}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-600 text-gray-300 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 bg-transparent"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                <div
                  className={`absolute inset-0 bg-red-600 transition-all duration-1000 ease-out ${
                    isVisible ? "translate-x-full" : "translate-x-0"
                  }`}
                  style={{ transitionDelay: `${700 + index * 200}ms` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
