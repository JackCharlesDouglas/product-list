import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from '@chakra-ui/react'
import { FC, useEffect, useState } from 'react'
import { Product } from '../types'

type ProductClicks = Pick<Product, 'name' | 'clicks'>[]

export const ClicksTable: FC = () => {
  const [productClicks, setProductClicks] = useState<ProductClicks>([])

  // TODO: This is bad, use SWR or alternative
  // Fetch the products click count every 2 seconds
  useEffect(() => {
    const fetchData = async () => {
      await fetch('http://localhost:3000/products/api/click')
        .then((res) => res.json())
        .then((data) => setProductClicks(data))
    }

    const intervalId = setInterval(fetchData, 2000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <TableContainer>
      <Table variant={'striped'} size="sm">
        <Thead>
          <Tr>
            <Th>Product</Th>
            <Th isNumeric>Clicks</Th>
          </Tr>
        </Thead>
        <Tbody>
          {productClicks.map(({ name, clicks }) => (
            <Tr key={name}>
              <Td>{name}</Td>
              <Td isNumeric>{clicks}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
