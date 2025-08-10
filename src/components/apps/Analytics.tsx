
'use client'

import React, { useState } from 'react'

const mockData = {
  overview: {
    totalUsers: 1247,
    activeToday: 89,
    revenue: 142500,
    growth: 12.3
  },
  usage: [
    { app: 'Faktura Viewer', users: 456, sessions: 1234, growth: 8.2 },
    { app: 'Kundregister', users: 321, sessions: 897, growth: 15.4 },
    { app: 'Kalender', users: 289, sessions: 756, growth: -2.1 },
    { app: 'Dokument Manager', users: 234, sessions: 623, growth: 22.7 },
    { app: 'Meddelanden', users: 187, sessions: 445, growth: 5.9 }
  ]
}

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('7d')

  const getGrowthColor = (growth: number) => {
    if (growth > 0) return 'text-green-600'
    if (growth < 0) return 'text-red-600'
    return 'text-gray-600'
  }

  const getGrowthIcon = (growth: number) => {
    if (growth > 0) return '📈'
    if (growth < 0) return '📉'
    return '➡️'
  }

  return (
    <div className="h-full overflow-y-auto scrollable">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 bg-white">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">Analytics Dashboard</h2>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          >
            <option value="24h">Senaste 24 timmarna</option>
            <option value="7d">Senaste 7 dagarna</option>
            <option value="30d">Senaste 30 dagarna</option>
            <option value="3m">Senaste 3 månaderna</option>
          </select>
        </div>
      </div>

      <div className="p-6">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Totalt användare</p>
                <p className="text-2xl font-bold text-gray-900">{mockData.overview.totalUsers.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className={`text-sm font-medium ${getGrowthColor(mockData.overview.growth)}`}>
                {getGrowthIcon(mockData.overview.growth)} +{mockData.overview.growth}%
              </span>
              <span className="text-sm text-gray-500 ml-2">vs förra perioden</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Aktiva idag</p>
                <p className="text-2xl font-bold text-gray-900">{mockData.overview.activeToday}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🟢</span>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-sm font-medium text-green-600">📈 +23</span>
              <span className="text-sm text-gray-500 ml-2">från igår</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Intäkter</p>
                <p className="text-2xl font-bold text-gray-900">{mockData.overview.revenue.toLocaleString()} kr</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-sm font-medium text-green-600">📈 +8.2%</span>
              <span className="text-sm text-gray-500 ml-2">från förra månaden</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Tillväxttakt</p>
                <p className="text-2xl font-bold text-gray-900">{mockData.overview.growth}%</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-sm font-medium text-green-600">📈 Stabil tillväxt</span>
            </div>
          </div>
        </div>

        {/* App Usage Statistics */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">App-användning</h3>
            <p className="text-sm text-gray-600 mt-1">Populäraste apparna och deras prestanda</p>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              {mockData.usage.map((app, index) => (
                <div key={app.app} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-sm font-bold">
                      #{index + 1}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{app.app}</h4>
                      <p className="text-sm text-gray-600">{app.users} användare · {app.sessions} sessioner</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    {/* Progress bar */}
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(app.users / mockData.usage[0].users) * 100}%` }}
                      ></div>
                    </div>

                    <div className={`flex items-center space-x-1 ${getGrowthColor(app.growth)}`}>
                      <span>{getGrowthIcon(app.growth)}</span>
                      <span className="text-sm font-medium">
                        {app.growth > 0 ? '+' : ''}{app.growth}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Charts Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Användning över tid</h3>
            <div className="h-64 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <span className="text-4xl mb-2 block">📈</span>
                <p className="text-gray-600">Tidsseriegraf kommer här</p>
                <p className="text-sm text-gray-500 mt-1">Integration med Chart.js planerad</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tenant-fördelning</h3>
            <div className="h-64 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <span className="text-4xl mb-2 block">🥧</span>
                <p className="text-gray-600">Cirkeldiagram kommer här</p>
                <p className="text-sm text-gray-500 mt-1">Visar fördelning mellan tenant-typer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics
