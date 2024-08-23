import {useSearchParams} from "react-router-dom";

import {useDecksStore} from "../../entity/cards";
import {CardsForm} from "../../features/CardsForm/ui";

import styles from './styles.module.scss'
import { CardModal } from '../../features/CardsModal'

export const Deck = () => {
    const [ searchParams] = useSearchParams()
    

    const currentDeckId = searchParams.get('id')

    const currentDeck = useDecksStore(state => state.decks.find(deck => deck.id === currentDeckId))

    return (
        <div className={styles.container}>
            <div className={styles.title}>{currentDeck?.title}</div>
            {!currentDeck.cards.length ? <div className={styles.empty}>В этой колоде пока нету карточкек</div> : <CardModal cards={currentDeck.cards} />}
            <CardsForm deck={currentDeck} />
        </div>
    )
}