import Item from 'components/Item';
import { Item as typeItem } from 'types/Item';
import styles from './List.module.css';

interface ListProps {
    items: typeItem[]
}

function List({ items }: ListProps) {
    const hasChecked = items.some(item => item.checked);

    return (
        <ul className={`${styles.item_list} ${hasChecked ? styles.purchased_list : ''}`}>
            {items.map(item => (
                <Item
                    {...item}
                    key={item.id}
                />
            ))}
        </ul>
    );
}

export default List;