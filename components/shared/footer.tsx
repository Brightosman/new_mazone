"use client"
import React from 'react'
import { Button } from '../ui/button'
import { ChevronUp } from 'lucide-react'
import Link from 'next/link'
import { APP_NAME } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className='bg-black text-white underline-link'>
        <div className='w-full'>
            <Button variant='ghost' className='bg-gray-800 w-full rounded-none'
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <ChevronUp className='mr-2 w-4 h-4' />
                Back to top
            </Button>
        </div>
        <div className='p-4'>
            <div className='flex justify-center gap-3 text-sm'>
                <Link href='/privacy' className='hover:underline hover:underline-offset-4'> Conditions of use </Link>
                <Link href='/privacy' className='hover:underline hover:underline-offset-4'> Privacy Notice </Link>
                <Link href='/privacy' className='hover:underline hover:underline-offset-4'> Help </Link>
            </div>
            <div className='flex justify-center text-sm'>
                <p> © 2015-2025, {APP_NAME}, Inc. or its affiliates</p>
            </div>
            <div className='mt-8 flex justify-center text-sm text-gray-400'>
                123, Main Street, Paris, France | +33 1 23 45 67 89
            </div>
        </div>
    </footer>
  )
}
