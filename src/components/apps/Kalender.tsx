
'use client'

import React, { useState } from 'react'

const mockEvents = [
  { id: 1, title: 'Kundmöte - Tech Solutions', time: '09:00', date: '2024-08-10', type: 'meeting' },
  { id: 2, title: 'Projektgenomgång', time: '13:00', date: '2024-08-10', type: 'review' },
  { id: 3, title: 'Lunch med partner', time: '12:00', date: '2024-08-11', type: 'lunch' },
  { id: 4, title: 'Webbinar - AI i Business', time: '14:00', date: '2024-08-12', type: 'webinar' }
]

const Kalender = () => {
  const [selectedDate, setSelectedDate] = useState('2024-08-10')
  const [viewMode, setViewMode] = useState<'day' | 'week' | 'month'>('day')

  const selectedEvents = mockEvents.filter(event => event.date === selectedDate)

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'meeting': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'review': return 'bg-purple-100 text-purple-800 border-purple-200'
      case 'lunch': return 'bg-green-100 text-green-800 border-green-200'
      case 'webinar': return 'bg-orange-100 text-orange-800 border-orange-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case 'meeting': return '👥'
      case 'review': return '🔍'
      case 'lunch': return '🍽️'
      case 'webinar': return '🎓'
      default: return '📅'
    }
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 bg-white">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">Kalender</h2>
          <div className="flex items-center space-x-3">
            {/* View Mode Selector */}
            <div className="flex rounded-lg border border-gray-300 overflow-hidden">
              {(['day', 'week', 'month'] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`px-3 py-1 text-sm font-medium transition-colors ${
                    viewMode === mode
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {mode === 'day' ? 'Dag' : mode === 'week' ? 'Vecka' : 'Månad'}
                </button>
              ))}
            </div>

            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              + Ny bokning
            </button>
          </div>
        </div>

        {/* Date Navigation */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              ◀
            </button>
            <h3 className="text-lg font-medium text-gray-900">
              Lördag 10 Augusti 2024
            </h3>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              ▶
            </button>
          </div>
          
          <button className="px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
            Idag
          </button>
        </div>
      </div>

      <div className="flex-1 flex">
        {/* Time Grid */}
        <div className="w-20 border-r border-gray-200 bg-gray-50">
          <div className="p-2 text-xs text-gray-500 font-medium border-b border-gray-200">
            Tid
          </div>
          <div className="space-y-0">
            {Array.from({ length: 12 }, (_, i) => 8 + i).map(hour => (
              <div key={hour} className="h-16 border-b border-gray-100 px-2 py-1">
                <span className="text-xs text-gray-600">{hour}:00</span>
              </div>
            ))}
          </div>
        </div>

        {/* Events */}
        <div className="flex-1 relative">
          <div className="p-2 text-xs text-gray-500 font-medium border-b border-gray-200 bg-gray-50">
            Bokningar
          </div>
          
          <div className="relative">
            {/* Time slots */}
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="h-16 border-b border-gray-100"></div>
            ))}

            {/* Events overlay */}
            {selectedEvents.map(event => {
              const hour = parseInt(event.time.split(':')[0])
              const topOffset = (hour - 8) * 64 + 8
              
              return (
                <div
                  key={event.id}
                  className={`absolute left-2 right-2 p-2 rounded-lg border ${getEventTypeColor(event.type)} cursor-pointer hover:shadow-md transition-shadow`}
                  style={{ 
                    top: `${topOffset}px`, 
                    height: '48px',
                    zIndex: 10
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <span>{getEventTypeIcon(event.type)}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium truncate">{event.title}</p>
                      <p className="text-xs opacity-75">{event.time}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Event Details Sidebar */}
        <div className="w-80 border-l border-gray-200 bg-gray-50 p-4">
          <h3 className="font-medium text-gray-900 mb-4">Dagens bokningar</h3>
          
          <div className="space-y-3">
            {selectedEvents.map(event => (
              <div key={event.id} className={`p-3 rounded-lg border ${getEventTypeColor(event.type)}`}>
                <div className="flex items-start space-x-3">
                  <span className="text-lg">{getEventTypeIcon(event.type)}</span>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{event.title}</h4>
                    <p className="text-xs opacity-75 mt-1">{event.time}</p>
                    <div className="flex space-x-2 mt-2">
                      <button className="text-xs px-2 py-1 bg-white/50 rounded hover:bg-white/75 transition-colors">
                        Redigera
                      </button>
                      <button className="text-xs px-2 py-1 bg-white/50 rounded hover:bg-white/75 transition-colors">
                        Ta bort
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {selectedEvents.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500 text-sm">Inga bokningar idag</p>
              <button className="mt-3 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                Skapa ny bokning
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Kalender
