import './index.scss'
import {RouterProvider} from "react-router-dom";
import {router} from "./Router.tsx";
import {useCardsStore} from "../entity/cards";
import {useEffect} from "react";

export const App = () => {

    const getDecks = useCardsStore(state => state.getDecks)


    useEffect(() => {
        getDecks()
    }, [])

    return (
        <div className={'app'}>
            <RouterProvider router={router} />
        </div>
    )
}