import {instance} from "./instance.ts";

export const DecksApi = {
    getCards() {
        return instance.get('/decks')
    }
}