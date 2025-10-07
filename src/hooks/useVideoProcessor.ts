"use client"

import { useState, useCallback } from 'react'
import { VideoResult, ProcessingConfig, UploadProgress } from '@/lib/types'

export function useVideoProcessor() {
  const [isProcessing, setIsProcessing] = useState(false)
  const [progress, setProgress] = useState<UploadProgress>({
    progress: 0,
    stage: 'uploading',
    message: 'Preparando...'
  })

  const processVideo = useCallback(async (
    file: File, 
    config: ProcessingConfig
  ): Promise<VideoResult[]> => {
    setIsProcessing(true)
    
    try {
      // Simular upload
      setProgress({
        progress: 20,
        stage: 'uploading',
        message: 'Fazendo upload do vídeo...'
      })
      
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Simular processamento
      setProgress({
        progress: 50,
        stage: 'processing',
        message: 'Analisando conteúdo do vídeo...'
      })
      
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Simular geração com IA
      setProgress({
        progress: 80,
        stage: 'generating',
        message: 'Gerando shorts com IA...'
      })
      
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Finalizar
      setProgress({
        progress: 100,
        stage: 'complete',
        message: 'Shorts gerados com sucesso!'
      })
      
      // Gerar resultados mockados baseados na configuração
      const results: VideoResult[] = generateMockResults(file, config)
      
      return results
      
    } catch (error) {
      console.error('Erro no processamento:', error)
      throw new Error('Falha no processamento do vídeo')
    } finally {
      setIsProcessing(false)
    }
  }, [])

  const reset = useCallback(() => {
    setIsProcessing(false)
    setProgress({
      progress: 0,
      stage: 'uploading',
      message: 'Preparando...'
    })
  }, [])

  return {
    processVideo,
    isProcessing,
    progress,
    reset
  }
}

function generateMockResults(file: File, config: ProcessingConfig): VideoResult[] {
  const baseResults = [
    {
      title: 'Melhor Momento - Início Impactante',
      duration: config.duration === '30' ? '0:30' : config.duration === '60' ? '0:60' : '0:90',
    },
    {
      title: 'Momento Viral - Clímax do Vídeo',
      duration: config.duration === '30' ? '0:28' : config.duration === '60' ? '0:58' : '0:85',
    },
    {
      title: 'Final Épico - Call to Action',
      duration: config.duration === '30' ? '0:30' : config.duration === '60' ? '0:60' : '0:90',
    }
  ]

  return baseResults.map((result, index) => ({
    id: `short-${index + 1}`,
    title: result.title,
    duration: result.duration,
    thumbnail: '',
    size: `${(2 + Math.random() * 2).toFixed(1)} MB`,
    downloadUrl: `#download-${index + 1}`,
    previewUrl: `#preview-${index + 1}`
  }))
}