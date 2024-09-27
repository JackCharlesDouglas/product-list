import { AbsoluteCenter, Box, Heading, Stack } from '@chakra-ui/react'
import { Product as ProductType } from './types'
import { Product } from './components/Product'

const productData: ProductType[] = [
  { name: 'Wireless Earbuds', price: 29.99, description: 'Compact, sleek design with superior sound quality. Long battery life and noise cancellation for immersive listening.' },
  { name: 'Smartwatch', price: 39.99, description: 'Track fitness, heart rate, and notifications. Stay connected with GPS, activity monitoring, and health insights.' },
  { name: 'Eco-Friendly Water Bottle', price: 9.99, description: 'BPA-free, insulated, and reusable for daily hydration. Keeps drinks cold for 24 hours or hot for 12 hours.' },
  { name: 'Portable Power Bank', price: 19.99, description: 'Fast charging with multiple device compatibility. Slim, lightweight, and ideal for on-the-go power needs.' },
]

const Home = () => {
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
            {productData.map((product, i) => (
              <Product key={i} {...product} />
            ))}
          </Stack>
        </Stack>
      </Box>
    </AbsoluteCenter>
  )
}

export default Home
