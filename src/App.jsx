import { BrowserRouter, } from 'react-router-dom'
import Layout from './layout/main/Layout'
import Router from "./Routes/Router"
import CustomThemeProvider from './providers/CustomThemeProvider'
import UserProvider from "./providers/UserProvider"
import SnackBarProvider from './providers/SnackBarProvider'

function App() {

  return (
    <>
      <UserProvider>
        <SnackBarProvider>
          <CustomThemeProvider>
            <BrowserRouter>
              <Layout>
                <Router></Router>
              </Layout>
            </BrowserRouter>
          </CustomThemeProvider>
        </SnackBarProvider>
      </UserProvider >

    </>
  )
}

export default App
