
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Papers from './pages/Papers'
import {Routes , Route} from 'react-router-dom'
function App() {

  return (
    <>
    {/* Navbar Component */}
    <Header />
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/papers' element={ <Papers /> } />
    </Routes>
      {/* Footer component */}
      <Footer />
    </>
  )
}

export default App
