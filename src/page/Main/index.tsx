import { useState } from 'react'
import { useDecksStore } from "../../entity/cards"
import { AddDeckModal } from '../../features/AddDeckModal'
import { ConfirmDeleteModal } from '../../features/ConfirmDeleteModal'
import { DeckItem } from "./DeckItem"
import styles from './styles.module.scss'

export const Main = () => {
    const decks = useDecksStore(state => state.decks)

    const [confirmDeleteModalState, setConfirmDeleteModalState] = useState({ isOpen: false, currentDeckId: null as string | null })
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)

    const deleteDeck = useDecksStore(state => state.deleteDeck)
    const getDecks = useDecksStore(state => state.getDecks)

    const handleDeleteDeck = (event: Event, id: string) => {
        event.stopPropagation()
        setConfirmDeleteModalState({isOpen: true, currentDeckId: id})
    }

    const confirmDeleteDeck = () => {
        deleteDeck(confirmDeleteModalState.currentDeckId, getDecks)
        setConfirmDeleteModalState({isOpen: false, currentDeckId: null})
    }

    const handleOpenAddDeckModal = () => {
        setIsAddModalOpen(true)
    }
    


    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={handleOpenAddDeckModal}>Создать колоду</button>
            <div className={styles.decks}>
                {decks.map(deck => <DeckItem handleDeleteDeck={handleDeleteDeck} cards={deck.cards} key={deck.id} title={deck.title} id={deck.id} />)}
            </div>
            <ConfirmDeleteModal
                confirmDeleteDeck={confirmDeleteDeck}
                isOpen={confirmDeleteModalState.isOpen}
                setIsOpen={setConfirmDeleteModalState}
            />
            <AddDeckModal onSuccess={getDecks} isOpen={isAddModalOpen} setIsOpen={setIsAddModalOpen} />
        </div>
    )
}