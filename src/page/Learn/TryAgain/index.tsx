import styles from './styles.module.scss'

type Props = {
	handleRepeatButton: () => void
	learnedCount: number
	inProgressCount: number
}

export const TryAgain = (props: Props) => {
	const { handleRepeatButton, learnedCount, inProgressCount } = props

	return (
		<div className={styles.try_again}>
			<span className={styles.subtitle}>У вас есть еще другие термины для повтора.</span>
			<div className={styles.stats}>
			<div className={styles.learned}><span className={styles.text}>Изучено</span> <span className={styles.text}>{learnedCount}</span></div>
			<div className={styles.in_progress}><span className={styles.text}>Нужно повторить</span> <span className={styles.text}>{inProgressCount}</span></div>
			</div>
		<button className={styles.repeat} onClick={handleRepeatButton}>Повторить</button>	
		</div>
	)
}