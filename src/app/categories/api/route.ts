import fs from 'fs'

export const GET = async (): Promise<Response> => {
  const categories = fs.readFileSync('./src/app/categories/data.json', 'utf-8')
  return new Response(categories, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
