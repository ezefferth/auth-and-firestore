
import './App.scss'

import Login from './pages/login'
import Home from './pages/home'
import Cadastro from './pages/cadastro'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AuthContextProvider from './components/authContext';

function App() {

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="cadastro" element={<Cadastro />} />
          <Route path='login' element={<Login />} />
          <Route path='home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>

  )
}

export default App
