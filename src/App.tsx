import Form from "components/Form";

function App() {
	function createItem(name: string, quantity: string) {
		return { name, quantity };
	}

	return (
		<main>
			<h1>Lista de compras</h1>
			<Form createItem={createItem}/>
		</main>
	);
}

export default App;