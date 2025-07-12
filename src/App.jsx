import { BrowserRouter, } from 'react-router-dom'
import Layout from './layout/main/Layout'
import Router from "./Routes/Router"
import CustomThemeProvider from './providers/CustomThemeProvider'
import UserProvider from "./providers/UserProvider"
import { getUser, removeToken } from './services/localStorageService'

function App() {

  return (
    <>
      <UserProvider>
        <CustomThemeProvider>
          <BrowserRouter>
            <Layout>
              <Router></Router>
            </Layout>
          </BrowserRouter>
        </CustomThemeProvider>
      </UserProvider >

    </>
  )
}

export default App
