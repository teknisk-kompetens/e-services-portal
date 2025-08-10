
'use client'

import React, { useState } from 'react'

const mockInvoices = [
  { id: 'INV-001', company: 'Tech Solutions AB', amount: 15750, date: '2024-08-05', status: 'paid' },
  { id: 'INV-002', company: 'Design Studio', amount: 8900, date: '2024-08-03', status: 'pending' },
  { id: 'INV-003', company: 'Marketing Pro', amount: 22500, date: '2024-07-28', status: 'overdue' }
]

const FakturaViewer = () => {
  const [selectedInvoice, setSelectedInvoice] = useState(mockInvoices[0])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'overdue': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'paid': return 'Betald'
      case 'pending': return 'Väntande'
      case 'overdue': return 'Försenad'
      default: return status
    }
  }

  return (
    <div className="h-full flex">
      {/* Invoice List */}
      <div className="w-1/3 border-r border-gray-200 bg-gray-50">
        <div className="p-4 border-b border-gray-200">
          <h2 className="font-semibold text-gray-900">Fakturor</h2>
        </div>
        <div className="p-4 space-y-2">
          {mockInvoices.map((invoice) => (
            <button
              key={invoice.id}
              onClick={() => setSelectedInvoice(invoice)}
              className={`w-full text-left p-3 rounded-lg transition-colors ${
                selectedInvoice.id === invoice.id
                  ? 'bg-blue-100 border-blue-200'
                  : 'bg-white hover:bg-gray-50'
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-gray-900">{invoice.id}</p>
                  <p className="text-sm text-gray-600">{invoice.company}</p>
                  <p className="text-sm text-gray-500">{invoice.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{invoice.amount.toLocaleString('sv-SE')} kr</p>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(invoice.status)}`}>
                    {getStatusText(invoice.status)}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Invoice Details */}
      <div className="flex-1 p-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-full">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{selectedInvoice.id}</h1>
                <p className="text-gray-600">{selectedInvoice.company}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedInvoice.status)}`}>
                {getStatusText(selectedInvoice.status)}
              </span>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Fakturauppgifter</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fakturanummer:</span>
                    <span className="font-medium">{selectedInvoice.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Datum:</span>
                    <span className="font-medium">{selectedInvoice.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Förfallodatum:</span>
                    <span className="font-medium">2024-08-20</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-2">Betalningsinformation</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-medium">{(selectedInvoice.amount * 0.8).toLocaleString('sv-SE')} kr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Moms (25%):</span>
                    <span className="font-medium">{(selectedInvoice.amount * 0.2).toLocaleString('sv-SE')} kr</span>
                  </div>
                  <div className="flex justify-between font-semibold border-t pt-2">
                    <span>Total:</span>
                    <span>{selectedInvoice.amount.toLocaleString('sv-SE')} kr</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                📄 Ladda ner PDF
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                📧 Skicka påminnelse
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                ✏️ Redigera
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FakturaViewer
