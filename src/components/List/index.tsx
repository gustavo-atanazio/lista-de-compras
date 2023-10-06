import { Item as typeItem } from 'types/Item';
import styles from './List.module.css';
import Item from 'components/Item';

interface ListProps {
    itens: typeItem[]
    checkItem: (id: string, checked: boolean) => void
    removeItem: (id: string, checked: boolean) => void
}

function List({ itens, checkItem, removeItem }: ListProps) {
    return (
        <ul className={styles.item_list}>
            {itens.map(item => (
                <Item
                    {...item}
                    checkItem={checkItem}
                    removeItem={removeItem}
                    key={item.id}
                />
            ))}
        </ul>
    );
}

export default List;