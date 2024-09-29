'use client'
import { AbsoluteCenter, Box, Heading, Stack } from '@chakra-ui/react'
import { Product as ProductType } from './products/types'
import { Product } from './products/components/Product'
import { useEffect, useState } from 'react'
import { CategoryFilter } from './categories/components/CategoryFilter'
import { Category } from './categories/types'

const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([])
  const [category, setCategory] = useState<Category | undefined>(undefined)

  useEffect(() => {
    const url = new URL('http://localhost:3000/products/api')
    if (category) url.searchParams.set('category', category)

    // TODO: This is bad, use SWR or alternative
    fetch(url.toString())
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [category])

  return (
    <AbsoluteCenter>
      <Box
        w={'xl'}
        h={'2xl'}
        bg={'gray.700'}
        border={'1px'}
        borderColor={'gray.600'}
        borderRadius={'md'}
        py={'4'}
        px={6}
        overflow={'auto'}
      >
        <Stack spacing={9}>
          <Heading size={'lg'} color={'whiteAlpha.900'}>
            Shop Now!
          </Heading>
          <Stack spacing={4}>
            <CategoryFilter onChange={setCategory} />
            {products.map((product, i) => (
              <Product key={i} {...product} />
            ))}
          </Stack>
        </Stack>
      </Box>
    </AbsoluteCenter>
  )
}

export default Home
