import { create } from 'zustand'
import {Deck} from "./types.ts";
import {DecksApi} from "../../../shared/api/api.ts";
import {AxiosError, AxiosResponse} from "axios";

interface MyState {
    decks: Deck[]
    getDecks: () => void
    isLoading: boolean
    error: string | null
}

export const useCardsStore = create<MyState>()(
    (set) => ({
        decks: [],
        isLoading: false,
        error: null,
        getDecks: async () => {
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
    }),
)