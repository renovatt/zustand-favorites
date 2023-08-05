export type ProjectDetails = {
    id: string;
    count: number;
};

export type FavoritesProjectsProps = {
    projectsDetails: ProjectDetails[];
}

export type ActionsProps = {
    addToFavorite: (projectId: string) => void;
    removeFromFavorite: (projectId: string) => void;
}

export type StoreProps = {
    states: {
        favoritedProjetcs: FavoritesProjectsProps;
    },
    actions: ActionsProps;
}

export type ReactQueryProviderProps = {
    children: React.ReactNode;
}

export type LinkButtonProps = {
    text: string;
    href: string;
}

export type ProjectsTypeProps = {
    id: string;
    order: number;
    project_name: string;
    deploy_url: string;
    banner_url: string;
    thumbnail_url: string;
    description: string;
    techs: LinksTypeProps;
}

type LinksTypeProps = {
    links: TechsTypeProps[]
}

type TechsTypeProps = {
    id: string;
    svg_name: string;
    link: string;
    svg_link: string;
}

export type SoftskillsTypeProps = {
    id: string;
    softskill_name: string;
}

export type SkillsTypeProps = {
    id: string;
    skill_name: string;
    svg_link: string;
    description: string;
}

export type ProfileProps = {
    id: string;
    description_1: string;
    description_2: string;
}

export interface ErrorMessageResponse extends Error {
    message: string;
}

export type SkillsResponse = {
    skills: SkillsTypeProps[];
}

export type SoftskillsResponse = {
    softskills: SoftskillsTypeProps[];
}

export type ProjectsResponse = {
    projects: ProjectsTypeProps[];
}

export type ProjectResponse = {
    project: ProjectsTypeProps;
}

export type ProfileResponse = {
    profile: ProfileProps[];
}

export type APIProfileResponse = ProfileResponse | ErrorMessageResponse;
export type APISoftskillsResponse = SoftskillsResponse | ErrorMessageResponse;
export type APISkillsResponse = SkillsResponse | ErrorMessageResponse;
export type APIProjectsResponse = ProjectsResponse | ErrorMessageResponse;
export type APIProjectResponse = ProjectResponse | ErrorMessageResponse;