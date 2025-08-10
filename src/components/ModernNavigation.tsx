
'use client'

import React from 'react'
import { useStore } from '@/lib/store'
import { 
  HomeIcon, 
  ChartBarIcon, 
  CogIcon, 
  UserIcon,
  BellIcon
} from '@heroicons/react/24/outline'

const ModernNavigation = () => {
  const { currentView, setCurrentView } = useStore()

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo/Brand */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">E</span>
            </div>
            <h1 className="text-xl font-semibold text-gray-900">E-Services Portal</h1>
          </div>
        </div>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <button
            onClick={() => setCurrentView('services')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              currentView === 'services'
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <HomeIcon className="w-4 h-4 inline-block mr-2" />
            Services
          </button>
          <button
            onClick={() => setCurrentView('dashboard')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              currentView === 'dashboard'
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <ChartBarIcon className="w-4 h-4 inline-block mr-2" />
            Dashboard
          </button>
        </div>

        {/* Right Side - User Menu */}
        <div className="flex items-center space-x-3">
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <BellIcon className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <CogIcon className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-sm">R</span>
            </div>
            <span className="text-sm font-medium text-gray-700">Robin</span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default ModernNavigation
