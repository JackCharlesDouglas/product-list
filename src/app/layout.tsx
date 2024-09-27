import { Box } from '@chakra-ui/react'
import { Providers } from './providers'
import { ReactNode } from 'react'

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Box w={'full'} h={'100svh'} bg={'gray.900'}>{children}</Box>
        </Providers>
      </body>
    </html>
  )
}
