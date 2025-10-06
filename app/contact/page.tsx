"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Mail, Github, Linkedin, MapPin } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "priyanshus20k4@gmail.com",
    href: "mailto:priyanshus20k4@gmail.com",
    color: "text-red-400"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/priyanshu08soni",
    href: "https://github.com/priyanshu08soni/",
    color: "text-gray-400"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/priyanshu-soni-180219257",
    href: "https://www.linkedin.com/in/priyanshu-soni-180219257/",
    color: "text-red-400"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bengaluru, India",
    href: "https://maps.app.goo.gl/qJkXwjmwW8yG1KUZ6",
    color: "text-gray-400"
  }
]

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

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
                Get In{" "}
                <span className="bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">Touch</span>
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
                I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
                Feel free to reach out!
              </p>
              <div
                className={`absolute inset-0 bg-black transition-all duration-1200 ease-out delay-300 ${
                  isVisible ? "translate-x-full" : "translate-x-0"
                }`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div
              className={`space-y-8 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <Card className="bg-gray-900/80 border-gray-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon
                    return (
                      <Link
                        key={info.label}
                        href={info.href}
                        className="flex items-center p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 group"
                      >
                        <div
                          className={`p-3 rounded-full bg-gray-700/50 mr-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className={`w-5 h-5 ${info.color}`} />
                        </div>
                        <div>
                          <div className="text-gray-400 text-sm">{info.label}</div>
                          <div className="text-white font-medium group-hover:text-red-300 transition-colors">
                            {info.value}
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                </CardContent>
              </Card>

             
            </div>
            <div
              className={`space-y-8 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
             

              {/* Quick Links */}
              <Card className="bg-gray-900/80 border-gray-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link href="/projects" className="block">
                    <Button
                      variant="outline"
                      className="w-full justify-start border-red-600 text-red-400 hover:bg-red-600/10 transition-all duration-300 hover:scale-105 bg-transparent"
                    >
                      View My Projects
                    </Button>
                  </Link>
                  <Link href="/skills" className="block">
                    <Button
                      variant="outline"
                      className="w-full justify-start border-gray-600 text-gray-400 hover:bg-gray-600/10 transition-all duration-300 hover:scale-105 bg-transparent"
                    >
                      Technical Skills
                    </Button>
                  </Link>
                  <Link href="/achievements" className="block">
                    <Button
                      variant="outline"
                      className="w-full justify-start border-red-600 text-red-400 hover:bg-red-600/10 transition-all duration-300 hover:scale-105 bg-transparent"
                    >
                      My Achievements
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <Card
            className={`mt-16 bg-gray-900/80 border-gray-700/50 backdrop-blur-sm transition-all duration-1000 delay-1200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Let's Build Something Amazing Together!</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Whether you have a project in mind, want to collaborate, or just want to connect, I'm always excited to
                meet new people and explore new opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="mailto:priyanshus20k4@gmail.com">
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                  >
                    <Mail className="mr-2 w-5 h-5" />
                    Email Me
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/priyanshu-soni-180219257/">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700/50 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
                  >
                    <Linkedin className="mr-2 w-5 h-5" />
                    Connect on LinkedIn
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
