import { Item as typeItem } from 'types/Item';
import styles from './List.module.css';
import Item from 'components/Item';

interface ListProps {
    itens: typeItem[]
    removeItem: (id: string) => void
}

function List({ itens, removeItem }: ListProps) {
    return (
        <ul className={styles.item_list}>
            {itens.map(item => (
                <Item
                    {...item}
                    removeItem={removeItem}
                    key={item.id}
                />
            ))}
        </ul>
    );
}

export default List;