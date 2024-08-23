import {Card} from "../../entity/cards";

import styles from './styles.module.scss'
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa";
import {useState} from "react";
import classNames from "classnames";
import { motion } from "framer-motion";


type Props = {
    cards: Card[]
}

export const CardModal = (props: Props) => {
    const { cards} = props

    const [ visibleCardIndex, setVisibleCardIndex] = useState(0)
    const [isFlipped, setIsFlipped] = useState(false)

    const handleNextCardView = () => {
        if (visibleCardIndex + 1 === cards.length) {
            setVisibleCardIndex(0)
        } else {
            setVisibleCardIndex(visibleCardIndex + 1)
        }
    }

    const handlePrevCardView = () => {
        if (visibleCardIndex - 1 < 0) {
            setVisibleCardIndex(cards.length - 1)
        } else {
            setVisibleCardIndex(visibleCardIndex - 1)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.carousel}>
                <FaArrowAltCircleLeft
                    size={50}
                    className={classNames(styles.arrow, styles.arrowLeft)}
                    onClick={handlePrevCardView}/>
                <motion.div
                    initial={{x: 300, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    exit={{x: -300, opacity: 0}}
                    className={styles.card}
                    key={visibleCardIndex}
                    onClick={() => setIsFlipped(!isFlipped)}
                >
                    {isFlipped ? (
                        <motion.div
                            initial={{y: -150, opacity: 0.5}}
                            animate={{y: 0, opacity: 1}}
                            exit={{y: +150, opacity: 0}}
                            key="key"
                            className={styles.value}
                        >
                            {cards[visibleCardIndex].key}
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{y: 150, opacity: 0.5}}
                            animate={{y: 0, opacity: 1}}
                            exit={{y: -150, opacity: 0}}
                            key="value"
                            className={styles.value}
                        >
                            {cards[visibleCardIndex].value}
                        </motion.div>
                    )}
                </motion.div>
                <FaArrowAltCircleRight size={50} className={classNames(styles.arrow, styles.arrowRight)}
                                       onClick={handleNextCardView}/>
            </div>
            <div className={styles.counter}>{visibleCardIndex + 1}/{cards.length}</div>
        </div>
    )
}