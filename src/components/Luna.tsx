
'use client'

import React, { useState } from 'react'

const Luna = () => {
  const [isActive, setIsActive] = useState(false)
  const [message, setMessage] = useState('')

  const lunaPersonality = {
    greeting: "Hej! Jag är Luna, din kreativa AI-assistent. Jag hjälper dig att navigera och optimera ditt arbete i portalen! 🌙",
    suggestions: [
      "Vill du att jag visar dig de mest använda apparna för din bransch?",
      "Jag kan hjälpa dig skapa en personlig dashboard!",
      "Behöver du hjälp med att förstå spatial navigation?",
      "Vill du att jag analyserar dina arbetsflöden?"
    ]
  }

  const handleActivate = () => {
    setIsActive(true)
    setMessage(lunaPersonality.greeting)
    setTimeout(() => {
      const randomSuggestion = lunaPersonality.suggestions[
        Math.floor(Math.random() * lunaPersonality.suggestions.length)
      ]
      setMessage(randomSuggestion)
    }, 3000)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isActive ? (
        <button
          onClick={handleActivate}
          className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
        >
          <span className="text-2xl">🌙</span>
        </button>
      ) : (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 max-w-sm">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <div className="flex items-center space-x-2">
              <span className="text-xl">🌙</span>
              <div>
                <h3 className="font-semibold text-gray-900">Luna</h3>
                <p className="text-xs text-gray-500">Kreativ AI-Assistent</p>
              </div>
            </div>
            <button
              onClick={() => setIsActive(false)}
              className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Message */}
          <div className="p-4">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-3 mb-3">
              <p className="text-sm text-gray-700">{message}</p>
            </div>

            {/* Quick Actions */}
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-gray-50 transition-colors">
                📊 Visa populära appar
              </button>
              <button className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-gray-50 transition-colors">
                🎨 Anpassa dashboard
              </button>
              <button className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-gray-50 transition-colors">
                📚 Lär dig spatial navigation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Luna
