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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />

      <div className="pt-20 px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionate developer with a strong foundation in computer science and a keen interest in emerging
              technologies like AI and blockchain.
            </p>
          </div>

          {/* Profile Section */}
          <div
            className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  {/* Profile Image */}
                  <div className="relative flex-shrink-0">
                    <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-2xl overflow-hidden border-3 border-purple-500/30 shadow-2xl shadow-purple-500/20">
                      <img
                        src="\images\priyanshu-profile.png"
                        alt="Priyanshu Soni"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center border-4 border-slate-900">
                      <span className="text-white text-xs font-bold">4th</span>
                    </div>
                  </div>

                  {/* Profile Info */}
                  <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-3xl font-bold text-white mb-4">Priyanshu Soni</h2>
                    <p className="text-xl text-purple-300 mb-4">Web Developer & AI Enthusiast</p>
                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                      <Badge className="bg-purple-500/20 text-purple-300">Full-Stack Developer</Badge>
                      <Badge className="bg-blue-500/20 text-blue-300">Blockchain Enthusiast</Badge>
                      <Badge className="bg-green-500/20 text-green-300">AI Explorer</Badge>
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
              className={`bg-white/5 border-purple-500/20 backdrop-blur-sm transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-white">
                  <GraduationCap className="w-6 h-6 text-purple-400 mr-3" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-2 border-purple-500 pl-6 pb-6">
                  <div className="flex items-center mb-2">
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 mr-3">
                      2022 - Present
                    </Badge>
                    <span className="text-green-400 font-semibold">3rd Year</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Bachelor of Technology</h3>
                  <p className="text-purple-300 font-medium mb-2">Computer Science & Design Engineering</p>
                  <div className="flex items-center text-gray-400 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    Rajiv Gandhi Institute of Petroleum Technology, Lucknow
                  </div>
                  <div className="flex items-center">
                    <Award className="w-4 h-4 mr-2 text-yellow-400" />
                    <span className="text-yellow-400 font-semibold">CGPA: 8.29</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Experience Section */}
            <Card
              className={`bg-white/5 border-purple-500/20 backdrop-blur-sm transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-white">
                  <Briefcase className="w-6 h-6 text-blue-400 mr-3" />
                  Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-2 border-blue-500 pl-6 pb-6">
                  <div className="flex items-center mb-2">
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 mr-3">
                      May - July 2024
                    </Badge>
                    <span className="text-green-400 font-semibold">Remote</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Blockchain Development Intern</h3>
                  <p className="text-blue-300 font-medium mb-3">NULLCLASS EdTech Pvt. Ltd</p>
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
            className={`mt-12 bg-white/5 border-purple-500/20 backdrop-blur-sm transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
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
