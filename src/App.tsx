import { useState } from 'react';

import Form from "components/Form";
import List from 'components/List';

import { removeScript } from 'utils/remove-script';
import { Item } from "types/Item";

function App() {
	const [itens, setItens] = useState<Item[]>([]);
	const [purchasedItens, setPurchasedItens] = useState<Item[]>([]);

	function createItem(name: string, quantity: string) {
		const item: Item = {
			name: removeScript(name),
			quantity: Number(removeScript(quantity)),
			checked: false,
			id: crypto.randomUUID()
		};

		setItens(prevState => [...prevState, item]);
	}

	function checkItem(id: string, checked: boolean) {
		if (!checked) {
			handleCheck(id, itens, setPurchasedItens);
		} else {
			handleCheck(id, purchasedItens, setItens);
		}
	}

	function removeItem(id: string, checked: boolean) {
		if (!checked) {
			const newList = itens.filter(item => item.id !== id);
			setItens(newList);
		} else {
			const newList = purchasedItens.filter(item => item.id !== id);
			setPurchasedItens(newList);
		}
	}

	function handleCheck(id: string, list: Item[], setList: React.Dispatch<React.SetStateAction<Item[]>>) {
		const item = list.find(item => item.id === id) as Item;
		removeItem(item.id, item.checked);

		item.checked = !item.checked;
		setList(prevState => [...prevState, item]);
	}

	return (
		<main>
			<h1>Lista de compras</h1>
			<Form createItem={createItem}/>
			<List
				itens={itens}
				checkItem={checkItem}
				removeItem={removeItem}
			/>

			{purchasedItens.length > 0 &&
				<>
					<h2>Comprados</h2>
					<List
						itens={purchasedItens}
						checkItem={checkItem}
						removeItem={removeItem}
					/>
				</>
			}
		</main>
	);
}

export default App;