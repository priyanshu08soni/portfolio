"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Trophy, Code, Award, ExternalLink, Calendar, Star } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"

const achievements = [
  {
    id: 1,
    title: "200+ LeetCode Problems Solved",
    description: "Demonstrated strong problem-solving skills and algorithmic thinking by solving over 200 coding challenges on LeetCode platform.",
    icon: Code,
    color: "text-green-400",
    date: "Ongoing",
    link: "#",
    linkText: "View Profile",
    category: "Coding"
  },
  {
    id: 2,
    title: "Codeforces Active Participant",
    description: "Regular participation in competitive programming contests on Codeforces platform, improving algorithmic skills and problem-solving speed.",
    icon: Trophy,
    color: "text-blue-400",
    date: "Ongoing",
    link: "#",
    linkText: "View Profile",
    category: "Competitive Programming"
  },
  {
    id: 3,
    title: "Cutshort DSA Evaluation - Advanced Proficiency",
    description: "Achieved Advanced Proficiency level in Data Structures and Algorithms evaluation conducted by Cutshort, demonstrating strong technical foundation.",
    icon: Award,
    color: "text-purple-400",
    date: "2024",
    link: "#",
    linkText: "View Certificate",
    category: "Certification"
  },
  {
    id: 4,
    title: "NULLCLASS Training & Internship Completion",
    description: "Successfully completed comprehensive training and internship program at NULLCLASS EdTech, gaining hands-on experience in blockchain development.",
    icon: Star,
    color: "text-yellow-400",
    date: "2024",
    link: "#",
    linkText: "View Certificate",
    category: "Professional"
  }
]

const stats = [
  { label: "LeetCode Problems", value: "200+", color: "text-green-400" },
  { label: "GitHub Repositories", value: "25+", color: "text-blue-400" },
  { label: "Certifications", value: "2", color: "text-purple-400" },
  { label: "Projects Completed", value: "5+", color: "text-yellow-400" }
]

export default function AchievementsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <div className="pt-20 px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Achievements</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A collection of milestones, certifications, and accomplishments that showcase 
              my dedication to continuous learning and professional growth.
            </p>
          </div>

          {/* Stats Section */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {stats.map((stat, index) => (
              <Card key={stat.label} className="bg-white/5 border-purple-500/20 backdrop-blur-sm text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <Card 
                  key={achievement.id}
                  className={`bg-white/5 border-purple-500/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 group ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${400 + index * 200}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className={`p-3 rounded-full bg-white/10 mr-4 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className={`w-6 h-6 ${achievement.color}`} />
                        </div>
                        <Badge className="bg-purple-500/20 text-purple-300">
                          {achievement.category}
                        </Badge>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        {achievement.date}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-purple-300 transition-colors">
                      {achievement.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      {achievement.description}
                    </p>
                    
                    <Link href={achievement.link}>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {achievement.linkText}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Call to Action */}
          <Card className={`mt-16 bg-white/5 border-purple-500/30 backdrop-blur-sm transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Achieve More Together?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                I'm always looking for new challenges and opportunities to grow. 
                Let's connect and create something amazing together!
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                  Get In Touch
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
