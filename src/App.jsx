import { BrowserRouter, } from 'react-router-dom'
import Layout from './layout/main/Layout'
import Router from "./Routes/Router"
import CustomThemeProvider from './providers/CustomThemeProvider'
import UserProvider from "./providers/UserProvider"

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
