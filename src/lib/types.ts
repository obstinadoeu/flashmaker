export interface VideoResult {
  id: string
  title: string
  duration: string
  thumbnail: string
  size: string
  downloadUrl?: string
  previewUrl?: string
}

export interface ProcessingConfig {
  duration: '30' | '60' | '90'
  style: 'automatic' | 'dynamic' | 'educational' | 'entertainment'
  quality: 'hd' | 'full-hd' | '4k'
}

export interface UploadProgress {
  progress: number
  stage: 'uploading' | 'processing' | 'generating' | 'complete'
  message: string
}

export interface VideoMetadata {
  duration: number
  width: number
  height: number
  size: number
  format: string
  fps: number
}