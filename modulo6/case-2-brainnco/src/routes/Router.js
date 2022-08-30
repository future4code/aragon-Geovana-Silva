import React from 'react'
import HomePage from '../Pages/HomePage/HomePage'
import ErrorPage from '../Pages/ErrorPage/ErrorPage'
import { Route, Routes, BrowserRouter } from 'react-router-dom'


function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<HomePage />} />
                <Route path={"*"} element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;