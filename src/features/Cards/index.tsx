import { useState } from 'react'
import { motion } from 'framer-motion'

import { Card } from '../../entity/cards'

import styles from './styles.module.scss'

type Props = {
	cards: Card[]
	currentCardIndex: number
}

export const Cards = (props: Props) => {
	const { cards, currentCardIndex} = props

const [isFlipped, setIsFlipped] = useState(false)



	return (
		<motion.div
		initial={{x: 300, opacity: 0}}
		animate={{x: 0, opacity: 1}}
		exit={{x: -300, opacity: 0}}
		className={styles.card}
		key={currentCardIndex}
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
						{cards[currentCardIndex]?.key}
				</motion.div>
		) : (
				<motion.div
						initial={{y: 150, opacity: 0.5}}
						animate={{y: 0, opacity: 1}}
						exit={{y: -150, opacity: 0}}
						key="value"
						className={styles.value}
				>
						{cards[currentCardIndex]?.value}
				</motion.div>
		)}
</motion.div>
	)
}