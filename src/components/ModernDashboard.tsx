
'use client'

import React from 'react'
import { 
  DocumentTextIcon,
  ExclamationTriangleIcon,
  CalendarIcon,
  ChatBubbleLeftRightIcon,
  PlusIcon,
  ArrowUpRightIcon
} from '@heroicons/react/24/outline'

const ModernDashboard = () => {
  return (
    <div className="flex-1 max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Activity Dashboard</h2>
        <p className="text-gray-600">Overview of your current tasks and activities</p>
      </div>

      {/* Main Widgets Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Fakturor Widget */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <DocumentTextIcon className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Fakturor</h3>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <ArrowUpRightIcon className="w-4 h-4" />
            </button>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <DocumentTextIcon className="w-4 h-4 text-orange-600" />
                <div>
                  <p className="font-medium text-orange-900">2 New</p>
                  <p className="text-sm text-orange-700">Pending Review</p>
                </div>
              </div>
              <span className="bg-orange-200 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">New</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <DocumentTextIcon className="w-4 h-4 text-gray-500" />
                <div>
                  <p className="font-medium text-gray-900">Auditing Review</p>
                  <p className="text-sm text-gray-600">Queuing</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ärenden Widget */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <ExclamationTriangleIcon className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Ärenden</h3>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <ArrowUpRightIcon className="w-4 h-4" />
            </button>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">!</span>
                </div>
                <div>
                  <p className="font-medium text-red-900">High</p>
                  <p className="text-sm text-red-700">Priority</p>
                </div>
              </div>
              <span className="bg-red-200 text-red-800 text-xs font-medium px-2 py-1 rounded-full">High</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-yellow-400 rounded flex items-center justify-center">
                  <span className="text-white text-xs">📁</span>
                </div>
                <div>
                  <p className="font-medium text-blue-900">Open (3)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bokningskalender Widget */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <CalendarIcon className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Bokningskalender</h3>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <ArrowUpRightIcon className="w-4 h-4" />
            </button>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <CalendarIcon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-blue-900">Sugtanbrändning</p>
                </div>
              </div>
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                +
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <CalendarIcon className="w-4 h-4 text-gray-500" />
                <div>
                  <p className="font-medium text-gray-900">Meeting with Alex - 2 PM</p>
                </div>
              </div>
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                +
              </div>
            </div>
          </div>
        </div>

        {/* Meddelanden Widget */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <ChatBubbleLeftRightIcon className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Meddelanden</h3>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <ArrowUpRightIcon className="w-4 h-4" />
            </button>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">⚠️</span>
                </div>
                <div>
                  <p className="font-medium text-orange-900">Unread</p>
                  <p className="text-sm text-orange-700">5 Unread</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <ChatBubbleLeftRightIcon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-blue-900">Messages</p>
                  <p className="text-sm text-blue-700">💬 💬</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 text-sm">✓</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Invoice #12345 approved</p>
              <p className="text-xs text-gray-500">2 minutes ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <CalendarIcon className="w-4 h-4 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Meeting scheduled with Alex</p>
              <p className="text-xs text-gray-500">10 minutes ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
              <ChatBubbleLeftRightIcon className="w-4 h-4 text-orange-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">New message from team</p>
              <p className="text-xs text-gray-500">1 hour ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModernDashboard
