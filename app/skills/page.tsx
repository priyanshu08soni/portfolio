"use client"

import { useState, useEffect, useRef } from "react"
import { Code, Database, Globe, Wrench, TestTube, Blocks, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"

// Define skills as nodes with vertical layout and more space
const skillsData = {
  nodes: [
    // Frontend Cluster - Top section
    { id: "react", name: "React.js", category: "frontend", x: 200, y: 80, icon: "⚛️", color: "#ef4444" },
    { id: "nextjs", name: "Next.js", category: "frontend", x: 350, y: 60, icon: "▲", color: "#6b7280" },
    { id: "redux", name: "Redux", category: "frontend", x: 120, y: 140, icon: "🔄", color: "#ef4444" },
    { id: "tailwind", name: "Tailwind", category: "frontend", x: 280, y: 120, icon: "🎨", color: "#6b7280" },
    { id: "figma", name: "Figma", category: "frontend", x: 420, y: 100, icon: "🎯", color: "#ef4444" },

    // Backend Cluster - Upper middle section
    { id: "nodejs", name: "Node.js", category: "backend", x: 180, y: 220, icon: "🟢", color: "#6b7280" },
    { id: "express", name: "Express.js", category: "backend", x: 320, y: 200, icon: "🚀", color: "#ef4444" },
    { id: "graphql", name: "GraphQL", category: "backend", x: 400, y: 240, icon: "📊", color: "#6b7280" },
    { id: "restapi", name: "REST API", category: "backend", x: 240, y: 280, icon: "🔗", color: "#ef4444" },

    // Database Cluster - Center section
    { id: "mongodb", name: "MongoDB", category: "database", x: 160, y: 360, icon: "🍃", color: "#6b7280" },
    { id: "sql", name: "SQL", category: "database", x: 320, y: 340, icon: "🗄️", color: "#ef4444" },

    // Languages Cluster - Lower middle section
    { id: "javascript", name: "JavaScript", category: "language", x: 260, y: 420, icon: "📜", color: "#ef4444" },
    { id: "python", name: "Python", category: "language", x: 140, y: 480, icon: "🐍", color: "#6b7280" },
    { id: "cpp", name: "C/C++", category: "language", x: 380, y: 460, icon: "⚡", color: "#ef4444" },
    { id: "solidity", name: "Solidity", category: "language", x: 300, y: 520, icon: "💎", color: "#6b7280" },

    // DevOps Cluster - Right side
    { id: "git", name: "Git/GitHub", category: "devops", x: 480, y: 180, icon: "🔧", color: "#ef4444" },
    { id: "docker", name: "Docker", category: "devops", x: 520, y: 120, icon: "🐳", color: "#6b7280" },
    { id: "jenkins", name: "Jenkins", category: "devops", x: 460, y: 320, icon: "🏗️", color: "#ef4444" },

    // Blockchain Cluster - Left side
    { id: "hardhat", name: "Hardhat", category: "blockchain", x: 80, y: 300, icon: "⛏️", color: "#6b7280" },
    { id: "metamask", name: "Metamask", category: "blockchain", x: 60, y: 240, icon: "🦊", color: "#ef4444" },
    { id: "remix", name: "Remix", category: "blockchain", x: 100, y: 380, icon: "🎵", color: "#6b7280" },

    // Testing Cluster - Bottom section
    { id: "selenium", name: "Selenium", category: "testing", x: 200, y: 580, icon: "🧪", color: "#ef4444" },
    { id: "postman", name: "Postman", category: "testing", x: 360, y: 560, icon: "📮", color: "#6b7280" },
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
  ],
}

// Organize skills by category for mobile view
const skillCategories = [
  {
    title: "Frontend Development",
    icon: Globe,
    color: "#ef4444",
    skills: [
      { name: "React.js", icon: "⚛️", connections: ["Next.js", "Redux", "Tailwind CSS"] },
      { name: "Next.js", icon: "▲", connections: ["React.js", "Node.js", "Tailwind CSS"] },
      { name: "Redux", icon: "🔄", connections: ["React.js", "JavaScript"] },
      { name: "Tailwind CSS", icon: "🎨", connections: ["React.js", "Next.js", "Figma"] },
      { name: "Figma", icon: "🎯", connections: ["Tailwind CSS", "UI/UX Design"] },
    ],
  },
  {
    title: "Backend Development",
    icon: Code,
    color: "#6b7280",
    skills: [
      { name: "Node.js", icon: "🟢", connections: ["Express.js", "React.js", "MongoDB"] },
      { name: "Express.js", icon: "🚀", connections: ["Node.js", "REST API", "MongoDB"] },
      { name: "GraphQL", icon: "📊", connections: ["Node.js", "Database"] },
      { name: "REST API", icon: "🔗", connections: ["Express.js", "Frontend"] },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "#ef4444",
    skills: [
      { name: "MongoDB", icon: "🍃", connections: ["Node.js", "Express.js"] },
      { name: "SQL", icon: "🗄️", connections: ["Python", "Backend"] },
    ],
  },
  {
    title: "Programming Languages",
    icon: Code,
    color: "#6b7280",
    skills: [
      { name: "JavaScript", icon: "📜", connections: ["React.js", "Node.js", "Python"] },
      { name: "Python", icon: "🐍", connections: ["JavaScript", "SQL", "Selenium"] },
      { name: "C/C++", icon: "⚡", connections: ["Python", "System Programming"] },
      { name: "Solidity", icon: "💎", connections: ["JavaScript", "Hardhat", "Blockchain"] },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    color: "#ef4444",
    skills: [
      { name: "Git/GitHub", icon: "🔧", connections: ["Docker", "All Projects"] },
      { name: "Docker", icon: "🐳", connections: ["Git", "Jenkins", "Node.js"] },
      { name: "Jenkins", icon: "🏗️", connections: ["Docker", "CI/CD"] },
    ],
  },
  {
    title: "Blockchain Development",
    icon: Blocks,
    color: "#6b7280",
    skills: [
      { name: "Hardhat", icon: "⛏️", connections: ["Solidity", "Metamask"] },
      { name: "Metamask", icon: "🦊", connections: ["Hardhat", "Remix"] },
      { name: "Remix", icon: "🎵", connections: ["Solidity", "Metamask"] },
    ],
  },
  {
    title: "Testing & API Tools",
    icon: TestTube,
    color: "#ef4444",
    skills: [
      { name: "Selenium", icon: "🧪", connections: ["Python", "Testing"] },
      { name: "Postman", icon: "📮", connections: ["Node.js", "REST API"] },
    ],
  },
]

const categoryColors = {
  frontend: "#ef4444",
  backend: "#6b7280",
  database: "#ef4444",
  language: "#6b7280",
  devops: "#ef4444",
  blockchain: "#6b7280",
  testing: "#ef4444",
}

const categoryIcons = {
  frontend: Globe,
  backend: Code,
  database: Database,
  language: Code,
  devops: Wrench,
  blockchain: Blocks,
  testing: TestTube,
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
    skillsData.edges.forEach((edge) => {
      if (edge.from === nodeId) connected.add(edge.to)
      if (edge.to === nodeId) connected.add(edge.from)
    })
    return connected
  }

  const filteredNodes = selectedCategory
    ? skillsData.nodes.filter((node) => node.category === selectedCategory)
    : skillsData.nodes

  const filteredEdges = selectedCategory
    ? skillsData.edges.filter((edge) => {
        const fromNode = skillsData.nodes.find((n) => n.id === edge.from)
        const toNode = skillsData.nodes.find((n) => n.id === edge.to)
        return fromNode?.category === selectedCategory && toNode?.category === selectedCategory
      })
    : skillsData.edges

  const connectedNodes = hoveredNode ? getConnectedNodes(hoveredNode) : new Set()

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <div className="pt-20 px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Header with Reveal Animation */}
          <div className="text-center mb-12">
            <div className="relative overflow-hidden mb-6">
              <h1
                className={`text-4xl md:text-6xl font-bold text-white transition-all duration-1000 ${
                  isVisible ? "translate-y-0" : "translate-y-full"
                }`}
              >
                Technical{" "}
                <span className="bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">Skills</span>
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
                Interactive skill graph showing my technical expertise and how different technologies connect in my
                projects.
              </p>
              <div
                className={`absolute inset-0 bg-black transition-all duration-1200 ease-out delay-300 ${
                  isVisible ? "translate-x-full" : "translate-x-0"
                }`}
              />
            </div>
          </div>

          {/* Desktop Layout with Compact Sidebar - Hidden on Mobile */}
          <div className="hidden lg:block">
            <div className="flex gap-6">
              {/* Compact Sidebar - Category Filter */}
              <div
                className={`w-64 flex-shrink-0 transition-all duration-1000 delay-600 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
              >
                <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm sticky top-24 h-[900px] flex flex-col">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg text-white">Filter Skills</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 flex-1 overflow-y-auto">
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 text-sm ${
                        selectedCategory === null
                          ? "bg-red-600 text-white shadow-lg"
                          : "bg-gray-800/50 text-gray-300 hover:bg-gray-800/70"
                      }`}
                    >
                      <div className="w-6 h-6 rounded-full bg-red-600/20 flex items-center justify-center">
                        <span className="text-xs">🎯</span>
                      </div>
                      <span className="font-medium">All Skills</span>
                    </button>

                    {Object.entries(categoryColors).map(([category, color]) => {
                      const IconComponent = categoryIcons[category as keyof typeof categoryIcons]
                      const skillCount = skillsData.nodes.filter((node) => node.category === category).length

                      return (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 text-sm ${
                            selectedCategory === category
                              ? "text-white shadow-lg"
                              : "bg-gray-800/50 text-gray-300 hover:bg-gray-800/70"
                          }`}
                          style={{
                            backgroundColor: selectedCategory === category ? color : "transparent",
                          }}
                        >
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: `${color}20` }}
                          >
                            <IconComponent className="w-3 h-3" style={{ color }} />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium capitalize">{category}</div>
                            <div className="text-xs opacity-70">{skillCount} skills</div>
                          </div>
                        </button>
                      )
                    })}
                  </CardContent>
                </Card>
              </div>

              {/* Main Content - Vertical Skills Graph */}
              <div className="flex-1">
                <Card
                  className={`bg-gray-900/50 border-gray-700/50 backdrop-blur-sm transition-all duration-1000 delay-800 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="relative w-full h-[900px] overflow-hidden rounded-lg bg-gradient-to-br from-gray-900/50 to-black/50">
                      <svg
                        ref={svgRef}
                        width="100%"
                        height="100%"
                        viewBox="0 0 600 650"
                        className="absolute inset-0"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        {/* Background grid */}
                        <defs>
                          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#374151" strokeWidth="0.5" opacity="0.08" />
                          </pattern>
                          <filter id="glow">
                            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                            <feMerge>
                              <feMergeNode in="coloredBlur" />
                              <feMergeNode in="SourceGraphic" />
                            </feMerge>
                          </filter>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />

                        {/* Render edges */}
                        <g className="edges">
                          {filteredEdges.map((edge, index) => {
                            const fromNode = skillsData.nodes.find((n) => n.id === edge.from)
                            const toNode = skillsData.nodes.find((n) => n.id === edge.to)
                            if (!fromNode || !toNode) return null

                            const isHighlighted =
                              hoveredNode &&
                              (edge.from === hoveredNode ||
                                edge.to === hoveredNode ||
                                connectedNodes.has(edge.from) ||
                                connectedNodes.has(edge.to))

                            return (
                              <line
                                key={`${edge.from}-${edge.to}`}
                                x1={fromNode.x}
                                y1={fromNode.y}
                                x2={toNode.x}
                                y2={toNode.y}
                                stroke={isHighlighted ? "#ef4444" : "#6b7280"}
                                strokeWidth={isHighlighted ? 3 : 1.5}
                                strokeOpacity={isHighlighted ? 1 : 0.3}
                                className="transition-all duration-300"
                                style={{
                                  filter: isHighlighted ? "drop-shadow(0 0 6px #ef4444)" : "none",
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

                            return (
                              <g
                                key={node.id}
                                transform={`translate(${node.x}, ${node.y})`}
                                className="cursor-pointer"
                                onMouseEnter={() => setHoveredNode(node.id)}
                                onMouseLeave={() => setHoveredNode(null)}
                              >
                                {/* Enhanced glow effect */}
                                {isHighlighted && (
                                  <circle
                                    r="30"
                                    fill={node.color}
                                    opacity="0.15"
                                    className="animate-pulse"
                                    filter="url(#glow)"
                                  />
                                )}

                                {/* Outer ring */}
                                <circle
                                  r="25"
                                  fill="none"
                                  stroke={node.color}
                                  strokeWidth={isHighlighted ? 3 : 2}
                                  opacity={isHighlighted ? 0.8 : 0.4}
                                  className="transition-all duration-300"
                                />

                                {/* Main node circle */}
                                <circle
                                  r="20"
                                  fill={isHighlighted ? node.color : "#111827"}
                                  stroke={node.color}
                                  strokeWidth={isHighlighted ? 3 : 2}
                                  className="transition-all duration-300"
                                  style={{
                                    filter: isHighlighted
                                      ? `drop-shadow(0 0 15px ${node.color})`
                                      : `drop-shadow(0 0 6px ${node.color}40)`,
                                  }}
                                />

                                {/* Node icon */}
                                <text
                                  textAnchor="middle"
                                  dy="0.3em"
                                  fontSize={isHighlighted ? "24" : "20"}
                                  className="pointer-events-none select-none transition-all duration-300"
                                  style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.5))" }}
                                >
                                  {node.icon}
                                </text>

                                {/* Node label */}
                                <text
                                  textAnchor="middle"
                                  dy="40"
                                  fontSize={isHighlighted ? "12" : "9"}
                                  fill="white"
                                  className="pointer-events-none select-none font-bold transition-all duration-300"
                                  style={{
                                    opacity: isHighlighted ? 1 : 0.9,
                                    fontWeight: "bold",
                                    filter: "drop-shadow(0 1px 4px rgba(0,0,0,0.8))",
                                  }}
                                >
                                  {node.name}
                                </text>
                              </g>
                            )
                          })}
                        </g>
                      </svg>

                      {/* Enhanced hover tooltip */}
                      {hoveredNode && (
                        <div className="absolute top-6 left-6 bg-black/95 backdrop-blur-sm rounded-lg p-4 text-white max-w-xs border border-red-600/30 shadow-2xl">
                          <div className="font-bold text-red-300 mb-2 text-lg">
                            {skillsData.nodes.find((n) => n.id === hoveredNode)?.name}
                          </div>
                          <div className="text-sm text-gray-300 mb-2">
                            Category:{" "}
                            <span className="capitalize font-semibold">
                              {skillsData.nodes.find((n) => n.id === hoveredNode)?.category}
                            </span>
                          </div>
                          <div className="text-xs text-gray-400">
                            Connected to <span className="font-semibold">{connectedNodes.size}</span> other skills
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Mobile Card View - Visible only on Mobile */}
          <div className="lg:hidden space-y-6">
            {/* Mobile Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 text-sm ${
                  selectedCategory === null
                    ? "bg-red-600 text-white"
                    : "border border-red-600 text-red-400 hover:bg-red-600/10"
                }`}
              >
                All
              </button>
              {Object.entries(categoryColors).map(([category, color]) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 text-sm ${
                    selectedCategory === category ? "text-white" : "border text-gray-300 hover:bg-gray-800/50"
                  }`}
                  style={{
                    backgroundColor: selectedCategory === category ? color : "transparent",
                    borderColor: color,
                  }}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon
              const isExpanded = expandedCategory === category.title

              return (
                <Card
                  key={category.title}
                  className={`bg-gray-900/50 border-gray-700/50 backdrop-blur-sm transition-all duration-500 hover:bg-gray-900/70 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${categoryIndex * 100}ms` }}
                >
                  <CardHeader
                    className="cursor-pointer"
                    onClick={() => setExpandedCategory(isExpanded ? null : category.title)}
                  >
                    <CardTitle className="flex items-center justify-between text-white">
                      <div className="flex items-center">
                        <div className="p-3 rounded-full mr-4" style={{ backgroundColor: `${category.color}20` }}>
                          <IconComponent className="w-6 h-6" style={{ color: category.color }} />
                        </div>
                        <span>{category.title}</span>
                      </div>
                      <ChevronRight
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                          isExpanded ? "rotate-90" : ""
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
                            className="flex items-center p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300"
                          >
                            <div className="text-2xl mr-4">{skill.icon}</div>
                            <div className="flex-1">
                              <div className="font-semibold text-white mb-1">{skill.name}</div>
                              <div className="flex flex-wrap gap-1">
                                {skill.connections.map((connection) => (
                                  <Badge
                                    key={connection}
                                    variant="secondary"
                                    className="text-xs bg-red-600/20 text-red-300 border-red-600/30"
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
          <Card
            className={`mt-8 bg-gray-900/50 border-gray-700/50 backdrop-blur-sm transition-all duration-1000 delay-1000 hidden lg:block ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <CardHeader>
              <CardTitle className="text-xl text-white text-center">How to Use the Skills Graph</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-red-400 font-semibold">🎯 Hover on Nodes</div>
                  <p className="text-gray-300 text-sm">
                    Hover over any skill to see its connections and related technologies
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-gray-400 font-semibold">🔗 Connected Skills</div>
                  <p className="text-gray-300 text-sm">Lines show how skills work together in real projects</p>
                </div>
                <div className="space-y-2">
                  <div className="text-red-400 font-semibold">📊 Filter by Category</div>
                  <p className="text-gray-300 text-sm">Use the compact sidebar to focus on specific skill areas</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mobile Instructions */}
          <Card
            className={`mt-8 bg-gray-900/50 border-gray-700/50 backdrop-blur-sm transition-all duration-1000 delay-1000 lg:hidden ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <CardHeader>
              <CardTitle className="text-xl text-white text-center">Explore My Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-center">
                Tap on any category to expand and see the skills and their connections. Each skill shows related
                technologies I use in real projects.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
