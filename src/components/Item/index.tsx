import { memo } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';

import { useItemsContext } from 'context/Items';
import { Item as typeItem } from 'types/Item';

import styles from './Item.module.css';

type ItemProps = typeItem & {
    animationDelay: number
};

function Item({ name, quantity, checked, id, animationDelay }: ItemProps) {
    const { checkItem, removeItem } = useItemsContext();

    return (
        <motion.li
            className={styles.item}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ delay: animationDelay / 10, duration: 0.2 }}
            layout
        >
            <div className={styles.item__info}>
                <span>{name}</span>
                <span>{quantity}</span>
            </div>

            <div className={styles.item__options}>
                <input
                    type="checkbox"
                    onChange={() => checkItem(id, checked)}
                    checked={checked}
                />
                
                <AiOutlineClose
                    onClick={() => removeItem(id, checked)}
                    size={20}
                    color={'#F00'}
                    cursor={'pointer'}
                />
            </div>
        </motion.li>
    );
}

export default memo(Item);