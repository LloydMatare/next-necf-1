// _components/HomeTabs.tsx
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EventCard from "./EventCard";
import HeroList from "./HeroList";
import CreateButton from "@/components/createButton";
import MainList from "./MainList";
import ServiceList from "./ServiceList ";
import MilestoneList from "./MilestoneList";
import TestimonialList from "./TestimonialList ";
import SponsorList from "./SponsorList";

// NO 'use client' directive here - this is a Server Component

export function HomeTabs() {
  return (
    <div className="flex h-full">
      <Tabs defaultValue="hero" orientation="vertical" className="flex w-full">
        <div className="w-64 border-r border-gray-200 pr-4">
          <TabsList className="flex flex-col h-auto bg-emerald-600 text-white w-full p-1">
            <TabsTrigger value="hero" className="w-full justify-start">Hero</TabsTrigger>
            <TabsTrigger value="main" className="w-full justify-start">Main</TabsTrigger>
            <TabsTrigger value="services" className="w-full justify-start">Services</TabsTrigger>
            <TabsTrigger value="events" className="w-full justify-start">Events</TabsTrigger>
            <TabsTrigger value="sponsors" className="w-full justify-start">Sponsors</TabsTrigger>
            <TabsTrigger value="milestone" className="w-full justify-start">Milestone</TabsTrigger>
            <TabsTrigger value="testimonial" className="w-full justify-start">Testimonial</TabsTrigger>
          </TabsList>
        </div>
        <div className="flex-1 pl-6">
          <TabsContent value="hero" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Hero Section</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <CreateButton link="home/hero" />
                <HeroList />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="main" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Main</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <MainList />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="services" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Service</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <ServiceList />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="events" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Events</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <CreateButton link="home/event" />
                <EventCard />
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="milestone" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Milestone</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <MilestoneList />
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="sponsors" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Sponsors</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <SponsorList />
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="testimonial" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Testimonial</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <CreateButton link="home/testimonials" />
                <TestimonialList />
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}