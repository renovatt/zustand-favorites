'use client'

import { Card } from './Card'
import { useProjectsQuery } from '@/hooks'
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
                    <Card.Root key={project.id} {...project}>
                        <Card.Actions>
                            <Card.Favorite {...project} />
                        </Card.Actions>
                        <Card.Container>
                            <Card.Title text={project.project_name} />
                            <Card.Actions>
                                <Card.Link text='Ver Detalhes' href={`project/${project.id}`} />
                            </Card.Actions>
                        </Card.Container>
                    </Card.Root>
                ))}
        </section>
    )
}

export default ProjectsListCard;