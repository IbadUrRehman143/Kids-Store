import { BrowserRouter , Routes, Route, } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Book from './Pages/Course/Book';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Search from './Pages/Search/Search';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Your routes here */}
          <Route path="/" element={<Home/>} />
          <Route path="/book" element={<Book/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
