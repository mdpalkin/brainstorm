import { useParams, useSearchParams } from 'react-router-dom'
import { useDecksStore } from '../../entity/cards'

export const Learn = () => {
	
	const currentDeckId = useParams().id
    


	const currentDeck = useDecksStore(state => state.decks.find(deck => deck.id === currentDeckId))

	return <>
	{currentDeckId}
	</>
}