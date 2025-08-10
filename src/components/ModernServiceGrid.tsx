
'use client'

import React from 'react'
import { 
  DocumentTextIcon,
  UserGroupIcon,
  CalendarIcon,
  FolderIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  CogIcon,
  ClipboardDocumentListIcon,
  BanknotesIcon,
  PresentationChartLineIcon
} from '@heroicons/react/24/outline'

const services = [
  { id: 'ilive-pdf', name: 'iLive PDF', icon: DocumentTextIcon, color: 'bg-red-500', description: 'PDF management' },
  { id: 'nova-flux', name: 'Nova Flux', icon: PresentationChartLineIcon, color: 'bg-green-500', description: 'Data analytics' },
  { id: 'ilive-pdf-2', name: 'iLive PDF', icon: DocumentTextIcon, color: 'bg-orange-500', description: 'Document processing' },
  { id: 'meta-forms', name: 'Meta forms', icon: ClipboardDocumentListIcon, color: 'bg-purple-500', description: 'Form builder' },
  { id: 'client-practice', name: 'Client Practice', icon: UserGroupIcon, color: 'bg-blue-500', description: 'Client management' },
  
  { id: 'calmare', name: 'Calmare', icon: CalendarIcon, color: 'bg-red-500', description: 'Calendar system' },
  { id: 'eleva-sale', name: 'Eleva Sale', icon: BanknotesIcon, color: 'bg-yellow-500', description: 'Sales platform' },
  { id: 'elvira-portals', name: 'Elvira Portals', icon: CogIcon, color: 'bg-blue-500', description: 'Portal management' },
  { id: 'nova-bilans', name: 'Nova Bilans', icon: ChartBarIcon, color: 'bg-green-500', description: 'Balance reports' },
  { id: 'move-bolt', name: 'Move Bolt', icon: FolderIcon, color: 'bg-red-500', description: 'File transfer' },

  { id: 'nova-10', name: 'Nova 10', icon: DocumentTextIcon, color: 'bg-blue-500', description: 'Document suite' },
  { id: 'gills-emil', name: 'Gills Emil', icon: UserGroupIcon, color: 'bg-red-500', description: 'User management' },
  { id: 'can-bind-clerk', name: 'Can Bind Clerk', icon: FolderIcon, color: 'bg-red-500', description: 'Binding service' },
  { id: 'chorse-pdf', name: 'Chorse PDF', icon: DocumentTextIcon, color: 'bg-blue-500', description: 'PDF editor' },
  { id: 'rupe-plans', name: 'Rupe Plans', icon: CalendarIcon, color: 'bg-gray-500', description: 'Planning tools' }
]

const ModernServiceGrid = () => {
  return (
    <div className="flex-1 max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Service Services</h2>
        <p className="text-gray-600">Choose from available applications and services</p>
      </div>

      {/* Service Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all cursor-pointer group"
          >
            <div className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              
              {/* Service Name */}
              <h3 className="font-semibold text-gray-900 mb-2">{service.name}</h3>
              
              {/* Description */}
              <p className="text-sm text-gray-500 mb-4">{service.description}</p>
              
              {/* Status/Action */}
              <div className="mt-auto">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Active
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="mt-12 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <DocumentTextIcon className="w-5 h-5 text-blue-600" />
            <span className="font-medium text-blue-900">New Document</span>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
            <CalendarIcon className="w-5 h-5 text-green-600" />
            <span className="font-medium text-green-900">Schedule Meeting</span>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
            <ChatBubbleLeftRightIcon className="w-5 h-5 text-purple-600" />
            <span className="font-medium text-purple-900">Send Message</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModernServiceGrid
