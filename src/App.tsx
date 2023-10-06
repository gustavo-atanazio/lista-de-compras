import { useState } from 'react';

import Form from "components/Form";
import List from 'components/List';

import { removeScript } from 'utils/remove-script';
import { Item } from "types/Item";

function App() {
	const [itens, setItens] = useState<Item[]>([]);

	function createItem(name: string, quantity: string) {
		const item: Item = {
			name: removeScript(name),
			quantity: Number(removeScript(quantity)),
			checked: false,
			id: crypto.randomUUID()
		};

		setItens(prevState => [...prevState, item]);
	}

	function removeItem(id: string) {
		const newList = itens.filter(item => item.id !== id);
		setItens(newList);
	}

	return (
		<main>
			<h1>Lista de compras</h1>
			<Form createItem={createItem}/>
			<List
				itens={itens}
				removeItem={removeItem}
			/>
		</main>
	);
}

export default App;