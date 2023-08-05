'use client'

import { ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { ProjectsTypeProps } from '@/@types'

type ProjectRootProps = {
    children: ReactNode;
} & ProjectsTypeProps;

export const ProjectRoot = ({ children, ...props }: ProjectRootProps) => {
    const router = useRouter();

    function handleCloseModal(
        event: React.MouseEvent<HTMLElement> |
            React.TouchEvent<HTMLElement>
    ) {
        if (event.target === event.currentTarget) {
            router.push('/')
        }
    }

    const backgroundImageUrl = `${props.thumbnail_url}`;

    const sectionStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
    };

    return (
        <section
            style={sectionStyle}
            className='flex items-center justify-center w-screen h-screen bg-backgroundShadow bg-cover bg-center bg-no-repeat overflow-y-auto'
        >
            <section
                onClick={(e) => handleCloseModal(e)}
                className='flex items-center justify-center w-full h-full bg-backgroundModalShadow backdrop-blur-sm'
            >
                {children}
            </section>
        </section>
    )
}