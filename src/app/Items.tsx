'use client'

import React from 'react';
import Card from "./Card";
import useItemsStore from "@/store";

const Items = () => {
    const {
        states: {
            items,
            favoriteItems
        },
        actions: {
            createItem,
            removeItem,
            addToFavorite,
            removeFromFavorite
        }
    } = useItemsStore()

    const handleCreateItem = () => {
        const item = {
            id: Math.random(),
            name: 'item'
        }
        createItem(item);
    }

    const handleFavoriteToogle = (id: number) => {
        const isFavorite = favoriteItems.favoriteItemIds.includes(id)

        if (!isFavorite) {
            addToFavorite(id)
        } else {
            removeFromFavorite(id)
        }
    }

    return (
        <Card>
            <h2>Items</h2>

            <button className="border border-teal-50 rounded py-1 px-4 m-2 w-full" onClick={handleCreateItem}>
                Add Items
            </button>

            {items?.map(item => (
                <li
                    className="border border-teal-50 rounded py-1 px-4 m-2 w-full flex items-center justify-between"
                    key={item.id}
                >{item.name}

                    <button onClick={() => handleFavoriteToogle(item.id)} className="border border-teal-50 rounded py-1 px-4 m-2 w-full">
                        {!favoriteItems.favoriteItemIds.includes(item.id) ? 'Favoritar' : 'Remover Favorito'}
                    </button>

                    <button
                        onClick={() => removeItem(item.id)}
                        className="border border-teal-50 rounded px-2 m-2 w-8 text-center">
                        X
                    </button>
                </li>
            ))}
        </Card>
    )
}

export default Items;