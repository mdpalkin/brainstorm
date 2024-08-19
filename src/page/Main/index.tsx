import styles from './styles.module.scss'
import {useEffect} from "react";
import {useCardsStore} from "../../entity/cards";
import {DeckItem} from "./Deck";

export const Main = () => {
    const decks = useCardsStore(state => state.decks)
    const getDecks = useCardsStore(state => state.getDecks)


    useEffect(() => {
        getDecks()
    }, [])

    return (
        <div className={styles.container}>
            <button className={styles.button}>Создать колоду</button>
            <div className={styles.decks}>
                {decks.map(deck => <DeckItem cards={deck.cards} key={deck.id} title={deck.title} id={deck.id} />)}
            </div>
        </div>
    )
}