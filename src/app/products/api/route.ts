import { NextRequest } from 'next/server'
import fs from 'fs'
import { Product } from '../types'
import { Category } from '@/app/categories/types'

export const GET = async (request: NextRequest): Promise<Response> => {
  const { searchParams } = request.nextUrl
  const category = searchParams.get('category') as Category

  // TODO: Check if category is valid

  const data = fs.readFileSync('./src/app/products/data.json', 'utf-8')
  const products = JSON.parse(data) as Product[]

  const payload = category
    ? products.filter((product) => product.category === category)
    : products

  return new Response(JSON.stringify(payload), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
