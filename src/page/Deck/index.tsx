import { useState } from 'react'

import classNames from 'classnames'
import { useNavigate, useParams } from "react-router-dom"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

import styles from './styles.module.scss'
import { Cards } from '../../features/Cards'
import { useDecksStore } from "../../entity/cards"
import { CardsForm } from "../../features/CardsForm/ui"
import { IoHomeOutline } from 'react-icons/io5'

export const Deck = () => {
    const currentDeckId = useParams().id
    
    const navigate = useNavigate()

    const [ visibleCardIndex, setVisibleCardIndex] = useState(0)
    
    const currentDeck = useDecksStore(state => state.decks.find(deck => deck.id === currentDeckId))

    const handleLearnButton = () => {
        navigate(`/learn/${currentDeckId}`)
    }

    const cards = currentDeck?.cards ?? []

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
            <div className={styles.icon}><IoHomeOutline size={30} onClick={() => navigate('/')} /></div>
            <div className={styles.header}>
            <div className={styles.title}>{currentDeck?.title}</div>
            <button onClick={handleLearnButton} className={styles.button}>Изучить</button>
            </div>
            {!currentDeck?.cards.length
             ? <div className={styles.empty}>В этой колоде пока нету карточкек</div>
            : (
                <div className={styles.cards_wrapper}>
                    <div className={styles.carousel}>
                        <FaArrowAltCircleLeft
                            size={50}
                            className={classNames(styles.arrow, styles.arrowLeft)}
                            onClick={handlePrevCardView}/>
                        <Cards
                            cards={cards} 
                            currentCardIndex={visibleCardIndex}
                        />
                        <FaArrowAltCircleRight
                            size={50}
                            className={classNames(styles.arrow, styles.arrowRight)}
                            onClick={handleNextCardView}/>
                    </div>
                <div className={styles.counter}>{visibleCardIndex + 1}/{cards.length}</div>
            </div>
            )
            
            }
            <CardsForm deck={currentDeck} />
        </div>
    )
}