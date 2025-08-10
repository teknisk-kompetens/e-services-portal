
'use client'

import React, { useState } from 'react'

const mockCustomers = [
  { id: 1, name: 'Anna Andersson', email: 'anna@example.com', phone: '070-123 45 67', company: 'Tech Solutions', lastContact: '2024-08-05' },
  { id: 2, name: 'Johan Johansson', email: 'johan@company.se', phone: '070-234 56 78', company: 'Design AB', lastContact: '2024-08-03' },
  { id: 3, name: 'Maria Svensson', email: 'maria@business.com', phone: '070-345 67 89', company: 'Marketing Pro', lastContact: '2024-07-28' }
]

const Kundregister = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(mockCustomers[0])
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCustomers = mockCustomers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.company.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="h-full flex">
      {/* Customer List */}
      <div className="w-1/3 border-r border-gray-200 bg-gray-50 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h2 className="font-semibold text-gray-900 mb-3">Kundregister</h2>
          <input
            type="text"
            placeholder="Sök kunder..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>
        
        <div className="flex-1 overflow-y-auto scrollable p-4 space-y-2">
          {filteredCustomers.map((customer) => (
            <button
              key={customer.id}
              onClick={() => setSelectedCustomer(customer)}
              className={`w-full text-left p-3 rounded-lg transition-colors ${
                selectedCustomer.id === customer.id
                  ? 'bg-blue-100 border-blue-200'
                  : 'bg-white hover:bg-gray-50'
              }`}
            >
              <div>
                <p className="font-medium text-gray-900">{customer.name}</p>
                <p className="text-sm text-gray-600">{customer.company}</p>
                <p className="text-sm text-gray-500">{customer.email}</p>
                <p className="text-xs text-gray-400 mt-1">Senaste kontakt: {customer.lastContact}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="p-4 border-t border-gray-200">
          <button className="w-full px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            + Lägg till kund
          </button>
        </div>
      </div>

      {/* Customer Details */}
      <div className="flex-1 p-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-full">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{selectedCustomer.name}</h1>
                <p className="text-gray-600">{selectedCustomer.company}</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  ✏️
                </button>
                <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  🗑️
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 overflow-y-auto scrollable">
            {/* Contact Information */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-900 mb-3">Kontaktuppgifter</h3>
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-gray-600">📧</span>
                  <span className="text-gray-900">{selectedCustomer.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-600">📱</span>
                  <span className="text-gray-900">{selectedCustomer.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-600">🏢</span>
                  <span className="text-gray-900">{selectedCustomer.company}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-600">📅</span>
                  <span className="text-gray-900">Senaste kontakt: {selectedCustomer.lastContact}</span>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-900 mb-3">Senaste aktivitet</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <span className="text-blue-600">📧</span>
                  <div>
                    <p className="text-sm text-gray-900">E-post skickad</p>
                    <p className="text-xs text-gray-600">Följer upp offert - 2024-08-05</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                  <span className="text-green-600">📞</span>
                  <div>
                    <p className="text-sm text-gray-900">Telefonsamtal</p>
                    <p className="text-xs text-gray-600">Diskuterade nya projekt - 2024-08-03</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
                  <span className="text-purple-600">📄</span>
                  <div>
                    <p className="text-sm text-gray-900">Dokument delat</p>
                    <p className="text-xs text-gray-600">Projektspecifikation.pdf - 2024-08-01</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                📧 Skicka e-post
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                📞 Ring upp
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                📅 Boka möte
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                📄 Skapa offert
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kundregister
