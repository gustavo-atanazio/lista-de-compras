import { AiOutlineClose } from 'react-icons/ai';
import { Item as typeItem } from 'types/Item';
import styles from './Item.module.css';

function Item({ name, quantity, checked }: typeItem) {
    return (
        <li className={styles.item}>
            <div className={styles.item__info}>
                <span>{name}</span>
                <span>{quantity}</span>
            </div>

            <div className={styles.item__options}>
                <input
                    type="checkbox"
                    checked={checked}
                />
                <AiOutlineClose
                    size={20}
                    color={'#F00'}
                    cursor={'pointer'}
                />
            </div>
        </li>
    );
}

export default Item;