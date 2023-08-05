'use client'

import LinkButton from "../LinkButton"
import { ProjectsTypeProps } from "@/@types"
import { FavoriteStar } from "../FavoriteStar"

export const ProjectCard = (props: ProjectsTypeProps) => {
    return (
        <section className='flex items-center justify-center flex-col h-full'>
            <section
                className='relative mt-8 md:mt-0 h-96 w-60 my-0 mx-2 rounded-lg bg-backgroundThird bg-cover bg-center'
                style={{ backgroundImage: `url(${props.banner_url})` }}
            >
                <FavoriteStar id={props.id} />
                <span className="flex items-center justify-between flex-col h-full rounded-lg py-6 hover:bg-backgroundShadow border border-zinc-800 hover:border-textPrimary transition-all ease-in-out"></span>
            </section>

            <h1 className='text-center text-white font-bold text-2xl mt-2'>
                {props.project_name}
            </h1>

            <LinkButton
                text='Deploy'
                href={props.deploy_url}
            />
        </section>
    )
}