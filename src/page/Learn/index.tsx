import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai'

import { Card, useDecksStore } from '../../entity/cards';
import { Cards } from '../../features/Cards';
import { TryAgain } from './TryAgain';
import { Congratulations } from './Congratulations';

import styles from './styles.module.scss';

export const Learn = () => {
    
    const { id: currentDeckId } = useParams();
		const navigate = useNavigate()

    const currentDeck = useDecksStore((state) => state.decks.find((deck) => deck.id === currentDeckId));
    
    const [cardsForLearn, setCardsForLearn] = useState<Card[]>([]);
    const [cardsForRepeat, setCardsForRepeat] = useState<Card[]>([]);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    useEffect(() => {
        if (currentDeck?.cards) {
            setCardsForLearn(currentDeck.cards);
        }
    }, [currentDeck]);

		const resetCardsProgress = (cards: Card[]) => {
			setCardsForLearn(cards);
			setCurrentCardIndex(0);
			setCardsForRepeat([]);
		}

    const handleFailureButton = () => {
        setCardsForRepeat((prev) => [...prev, cardsForLearn[currentCardIndex]]);
        setCurrentCardIndex((prev) => prev + 1);
    };

    const handleSuccessButton = () => {
        setCurrentCardIndex((prev) => prev + 1);
    };

    const handleRepeatButton = () => {
 			resetCardsProgress(cardsForRepeat)
    };

		const handleTryAgain = () => {
			resetCardsProgress(currentDeck.cards)
		}

		const handleReturnToDeck = () => {
			navigate(`/deck/${currentDeckId}`)
		}


    if (currentCardIndex >= cardsForLearn.length && cardsForRepeat.length !== 0) {
        return (
            <TryAgain
                learnedCount={currentDeck?.cards.length - cardsForRepeat.length}
                inProgressCount={cardsForRepeat.length}
                handleRepeatButton={handleRepeatButton}
            />
        );
    } else if (currentCardIndex >= cardsForLearn.length && cardsForRepeat.length === 0) {
        return <Congratulations handleReturnToDeck={handleReturnToDeck} handleTryAgain={handleTryAgain} />;
    } else {
        return (
            <div className={styles.container}>
							<div className={styles.icon}><AiOutlineClose onClick={handleReturnToDeck} size={30}/></div>
                <Cards cards={cardsForLearn} currentCardIndex={currentCardIndex} />
                <div className={styles.counter}>
                    {currentCardIndex + 1}/{cardsForLearn.length}
                </div>
                <div className={styles.buttons}>
                    <button onClick={handleFailureButton} className={styles.failure}>Еще изучаю</button>
                    <button onClick={handleSuccessButton} className={styles.success}>Знаю</button>
                </div>
            </div>
        );
    }
};
