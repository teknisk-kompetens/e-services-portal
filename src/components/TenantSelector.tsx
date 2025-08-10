
'use client'

import React, { useState } from 'react'
import { useStore, TenantType } from '@/lib/store'
import { mockLogin } from '@/lib/mockAuth'

const tenants: { type: TenantType; label: string; icon: string; color: string }[] = [
  { type: 'KUNDER', label: 'Kunder', icon: '👤', color: 'bg-blue-500' },
  { type: 'FÖRETAG', label: 'Företag', icon: '🏢', color: 'bg-green-500' },
  { type: 'ÅTERFÖRSÄLJARE', label: 'Återförsäljare', icon: '🤝', color: 'bg-purple-500' },
  { type: 'DEVTEAM', label: 'Dev Team', icon: '⚙️', color: 'bg-gray-700' }
]

const TenantSelector = () => {
  const { currentTenant, isAuthenticated, login, switchTenant } = useStore()
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleTenantChange = async (tenant: TenantType) => {
    setIsLoading(true)
    try {
      const user = await mockLogin(tenant)
      if (!isAuthenticated) {
        login(user)
      } else {
        switchTenant(tenant)
      }
    } catch (error) {
      console.error('Login failed:', error)
    } finally {
      setIsLoading(false)
      setIsOpen(false)
    }
  }

  const currentTenantInfo = tenants.find(t => t.type === currentTenant)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isLoading}
        className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition-colors disabled:opacity-50"
      >
        <span className="text-lg">{currentTenantInfo?.icon}</span>
        <span className="text-sm font-medium hidden sm:block">{currentTenantInfo?.label}</span>
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="p-2">
            <p className="text-xs text-gray-500 uppercase tracking-wide font-medium px-3 py-2">
              Välj Användartyp
            </p>
            {tenants.map((tenant) => (
              <button
                key={tenant.type}
                onClick={() => handleTenantChange(tenant.type)}
                disabled={isLoading}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 ${
                  currentTenant === tenant.type ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                }`}
              >
                <div className={`w-8 h-8 ${tenant.color} rounded-lg flex items-center justify-center`}>
                  <span className="text-white text-sm">{tenant.icon}</span>
                </div>
                <div className="flex-1 text-left">
                  <p className="text-sm font-medium">{tenant.label}</p>
                  <p className="text-xs text-gray-500">{tenant.type}</p>
                </div>
                {currentTenant === tenant.type && (
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default TenantSelector
