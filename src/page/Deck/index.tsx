import {useSearchParams} from "react-router-dom";

import {useCardsStore} from "../../entity/cards";
import {CardsForm} from "../../features/CardsForm/ui";

import styles from './styles.module.scss'
import { CardModal } from '../../features/CardsModal'

export const Deck = () => {
    const [ searchParams] = useSearchParams()

    const currentDeckId = searchParams.get('id')

    const currentDeck = useCardsStore(state => state.decks.find(deck => deck.id === currentDeckId))

    console.log(currentDeck)

    console.log(currentDeck)

    return (
        <div className={styles.container}>
            <div className={styles.title}>{currentDeck?.title}</div>
            <CardModal cards={currentDeck.cards} />
            <CardsForm deck={currentDeck} />
        </div>
    )
}