import styles from './Form.module.css';

function Form() {
    return (
        <form className={styles.form}>
            <div className={styles.form__inputs}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input
                        type="text"
                        className={styles.form__input}
                        id="name"
                        required
                    />
                </div>
    
                <div>
                    <label htmlFor="quantity">Quantidade</label>
                    <input
                        type="number"
                        className={`${styles.form__input} ${styles.form__quantity}`}
                        id="quantity"
                        required
                    />
                </div>
            </div>

            <button type="submit">Adicionar</button>
        </form>
    );
}

export default Form;