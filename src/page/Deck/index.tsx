import {useSearchParams} from "react-router-dom";

import {useCardsStore} from "../../entity/cards";

import styles from './styles.module.scss'
import {CardsForm} from "../../features/CardsForm";

export const Deck = () => {
    const [ searchParams] = useSearchParams()

    const currentDeckId = searchParams.get('id')

    const currentDeck = useCardsStore(state => state.decks.find(deck => deck.id === currentDeckId))
    console.log(currentDeck)

    console.log(currentDeck)

    return (
        <div className={styles.container}>
            <div className={styles.title}>{currentDeck?.title}</div>
            <CardsForm deck={currentDeck} />
        </div>
    )
}