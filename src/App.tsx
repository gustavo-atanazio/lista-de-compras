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

	return (
		<main>
			<h1>Lista de compras</h1>
			<Form createItem={createItem}/>
			<List itens={itens}/>
		</main>
	);
}

export default App;