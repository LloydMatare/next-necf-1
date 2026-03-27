// app/dashboard/about/page.tsx
import React from 'react';
import  {AboutTab}  from './_components/aboutTabs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Content Management',
  description: 'Manage about page sections, team members, company history, and more',
};

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50/40 via-white to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-1 w-12 bg-gradient-to-r from-emerald-600 to-indigo-600 rounded-full" />
            <span className="text-sm font-medium text-emerald-600 uppercase tracking-wider">
              Content Management
            </span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            About Page
          </h1>
          <p className="text-slate-600/80 mt-2 max-w-2xl">
            Manage your company story, team members, mission, and all about page content from one place
          </p>
        </div>

        {/* Tabs Component */}
        <AboutTab />
      </div>
    </div>
  );
}

export default About;