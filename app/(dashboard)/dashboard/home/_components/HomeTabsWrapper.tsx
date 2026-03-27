// _components/HomeTabsWrapper.tsx (Client Component)
'use client'

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface HomeTabsWrapperProps {
  children: React.ReactNode
}

export function HomeTabsWrapper({ children }: HomeTabsWrapperProps) {
  const [activeTab, setActiveTab] = React.useState("hero")
  
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="flex items-center justify-center mb-8 bg-emerald-600 text-white">
        <TabsTrigger value="hero">Hero</TabsTrigger>
        <TabsTrigger value="main">Main</TabsTrigger>
        <TabsTrigger value="services">Services</TabsTrigger>
        <TabsTrigger value="events">Events</TabsTrigger>
        <TabsTrigger value="sponsors">Sponsors</TabsTrigger>
        <TabsTrigger value="milestone">Milestone</TabsTrigger>
        <TabsTrigger value="testimonial">Testimonial</TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  )
}