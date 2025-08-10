
'use client'

import React from 'react'
import { useStore } from '@/lib/store'
import { getTenantPermissions } from '@/lib/mockAuth'

const demoApps = [
  { id: 'faktura-viewer', name: 'Faktura Viewer', icon: '📄', description: 'Visa och hantera fakturor' },
  { id: 'kundregister', name: 'Kundregister', icon: '👥', description: 'CRM och kundhantering' },
  { id: 'kalender', name: 'Kalender', icon: '📅', description: 'Bokningar och schemaläggning' },
  { id: 'dokument', name: 'Dokument Manager', icon: '📁', description: 'Filhantering och arkiv' },
  { id: 'analytics', name: 'Analytics', icon: '📊', description: 'Rapporter och analyser' },
  { id: 'meddelanden', name: 'Meddelanden', icon: '💬', description: 'Intern kommunikation' }
]

const Sidebar = () => {
  const { sidebarOpen, currentTenant, selectedDemo, setSelectedDemo } = useStore()
  const permissions = getTenantPermissions(currentTenant)

  const availableApps = demoApps.filter(app => 
    permissions.canAccessAllApps || permissions.canAccessApps.includes(app.id)
  )

  if (!sidebarOpen) return null

  return (
    <div className="w-80 h-full bg-white border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Demo Appar</h2>
        <p className="text-sm text-gray-600">
          {availableApps.length} appar tillgängliga för {currentTenant.toLowerCase()}
        </p>
      </div>

      {/* Apps List */}
      <div className="flex-1 overflow-y-auto scrollable p-4">
        <div className="space-y-2">
          {availableApps.map((app) => (
            <button
              key={app.id}
              onClick={() => setSelectedDemo(app.id)}
              className={`w-full text-left p-4 rounded-lg border transition-all hover:shadow-md ${
                selectedDemo === app.id
                  ? 'bg-blue-50 border-blue-200 shadow-sm'
                  : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-start space-x-3">
                <span className="text-2xl">{app.icon}</span>
                <div className="flex-1 min-w-0">
                  <h3 className={`font-medium ${
                    selectedDemo === app.id ? 'text-blue-900' : 'text-gray-900'
                  }`}>
                    {app.name}
                  </h3>
                  <p className={`text-sm mt-1 ${
                    selectedDemo === app.id ? 'text-blue-700' : 'text-gray-600'
                  }`}>
                    {app.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Plugin System Info */}
        <div className="mt-8 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
          <h3 className="font-medium text-purple-900 mb-2">🔌 Plugin-Arkitektur</h3>
          <p className="text-sm text-purple-700">
            Dessa demo-appar visar SKELETT:s universella plugin-system. 
            Varje app kan laddas dynamiskt utan att påverka systemets kärna.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
