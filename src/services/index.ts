const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!;

export const getProjects = async () => {
    try {
        const response = await fetch(`${BASE_URL}/projects`);
        const data = await response.json();

        if (response.ok) {
            return data.projects
        } else {
            throw new Error(data.status);
        }
    } catch (error) {
        return { error: 'Erro interno.' };
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