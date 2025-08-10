
'use client'

import React, { useState, useEffect } from 'react'
import { useStore } from '@/lib/store'

const Vera = () => {
  const { currentTenant } = useStore()
  const [insights, setInsights] = useState<string[]>([])
  const [currentInsight, setCurrentInsight] = useState(0)

  const tenantInsights = {
    KUNDER: [
      "📊 Du har 3 nya fakturor att granska",
      "💡 Tip: Använd sökfunktionen för att hitta äldre dokument snabbt",
      "🔔 Påminnelse: Kontakta företaget om du har frågor om din faktura"
    ],
    FÖRETAG: [
      "📈 Din kundhantering har förbättrats med 23% denna månad",
      "🎯 Rekommendation: Integrera CRM-systemet med kalendern för bättre schemaläggning",
      "💼 3 nya affärsmöjligheter identifierade baserat på din bransch"
    ],
    ÅTERFÖRSÄLJARE: [
      "🤝 5 nya potentiella partners matchade dina kriterier",
      "💰 Kommissionsrapport: +15% från förra månaden",
      "📊 Marketplace: 12 nya produkter inom din kategori"
    ],
    DEVTEAM: [
      "⚡ Systemhälsa: 99.8% uptime senaste veckan",
      "🔧 3 appar behöver uppdateringar",
      "📊 Användningsstatistik: 847 aktiva användare idag"
    ]
  }

  useEffect(() => {
    setInsights(tenantInsights[currentTenant])
    setCurrentInsight(0)
  }, [currentTenant])

  useEffect(() => {
    if (insights.length > 1) {
      const timer = setInterval(() => {
        setCurrentInsight(prev => (prev + 1) % insights.length)
      }, 5000)
      
      return () => clearInterval(timer)
    }
  }, [insights])

  if (!insights.length) return null

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl shadow-xl max-w-sm p-4">
        {/* Header */}
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-xl">🧠</span>
          <div>
            <h3 className="font-semibold">Vera</h3>
            <p className="text-xs opacity-80">Analytisk AI-Assistent</p>
          </div>
        </div>

        {/* Current Insight */}
        <div className="bg-white/10 rounded-lg p-3 mb-3">
          <p className="text-sm">{insights[currentInsight]}</p>
        </div>

        {/* Progress dots */}
        {insights.length > 1 && (
          <div className="flex justify-center space-x-1">
            {insights.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentInsight(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentInsight ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Vera
