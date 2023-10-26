import './App.css';
import { useState } from 'react';


function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

    const toggleMenu = () => {
        setIsVisible((prev) => !prev)       
    }

    const isMenuBurgerClicked = () => {
        isVisible && setIsVisible(false);        
    }
  return (
    <div className="App">
        <header class="bg-indigo-700 text-white sticky top-0 z-10">
      <section className="max-w-4xl 2xl:max-w-7xl mx-auto p-4 flex justify-between items-center"onClick={isMenuBurgerClicked}>
      <h1 class="text-3xl font-medium">
               <a href="#hero"> 🚀 StartShip Enterprise</a>
            </h1>

            <div>
                <button id="hamburger-button" className="text-3xl md:hidden cursor-pointer"  onClick={toggleMenu}>
                    {isVisible ? <h1>&#10006;</h1> : <h1>&#9776;</h1> }
                </button>
                <nav class="hidden md:block space-x-8 text-xl" aria-label="main">
                    <a href="#startship" class="hover:opacity-90">Our StartShips</a>
                    <a href="#testimonials" class="hover:opacity-90">Testimonials</a>
                    <a href="#contact" class="hover:opacity-90">Contact</a>
                </nav>
            </div>
        </section>



      {isVisible && <section className='dark:bg-black w-full text-5xl flex-col justify-content-center'>
        <nav id="navMenu" className="flex flex-col min-h-screen items-center py-8" aria-label="mobile" onClick={toggleMenu}>
                <a href="#hero" class="w-full text-center py-6 hover:opacity-90">Home</a>
                <a href="#startship" class="w-full text-center py-6 hover:opacity-90">Our StartShips</a>
                <a href="#testimonials" class="w-full text-center py-6 hover:opacity-90">Testimonials</a>
                <a href="#contact" class="w-full text-center py-6 hover:opacity-90">Contact</a>
                <a href="#footer" class="w-full text-center py-6 hover:opacity-90">Legal</a>
        </nav>
        </section>}
        </header>
    </div>
  );
}

export default Navbar;
