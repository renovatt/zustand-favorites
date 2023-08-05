'use client'

import useProjectStore from '@/store';
import { FavoriteStarProps } from '@/@types';
import { Fragment, useCallback, useState } from 'react';
import { RiStarSFill, RiStarSLine } from 'react-icons/ri';

export const FavoriteStar = ({ id }: FavoriteStarProps) => {
    const [isPulsing, setIsPulsing] = useState(false);
    const { favoritedProjects, addToFavorite } = useProjectStore()

    const projectDetails = favoritedProjects.projectsDetails.find((project) => project.id === id);
    const isFavorite = !!projectDetails;
    const count = projectDetails ? projectDetails.count : 0

    const handleFavorite = useCallback((id: string) => {
        addToFavorite(id);
        setIsPulsing(true);
        setTimeout(() => setIsPulsing(false), 100);
    }, [addToFavorite]);

    return (
        <Fragment>
            <span
                onClick={() => handleFavorite(id)}
                className='absolute top-2 right-2 flex items-center justify-center z-50 cursor-pointer'
            >
                {isFavorite ? (
                    <Fragment>
                        <p className='text-xs font-bold text-center text-yellow-400 select-none mr-2'>{count}</p>
                        <RiStarSFill className={`${isPulsing ? 'h-6 w-6' : 'w-5 h-5'} transition-all text-yellow-400 bg-white rounded-full`} />
                    </Fragment>
                ) : (
                    <RiStarSLine className={`${isPulsing ? 'h-6 w-6' : 'w-5 h-5'} transition-all text-yellow-400 bg-white rounded-full`} />
                )}
            </span>
        </Fragment>
    );
};
