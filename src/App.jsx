import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './components/header/Header';
import Category from './components/user/category/Category';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import Cart from './components/user/cart/Cart';
import Home from './pages/Home';
// import Dashboard from './components/admin/Dashboard';
import Sidebar from './components/sidebar/Sidebar';
import SearchContainer from './components/searchContainer/SearchContainer';
import DropDown from './components/user/DropDown';
import ProtectedRoute from './components/ProtectedRoute';
import MyAccount from './pages/MyAccount';
import Product from './pages/product';
import Footer from './components/footer/Footer';


function App() {

  return (
      <BrowserRouter>
            <Header />
            <main>
            <SearchContainer/>
            <DropDown/>
                <Routes>
                {/* <Route path='/dashboard' element={<Dashboard />} /> */}
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<SignUp/>} />
                <Route path='/login' element={<SignIn/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='/product/:id' element={<Product/>} />
                <Route path='/category/:name' element={<Category/>} />

                {/* protected routes */}
                <Route element={<ProtectedRoute/>}>
                      <Route path='/myAccount' element={<MyAccount/>} />
                </Route>

                </Routes>
                <Footer/>
            </main>
      </BrowserRouter>
  )
}

export default App
