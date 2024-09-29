import { Select } from '@chakra-ui/react'
import { FC, useEffect, useState } from 'react'
import { Category } from '../types'

interface Props {
  onChange: (category: Category) => void
}

export const CategoryFilter: FC<Props> = ({ onChange }) => {
  const [categories, setCategories] = useState<Category[]>([])

  // TODO: This is bad, use SWR or alternative
  useEffect(() => {
    fetch('http://localhost:3000/categories/api')
      .then((res) => res.json())
      .then((data) => setCategories(data))
  }, [])

  return (
    <Select
      onChange={(e) => onChange(e.target.value as Category)}
      placeholder={'Filter By Category'}
    >
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </Select>
  )
}
