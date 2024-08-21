import {createBrowserRouter} from "react-router-dom";
import {Main} from "../page/Main";
import {Deck} from "../page/Deck";

export const router = createBrowserRouter([{
    path: '/',
    element: <Main />
},
    {
        path: '/:id',
        element: <Deck />
    }
])