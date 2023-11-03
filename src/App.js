import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Startship from './components/Startship'
import Testimonials from './components/Testimonials';
import Footer from './Footer';



function App() {
  
  return (
    <div className="App ">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/startship' element={<Startship/>}/>
          <Route path='/testimonials' element={<Testimonials/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<h1>Page Not Found</h1>}/>
        </Routes>
        <Footer/>
      </Router>

      
      
      
      <hr class="mx-auto bg-black dark:bg-white w-1/2"></hr>
      
      
    </div>
  );
}

export default App;
