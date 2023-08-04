import {
    APIProjectsResponse,
    APISkillsResponse,
    APISoftskillsResponse,
    ErrorMessageResponse,
    ProjectsResponse,
    SkillsResponse,
    SoftskillsResponse
} from "@/@types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!;

export const getProjects = async (): Promise<APIProjectsResponse> => {
    try {
        const response = await fetch(`${BASE_URL}/projects`);
        const data: ProjectsResponse = await response.json();

        if (response.ok) {
            return { projects: data.projects };
        } else {
            const error: ErrorMessageResponse = new Error('Falha na solicitação com status: ' + response.status);
            throw error;
        }
    } catch (error) {
        const errorWithMessage: ErrorMessageResponse = new Error('Erro interno.');
        throw errorWithMessage;
    }
};

export const getProjectsById = async (id: string) => {
    try {
        const response = await fetch(`${BASE_URL}/projects/${id}`);
        const data = await response.json();

        if (response.ok) {
            return data;
        } else {
            throw new Error(data.status)
        }
    } catch (error) {
        return { error: 'Erro interno.' };
    }
}

export const getSkills = async (): Promise<APISkillsResponse> => {
    try {
        const response = await fetch(`${BASE_URL}/skills`);
        const data: SkillsResponse = await response.json();

        if (response.ok) {
            return { skills: data.skills };
        } else {
            const error: ErrorMessageResponse = new Error('Falha na solicitação com status: ' + response.status);
            throw error;
        }
    } catch (error) {
        const errorWithMessage: ErrorMessageResponse = new Error('Erro interno.');
        throw errorWithMessage;
    }
};

export const getSoftskills = async (): Promise<APISoftskillsResponse> => {
    try {
        const response = await fetch(`${BASE_URL}/softskills`);
        const data: SoftskillsResponse = await response.json();

        if (response.ok) {
            return { softskills: data.softskills };
        } else {
            const error: ErrorMessageResponse = new Error('Falha na solicitação com status: ' + response.status);
            throw error;
        }
    } catch (error) {
        const errorWithMessage: ErrorMessageResponse = new Error('Erro interno.');
        throw errorWithMessage;
    }
};