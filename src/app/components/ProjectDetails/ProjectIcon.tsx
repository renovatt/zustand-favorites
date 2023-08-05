'use client'

import Link from "next/link";
import { RiCloseFill } from 'react-icons/ri'

export const ProjectIcon = () => {
    return (
        <Link href='/'>
            <RiCloseFill className='absolute -top-2.5 -right-4 w-8 h-8 rounded-full bg-backgroundPrimary transition-all ease-in text-white hover:text-textPrimary hover:bg-white cursor-pointer' />
        </Link>
    )
}