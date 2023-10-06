import { Item as typeItem } from 'types/Item';
import styles from './List.module.css';
import Item from 'components/Item';

interface ListProps {
    itens: typeItem[]
}

function List({ itens }: ListProps) {
    return (
        <ul className={styles.item_list}>
            {itens.map(item => (
                <Item
                    {...item}
                    key={item.id}
                />
            ))}
        </ul>
    );
}

export default List;