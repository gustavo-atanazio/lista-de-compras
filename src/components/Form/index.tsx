import { useState } from 'react';
import styles from './Form.module.css';

interface FormProps {
    createItem: (name: string, quantity: string) => void
}

function Form({ createItem }: FormProps) {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');

    function addItem(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        createItem(name, quantity);

        setName('');
        setQuantity('');
    }

    return (
        <form className={styles.form} onSubmit={event => addItem(event)}>
            <div className={styles.form__inputs}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input
                        type="text"
                        className={styles.form__input}
                        id="name"
                        value={name}
                        onChange={event => setName(event.target.value)}
                        required
                    />
                </div>
    
                <div>
                    <label htmlFor="quantity">Quantidade</label>
                    <input
                        type="number"
                        className={`${styles.form__input} ${styles.form__quantity}`}
                        id="quantity"
                        value={quantity}
                        onChange={event => setQuantity(event.target.value)}
                        required
                    />
                </div>
            </div>

            <button type="submit">Adicionar</button>
        </form>
    );
}

export default Form;