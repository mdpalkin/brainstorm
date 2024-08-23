import Modal from 'react-modal';

import styles from './styles.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDecksStore } from '../../entity/cards'

type Props = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    onSuccess: () => void
};

export const AddDeckModal = (props: Props) => {
    const { isOpen, setIsOpen, onSuccess} = props;

    const { register, handleSubmit } = useForm();

    const createDeck = useDecksStore(state => state.createDeck)

    const onSubmit: SubmitHandler<{title: string}> = (data) => {        
        const payload = { title: data.title }
        createDeck(payload, onSuccess)
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            className={styles.modalContent}
            overlayClassName={styles.modalOverlay}
        >
            <div 
            className={styles.modalBody}>
                <div className={styles.modalHeader}>Создать колоду</div>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <input className={styles.input} {...register("title")} placeholder="Введите название колоды" />
                <div className={styles.modalActions}>
                    <button
                        className={styles.cancelButton}
                        onClick={() => setIsOpen(false)}
                    >
                        Отменить
                    </button>
                    <button className={styles.confirmButton}>
                        Создать
                    </button>
                </div>
                </form>
            </div>
        </Modal>
    );
};
