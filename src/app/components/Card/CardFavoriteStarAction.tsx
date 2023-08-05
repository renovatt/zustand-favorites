'use client'

import useProjectStore from '@/store';
import { Fragment, useState } from 'react';
import { RiStarSFill, RiStarSLine } from 'react-icons/ri';

type CardFavoriteStarActionProps = {
    id: string
}

export const CardFavoriteStarAction = ({ id }: CardFavoriteStarActionProps) => {
    const [isPulsing, setIsPulsing] = useState(false);

    const {
        states: { favoritedProjetcs, },
        actions: { addToFavorite, }
    } = useProjectStore()


    const projectDetails = favoritedProjetcs.projectsDetails.find((project) => project.id === id);
    const isFavorite = !!projectDetails;
    const count = projectDetails ? projectDetails.count : 0

    const handleFavoriteToogle = (id: string) => {
        addToFavorite(id);
        setIsPulsing(true);
        setTimeout(() => setIsPulsing(false), 100);
    }

    return (
        <section>
            <span
                onClick={() => handleFavoriteToogle(id)}
                className='absolute top-2 right-2 flex items-center justify-center z-50'
            >
                {isFavorite ? (
                    <Fragment>
                        <p className='text-xs text-yellow-400 select-none pr-1'>{count}</p>
                        <RiStarSFill className={`${isPulsing ? 'h-6 w-6' : 'w-5 h-5'} transition-all text-yellow-400 bg-white rounded-full`} />
                    </Fragment>
                ) : (
                    <RiStarSLine className={`${isPulsing ? 'h-6 w-6' : 'w-5 h-5'} transition-all text-yellow-400 bg-white rounded-full`} />
                )}
            </span>
        </section>
    );
};
