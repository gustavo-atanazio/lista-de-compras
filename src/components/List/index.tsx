import { AnimatePresence } from 'framer-motion';

import Item from 'components/Item';
import { Item as typeItem } from 'types/Item';
import styles from './List.module.css';

function List({ items }: { items: typeItem[] }) {
    const hasChecked = items.some(item => item.checked);

    return (
        <ul className={`${styles.item_list} ${hasChecked ? styles.purchased_list : ''}`}>
            <AnimatePresence>
                {items.map((item, index) => (
                    <Item
                        {...item}
                        animationDelay={index}
                        key={item.id}
                    />
                ))}
            </AnimatePresence>
        </ul>
    );
}

export default List;