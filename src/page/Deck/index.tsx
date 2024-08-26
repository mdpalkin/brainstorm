import { useNavigate, useParams, useSearchParams } from "react-router-dom"

import { useDecksStore } from "../../entity/cards"
import { CardsForm } from "../../features/CardsForm/ui"

import { CardModal } from '../../features/CardsModal'
import styles from './styles.module.scss'

export const Deck = () => {
    const currentDeckId = useParams().id
    
    const navigate = useNavigate()
    
    console.log(currentDeckId);
    

    const currentDeck = useDecksStore(state => state.decks.find(deck => deck.id === currentDeckId))

    const hadnleLearnButton = () => {
        navigate(`/learn/${12}`)
    }


    return (
        <div className={styles.container}>
            <div className={styles.header}>
            <div className={styles.title}>{currentDeck?.title}</div>
            <button onClick={hadnleLearnButton} className={styles.button}>Изучить</button>
            </div>
            {!currentDeck?.cards.length ? <div className={styles.empty}>В этой колоде пока нету карточкек</div> : <CardModal cards={currentDeck.cards} />}
            <CardsForm deck={currentDeck} />
        </div>
    )
}