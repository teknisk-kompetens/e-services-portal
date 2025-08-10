
'use client'

import React from 'react'
import ModernServiceGrid from '@/components/ModernServiceGrid'
import ModernNavigation from '@/components/ModernNavigation'
import { useStore } from '@/lib/store'
import ModernDashboard from '@/components/ModernDashboard'

export default function Home() {
  const { currentView } = useStore()

  return (
    <div className="min-h-screen bg-gray-50">
      <ModernNavigation />
      
      <main className="flex">
        {currentView === 'dashboard' ? (
          <ModernDashboard />
        ) : (
          <ModernServiceGrid />
        )}
      </main>
    </div>
  )
}
