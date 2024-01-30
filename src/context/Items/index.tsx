import { createContext, useContext, useState } from 'react';

import { getFromLocalStorage } from 'utils/getFromLocalStorage';
import { removeScript } from 'utils/remove-script';

import { Item } from 'types/Item';

interface ItemsContextType {
    items: Item[]
    purchasedItems: Item[]
    createItem: (name: string, quantity: string) => void
    checkItem: (id: string, checked: boolean) => void
    removeItem: (id: string, checked: boolean) => void
    orderItems: (orderBy: string) => void
}

const initialValue = {
    items: [],
    purchasedItems: [],
    createItem: () => {},
    checkItem: () => {},
    removeItem: () => {},
    orderItems: () => {}
};

const ItemsContext = createContext<ItemsContextType>(initialValue);

function ItemsContextProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<Item[]>(getFromLocalStorage('ITENS'));
    const [purchasedItems, setPurchasedItems] = useState<Item[]>(getFromLocalStorage('PURCHASED_ITENS'));

    function handleCheck(id: string, list: Item[], setList: React.Dispatch<React.SetStateAction<Item[]>>) {
		const item = list.find(item => item.id === id) as Item;
		removeItem(item.id, item.checked);

		item.checked = !item.checked;
		setList(prevState => [...prevState, item]);
	}

    function createItem(name: string, quantity: string) {
		const item: Item = {
			name: removeScript(name),
			quantity: Number(removeScript(quantity)),
			checked: false,
			id: crypto.randomUUID()
		};

		setItems(prevState => [...prevState, item]);
	}

    function checkItem(id: string, checked: boolean) {
		if (!checked) {
			handleCheck(id, items, setPurchasedItems);
		} else {
			handleCheck(id, purchasedItems, setItems);
		}
	}

    function removeItem(id: string, checked: boolean) {
		if (!checked) {
			const newList = items.filter(item => item.id !== id);
			setItems(newList);
		} else {
			const newList = purchasedItems.filter(item => item.id !== id);
			setPurchasedItems(newList);
		}
	}

    function orderItems(orderBy: string) {
        const itemsCopy = [...items];

        switch (orderBy.toUpperCase()) {
            case 'NAME':
                itemsCopy.sort((a, b) => a.name.localeCompare(b.name));
                break;

            case 'QUANTITY':
                itemsCopy.sort((a, b) => a.quantity - b.quantity);
                break;

            default:
                return;
        }

        setItems(itemsCopy);
    }

    const value = {
        items,
        purchasedItems,
        createItem,
        checkItem,
        removeItem,
        orderItems
    };

    return (
        <ItemsContext.Provider value={value}>
            {children}
        </ItemsContext.Provider>
    );
}

function useItemsContext() {
    return useContext(ItemsContext);
}

export { ItemsContext, ItemsContextProvider, useItemsContext };