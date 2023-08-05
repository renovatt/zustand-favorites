import { UseStoreProps } from '@/@types';
import { StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const myMiddlewares = (f: StateCreator<UseStoreProps>) =>
    devtools(persist(f, { name: 'favorite-store' }))

const useFavoriteStore = create<UseStoreProps>()(
    myMiddlewares(
        (set) => ({
            favoritedProjects: {
                projectsDetails: [],
            },
            addToFavorite: (projectId: string) => {
                set((state) => {
                    const existingProjectIndex = state.favoritedProjects.projectsDetails.findIndex(
                        (project) => project.id === projectId
                    );

                    if (existingProjectIndex !== -1) {
                        const updatedProjects = [...state.favoritedProjects.projectsDetails];
                        updatedProjects[existingProjectIndex] = {
                            ...updatedProjects[existingProjectIndex],
                            count: updatedProjects[existingProjectIndex].count + 1,
                        };

                        return {
                            favoritedProjects: {
                                projectsDetails: updatedProjects,
                            },
                        };
                    } else {
                        return {
                            favoritedProjects: {
                                projectsDetails: [
                                    ...state.favoritedProjects.projectsDetails,
                                    { id: projectId, count: 1 },
                                ],
                            },
                        };
                    }
                });
            },
            removeFromFavorite: (projectId: string) => {
                set((state) => ({
                    favoritedProjects: {
                        projectsDetails: state.favoritedProjects.projectsDetails.filter(
                            (project) => project.id !== projectId
                        ),
                    },
                }));
            },
        })
    )
);

export default useFavoriteStore;
