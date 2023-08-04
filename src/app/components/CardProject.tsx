'use client'

import React from 'react'
import { ProjectsTypeProps } from '@/@types'
import { RiStarSFill, RiStarSLine } from 'react-icons/ri';
import useProjectStore from '@/store';
import Link from 'next/link';

export const CardProject = (props: ProjectsTypeProps) => {
    const {
        states: {
            favoritedProjetcs
        },
        actions: {
            addToFavorite,
            removeFromFavorite
        }
    } = useProjectStore()

    const projectDetails = favoritedProjetcs.projectsDetails.find(project => project.id === props.id)
    const count = projectDetails ? projectDetails.count : 0

    const handleFavoriteToogle = (id: string) => {
        addToFavorite(id);
    }

    const handleLoad = (
        event: React.SyntheticEvent<HTMLImageElement>
    ): void => {
        event.currentTarget.style.opacity = '1';
    }

    return (
        <section
            className='relative h-64 w-40 rounded-lg bg-backgroundThird bg-cover bg-center m-4 cursor-pointer animate-fade'
            style={{ backgroundImage: `url(${props.banner_url})` }}
            onLoad={handleLoad}
        >
            <span
                onClick={() => handleFavoriteToogle(props.id)}
                className='absolute top-2 right-2 flex items-center justify-center z-50'>
                {projectDetails ? (
                    <>
                        <p className='text-xs text-yellow-400 select-none pr-1'>{count}</p>
                        <RiStarSFill className='w-5 h-5 text-yellow-400 hover:h-6 hover:w-6 transition-all bg-white rounded-full' />
                    </>
                ) : (<RiStarSLine className='w-5 h-5 text-yellow-400 hover:h-6 hover:w-6 transition-all bg-white rounded-full' />)}

            </span>

            <article
                className='flex items-center justify-between flex-col h-full rounded-lg py-6 hover:bg-backgroundShadow border border-zinc-800 hover:border-textPrimary transition-all ease-in-out'
            >
                <h1 className='text-center text-textPrimary text-xs font-bold mt-2 select-none'>{props.project_name}</h1>

                <Link
                    className='border-none text-xs font-bold py-2 px-4 rounded-lg transition-all ease-in text-textPrimary bg-white hover:bg-backgroundPrimary hover:text-white select-none'
                    href={`project/${props.id}`}
                >
                    Ver Detalhes
                </Link>
            </article>
        </section>
    )
}