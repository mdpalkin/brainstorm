export interface Deck {
    id: string
    title: string
    cards: Card[]
}

export type Card = {
    key: string
    value: string
}