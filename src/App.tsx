import { useEffect } from 'react';

import Form from 'components/Form';
import List from 'components/List';
import Select from 'components/Select';

import { useItemsContext } from 'context/Items';

function App() {
	const { items, purchasedItems } = useItemsContext();

	useEffect(() => {
		localStorage.setItem('ITENS', JSON.stringify(items));
		localStorage.setItem('PURCHASED_ITENS', JSON.stringify(purchasedItems));
	}, [items, purchasedItems]);

	return (
		<main>
			<h1>Lista de compras</h1>

			<Form/>
			
			{items.length > 0 &&
				<>
					<div className='wrapper'>
						<h2>Itens</h2>

						<Select/>
					</div>

					<List items={items}/>
				</>
			}

			{purchasedItems.length > 0 &&
				<>
					<h2>Comprados</h2>
					<List items={purchasedItems}/>
				</>
			}
		</main>
	);
}

export default App;