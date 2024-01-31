import ReactSelect from 'react-select';
import { useItemsContext } from 'context/Items';
import styles from './Select.module.css';

const options = [
    { value: 'name', label: 'Nome' },
    { value: 'quantity', label: 'Quantidade' }
];

function Select() {
    const { orderItems } = useItemsContext();

    return (
        <ReactSelect
            options={options}
            isSearchable={false}
            placeholder='Ordenar por...'
            className={styles.select}
            onChange={event => event && orderItems(event.value)}
        />
    );
}

export default Select;