import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './components/header/Header';
import Category from './components/user/category/SingleCategory';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import Home from './pages/Home';
// import Dashboard from './components/admin/Dashboard';
import Sidebar from './components/sidebar/Sidebar';
import SearchContainer from './components/searchContainer/SearchContainer';
import DropDown from './components/user/DropDown';
import ProtectedRoute from './components/ProtectedRoute';
import MyAccount from './pages/MyAccount';
import Product from './pages/Product';
import Footer from './components/footer/Footer';
import ShoppingCart from './pages/ShoppingCart';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
    // const [openSidebar,setOpenSidebar] = useState(true)
  return (
      <BrowserRouter>
            <Header />
            <Sidebar />
            <main>
            <SearchContainer/>
            <div className='hidden md:block'>
                <DropDown/>
            </div>
                <Routes>
                {/* <Route path='/dashboard' element={<Dashboard />} /> */}
                <Route path='/register' element={<SignUp/>} />
                <Route path='/login' element={<SignIn/>} />
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/cart' element={<ShoppingCart/>} />
                <Route path='/product/:id' element={<Product/>} />
                <Route path='/category/:name' element={<Category/>} />
                <Route path='*' element={<NotFound/>} />

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
