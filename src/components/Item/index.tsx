import { memo } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useItemsContext } from 'context/Items';
import { Item as typeItem } from 'types/Item';
import styles from './Item.module.css';

function Item({ name, quantity, checked, id }: typeItem) {
    const { checkItem, removeItem } = useItemsContext();

    return (
        <li className={styles.item}>
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
        </li>
    );
}

export default memo(Item);