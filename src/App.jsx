
import './App.css'
// Components Included
import Header from './components/Header'
import Footer from './components/Footer'
// Pages Included here
import Home from './pages/Home'
import About from './pages/About'
import Organizers from './pages/Organizers'

import Sessions from './pages/Sessions'
import Papers from './pages/Papers'
import Registration from './pages/Registration'
// import Dates from './pages/Dates'
import Contact from './pages/Contact'
import Previous from './pages/Previous'
import {Routes , Route} from 'react-router-dom'

function App() {

  return (
    <>
    {/* Navbar Component */}
    <Header />
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/about' element={ <About /> } />
      <Route path='/organizers' element={ <Organizers /> } />
      
      <Route path='/sessions' element={ <Sessions /> } />
      <Route path='/papers' element={ <Papers /> } />
      <Route path='/registration' element={ <Registration /> } />
      
      {/* <Route path='/importantdates' element={ <Dates />} /> */}
      <Route path='/contact' element={ <Contact /> } />
      <Route path='/previous' element={ <Previous /> } />
    </Routes>
      {/* Footer component */}
      <Footer />
    </>
  )
}

export default App
