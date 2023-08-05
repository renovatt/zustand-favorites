import { ProjectsResponse, ProjectsTypeProps } from "@/@types";
import { getProjects, getProjectsById } from "@/services"
import { ProjectDetails } from "@/app/components/ProjectDetails";

export async function generateStaticParams() {
    const projects = await getProjects();
    const projectsData = projects as ProjectsResponse;

    return projectsData.projects.map((project: ProjectsTypeProps) => ({
        slug: project.id.toString()
    }));
};

export default async function Project({ params }: { params: { slug: string } }) {
    const project: ProjectsTypeProps = await getProjectsById(params.slug);
    return (
        <ProjectDetails.Root {...project} >
            <ProjectDetails.Content  {...project} >
                <ProjectDetails.Card  {...project} />
                <ProjectDetails.Icon />
                <ProjectDetails.ThumbnailContainer >
                    <ProjectDetails.Thumbnail {...project} />
                    <ProjectDetails.Description text={project.description} />
                    <ProjectDetails.Techs {...project} />
                </ProjectDetails.ThumbnailContainer>
            </ProjectDetails.Content>
        </ProjectDetails.Root>
    )
}