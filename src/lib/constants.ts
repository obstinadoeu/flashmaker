export const APP_CONFIG = {
  name: 'ShortMaker',
  description: 'Transforme seus vídeos em Shorts Virais',
  maxFileSize: 500 * 1024 * 1024, // 500MB
  supportedFormats: ['video/mp4', 'video/mov', 'video/avi', 'video/quicktime'],
  processingTimeout: 300000, // 5 minutos
} as const

export const DURATION_OPTIONS = [
  { value: '30', label: '30 segundos' },
  { value: '60', label: '60 segundos' },
  { value: '90', label: '90 segundos' },
] as const

export const STYLE_OPTIONS = [
  { value: 'automatic', label: 'Automático' },
  { value: 'dynamic', label: 'Dinâmico' },
  { value: 'educational', label: 'Educativo' },
  { value: 'entertainment', label: 'Entretenimento' },
] as const

export const QUALITY_OPTIONS = [
  { value: 'hd', label: 'HD (720p)' },
  { value: 'full-hd', label: 'Full HD (1080p)' },
  { value: '4k', label: '4K (2160p)' },
] as const

export const PROCESSING_STAGES = {
  uploading: 'Fazendo upload...',
  processing: 'Analisando vídeo...',
  generating: 'Gerando shorts com IA...',
  complete: 'Processamento concluído!',
} as const