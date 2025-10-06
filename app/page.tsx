"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Code, Database, Globe, Sparkles, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentRole, setCurrentRole] = useState(0)

  const roles = ["Web Developer", "AI Enthusiast", "Blockchain Developer", "Full-Stack Engineer"]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToStats = () => {
    const statsSection = document.getElementById("stats-section")
    if (statsSection) {
      statsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left space-y-6 lg:space-y-8">
              <div className="space-y-4">
                {/* Welcome Badge with Reveal Animation */}
                <div className="relative overflow-hidden">
                  <div
                    className={`inline-block px-4 py-2 bg-red-600/20 text-red-400 rounded-full text-sm font-medium backdrop-blur-sm border border-red-600/30 transition-all duration-1000 ${
                      isVisible ? "translate-x-0" : "-translate-x-full"
                    }`}
                  >
                    Welcome to my portfolio
                  </div>
                  <div
                    className={`absolute inset-0 bg-black transition-all duration-1000 ease-out ${
                      isVisible ? "translate-x-full" : "translate-x-0"
                    }`}
                  />
                </div>

                {/* Main Heading with Staggered Reveal */}
                <div className="space-y-2">
                  <div className="relative overflow-hidden">
                    <h1
                      className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-red-500 leading-tight transition-all duration-1000 delay-300 ${
                        isVisible ? "translate-y-0" : "translate-y-full"
                      }`}
                    >
                      Hi, I'm
                    </h1>
                    <div
                      className={`absolute inset-0 bg-red-600 transition-all duration-800 ease-out delay-200 ${
                        isVisible ? "translate-x-full" : "translate-x-0"
                      }`}
                    />
                  </div>

                  <div className="relative overflow-hidden">
                    <span
                      className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent block lg:inline transition-all duration-1000 delay-500 ${
                        isVisible ? "translate-y-0" : "translate-y-full"
                      }`}
                    >
                      Priyanshu Soni
                    </span>
                    <div
                      className={`absolute inset-0 bg-gray-800 transition-all duration-1000 ease-out delay-400 ${
                        isVisible ? "translate-x-full" : "translate-x-0"
                      }`}
                    />
                  </div>
                </div>

                {/* Role Animation with Sliding Reveal */}
                <div className="text-xl sm:text-2xl lg:text-3xl text-gray-500 min-h-[3rem] flex items-center justify-center lg:justify-start">
                  <div className="relative overflow-hidden min-w-[280px]">
                    <span className="mr-2">I'm a</span>
                    <span
                      className={`text-red-400 font-semibold transition-all duration-1000 delay-700 ${
                        isVisible ? "translate-y-0" : "translate-y-full"
                      }`}
                    >
                      {roles[currentRole]}
                    </span>
                    <div
                      className={`absolute inset-0 bg-red-600 transition-all duration-1200 ease-out delay-600 ${
                        isVisible ? "translate-x-full" : "translate-x-0"
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Description with Reveal */}
              <div className="relative overflow-hidden">
                <p
                  className={`text-base sm:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed transition-all duration-1000 delay-900 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                >
                  Full-Stack Developer passionate about creating innovative web solutions, AI-powered applications, and
                  blockchain technologies. Currently pursuing BTech in Computer Science & Design Engineering.
                </p>
                <div
                  className={`absolute inset-0 bg-black transition-all duration-1400 ease-out delay-800 ${
                    isVisible ? "translate-x-full" : "translate-x-0"
                  }`}
                />
              </div>

              {/* Buttons with Staggered Reveal */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <div className="relative overflow-hidden">
                  <Link href="/projects">
                    <Button
                      size="lg"
                      className={`bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 w-full sm:w-auto transform ${
                        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                      }`}
                      style={{ transitionDelay: "1100ms" }}
                    >
                      View My Work
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <div
                    className={`absolute inset-0 bg-gray-900 transition-all duration-1000 ease-out delay-1000 ${
                      isVisible ? "translate-x-full" : "translate-x-0"
                    }`}
                  />
                </div>

                <div className="relative overflow-hidden">
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      size="lg"
                      className={`border-red-600 text-red-400 hover:bg-red-600/10 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 bg-transparent w-full sm:w-auto transform ${
                        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                      }`}
                      style={{ transitionDelay: "1300ms" }}
                    >
                      Get In Touch
                    </Button>
                  </Link>
                  <div
                    className={`absolute inset-0 bg-red-600 transition-all duration-1200 ease-out delay-1200 ${
                      isVisible ? "translate-x-full" : "translate-x-0"
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Professional Profile Image */}
            <div
              className={`flex justify-center lg:justify-end order-first lg:order-last transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative max-w-sm lg:max-w-md xl:max-w-lg">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-gray-600 rounded-2xl blur-2xl opacity-20 scale-110 animate-pulse"></div>

                {/* Professional image container */}
                <div className="relative w-64 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem] rounded-2xl overflow-hidden border-2 border-red-600/30 shadow-2xl shadow-red-600/20 hover:scale-105 transition-transform duration-500 mx-auto">
                  <img
                    src="/images/priyanshu.png"
                    alt="Priyanshu Soni - Professional Developer"
                    className="w-full h-full object-cover object-center hover:grayscale-0 transition-all duration-500"
                  />

                  {/* Professional overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Professional badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-red-600/30">
                      <div className="text-white font-semibold text-sm">Priyanshu Soni</div>
                      <div className="text-red-400 text-xs">Full-Stack Developer</div>
                    </div>
                  </div>
                </div>

                {/* Floating elements around the image */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-10 h-10 sm:w-12 sm:h-12 bg-red-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-red-600/30 animate-bounce delay-1000">
                  <Code className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
                </div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gray-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-gray-600/30 animate-bounce delay-2000">
                  <Database className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                </div>
                <div className="absolute top-1/2 -left-4 sm:-left-6 w-8 h-8 sm:w-10 sm:h-10 bg-red-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-red-500/30 animate-bounce delay-3000">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clickable Scroll Indicator */}
        <button
          onClick={scrollToStats}
          className="absolute bottom-8 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform duration-900 cursor-pointer group z-20"
          aria-label="Scroll to next section"
        >
          <div className="flex flex-col items-center bg-black/20 backdrop-blur-sm rounded-full p-3 border border-red-600/30">
            <ChevronDown className="w-6 h-6 text-red-400 group-hover:text-red-300 transition-colors" />
          </div>
          <span className="text-xs text-red-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Scroll Down
          </span>
        </button>
      </section>

      {/* Quick Stats Section */}
      <section id="stats-section" className="py-16 lg:py-24 px-4 bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          {/* Section Header with Reveal Animation */}
          <div className="text-center mb-12">
            <div className="relative overflow-hidden mb-4">
              <h2
                className={`text-3xl lg:text-4xl font-bold text-white transition-all duration-1000 ${
                  isVisible ? "translate-y-0" : "translate-y-full"
                }`}
                style={{ transitionDelay: "1500ms" }}
              >
                Quick{" "}
                <span className="bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">Stats</span>
              </h2>
              <div
                className={`absolute inset-0 bg-red-600 transition-all duration-1000 ease-out delay-1400 ${
                  isVisible ? "translate-x-full" : "translate-x-0"
                }`}
              />
            </div>

            <div className="relative overflow-hidden">
              <p
                className={`text-gray-400 max-w-2xl mx-auto transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: "1700ms" }}
              >
                A snapshot of my journey in technology and continuous learning
              </p>
              <div
                className={`absolute inset-0 bg-black transition-all duration-1200 ease-out delay-1600 ${
                  isVisible ? "translate-x-full" : "translate-x-0"
                }`}
              />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { icon: Code, value: "200+", label: "LeetCode Problems Solved", color: "red" },
              { icon: Globe, value: "5+", label: "Major Projects Completed", color: "gray" },
              { icon: Database, value: "8.32", label: "Current CGPA", color: "red" },
              { icon: Sparkles, value: "4th", label: "Year BTech Student", color: "gray" },
            ].map((stat, index) => (
              <div key={stat.label} className="relative overflow-hidden">
                <Card
                  className={`bg-gray-800/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 group transform ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${1800 + index * 200}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 ${
                        stat.color === "red" ? "bg-red-600/20" : "bg-gray-600/20"
                      } rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <stat.icon className={`w-8 h-8 ${stat.color === "red" ? "text-red-400" : "text-gray-400"}`} />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
                <div
                  className={`absolute inset-0 ${
                    stat.color === "red" ? "bg-red-600" : "bg-gray-600"
                  } transition-all duration-1000 ease-out ${isVisible ? "translate-x-full" : "translate-x-0"}`}
                  style={{ transitionDelay: `${1700 + index * 200}ms` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
