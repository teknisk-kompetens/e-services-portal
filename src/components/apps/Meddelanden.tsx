
'use client'

import React, { useState } from 'react'

const mockMessages = [
  {
    id: 1,
    sender: 'Anna Andersson',
    subject: 'Projektuppdatering',
    preview: 'Hej! Jag ville uppdatera dig om projektets framsteg...',
    time: '10:30',
    read: false,
    avatar: '👤'
  },
  {
    id: 2,
    sender: 'Tech Solutions AB',
    subject: 'Ny faktura tillgänglig',
    preview: 'En ny faktura har genererats för ditt konto...',
    time: '09:15',
    read: true,
    avatar: '🏢'
  },
  {
    id: 3,
    sender: 'System',
    subject: 'Säkerhetsuppdatering',
    preview: 'En viktigt säkerhetsuppdatering har installerats...',
    time: '08:45',
    read: false,
    avatar: '⚙️'
  },
  {
    id: 4,
    sender: 'Maria Svensson',
    subject: 'Mötesinbjudan',
    preview: 'Du har blivit inbjuden till ett möte nästa vecka...',
    time: 'Igår',
    read: true,
    avatar: '🤝'
  }
]

const Meddelanden = () => {
  const [selectedMessage, setSelectedMessage] = useState(mockMessages[0])
  const [filter, setFilter] = useState<'all' | 'unread' | 'important'>('all')

  const filteredMessages = mockMessages.filter(message => {
    switch (filter) {
      case 'unread': return !message.read
      case 'important': return message.sender === 'System'
      default: return true
    }
  })

  return (
    <div className="h-full flex">
      {/* Messages List */}
      <div className="w-1/3 border-r border-gray-200 bg-gray-50 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold text-gray-900">Meddelanden</h2>
            <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
              + Skriv
            </button>
          </div>
          
          {/* Filter buttons */}
          <div className="flex space-x-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                filter === 'all' ? 'bg-blue-100 text-blue-700' : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Alla
            </button>
            <button
              onClick={() => setFilter('unread')}
              className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                filter === 'unread' ? 'bg-blue-100 text-blue-700' : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Olästa ({mockMessages.filter(m => !m.read).length})
            </button>
            <button
              onClick={() => setFilter('important')}
              className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                filter === 'important' ? 'bg-blue-100 text-blue-700' : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Viktiga
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto scrollable">
          {filteredMessages.map((message) => (
            <button
              key={message.id}
              onClick={() => setSelectedMessage(message)}
              className={`w-full text-left p-4 border-b border-gray-200 hover:bg-gray-100 transition-colors ${
                selectedMessage.id === message.id ? 'bg-blue-50 border-blue-200' : ''
              } ${!message.read ? 'bg-white' : 'bg-gray-50'}`}
            >
              <div className="flex items-start space-x-3">
                <span className="text-2xl">{message.avatar}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <p className={`font-medium truncate ${!message.read ? 'text-gray-900' : 'text-gray-700'}`}>
                      {message.sender}
                    </p>
                    <span className="text-xs text-gray-500 ml-2">{message.time}</span>
                  </div>
                  <p className={`text-sm truncate mt-1 ${!message.read ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>
                    {message.subject}
                  </p>
                  <p className="text-sm text-gray-500 truncate mt-1">
                    {message.preview}
                  </p>
                  {!message.read && (
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Message Content */}
      <div className="flex-1 flex flex-col">
        {/* Message Header */}
        <div className="p-6 border-b border-gray-200 bg-white">
          <div className="flex justify-between items-start">
            <div className="flex items-start space-x-4">
              <span className="text-3xl">{selectedMessage.avatar}</span>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">{selectedMessage.subject}</h1>
                <p className="text-gray-600">Från: {selectedMessage.sender}</p>
                <p className="text-sm text-gray-500">Mottaget: {selectedMessage.time}</p>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Svara">
                ↩️
              </button>
              <button className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="Vidarebefordra">
                ➡️
              </button>
              <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Ta bort">
                🗑️
              </button>
              <button className="p-2 text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors" title="Markera som viktigt">
                ⭐
              </button>
            </div>
          </div>
        </div>

        {/* Message Body */}
        <div className="flex-1 p-6 bg-white overflow-y-auto scrollable">
          <div className="max-w-none">
            {selectedMessage.id === 1 && (
              <div className="space-y-4">
                <p>Hej!</p>
                <p>Jag ville uppdatera dig om projektets framsteg. Vi har gjort betydande framsteg under veckan:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Färdigställt användarautentiseringen</li>
                  <li>Implementerat grundläggande CRUD-operationer</li>
                  <li>Designat användargränssnittet för huvudfunktionerna</li>
                  <li>Genomfört initial testning</li>
                </ul>
                <p>Nästa steg inkluderar:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Integration med externa API:er</li>
                  <li>Optimering av prestanda</li>
                  <li>Utökad testning</li>
                </ul>
                <p>Finns det något specifikt du vill att jag fokuserar på? Jag är tillgänglig för diskussion när som helst.</p>
                <p>Med vänliga hälsningar,<br/>Anna</p>
              </div>
            )}

            {selectedMessage.id === 2 && (
              <div className="space-y-4">
                <p>Hej!</p>
                <p>En ny faktura har genererats för ditt konto hos Tech Solutions AB.</p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-medium text-blue-900">Fakturauppgifter</h3>
                  <div className="mt-2 text-sm text-blue-800">
                    <p>Fakturanummer: INV-001</p>
                    <p>Belopp: 15 750 kr</p>
                    <p>Förfallodatum: 2024-08-20</p>
                  </div>
                </div>
                <p>Du kan visa och ladda ner fakturan direkt i portalen.</p>
                <p>Har du frågor om denna faktura är du välkommen att kontakta oss.</p>
              </div>
            )}

            {selectedMessage.id === 3 && (
              <div className="space-y-4">
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h3 className="font-medium text-orange-900 flex items-center">
                    ⚠️ Säkerhetsuppdatering
                  </h3>
                  <p className="mt-2 text-sm text-orange-800">
                    En viktigt säkerhetsuppdatering har installerats automatiskt för att skydda ditt konto.
                  </p>
                </div>
                <p>Följande säkerhetsförbättringar har implementerats:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Förbättrad kryptering för dataöverföring</li>
                  <li>Stärkt sessionhantering</li>
                  <li>Uppdaterade säkerhetscertifikat</li>
                  <li>Förbättrad skydd mot intrång</li>
                </ul>
                <p>Ingen åtgärd krävs från din sida. Alla dina data är säkra och tillgängliga som vanligt.</p>
              </div>
            )}

            {selectedMessage.id === 4 && (
              <div className="space-y-4">
                <p>Hej!</p>
                <p>Du har blivit inbjuden till ett möte nästa vecka för att diskutera det kommande partnerskapet.</p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-medium text-green-900">Mötesinformation</h3>
                  <div className="mt-2 text-sm text-green-800">
                    <p>📅 Datum: 2024-08-15</p>
                    <p>🕐 Tid: 14:00 - 15:30</p>
                    <p>📍 Plats: Konferensrum A, huvudkontoret</p>
                    <p>👥 Deltagare: Du, Maria Svensson, projektteamet</p>
                  </div>
                </div>
                <p>Agenda inkluderar:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Genomgång av partnerskap-avtalet</li>
                  <li>Diskussion om teknisk integration</li>
                  <li>Tidsplan för implementering</li>
                  <li>Resurstilldelning</li>
                </ul>
                <p>Vänligen bekräfta ditt deltagande så snart som möjligt.</p>
                <div className="flex space-x-3 mt-6">
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    ✅ Acceptera
                  </button>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                    ❌ Avböj
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    ❓ Kanske
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Reply Section */}
        <div className="border-t border-gray-200 p-6 bg-gray-50">
          <div className="flex space-x-3">
            <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              ↩️ Svara
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              ➡️ Vidarebefordra
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Meddelanden
