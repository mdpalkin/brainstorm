import styles from './styles.module.scss'
import {MdDeleteSweep} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {Card, useCardsStore} from "../../../entity/cards";

type Props = {
    title: string
    id: string
    cards: Card[]
}

export const DeckItem = (props: Props) => {
    const { title, cards, id} = props

    const navigate = useNavigate()

    const deleteDeck = useCardsStore(state => state.deleteDeck)

    const handleDeleteDeck = (event: Event) => {
        event.stopPropagation()
        deleteDeck(id)
    }

    const handleClickDeck = () => {
        navigate(`:?id=${id}`)
    }
    return (
        <div className={styles.container} onClick={handleClickDeck}>
            <div className={styles.title}>{title}</div>
            <div className={styles.footer}>
                Количесто карточек: {cards.length}
                <MdDeleteSweep onClick={(event) => handleDeleteDeck(event as unknown as Event)} size={22} />
            </div>
        </div>
    )
}