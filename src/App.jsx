import { useState } from 'react'
import Router from './Routes/Router'
import { BrowserRouter } from 'react-router-dom'
import Layout from './layout/main/Layout'


function App() {

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Router></Router>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
