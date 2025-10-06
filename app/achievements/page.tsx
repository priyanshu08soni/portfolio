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
    color: "text-red-400",
    date: "Ongoing",
    link: "https://leetcode.com/u/Priyanshu834/",
    linkText: "View Profile",
    category: "Coding"
  },
  {
    id: 2,
    title: "Codeforces Active Participant",
    description: "Regular participation in competitive programming contests on Codeforces platform, improving algorithmic skills and problem-solving speed.",
    icon: Trophy,
    color: "text-gray-400",
    date: "Ongoing",
    link: "https://codeforces.com/profile/Priyanshus20k4",
    linkText: "View Profile",
    category: "CP"
  },
  {
    id: 3,
    title: "Cutshort DSA Evaluation - Advanced Proficiency",
    description: "Achieved Advanced Proficiency level in Data Structures and Algorithms evaluation conducted by Cutshort, demonstrating strong technical foundation.",
    icon: Award,
    color: "text-red-400",
    date: "2024",
    link: "https://drive.google.com/file/d/1b0dcycnxUmSljPxYqacS_anxQOf_pnq6/view?usp=sharing",
    linkText: "View Certificate",
    category: "Certification"
  },
  {
    id: 4,
    title: "NULLCLASS Training & Internship Completion",
    description: "Successfully completed comprehensive training and internship program at NULLCLASS EdTech, gaining hands-on experience in blockchain development.",
    icon: Star,
    color: "text-gray-400",
    date: "2024",
    link: "https://www.nullclass.com/certificates/6688c2b3425b9cb57ce7ff7c",
    linkText: "View Certificate",
    category: "Professional"
  }
]

const stats = [
  { label: "LeetCode Problems", value: "200+", color: "text-red-400" },
  { label: "GitHub Repositories", value: "25+", color: "text-gray-400" },
  { label: "Certifications", value: "2", color: "text-red-400" },
  { label: "Major Projects", value: "5+", color: "text-gray-400" }
]

export default function AchievementsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

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
                  Achievements
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
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                A collection of milestones, certifications, and accomplishments that showcase my dedication to
                continuous learning and professional growth.
              </p>
              <div
                className={`absolute inset-0 bg-black transition-all duration-1200 ease-out delay-300 ${
                  isVisible ? "translate-x-full" : "translate-x-0"
                }`}
              />
            </div>
          </div>

          {/* Stats Section */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="relative overflow-hidden">
                <Card className="bg-gray-900/80 border-gray-700/50 backdrop-blur-sm text-center hover:bg-gray-900/70 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
                <div
                  className={`absolute inset-0 ${stat.color.includes("red") ? "bg-red-600" : "bg-gray-600"} transition-all duration-1000 ease-out ${
                    isVisible ? "translate-x-full" : "translate-x-0"
                  }`}
                  style={{ transitionDelay: `${500 + index * 200}ms` }}
                />
              </div>
            ))}
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <div key={achievement.id} className="relative overflow-hidden">
                  <Card
                    className={`bg-gray-900/80 border-gray-700/50 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/20 group ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${800 + index * 200}ms` }}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div
                            className={`p-3 rounded-full bg-gray-800/50 mr-4 group-hover:scale-110 transition-transform duration-300`}
                          >
                            <IconComponent className={`w-6 h-6 ${achievement.color}`} />
                          </div>
                          <Badge
                            className={`${achievement.color.includes("red") ? "bg-red-600/20 text-red-300 border-red-600/30" : "bg-gray-600/20 text-gray-300 border-gray-600/30"}`}
                          >
                            {achievement.category}
                          </Badge>
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          {achievement.date}
                        </div>
                      </div>
                      <CardTitle className="text-xl text-white group-hover:text-red-300 transition-colors">
                        {achievement.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-gray-300 leading-relaxed">{achievement.description}</p>

                      <Link href={achievement.link}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-3 border-gray-600 text-gray-300 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 bg-transparent"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {achievement.linkText}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                  <div
                    className={`absolute inset-0 ${achievement.color.includes("red") ? "bg-red-600" : "bg-gray-600"} transition-all duration-1000 ease-out ${
                      isVisible ? "translate-x-full" : "translate-x-0"
                    }`}
                    style={{ transitionDelay: `${700 + index * 200}ms` }}
                  />
                </div>
              )
            })}
          </div>

          {/* Call to Action */}
          <Card
            className={`mt-16  bg-gray-900/80 border-gray-700/50 backdrop-blur-sm transition-all duration-1000 delay-1200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Achieve More Together?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                I'm always looking for new challenges and opportunities to grow. Let's connect and create something
                amazing together!
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
                >
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
