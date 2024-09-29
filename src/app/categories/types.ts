export const CATEGORIES = {
  ELECTRONICS: 'electronics',
  KITCHEN: 'kitchen',
} as const

export type Category = (typeof CATEGORIES)[keyof typeof CATEGORIES]