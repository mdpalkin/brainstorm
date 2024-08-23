import {SubmitHandler, useFieldArray, useForm} from "react-hook-form";

import {MdDeleteSweep} from "react-icons/md";
import {Card, Deck, useDecksStore} from "../../../entity/cards";

import styles from './styles.module.scss'
import { useEffect } from 'react'

type Props = {
    deck: Deck
}

export const CardsForm = (props: Props) => {
    const { deck } = props

    const updateDeck = useDecksStore(state => state.updateDeck)
    const getDecks = useDecksStore(state => state.getDecks)

    const {
       control,
        handleSubmit,
        register,
        reset
    } = useForm({
        defaultValues: {
            cards: [{key: '', value: ''}]
        }
    })

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'cards',
    })

    useEffect(() => {
        reset({
            cards: deck?.cards
        });
    }, [deck, reset]);

    const onSubmit: SubmitHandler<{cards: Card[]}> = (data) => {        
        const payload = {...deck, cards: data.cards }
        updateDeck(payload, getDecks)
    }

    return (
        <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
            {fields.map((field, index) => (
                <div className={styles.input_pair} key={field.id}>
                    <div className={styles.wrapper}>
                        <span>Термин</span>
                        <input 
                            className={styles.input} 
                            {...register(`cards.${index}.key`)} 
                        />
                    </div>
                    <div className={styles.wrapper}>
                        <span>Определение</span>
                        <input 
                            className={styles.input} 
                            {...register(`cards.${index}.value`)} 
                        />
                    </div>
                    <MdDeleteSweep size={40} onClick={() => remove(index)} />
                </div>
            ))}
            <button className={styles.add_button} type="button" onClick={() => append({key: '', value: ''})}>Add</button>
            <button className={styles.submit} type="submit">Submit</button>
        </form>
    )
}
