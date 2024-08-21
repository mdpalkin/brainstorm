import {instance} from "./instance.ts";
import {Deck} from "../../entity/cards";

export const DecksApi = {
    getCards() {
        return instance.get('/decks')
    },
    updateDeck(payload: Deck) {
        const { id, ...data } = payload
        return instance.put(`/decks/:${id}`, data)
    }
}