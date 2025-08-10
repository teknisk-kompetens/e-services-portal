
'use client'

import React from 'react'
import SkeletonNavigation from '@/components/SkeletonNavigation'
import SkeletonContainer from '@/components/SkeletonContainer'
import SkeletonGrid from '@/components/SkeletonGrid'
import Sidebar from '@/components/Sidebar'
import DemoAppRenderer from '@/components/DemoAppRenderer'
import Luna from '@/components/Luna'
import Vera from '@/components/Vera'
import { useStore } from '@/lib/store'

export default function Home() {
  const { sidebarOpen } = useStore()

  return (
    <>
      {/* SKELETT Navigation - Fixed at top */}
      <SkeletonNavigation />
      
      {/* SKELETT Container - Main viewport constraint */}
      <SkeletonContainer>
        {/* SKELETT Grid - Responsive spatial layout */}
        <SkeletonGrid className="flex">
          {/* Sidebar - Plugin navigation */}
          {sidebarOpen && <Sidebar />}
          
          {/* Main Content Area - App renderer */}
          <div className="flex-1 h-full overflow-hidden">
            <DemoAppRenderer />
          </div>
        </SkeletonGrid>
      </SkeletonContainer>

      {/* AI Personalities - Fixed positioned */}
      <Luna />
      <Vera />
    </>
  )
}
