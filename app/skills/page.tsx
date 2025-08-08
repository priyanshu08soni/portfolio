"use client"

import { useState, useEffect, useRef } from "react"
import { Code, Database, Globe, Wrench, TestTube, Blocks, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"

// Define skills as nodes with much more spacious positions and smaller circles
const skillsData = {
  nodes: [
    // Frontend Cluster - Top Left (more spread out)
    { id: "react", name: "React.js", category: "frontend", x: 120, y: 60, icon: "⚛️", color: "#61DAFB" },
    { id: "nextjs", name: "Next.js", category: "frontend", x: 260, y: 40, icon: "▲", color: "#000000" },
    { id: "redux", name: "Redux", category: "frontend", x: 80, y: 140, icon: "🔄", color: "#764ABC" },
    { id: "tailwind", name: "Tailwind", category: "frontend", x: 220, y: 120, icon: "🎨", color: "#06B6D4" },
    { id: "figma", name: "Figma", category: "frontend", x: 40, y: 100, icon: "🎯", color: "#F24E1E" },
    
    // Backend Cluster - Top Right (more spread out)
    { id: "nodejs", name: "Node.js", category: "backend", x: 500, y: 60, icon: "🟢", color: "#339933" },
    { id: "express", name: "Express.js", category: "backend", x: 640, y: 40, icon: "🚀", color: "#000000" },
    { id: "graphql", name: "GraphQL", category: "backend", x: 580, y: 140, icon: "📊", color: "#E10098" },
    { id: "restapi", name: "REST API", category: "backend", x: 440, y: 140, icon: "🔗", color: "#FF6B35" },
    
    // Database Cluster - Center (more spread out)
    { id: "mongodb", name: "MongoDB", category: "database", x: 320, y: 200, icon: "🍃", color: "#47A248" },
    { id: "sql", name: "SQL", category: "database", x: 460, y: 200, icon: "🗄️", color: "#336791" },
    
    // Languages Cluster - Bottom Center (more spread out)
    { id: "javascript", name: "JavaScript", category: "language", x: 380, y: 280, icon: "📜", color: "#F7DF1E" },
    { id: "python", name: "Python", category: "language", x: 240, y: 340, icon: "🐍", color: "#3776AB" },
    { id: "cpp", name: "C/C++", category: "language", x: 120, y: 340, icon: "⚡", color: "#00599C" },
    { id: "solidity", name: "Solidity", category: "language", x: 520, y: 340, icon: "💎", color: "#363636" },
    
    // DevOps Cluster - Top Far Right (more spread out)
    { id: "git", name: "Git/GitHub", category: "devops", x: 720, y: 100, icon: "🔧", color: "#F05032" },
    { id: "docker", name: "Docker", category: "devops", x: 800, y: 60, icon: "🐳", color: "#2496ED" },
    { id: "jenkins", name: "Jenkins", category: "devops", x: 760, y: 160, icon: "🏗️", color: "#D33833" },
    
    // Blockchain Cluster - Bottom Left (more spread out)
    { id: "hardhat", name: "Hardhat", category: "blockchain", x: 60, y: 240, icon: "⛏️", color: "#FFF100" },
    { id: "metamask", name: "Metamask", category: "blockchain", x: 40, y: 180, icon: "🦊", color: "#F6851B" },
    { id: "remix", name: "Remix", category: "blockchain", x: 140, y: 280, icon: "🎵", color: "#1976D2" },
    
    // Testing Cluster - Bottom Right (more spread out)
    { id: "selenium", name: "Selenium", category: "testing", x: 640, y: 280, icon: "🧪", color: "#43B02A" },
    { id: "postman", name: "Postman", category: "testing", x: 740, y: 240, icon: "📮", color: "#FF6C37" },
  ],
  edges: [
    // Frontend connections
    { from: "react", to: "nextjs", strength: 0.9 },
    { from: "react", to: "redux", strength: 0.8 },
    { from: "react", to: "tailwind", strength: 0.7 },
    { from: "nextjs", to: "tailwind", strength: 0.6 },
    { from: "figma", to: "tailwind", strength: 0.5 },
    
    // Backend connections
    { from: "nodejs", to: "express", strength: 0.9 },
    { from: "express", to: "restapi", strength: 0.8 },
    { from: "nodejs", to: "graphql", strength: 0.7 },
    { from: "express", to: "mongodb", strength: 0.8 },
    
    // Full-stack connections
    { from: "react", to: "nodejs", strength: 0.8 },
    { from: "nextjs", to: "nodejs", strength: 0.9 },
    { from: "javascript", to: "react", strength: 0.9 },
    { from: "javascript", to: "nodejs", strength: 0.9 },
    
    // Database connections
    { from: "mongodb", to: "sql", strength: 0.6 },
    { from: "nodejs", to: "mongodb", strength: 0.8 },
    { from: "python", to: "sql", strength: 0.7 },
    
    // Language connections
    { from: "javascript", to: "python", strength: 0.6 },
    { from: "cpp", to: "python", strength: 0.5 },
    { from: "solidity", to: "javascript", strength: 0.7 },
    
    // DevOps connections
    { from: "git", to: "docker", strength: 0.8 },
    { from: "docker", to: "jenkins", strength: 0.7 },
    { from: "nodejs", to: "docker", strength: 0.6 },
    
    // Blockchain connections
    { from: "solidity", to: "hardhat", strength: 0.9 },
    { from: "hardhat", to: "metamask", strength: 0.8 },
    { from: "metamask", to: "remix", strength: 0.7 },
    { from: "solidity", to: "remix", strength: 0.8 },
    
    // Testing connections
    { from: "selenium", to: "postman", strength: 0.6 },
    { from: "nodejs", to: "postman", strength: 0.7 },
    { from: "python", to: "selenium", strength: 0.8 },
  ]
}

// Organize skills by category for mobile view
const skillCategories = [
  {
    title: "Frontend Development",
    icon: Globe,
    color: "#3B82F6",
    skills: [
      { name: "React.js", icon: "⚛️", connections: ["Next.js", "Redux", "Tailwind CSS"] },
      { name: "Next.js", icon: "▲", connections: ["React.js", "Node.js", "Tailwind CSS"] },
      { name: "Redux", icon: "🔄", connections: ["React.js", "JavaScript"] },
      { name: "Tailwind CSS", icon: "🎨", connections: ["React.js", "Next.js", "Figma"] },
      { name: "Figma", icon: "🎯", connections: ["Tailwind CSS", "UI/UX Design"] }
    ]
  },
  {
    title: "Backend Development",
    icon: Code,
    color: "#10B981",
    skills: [
      { name: "Node.js", icon: "🟢", connections: ["Express.js", "React.js", "MongoDB"] },
      { name: "Express.js", icon: "🚀", connections: ["Node.js", "REST API", "MongoDB"] },
      { name: "GraphQL", icon: "📊", connections: ["Node.js", "Database"] },
      { name: "REST API", icon: "🔗", connections: ["Express.js", "Frontend"] }
    ]
  },
  {
    title: "Databases",
    icon: Database,
    color: "#8B5CF6",
    skills: [
      { name: "MongoDB", icon: "🍃", connections: ["Node.js", "Express.js"] },
      { name: "SQL", icon: "🗄️", connections: ["Python", "Backend"] }
    ]
  },
  {
    title: "Programming Languages",
    icon: Code,
    color: "#F59E0B",
    skills: [
      { name: "JavaScript", icon: "📜", connections: ["React.js", "Node.js", "Python"] },
      { name: "Python", icon: "🐍", connections: ["JavaScript", "SQL", "Selenium"] },
      { name: "C/C++", icon: "⚡", connections: ["Python", "System Programming"] },
      { name: "Solidity", icon: "💎", connections: ["JavaScript", "Hardhat", "Blockchain"] }
    ]
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    color: "#EF4444",
    skills: [
      { name: "Git/GitHub", icon: "🔧", connections: ["Docker", "All Projects"] },
      { name: "Docker", icon: "🐳", connections: ["Git", "Jenkins", "Node.js"] },
      { name: "Jenkins", icon: "🏗️", connections: ["Docker", "CI/CD"] }
    ]
  },
  {
    title: "Blockchain Development",
    icon: Blocks,
    color: "#06B6D4",
    skills: [
      { name: "Hardhat", icon: "⛏️", connections: ["Solidity", "Metamask"] },
      { name: "Metamask", icon: "🦊", connections: ["Hardhat", "Remix"] },
      { name: "Remix", icon: "🎵", connections: ["Solidity", "Metamask"] }
    ]
  },
  {
    title: "Testing & API Tools",
    icon: TestTube,
    color: "#F97316",
    skills: [
      { name: "Selenium", icon: "🧪", connections: ["Python", "Testing"] },
      { name: "Postman", icon: "📮", connections: ["Node.js", "REST API"] }
    ]
  }
]

const categoryColors = {
  frontend: "#3B82F6",
  backend: "#10B981", 
  database: "#8B5CF6",
  language: "#F59E0B",
  devops: "#EF4444",
  blockchain: "#06B6D4",
  testing: "#F97316"
}

const categoryIcons = {
  frontend: Globe,
  backend: Code,
  database: Database,
  language: Code,
  devops: Wrench,
  blockchain: Blocks,
  testing: TestTube
}

export default function SkillsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const getConnectedNodes = (nodeId: string) => {
    const connected = new Set<string>()
    skillsData.edges.forEach(edge => {
      if (edge.from === nodeId) connected.add(edge.to)
      if (edge.to === nodeId) connected.add(edge.from)
    })
    return connected
  }

  const filteredNodes = selectedCategory 
    ? skillsData.nodes.filter(node => node.category === selectedCategory)
    : skillsData.nodes

  const filteredEdges = selectedCategory
    ? skillsData.edges.filter(edge => {
        const fromNode = skillsData.nodes.find(n => n.id === edge.from)
        const toNode = skillsData.nodes.find(n => n.id === edge.to)
        return fromNode?.category === selectedCategory && toNode?.category === selectedCategory
      })
    : skillsData.edges

  const connectedNodes = hoveredNode ? getConnectedNodes(hoveredNode) : new Set()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <div className="pt-20 px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Technical <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Interactive skill graph showing my technical expertise and how different technologies connect in my projects.
            </p>
          </div>

          {/* Desktop Graph View - Hidden on Mobile */}
          <div className="hidden lg:block">
            {/* Category Filter */}
            <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                  selectedCategory === null
                    ? "bg-purple-600 text-white"
                    : "border border-purple-500 text-purple-400 hover:bg-purple-500/10"
                }`}
              >
                All Skills
              </button>
              {Object.entries(categoryColors).map(([category, color]) => {
                const IconComponent = categoryIcons[category as keyof typeof categoryIcons]
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2 ${
                      selectedCategory === category
                        ? "text-white"
                        : "border text-gray-300 hover:bg-white/10"
                    }`}
                    style={{
                      backgroundColor: selectedCategory === category ? color : 'transparent',
                      borderColor: color
                    }}
                  >
                    <IconComponent className="w-4 h-4" />
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                )
              })}
            </div>

            {/* Skills Graph */}
            <Card className={`bg-white/5 border-purple-500/20 backdrop-blur-sm transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <CardContent className="p-8">
                <div className="relative w-full h-[800px] overflow-hidden rounded-lg bg-gradient-to-br from-slate-800/50 to-purple-900/50">
                  <svg
                    ref={svgRef}
                    width="100%"
                    height="100%"
                    viewBox="0 0 900 400"
                    className="absolute inset-0"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    {/* Background grid for better visual organization */}
                    <defs>
                      <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#374151" strokeWidth="0.5" opacity="0.08"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />

                    {/* Render edges */}
                    <g className="edges">
                      {filteredEdges.map((edge, index) => {
                        const fromNode = skillsData.nodes.find(n => n.id === edge.from)
                        const toNode = skillsData.nodes.find(n => n.id === edge.to)
                        if (!fromNode || !toNode) return null

                        const isHighlighted = hoveredNode && (
                          edge.from === hoveredNode || 
                          edge.to === hoveredNode ||
                          connectedNodes.has(edge.from) ||
                          connectedNodes.has(edge.to)
                        )

                        return (
                          <line
                            key={`${edge.from}-${edge.to}`}
                            x1={fromNode.x}
                            y1={fromNode.y}
                            x2={toNode.x}
                            y2={toNode.y}
                            stroke={isHighlighted ? "#A855F7" : "#374151"}
                            strokeWidth={isHighlighted ? 2.5 : 1}
                            strokeOpacity={isHighlighted ? 0.9 : 0.3}
                            className="transition-all duration-300"
                            style={{
                              filter: isHighlighted ? "drop-shadow(0 0 4px #A855F7)" : "none"
                            }}
                          />
                        )
                      })}
                    </g>

                    {/* Render nodes */}
                    <g className="nodes">
                      {filteredNodes.map((node, index) => {
                        const isHovered = hoveredNode === node.id
                        const isConnected = hoveredNode && connectedNodes.has(node.id)
                        const isHighlighted = isHovered || isConnected
                        const categoryColor = categoryColors[node.category as keyof typeof categoryColors]

                        return (
                          <g
                            key={node.id}
                            transform={`translate(${node.x}, ${node.y})`}
                            className="cursor-pointer"
                            onMouseEnter={() => setHoveredNode(node.id)}
                            onMouseLeave={() => setHoveredNode(null)}
                          >
                            {/* Node glow effect */}
                            {isHighlighted && (
                              <circle
                                r="35"
                                fill={categoryColor}
                                opacity="0.12"
                                className="animate-pulse"
                              />
                            )}
                            
                            {/* Outer ring for better visibility */}
                            <circle
                              r="22"
                              fill="none"
                              stroke={categoryColor}
                              strokeWidth={isHighlighted ? 2 : 1}
                              opacity={isHighlighted ? 0.6 : 0.2}
                              className="transition-all duration-300"
                            />
                            
                            {/* Main node circle - smaller size */}
                            <circle
                              r="18"
                              fill={isHighlighted ? categoryColor : "#1F2937"}
                              stroke={categoryColor}
                              strokeWidth={isHighlighted ? 2.5 : 1.5}
                              className="transition-all duration-300"
                              style={{
                                filter: isHighlighted ? `drop-shadow(0 0 8px ${categoryColor})` : "none"
                              }}
                            />
                            
                            {/* Node icon - smaller size */}
                            <text
                              textAnchor="middle"
                              dy="0.3em"
                              fontSize={isHighlighted ? "16" : "14"}
                              className="pointer-events-none select-none transition-all duration-300"
                            >
                              {node.icon}
                            </text>
                            
                            {/* Node label */}
                            <text
                              textAnchor="middle"
                              dy="40"
                              fontSize={isHighlighted ? "13" : "11"}
                              fill="white"
                              className="pointer-events-none select-none font-medium transition-all duration-300"
                              style={{
                                opacity: isHighlighted ? 1 : 0.8,
                                fontWeight: isHighlighted ? 'bold' : 'medium'
                              }}
                            >
                              {node.name}
                            </text>
                          </g>
                        )
                      })}
                    </g>
                  </svg>

                  {/* Hover tooltip */}
                  {hoveredNode && (
                    <div className="absolute top-6 left-6 bg-black/90 backdrop-blur-sm rounded-lg p-4 text-white max-w-xs border border-purple-500/30">
                      <div className="font-semibold text-purple-300 mb-2 text-lg">
                        {skillsData.nodes.find(n => n.id === hoveredNode)?.name}
                      </div>
                      <div className="text-sm text-gray-300 mb-2">
                        Category: <span className="capitalize">{skillsData.nodes.find(n => n.id === hoveredNode)?.category}</span>
                      </div>
                      <div className="text-xs text-gray-400">
                        Connected to {connectedNodes.size} other skills
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mobile Card View - Visible only on Mobile */}
          <div className="lg:hidden space-y-6">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon
              const isExpanded = expandedCategory === category.title
              
              return (
                <Card 
                  key={category.title}
                  className={`bg-white/5 border-purple-500/20 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${categoryIndex * 100}ms` }}
                >
                  <CardHeader 
                    className="cursor-pointer"
                    onClick={() => setExpandedCategory(isExpanded ? null : category.title)}
                  >
                    <CardTitle className="flex items-center justify-between text-white">
                      <div className="flex items-center">
                        <div 
                          className="p-3 rounded-full mr-4"
                          style={{ backgroundColor: `${category.color}20` }}
                        >
                          <IconComponent 
                            className="w-6 h-6" 
                            style={{ color: category.color }}
                          />
                        </div>
                        <span>{category.title}</span>
                      </div>
                      <ChevronRight 
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                          isExpanded ? 'rotate-90' : ''
                        }`}
                      />
                    </CardTitle>
                  </CardHeader>
                  
                  {isExpanded && (
                    <CardContent className="pt-0">
                      <div className="grid grid-cols-1 gap-4">
                        {category.skills.map((skill, skillIndex) => (
                          <div 
                            key={skill.name}
                            className="flex items-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                          >
                            <div className="text-2xl mr-4">
                              {skill.icon}
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-white mb-1">
                                {skill.name}
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {skill.connections.map((connection) => (
                                  <Badge 
                                    key={connection}
                                    variant="secondary"
                                    className="text-xs bg-purple-500/20 text-purple-300"
                                  >
                                    {connection}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  )}
                </Card>
              )
            })}
          </div>

          {/* Legend - Desktop Only */}
          <Card className={`mt-8 bg-white/5 border-purple-500/20 backdrop-blur-sm transition-all duration-1000 delay-600 hidden lg:block ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <CardHeader>
              <CardTitle className="text-xl text-white text-center">
                How to Use the Skills Graph
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-purple-400 font-semibold">🎯 Hover on Nodes</div>
                  <p className="text-gray-300 text-sm">
                    Hover over any skill to see its connections and related technologies
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-blue-400 font-semibold">🔗 Connected Skills</div>
                  <p className="text-gray-300 text-sm">
                    Lines show how skills work together in real projects
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-green-400 font-semibold">📊 Filter by Category</div>
                  <p className="text-gray-300 text-sm">
                    Use category buttons to focus on specific skill areas
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mobile Instructions */}
          <Card className={`mt-8 bg-white/5 border-purple-500/20 backdrop-blur-sm transition-all duration-1000 delay-600 lg:hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <CardHeader>
              <CardTitle className="text-xl text-white text-center">
                Explore My Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-center">
                Tap on any category to expand and see the skills and their connections. 
                Each skill shows related technologies I use in real projects.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
