import { AiOutlineThunderbolt } from 'react-icons/ai'

import styles from './styles.module.scss'

type Props = {
	handleTryAgain: () => void
	handleReturnToDeck: () => void
}

export const Congratulations = (props: Props) => {
	const { handleTryAgain, handleReturnToDeck } = props

	return (
		<div className={styles.container}>
			<span className={styles.title}>Поздравляем! Все термины изучены</span>
			<AiOutlineThunderbolt className={styles.icon} size={100} />
			<button className={styles.again} onClick={handleTryAgain}>Изучить еще раз</button>
			<button className={styles.return} onClick={handleReturnToDeck}>Вернуться к колоде</button>
		</div>
	)
}