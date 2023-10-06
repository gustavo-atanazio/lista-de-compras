import { AiOutlineClose } from 'react-icons/ai';
import { Item as typeItem } from 'types/Item';
import styles from './Item.module.css';

interface ItemProps extends typeItem {
    checkItem: (id: string, checked: boolean) => void
    removeItem: (id: string, checked: boolean) => void
}

function Item({ name, quantity, checked, id, checkItem, removeItem }: ItemProps) {
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

export default Item;