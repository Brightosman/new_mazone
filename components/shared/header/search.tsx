import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { APP_NAME } from '@/lib/constants'
import { SearchIcon } from 'lucide-react'
import React from 'react'

const categories = [
  { id: '1', name: 'Electronics' },
  { id: '2', name: 'Fashion' },
  { id: '3', name: 'Home & Garden' },
  { id: '4', name: 'Sports & Outdoors' },
  { id: '5', name: 'Health & Beauty' },
]

export default async function Search() {
  return (
    <form action='/search' method='GET' className='flex items-stretch h-10'>
        <Select name='category'>
            <SelectTrigger className='w-auto h-full dark:border-green-200 bg-gray-100 text-black border-r rounded-r-none rounded-l-md rtl:rounded-r-md rtl:rounded-l-none'>
                <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent position='popper'>
                <SelectItem value='all'>All</SelectItem>
                {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                        {category.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>

        <Input className='flex-1 rounded-none dark:border-gray-200 bg-gray-100 text-black text-base h-full'
            placeholder={`Search Site ${APP_NAME}`}
            name='q'
            type='search'
        />
        <Button><SearchIcon className='w-6 h-6' /> </Button>
    </form>
  )
}
