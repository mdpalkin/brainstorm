import './index.scss'
import {RouterProvider} from "react-router-dom";
import {router} from "./Router.tsx";
import {useCardsStore} from "../entity/cards";
import {useEffect} from "react";
import {Preloader} from "../shared/ui/Preloader";

export const App = () => {

    const getDecks = useCardsStore(state => state.getDecks)
    const isLoading = useCardsStore(state => state.isLoading)


    useEffect(() => {
        getDecks()
    }, [])

    return (
        <div className={'app'}>
            {isLoading ? <Preloader /> : <RouterProvider router={router} />}
        </div>
    )
}