import {createBrowserRouter} from "react-router-dom";
import {Main} from "../page/Main";
import {Deck} from "../page/Deck";
import { Learn } from '../page/Learn'

export const router = createBrowserRouter([{
    path: '/',
    element: <Main />
},
    {
        path: 'deck/:id',
        element: <Deck />,
    },
    {
        path: 'learn/:id',
        element: <Learn />
    }
])