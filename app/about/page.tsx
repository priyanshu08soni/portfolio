"use client"

import { useState, useEffect } from "react"
import { GraduationCap, Briefcase, MapPin, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <div className="pt-20 px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Header with Reveal Animation */}
          <div className="text-center mb-16">
            <div className="relative overflow-hidden mb-6">
              <h1
                className={`text-4xl md:text-6xl font-bold text-white transition-all duration-1000 ${
                  isVisible ? "translate-y-0" : "translate-y-full"
                }`}
              >
                About <span className="bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">Me</span>
              </h1>
              <div
                className={`absolute inset-0 bg-red-600 transition-all duration-1000 ease-out delay-200 ${
                  isVisible ? "translate-x-full" : "translate-x-0"
                }`}
              />
            </div>

            <div className="relative overflow-hidden">
              <p
                className={`text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                Passionate developer with a strong foundation in computer science and a keen interest in emerging
                technologies like AI and blockchain.
              </p>
              <div
                className={`absolute inset-0 bg-black transition-all duration-1200 ease-out delay-300 ${
                  isVisible ? "translate-x-full" : "translate-x-0"
                }`}
              />
            </div>
          </div>

          {/* Profile Section */}
          <div
            className={`mb-16 transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  {/* Profile Info */}
                  <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-3xl font-bold text-white mb-4">Priyanshu Soni</h2>
                    <p className="text-xl text-red-400 mb-4">Web Developer & AI Enthusiast</p>
                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                      <Badge className="bg-red-600/20 text-red-300 border-red-600/30">Full-Stack Developer</Badge>
                      <Badge className="bg-gray-600/20 text-gray-300 border-gray-600/30">Blockchain Enthusiast</Badge>
                      <Badge className="bg-red-500/20 text-red-300 border-red-500/30">AI Explorer</Badge>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      I'm a passionate Full-Stack Developer with extensive experience in modern web technologies
                      including React.js, Next.js, and Node.js. My journey in technology has led me to explore
                      cutting-edge fields like AI and blockchain development, always striving to create innovative
                      solutions that make a meaningful impact.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education Section */}
            <Card
              className={`bg-gray-900/50 border-gray-700/50 backdrop-blur-sm transition-all duration-1000 delay-800 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-white">
                  <GraduationCap className="w-6 h-6 text-red-500 mr-3" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-2 border-red-600 pl-6 pb-6">
                  <div className="flex items-center mb-2">
                    <Badge variant="secondary" className="bg-red-600/20 text-red-300 mr-3 border-red-600/30">
                      2022 - Present
                    </Badge>
                    <span className="text-red-400 font-semibold">4th Year</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Bachelor of Technology</h3>
                  <p className="text-red-300 font-medium mb-2">Computer Science & Design Engineering</p>
                  <div className="flex items-center text-gray-400 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    Energy Institute of Bengaluru
                  </div>
                  <div className="flex items-center">
                    <Award className="w-4 h-4 mr-2 text-red-400" />
                    <span className="text-red-400 font-semibold">CGPA: 8.32</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Experience Section */}
            <Card
              className={`bg-gray-900/50 border-gray-700/50 backdrop-blur-sm transition-all duration-1000 delay-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-white">
                  <Briefcase className="w-6 h-6 text-gray-400 mr-3" />
                  Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-2 border-gray-600 pl-6 pb-6">
                  <div className="flex items-center mb-2">
                    <Badge variant="secondary" className="bg-gray-600/20 text-gray-300 mr-3 border-gray-600/30">
                      May - July 2024
                    </Badge>
                    <span className="text-red-400 font-semibold">Remote</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Blockchain Development Intern</h3>
                  <p className="text-gray-300 font-medium mb-3">NULLCLASS EdTech Pvt. Ltd</p>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Managed project deadlines and funding status tracking</li>
                    <li>• Tracked multiple successfully funded projects</li>
                    <li>• Implemented 5% commission fee system for contributions</li>
                    <li>• Developed blockchain-based real estate solutions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Personal Summary */}
          <Card
            className={`mt-12 bg-gray-900/50 border-gray-700/50 backdrop-blur-sm transition-all duration-1000 delay-1200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">Professional Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  During my internship at NULLCLASS EdTech, I gained valuable experience in blockchain development,
                  working on real estate NFT DApps and funding management systems. This experience has strengthened my
                  understanding of decentralized technologies and smart contracts.
                </p>
                <p>
                  I'm particularly interested in creating innovative solutions that bridge traditional web development
                  with emerging technologies. My goal is to contribute to projects that make a meaningful impact while
                  continuously learning and growing in this rapidly evolving field.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
