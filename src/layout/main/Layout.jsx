import React from 'react'
import Header from '../Header/Header'
import Main from './Main'
import Footer from '../Footer/Footer'



function Layout({ children }) {
    return (
        <>
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </>

    )
}

export default Layout