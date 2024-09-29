import { Category } from '../categories/types'

export interface Product {
  name: string
  price: number
  description: string
  category: Category
}
