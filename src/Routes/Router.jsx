import React from 'react'
import { Routes, Route } from "react-router-dom"
import CardsPage from "../components/CardsPage"
import FavoriteCardsPages from "../components/FavoriteCardsPages"
import AboutPage from "../components/AboutPage"
import MyCardsPage from "../components/MyCardsPage"
import LoginPage from "../components/LoginPage"
import RegisterPage from "../components/RegisterPage"
import ErrorPage from '../components/ErrorPage'
import ROUTES from './routesDict'
import SandBox from '../sandbox/SandBox'



function Router() {
    return (
        <Routes>

            <Route path={ROUTES.root} element={<CardsPage />} />

            <Route path={ROUTES.favorite} element={<FavoriteCardsPages />} />

            <Route path={ROUTES.myCards} element={<MyCardsPage />} />

            <Route path={ROUTES.about} element={<AboutPage />} />

            <Route path={ROUTES.login} element={<LoginPage />} />

            <Route path={ROUTES.register} element={<RegisterPage />} />

            <Route path={ROUTES.sandbox} element={<SandBox />} />


            <Route path="/*" element={<ErrorPage />} />

        </Routes>
    )
}

export default Router