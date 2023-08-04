import ProjectInfo from "@/app/components/ProjectInfo";
import { getProjects, getProjectsById } from "@/services"
import { ProjectsResponse, ProjectsTypeProps } from "@/@types";

export async function generateStaticParams() {
    const projects = await getProjects();
    const projectsData = projects as ProjectsResponse;

    return projectsData.projects.map((project: ProjectsTypeProps) => ({
        slug: project.id.toString()
    }));
};

export default async function Project({ params }: { params: { slug: string } }) {
    const project: ProjectsTypeProps = await getProjectsById(params.slug);
    return <ProjectInfo {...project} />
}