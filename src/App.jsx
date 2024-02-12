import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './components/header/Header';
import Category from './components/user/category/Category';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import Cart from './components/user/cart/Cart';
import Home from './pages/Home';
import Dashboard from './components/admin/Dashboard';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './footer/Footer';
// import Navbar from './components/Navbar';

function App() {
  const [isOpen,setIsOpen] = useState(false)

  return (
      <BrowserRouter>
            <Header isOpen={isOpen}  setIsOpen={setIsOpen} />
            <Sidebar isOpen={isOpen}  setIsOpen={setIsOpen}/>
            
                <Routes>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<SignUp/>} />
                <Route path='/login' element={<SignIn/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='/category/:name' element={<Category/>} />
                
                </Routes>
            <Footer />

      </BrowserRouter>
  )
}

export default App
