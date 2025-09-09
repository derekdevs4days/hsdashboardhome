import React, { useState } from 'react';
import { Header } from './components/Header';
import { DashboardGrid } from './components/DashboardGrid';
export function App() {
  // Normally this would come from an authentication context or API
  const [user, setUser] = useState({
    name: 'Derek Truong',
    role: 'Franchisee',
    location: 'Downtown Seattle',
    avatar: 'DT'
  });
  return <div className="min-h-screen bg-white">
      <Header user={user} />
      <main className="container mx-auto px-4 py-6 md:px-8 md:py-8">
        <DashboardGrid />
      </main>
    </div>;
}