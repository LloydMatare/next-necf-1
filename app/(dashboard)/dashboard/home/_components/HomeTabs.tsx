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
    <Tabs defaultValue="hero" className="w-full">
      <TabsList className="flex items-center justify-center mb-8 bg-emerald-600 text-white">
        <TabsTrigger value="hero">Hero</TabsTrigger>
        <TabsTrigger value="main">Main</TabsTrigger>
        <TabsTrigger value="services">Services</TabsTrigger>
        <TabsTrigger value="events">Events</TabsTrigger>
        <TabsTrigger value="sponsors">Sponsors</TabsTrigger>
        <TabsTrigger value="milestone">Milestone</TabsTrigger>
        <TabsTrigger value="testimonial">Testimonial</TabsTrigger>
      </TabsList>
      <TabsContent value="hero">
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
      <TabsContent value="main">
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
      <TabsContent value="services">
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
      <TabsContent value="events">
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
      <TabsContent value="milestone">
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
      <TabsContent value="sponsors">
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
      <TabsContent value="testimonial">
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
    </Tabs>
  );
}