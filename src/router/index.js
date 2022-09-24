import Detail from "@/views/detail"
import Entry from "@/views/entry"
import Home from "@/views/home"
import { Navigate } from "react-router-dom"

const routes=[
    {
        path:'/',
        element:<Navigate to='/home' />
    },
    {
        path:'/home',
        element:<Home />
    },
    {
        path:'/entry',
        element:<Entry />
    },
    {
        path:'/detail',
        element:<Detail />
    }
]

export default routes