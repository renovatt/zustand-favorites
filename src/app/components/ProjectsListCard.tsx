'use client'

import { useProjectsQuery } from '@/hooks'
import { CardProject } from './CardProject'
import { ErrorMessageResponse, ProjectsResponse } from '@/@types'

const ProjectsListCard = () => {
    const {
        data,
        isLoading,
        error,
        isError
    } = useProjectsQuery()

    if (isError) {
        const errorResponse = error as ErrorMessageResponse;
        return (
            <p className='w-44 text-center text-xs font-bold py-2 transition-all text-textPrimary hover:text-white bg-white hover:bg-backgroundPrimary rounded-lg mt-2'>{errorResponse.message}
            </p>
        )
    }

    const projectsData = data as ProjectsResponse;

    return (
        <section className='flex justify-around items-center flex-wrap'>
            {isLoading ? <p>Carragando..</p> : projectsData.projects
                .sort((a, b) => a.order - b.order)
                .map((project) => (
                    <CardProject key={project.id} {...project} />
                ))}
        </section>
    )
}

export default ProjectsListCard;