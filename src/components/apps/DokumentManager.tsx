
'use client'

import React, { useState } from 'react'

const mockFiles = [
  { id: 1, name: 'Projektspecifikation.pdf', size: '2.4 MB', type: 'pdf', modified: '2024-08-05', folder: 'Projekt' },
  { id: 2, name: 'Kundkontrakt_2024.docx', size: '156 KB', type: 'document', modified: '2024-08-03', folder: 'Kontrakt' },
  { id: 3, name: 'Presentation_Q3.pptx', size: '8.7 MB', type: 'presentation', modified: '2024-07-28', folder: 'Presentationer' },
  { id: 4, name: 'Budget_2024.xlsx', size: '892 KB', type: 'spreadsheet', modified: '2024-07-25', folder: 'Ekonomi' },
  { id: 5, name: 'Logo_ny.png', size: '245 KB', type: 'image', modified: '2024-07-20', folder: 'Design' },
  { id: 6, name: 'Backup_databas.zip', size: '125 MB', type: 'archive', modified: '2024-07-15', folder: 'IT' }
]

const DokumentManager = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFolder, setSelectedFolder] = useState('Alla')
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list')

  const folders = ['Alla', 'Projekt', 'Kontrakt', 'Presentationer', 'Ekonomi', 'Design', 'IT']

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf': return '📄'
      case 'document': return '📝' 
      case 'presentation': return '📊'
      case 'spreadsheet': return '📈'
      case 'image': return '🖼️'
      case 'archive': return '📦'
      default: return '📁'
    }
  }

  const getFileColor = (type: string) => {
    switch (type) {
      case 'pdf': return 'text-red-600 bg-red-50'
      case 'document': return 'text-blue-600 bg-blue-50'
      case 'presentation': return 'text-orange-600 bg-orange-50'
      case 'spreadsheet': return 'text-green-600 bg-green-50'
      case 'image': return 'text-purple-600 bg-purple-50'
      case 'archive': return 'text-gray-600 bg-gray-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const filteredFiles = mockFiles.filter(file => {
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFolder = selectedFolder === 'Alla' || file.folder === selectedFolder
    return matchesSearch && matchesFolder
  })

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 bg-white">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Dokument Manager</h2>
          <div className="flex items-center space-x-3">
            {/* View Mode Toggle */}
            <div className="flex rounded-lg border border-gray-300 overflow-hidden">
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 text-sm transition-colors ${
                  viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                📋
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 text-sm transition-colors ${
                  viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                ⊞
              </button>
            </div>

            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              📁 Ladda upp
            </button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Sök filer..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
          <select
            value={selectedFolder}
            onChange={(e) => setSelectedFolder(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          >
            {folders.map(folder => (
              <option key={folder} value={folder}>{folder}</option>
            ))}
          </select>
        </div>
      </div>

      {/* File List/Grid */}
      <div className="flex-1 overflow-y-auto scrollable p-4">
        {viewMode === 'list' ? (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="grid grid-cols-12 gap-4 p-3 border-b border-gray-200 bg-gray-50 text-sm font-medium text-gray-600">
              <div className="col-span-5">Namn</div>
              <div className="col-span-2">Storlek</div>
              <div className="col-span-2">Typ</div>
              <div className="col-span-2">Ändrad</div>
              <div className="col-span-1">Åtgärder</div>
            </div>
            
            {filteredFiles.map(file => (
              <div key={file.id} className="grid grid-cols-12 gap-4 p-3 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <div className="col-span-5 flex items-center space-x-3">
                  <span className="text-2xl">{getFileIcon(file.type)}</span>
                  <div>
                    <p className="font-medium text-gray-900">{file.name}</p>
                    <p className="text-sm text-gray-500">{file.folder}</p>
                  </div>
                </div>
                <div className="col-span-2 flex items-center text-sm text-gray-600">
                  {file.size}
                </div>
                <div className="col-span-2 flex items-center">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getFileColor(file.type)}`}>
                    {file.type.toUpperCase()}
                  </span>
                </div>
                <div className="col-span-2 flex items-center text-sm text-gray-600">
                  {file.modified}
                </div>
                <div className="col-span-1 flex items-center space-x-1">
                  <button className="p-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors">
                    📥
                  </button>
                  <button className="p-1 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded transition-colors">
                    👁️
                  </button>
                  <button className="p-1 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded transition-colors">
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {filteredFiles.map(file => (
              <div key={file.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer">
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto rounded-lg flex items-center justify-center text-2xl ${getFileColor(file.type)} mb-3`}>
                    {getFileIcon(file.type)}
                  </div>
                  <h3 className="font-medium text-sm text-gray-900 truncate" title={file.name}>
                    {file.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">{file.size}</p>
                  <p className="text-xs text-gray-400">{file.modified}</p>
                </div>
                
                <div className="flex justify-center space-x-2 mt-3">
                  <button className="p-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors">
                    📥
                  </button>
                  <button className="p-1 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded transition-colors">
                    👁️
                  </button>
                  <button className="p-1 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded transition-colors">
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredFiles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Inga filer hittades</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              📁 Ladda upp första filen
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default DokumentManager
