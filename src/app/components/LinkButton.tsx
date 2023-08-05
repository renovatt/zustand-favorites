'use client'

import Link from 'next/link';
import { LinkButtonProps } from '@/@types';

const LinkButton = (props: LinkButtonProps) => {
    return (
        <Link
            className='text-xl font-bold py-2 px-16 transition-all text-textPrimary hover:text-white bg-white hover:bg-backgroundPrimary rounded-lg mt-2 select-none'
            href={props.href}
            target='_blank'
        >
            {props.text}
        </Link>
    )
}

export default LinkButton;