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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Side - Text Content */}
            <div
              className={`text-center lg:text-left space-y-6 lg:space-y-8 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="space-y-4">
                <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium backdrop-blur-sm border border-purple-500/30">
                  Welcome to my portfolio
                </span>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block lg:inline">
                    Priyanshu Soni
                  </span>
                </h1>

                <div className="text-xl sm:text-2xl lg:text-3xl text-gray-300 min-h-[3rem] flex items-center justify-center lg:justify-start">
                  <span className="mr-3">I'm a</span>
                  <span className="text-purple-400 font-semibold min-w-[280px] text-left">{roles[currentRole]}</span>
                </div>
              </div>

              <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Full-Stack Developer passionate about creating innovative web solutions, AI-powered applications, and
                blockchain technologies. Currently pursuing BTech in Computer Science & Design Engineering.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Link href="/projects">
                  <Button
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 w-full sm:w-auto"
                  >
                    View My Work
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 bg-transparent w-full sm:w-auto"
                  >
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Side - Profile Image */}
            <div
              className={`flex justify-center lg:justify-end order-first lg:order-last transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative max-w-sm lg:max-w-md xl:max-w-lg">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-20 scale-110 animate-pulse"></div>

                {/* Profile image container */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl shadow-purple-500/20 hover:scale-105 transition-transform duration-500 mx-auto">
                  <img
                    src="/images/priyanshu-profile.png"
                    alt="Priyanshu Soni - Web Developer & AI Enthusiast"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Floating elements around the image - positioned more carefully */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-500/30 animate-bounce delay-1000">
                  <Code className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                </div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-500/30 animate-bounce delay-2000">
                  <Database className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                </div>
                <div className="absolute top-1/2 -left-4 sm:-left-6 w-8 h-8 sm:w-10 sm:h-10 bg-pink-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-pink-500/30 animate-bounce delay-3000">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section - Better spacing */}
      <section id="stats-section" className="py-16 lg:py-24 px-4 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Quick{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Stats</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A snapshot of my journey in technology and continuous learning
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-8 h-8 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">200+</div>
                <div className="text-gray-400 text-sm">LeetCode Problems Solved</div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">5+</div>
                <div className="text-gray-400 text-sm">Major Projects Completed</div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Database className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">8.32</div>
                <div className="text-gray-400 text-sm">Current CGPA</div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-pink-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-pink-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">4th</div>
                <div className="text-gray-400 text-sm">Year BTech Student</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
