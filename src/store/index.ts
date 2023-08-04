import { StoreProps } from '@/@types';
import { create, StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const myMiddlewares = (f: StateCreator<StoreProps>) => devtools(persist(f, { name: 'favorite-store' }))

// const useFavotireStore = create<StoreProps>()(
//     myMiddlewares(
//         (set) => ({
//             states: {
//                 favoritedProjetcs: {
//                     projectsDetails: []
//                 },
//             },
//             actions: {
//                 addToFavorite: (projectId) => {
//                     set((state) => {
//                         const existingProject = state.states.favoritedProjetcs.projectsDetails.find(
//                             (project) => project.id === projectId
//                         );

//                         if (existingProject) {
//                             existingProject.count += 1;

//                             return {
//                                 states: {
//                                     favoritedProjetcs: {
//                                         projectsDetails: [...state.states.favoritedProjetcs.projectsDetails],
//                                     },
//                                 },
//                             };
//                         } else {
//                             return {
//                                 states: {
//                                     favoritedProjetcs: {
//                                         projectsDetails: [
//                                             ...state.states.favoritedProjetcs.projectsDetails,
//                                             { id: projectId, count: 1 },
//                                         ],
//                                     },
//                                 },
//                             };
//                         }
//                     });
//                 },

//                 removeFromFavorite: (projectId) => {
//                     set(state => ({
//                         states: {
//                             ...state.states, favoritedProjetcs: {
//                                 projectsDetails: state.states.favoritedProjetcs.projectsDetails
//                                     .filter(project => project.id !== projectId)
//                             }
//                         }
//                     }))
//                 },
//             }
//         }),
//     )
// );

const useFavotireStore = create<StoreProps>()(
    (set) => ({
        states: {
            favoritedProjetcs: {
                projectsDetails: []
            },
        },
        actions: {
            addToFavorite: (projectId) => {
                set((state) => {
                    const existingProject = state.states.favoritedProjetcs.projectsDetails.find(
                        (project) => project.id === projectId
                    );

                    if (existingProject) {
                        existingProject.count += 1;

                        return {
                            states: {
                                favoritedProjetcs: {
                                    projectsDetails: [...state.states.favoritedProjetcs.projectsDetails],
                                },
                            },
                        };
                    } else {
                        return {
                            states: {
                                favoritedProjetcs: {
                                    projectsDetails: [
                                        ...state.states.favoritedProjetcs.projectsDetails,
                                        { id: projectId, count: 1 },
                                    ],
                                },
                            },
                        };
                    }
                });
            },
            removeFromFavorite: (projectId) => {
                set(state => ({
                    states: {
                        ...state.states, favoritedProjetcs: {
                            projectsDetails: state.states.favoritedProjetcs.projectsDetails
                                .filter(project => project.id !== projectId)
                        }
                    }
                }))
            },
        }
    }),
);

export default useFavotireStore;