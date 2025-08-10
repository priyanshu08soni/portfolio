"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Mail, Github, Linkedin, MapPin, Phone, Send, User, MessageSquare } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
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
    color: "text-blue-400"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bengaluru, India",
    href: "https://maps.app.goo.gl/qJkXwjmwW8yG1KUZ6",
    color: "text-green-400"
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <div className="pt-20 px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm always open to discussing new opportunities, collaborations, or just having 
              a chat about technology. Feel free to reach out!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon
                    return (
                      <Link 
                        key={info.label}
                        href={info.href}
                        className="flex items-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                      >
                        <div className={`p-3 rounded-full bg-white/10 mr-4 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className={`w-5 h-5 ${info.color}`} />
                        </div>
                        <div>
                          <div className="text-gray-400 text-sm">{info.label}</div>
                          <div className="text-white font-medium group-hover:text-purple-300 transition-colors">
                            {info.value}
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                </CardContent>
              </Card>
              {/* Quick Links */}
              <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">
                    Quick Links
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link href="/projects" className="block">
                    <Button variant="outline" className="w-full justify-start border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-all duration-300 hover:scale-105">
                      View My Projects
                    </Button>
                  </Link>
                  <Link href="/skills" className="block">
                    <Button variant="outline" className="w-full justify-start border-blue-500 text-blue-400 hover:bg-blue-500/10 transition-all duration-300 hover:scale-105">
                      Technical Skills
                    </Button>
                  </Link>
                  <Link href="/achievements" className="block">
                    <Button variant="outline" className="w-full justify-start border-green-500 text-green-400 hover:bg-green-500/10 transition-all duration-300 hover:scale-105">
                      My Achievements
                    </Button>
                  </Link>
                </CardContent>
              </Card>
          </div>

          {/* Call to Action */}
          <Card className={`mt-16 bg-white/5 border-purple-500/30 backdrop-blur-sm transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Let's Build Something Amazing Together!
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Whether you have a project in mind, want to collaborate, or just want to connect, 
                I'm always excited to meet new people and explore new opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="mailto:priyanshus20k4@gmail.com">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                    <Mail className="mr-2 w-5 h-5" />
                    Email Me
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/priyanshu-soni-180219257/">
                  <Button variant="outline" size="lg" className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
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
