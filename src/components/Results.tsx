"use client"

import { Download, Play, Share2, Eye, Star, Clock } from 'lucide-react'
import { VideoResult } from '@/lib/types'

interface ResultsProps {
  results: VideoResult[]
  onDownload: (id: string) => void
  onPreview: (id: string) => void
}

export default function Results({ results, onDownload, onPreview }: ResultsProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900 flex items-center">
          <Star className="w-6 h-6 text-yellow-500 mr-2" />
          Seus Shorts estão prontos! 🎉
        </h3>
        <div className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
          {results.length} shorts gerados
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((result, index) => (
          <div key={result.id} className="border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group">
            <div className="relative">
              <div className="aspect-[9/16] bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 flex items-center justify-center relative overflow-hidden">
                {/* Thumbnail simulado com padrão visual */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-400/20"></div>
                <div className="relative z-10 text-center">
                  <Play className="w-12 h-12 text-purple-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-xs text-purple-700 font-medium">Short #{index + 1}</div>
                </div>
                
                {/* Overlay de hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
              
              <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {result.duration}
              </div>
              
              {/* Badge de qualidade */}
              <div className="absolute top-2 left-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs px-2 py-1 rounded">
                HD
              </div>
            </div>
            
            <div className="p-4">
              <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
                {result.title}
              </h4>
              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <span>Tamanho: {result.size}</span>
                <span className="text-green-600 font-medium">✓ Pronto</span>
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={() => onPreview(result.id)}
                  className="flex-1 flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg transition-all duration-300 text-sm group/btn"
                >
                  <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  <span>Prévia</span>
                </button>
                <button
                  onClick={() => onDownload(result.id)}
                  className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg text-white px-3 py-2 rounded-lg transition-all duration-300 text-sm group/btn hover:scale-105"
                >
                  <Download className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  <span>Baixar</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Estatísticas dos resultados */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-xl text-center">
          <div className="text-2xl font-bold text-purple-600">{results.length}</div>
          <div className="text-sm text-purple-700">Shorts Gerados</div>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl text-center">
          <div className="text-2xl font-bold text-blue-600">
            {results.reduce((acc, result) => acc + parseInt(result.duration.split(':')[1]), 0)}s
          </div>
          <div className="text-sm text-blue-700">Tempo Total</div>
        </div>
        <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl text-center">
          <div className="text-2xl font-bold text-green-600">HD</div>
          <div className="text-sm text-green-700">Qualidade</div>
        </div>
      </div>

      {/* Call to action para compartilhamento */}
      <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-100">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h4 className="font-semibold text-gray-900 mb-1 flex items-center">
              <Share2 className="w-5 h-5 mr-2 text-purple-600" />
              Compartilhe seus shorts!
            </h4>
            <p className="text-sm text-gray-600">
              Publique no YouTube, TikTok, Instagram e outras plataformas para maximizar seu alcance
            </p>
          </div>
          <div className="flex space-x-2">
            <button className="flex items-center space-x-2 bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg transition-colors border border-gray-200 text-sm">
              <Share2 className="w-4 h-4" />
              <span>Compartilhar Todos</span>
            </button>
            <button className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm">
              <Download className="w-4 h-4" />
              <span>Baixar Todos</span>
            </button>
          </div>
        </div>
      </div>

      {/* Dicas para otimização */}
      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h5 className="font-medium text-yellow-800 mb-2">💡 Dicas para maximizar o engajamento:</h5>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>• Adicione legendas chamativas nos primeiros 3 segundos</li>
          <li>• Use hashtags relevantes para seu nicho</li>
          <li>• Publique nos horários de maior atividade do seu público</li>
          <li>• Teste diferentes thumbnails para ver qual performa melhor</li>
        </ul>
      </div>
    </div>
  )
}