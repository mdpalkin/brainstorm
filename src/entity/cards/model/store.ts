import { create } from 'zustand'
import {Deck} from "./types.ts";
import {DecksApi} from "../../../shared/api/api.ts";
import {AxiosError, AxiosResponse} from "axios";

interface State {
    decks: Deck[]
    getDecks: () => void
    isLoading: boolean
    error: string | null
    updateDeck: (payload: Deck) => void
}

export const useCardsStore = create<State>()(

    (set) => ({
        decks: [],
        isLoading: false,
        error: null,
        getDecks: async () => {
            set({isLoading: true})
            try {
                const response = await DecksApi.getCards() as AxiosResponse
                set({decks: response.data})
            } catch (e) {
                const error = e as AxiosError
                set({error: error.message})
            } finally {
                set({isLoading: false})
            }
        },
        updateDeck: async (payload: Deck) => {
            set({isLoading: true})
            try {
                await DecksApi.updateDeck(payload)
            } catch (e) {
                const error = e as AxiosError
                set({error: error.message})
            }
        }
    }),
)