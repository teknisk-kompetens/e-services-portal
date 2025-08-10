
'use client'

import React, { ReactNode } from 'react'

interface SkeletonContainerProps {
  children: ReactNode
  className?: string
}

const SkeletonContainer: React.FC<SkeletonContainerProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`spatial-container ${className}`}>
      {/* Navigation space - fixed 64px (16 * 4) */}
      <div className="h-16 w-full"></div>
      
      {/* Main content area - remaining viewport height */}
      <div className="h-[calc(100vh-4rem)] w-full overflow-hidden">
        {children}
      </div>
    </div>
  )
}

export default SkeletonContainer
