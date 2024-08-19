import styles from './styles.module.scss'
import {MdDeleteSweep} from "react-icons/md";

type Props = {
    title: string
    id: number
    cards: string[]
}

export const DeckItem = (props: Props) => {
    const { title, cards} = props
    return (
        <div className={styles.container}>
            <div className={styles.title}>{title}</div>
            <div className={styles.footer}>
                Количесто карточек: {cards.length}
                <MdDeleteSweep  size={22} />
            </div>
        </div>
    )
}