'use client'
import { Box, Flex, HStack, IconButton, Stack, Text } from '@chakra-ui/react'
import { FC, useState } from 'react'
import { Product as ProductType } from '../types'
import { FaHeart, FaRegHeart } from 'react-icons/fa6'

export const Product: FC<ProductType> = ({ name, price, description }) => {
  const [favourited, setFavourited] = useState<boolean>(false)

  const handleFavourite = () => {
    setFavourited((prev) => !prev)
  }

  return (
    <Box
      w={'full'}
      h={'3xs'}
      bg={'gray.900'}
      border={'1px'}
      borderColor={'gray.600'}
      borderRadius={'md'}
      pt={4}
      px={6}
      pb={3}
    >
      <Stack spacing={4} h={'full'}>
        <Flex justify={'space-between'}>
          <Text color={'whiteAlpha.900'} fontSize={'3xl'}>
            {name}
          </Text>
          <IconButton
            variant={'ghost'}
            colorScheme={'blue'}
            icon={favourited ? <FaHeart /> : <FaRegHeart />}
            aria-label="Add to favorites"
            onClick={handleFavourite}
          />
        </Flex>
        <Text color={'whiteAlpha.900'}>{description}</Text>
        <Flex h={'full'} alignItems={'flex-end'}>
          <HStack spacing={1} alignItems={'baseline'}>
            <Text color={'whiteAlpha.900'} fontSize={'xl'}>
              $
            </Text>
            <Text color={'white'} fontSize={'3xl'}>
              {price}
            </Text>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  )
}
