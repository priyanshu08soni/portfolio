"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Code, Database, Globe, Sparkles, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentRole, setCurrentRole] = useState(0)

  const roles = [
    "Web Developer",
    "AI Enthusiast", 
    "Blockchain Developer",
    "Full-Stack Engineer"
  ]

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
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        </div>

        <div className={`relative z-10 text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium backdrop-blur-sm border border-purple-500/30">
              Welcome to my portfolio
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Priyanshu Soni
            </span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-12 flex items-center justify-center">
            <span className="mr-3">I'm a</span>
            <span className="text-purple-400 font-semibold min-w-[280px] text-left">
              {roles[currentRole]}
            </span>
          </div>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Full-Stack Developer passionate about creating innovative web solutions, 
            AI-powered applications, and blockchain technologies. Currently pursuing BTech 
            in Computer Science & Design Engineering.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/projects">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                View My Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-purple-400" />
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 px-4 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Code className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2">200+</div>
                <div className="text-gray-400">LeetCode Problems</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Globe className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2">5+</div>
                <div className="text-gray-400">Major Projects</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Database className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2">8.32</div>
                <div className="text-gray-400">CGPA</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Sparkles className="w-8 h-8 text-pink-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2">4th</div>
                <div className="text-gray-400">Year Student</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
