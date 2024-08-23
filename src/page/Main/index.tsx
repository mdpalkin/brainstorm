import styles from './styles.module.scss'
import {useCardsStore} from "../../entity/cards";
import {DeckItem} from "./DeckItem";

export const Main = () => {
    const decks = useCardsStore(state => state.decks)

    return (
        <div className={styles.container}>
            <button className={styles.button}>Создать колоду</button>
            <div className={styles.decks}>
                {decks.map(deck => <DeckItem cards={deck.cards} key={deck.id} title={deck.title} id={deck.id} />)}
            </div>
        </div>
    )
}