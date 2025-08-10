
'use client'

import React, { ReactNode } from 'react'

interface SkeletonGridProps {
  children: ReactNode
  className?: string
}

const SkeletonGrid: React.FC<SkeletonGridProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`spatial-grid ${className}`}>
      {children}
    </div>
  )
}

export default SkeletonGrid
