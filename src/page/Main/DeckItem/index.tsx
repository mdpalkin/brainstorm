import styles from './styles.module.scss'
import {MdDeleteSweep} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Card } from "../../../entity/cards";

type Props = {
    title: string
    id: string
    cards: Card[]
    handleDeleteDeck: (event: Event, id: string) => void
}

export const DeckItem = (props: Props) => {
    const { title, cards, id, handleDeleteDeck} = props

    const navigate = useNavigate()


    const handleClickDeck = () => {
        navigate(`:?id=${id}`)
    }
    return (
        <div className={styles.container} onClick={handleClickDeck}>
            <div className={styles.title}>{title}</div>
            <div className={styles.footer}>
                Количесто карточек: {cards.length}
                <MdDeleteSweep onClick={(event) => handleDeleteDeck(event as unknown as Event, id)} size={22} />
            </div>
        </div>
    )
}