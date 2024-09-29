import { NextRequest } from 'next/server'
import fs from 'fs'
import { Product } from '../../types'

export const GET = async (): Promise<Response> => {
  const data = fs.readFileSync('./src/app/products/data.json', 'utf-8')
  const products = JSON.parse(data) as Product[]

  const productClicks = products.map(({ name, clicks }) => ({
    name: name,
    clicks: clicks,
  }))

  return new Response(JSON.stringify(productClicks), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export const POST = async (request: NextRequest): Promise<Response> => {
  const body = await request.json()
  const name = body?.name

  if (!name) {
    const reason = {
      message: 'Missing name',
    }

    return new Response(JSON.stringify(reason), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  // TODO: Abstract into common function, handle errors
  const data = fs.readFileSync('./src/app/products/data.json', 'utf-8')
  const products = JSON.parse(data) as Product[]

  const updatedProducts = products.map((product) => {
    if (product.name === name)
      return {
        ...product,
        clicks: product.clicks + 1,
      }

    return product
  })

  // TODO: Handle failure
  fs.writeFileSync(
    './src/app/products/data.json',
    JSON.stringify(updatedProducts),
    'utf-8'
  )

  return new Response(null, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
