
'use client'

import React from 'react'
import { useStore } from '@/lib/store'
import TenantSelector from './TenantSelector'
import { mockLogout } from '@/lib/mockAuth'

const SkeletonNavigation = () => {
  const { user, isAuthenticated, toggleSidebar, logout } = useStore()

  const handleLogout = async () => {
    await mockLogout()
    logout()
  }

  return (
    <nav className="spatial-navigation bg-white border-b border-gray-200 w-full h-16 px-6 flex items-center justify-between shadow-sm">
      {/* Left Section - Logo & Menu */}
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">🦴</span>
          </div>
          <h1 className="text-xl font-bold text-gray-900">E-Services Portal</h1>
        </div>
      </div>

      {/* Center Section - Breadcrumbs */}
      <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500">
        <span>SKELETT</span>
        <span>→</span>
        <span>Foundation</span>
        <span>→</span>
        <span>Demo</span>
      </div>

      {/* Right Section - User & Tenant */}
      <div className="flex items-center space-x-4">
        <TenantSelector />
        
        {isAuthenticated && user && (
          <div className="flex items-center space-x-3">
            <div className="hidden md:block text-right">
              <p className="text-sm font-medium text-gray-900">{user.name}</p>
              <p className="text-xs text-gray-500">{user.tenant}</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">{user.avatar}</span>
              <button
                onClick={handleLogout}
                className="p-2 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors text-gray-600"
                title="Logga ut"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default SkeletonNavigation
