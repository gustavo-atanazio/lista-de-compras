export function getFromLocalStorage(key: string) {
    const ITENS = localStorage.getItem(key);
	if (ITENS) return JSON.parse(ITENS);
	else return [];
}