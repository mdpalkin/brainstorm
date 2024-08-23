import Modal from 'react-modal';

import styles from './styles.module.scss';
import { Dispatch, SetStateAction } from 'react'

type Props = {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<{ isOpen: boolean, currentDeckId: string | null }>>;
    confirmDeleteDeck: () => void;
};

export const ConfirmDeleteModal = (props: Props) => {
    const { isOpen, setIsOpen, confirmDeleteDeck} = props;

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen({ isOpen: false, currentDeckId: null })}
            className={styles.modalContent}
            overlayClassName={styles.modalOverlay}
        >
            <div 
            className={styles.modalBody}>
                <div className={styles.modalHeader}>Подтвердите удаление</div>
                <div className={styles.modalText}>
                    Вы уверены, что хотите удалить колоду?
                </div>
                <div className={styles.modalActions}>
                    <button
                        className={styles.cancelButton}
                        onClick={() => setIsOpen({ isOpen: false, currentDeckId: null })}
                    >
                        Отменить
                    </button>
                    <button onClick={confirmDeleteDeck} className={styles.confirmButton}>
                        Удалить
                    </button>
                </div>
            </div>
        </Modal>
    );
};
