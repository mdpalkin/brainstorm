import {useFieldArray, useForm} from "react-hook-form";

import styles from './styles.module.scss'
import {MdDeleteSweep} from "react-icons/md";
import {Deck, useCardsStore} from "../../entity/cards";

type Props = {
    deck: Deck | undefined

}
export const CardsForm = (props: Props) => {
    const { deck } = props

    const updateDeck = useCardsStore(state => state.updateDeck)

    const {
       control,
        handleSubmit,
        register
    } = useForm({
        defaultValues: [{key: '', value: ''}]
    })

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'pair',
        minLength: 1,
    })

    const onSubmit = (data: any) => {

        updateDeck(data)
    }

    return (
        <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
            {fields.map((field, index) => (
                <div className={styles.input_pair} key={field.id}>
                    <div className={styles.wrapper}>
                        <span>Термин</span>
                        <input className={styles.input} {...register(`${index}.key`)} />
                    </div>
                    <div className={styles.wrapper}>
                        <span>Определение</span>
                        <input className={styles.input} {...register(`${index}.value`)} />
                    </div>
                    <MdDeleteSweep  size={40}  onClick={() => remove(index)} />
                </div>
            ))}
            <button className={styles.add_button} type="button" onClick={() => append({key: '', value: ''})}>Add</button>
            <button className={styles.submit} type="submit">Submit</button>
        </form>
    )
}