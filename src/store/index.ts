import { create } from 'zustand';

type ItemProps = {
    id: number;
    name: string;
}

type FavoritesItemsProps = {
    favoriteItemIds: number[];
}

type ActionsProps = {
    createItem: (item: ItemProps) => void;
    removeItem: (id: number) => void;
    addToFavorite: (id: number) => void;
    removeFromFavorite: (id: number) => void;
}

type StoreProps = {
    states: {
        items: ItemProps[],
        favoriteItems: FavoritesItemsProps;
    },
    actions: ActionsProps;
}

const useItemsStore = create<StoreProps>(
    (set) => ({
        states: {
            items: [],
            favoriteItems: {
                favoriteItemIds: []
            },
        },
        actions: {
            createItem: (item) => {
                set(state => ({
                    states: { ...state.states, items: [...state.states.items, item] }
                }))
            },
            removeItem: (id) => {
                set(state => ({
                    states: { ...state.states, items: [...state.states.items.filter(item => item.id !== id)] }
                }))
            },
            addToFavorite: (id) => {
                set(state => ({
                    states: {
                        ...state.states, favoriteItems: {
                            favoriteItemIds: [...state.states.favoriteItems.favoriteItemIds, id]
                        }
                    }
                }))
            },
            removeFromFavorite: (id) => {
                set(state => ({
                    states: {
                        ...state.states, favoriteItems: {
                            favoriteItemIds: state.states.favoriteItems.favoriteItemIds.filter(itemId => itemId !== id)
                        }
                    }
                }))
            },
        }
    })
)

export default useItemsStore;