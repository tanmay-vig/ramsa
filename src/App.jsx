
import './App.css'
// Components Included
import Header from './components/Header'
import Footer from './components/Footer'
// Pages Included here
import Home from './pages/Home'
import About from './pages/About'
import Organizers from './pages/Organizers'
import Resource from './pages/Resource'
import Sessions from './pages/Sessions'
import Papers from './pages/Papers'
import Registration from './pages/Registration'
import Annoucement from './pages/Annoucement'
import Dates from './pages/Dates'
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
      <Route path='/resourceperson' element={ <Resource /> } />
      <Route path='/sessions' element={ <Sessions /> } />
      <Route path='/papers' element={ <Papers /> } />
      <Route path='/registration' element={ <Registration /> } />
      <Route path='/annoucements' element={ <Annoucement /> } />
      <Route path='/importantdates' element={ <Dates /> } />
      <Route path='/contact' element={ <Contact /> } />
      <Route path='/previous' element={ <Previous /> } />
    </Routes>
      {/* Footer component */}
      <Footer />
    </>
  )
}

export default App
