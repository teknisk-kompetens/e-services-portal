
'use client'

import React from 'react'
import { useStore } from '@/lib/store'

// Import all demo apps
import FakturaViewer from './apps/FakturaViewer'
import Kundregister from './apps/Kundregister'
import Kalender from './apps/Kalender'
import DokumentManager from './apps/DokumentManager'
import Analytics from './apps/Analytics'
import Meddelanden from './apps/Meddelanden'

const DemoAppRenderer = () => {
  const { selectedDemo } = useStore()

  if (!selectedDemo) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-4xl text-white">🦴</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Välkommen till E-Services Portal
          </h2>
          <p className="text-gray-600 mb-6">
            Välj en demo-app från sidomenyn för att utforska SKELETT-arkitekturens möjligheter. 
            Varje app demonstrerar olika aspekter av det universella plugin-systemet.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>💡 Tips:</strong> Prova att byta användartyp i navigationen för att se hur olika 
              roller påverkar tillgängliga appar och funktioner.
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Render the selected app
  const renderApp = () => {
    switch (selectedDemo) {
      case 'faktura-viewer':
        return <FakturaViewer />
      case 'kundregister':
        return <Kundregister />
      case 'kalender':
        return <Kalender />
      case 'dokument':
        return <DokumentManager />
      case 'analytics':
        return <Analytics />
      case 'meddelanden':
        return <Meddelanden />
      default:
        return (
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <span className="text-6xl mb-4 block">🚧</span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">App under utveckling</h3>
              <p className="text-gray-600">Denna demo-app är inte implementerad ännu.</p>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="h-full bg-white">
      {renderApp()}
    </div>
  )
}

export default DemoAppRenderer
