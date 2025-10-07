import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes'
  
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

export function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}

export function validateVideoFile(file: File): { isValid: boolean; error?: string } {
  const maxSize = 500 * 1024 * 1024 // 500MB
  const allowedTypes = ['video/mp4', 'video/mov', 'video/avi', 'video/quicktime']
  
  if (!allowedTypes.includes(file.type)) {
    return {
      isValid: false,
      error: 'Formato não suportado. Use MP4, MOV ou AVI.'
    }
  }
  
  if (file.size > maxSize) {
    return {
      isValid: false,
      error: 'Arquivo muito grande. Máximo 500MB.'
    }
  }
  
  return { isValid: true }
}

export function generateThumbnail(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video')
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    
    video.onloadedmetadata = () => {
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      video.currentTime = 1 // Captura no segundo 1
    }
    
    video.onseeked = () => {
      if (ctx) {
        ctx.drawImage(video, 0, 0)
        const thumbnail = canvas.toDataURL('image/jpeg', 0.8)
        resolve(thumbnail)
      } else {
        reject(new Error('Não foi possível gerar thumbnail'))
      }
    }
    
    video.onerror = () => reject(new Error('Erro ao carregar vídeo'))
    video.src = URL.createObjectURL(file)
  })
}