import styles from './styles.module.scss'
import {MdDeleteSweep} from "react-icons/md";
import { useNavigate } from "react-router-dom";

type Props = {
    title: string
    id: number
    cards: string[]
}

export const DeckItem = (props: Props) => {
    const { title, cards, id} = props

    const navigate = useNavigate()

    const handleClickDeck = () => {
        navigate(`:?id=${id}`)
    }
    return (
        <div className={styles.container} onClick={handleClickDeck}>
            <div className={styles.title}>{title}</div>
            <div className={styles.footer}>
                Количесто карточек: {cards.length}
                <MdDeleteSweep  size={22} />
            </div>
        </div>
    )
}