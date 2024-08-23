import { create } from 'zustand'
import {Deck} from "./types.ts";
import {DecksApi} from "../../../shared/api/api.ts";
import {AxiosError, AxiosResponse} from "axios";

interface State {
    decks: Deck[]
    getDecks: () => void
    isLoading: boolean
    error: string | null
    updateDeck: (payload: Deck, onSuccess: () => void) => void
    deleteDeck: (id: string, onSuccess: () => void) => void
    createDeck: (payload: Partial<Deck>, onSuccess: () => void ) => void
}

export const useDecksStore = create<State>()(

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
        updateDeck: async (payload: Deck, onSuccess: () => void) => {
            set({isLoading: true})
            try {
                await DecksApi.updateDeck(payload)
                onSuccess()
            } catch (e) {
                const error = e as AxiosError
                set({error: error.message})
            }
        },
        deleteDeck: async (id: string, onSuccess: () => void)=> {
            set({isLoading: true})
            try {
                await DecksApi.deleteDeck(id)
                onSuccess()
            } catch (e) {
                const error = e as AxiosError
                set({error: error.message})
            } finally {
                set({isLoading: false})
            }
        },
        createDeck: async (payload: Partial<Deck>, onSuccess: () => void) => {
            set({isLoading: true})
            try {
                await DecksApi.createDeck(payload)
                onSuccess()
            } catch (e) {
                const error = e as AxiosError
                set({error: error.message})
            } finally {
                set({isLoading: false})
            }
        }
    }),
)