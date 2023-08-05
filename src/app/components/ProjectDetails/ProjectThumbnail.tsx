'use client'

import Image from "next/image"
import { ProjectsTypeProps } from "@/@types"

export const ProjectThumbnail = (props: ProjectsTypeProps) => {

    const handleLoad = (
        event: React.SyntheticEvent<HTMLImageElement>
    ): void => {
        event.currentTarget.style.opacity = "1";
    }

    return (
        <figure className='w-full h-full md:h-96 max-h-[25rem] transition-all ease-in rounded-lg'>
            <Image
                className='object-cover opacity-0 rounded-lg w-full h-full'
                src={props.thumbnail_url}
                alt={props.project_name}
                onLoad={handleLoad}
                width={1000}
                height={1000}
                priority
                fetchPriority='high'
                decoding='async'
                data-nimg="1"
            />
        </figure>
    )
}