import './App.css';
import { useState } from 'react';


function App() {
  const [isVisible, setIsVisible] = useState(false);

    const toggleMenu = () => {
        setIsVisible((prev) => !prev)       
    }

    const isMenuBurgerClicked = () => {
        isVisible && setIsVisible(false);        
    }
  return (
    <div className="App bg-teal-500">
      <section className="max-w-4xl 2xl:max-w-7xl mx-auto p-4 flex justify-between items-center"onClick={isMenuBurgerClicked}>
            <a href="/" className='flex justify-between'>
          
                <span className='text-3xl text-slate-700 dark:text-slate-300 font-bold hover:text-cyan-400'>🚀 StartShip Enterprise</span></a>

            <div>
                <button id="hamburger-button" className="text-3xl md:hidden cursor-pointer"  onClick={toggleMenu}>
                    {isVisible ? <h1>&#10006;</h1> : <h1>&#9776;</h1> }
                </button>
                <nav className="hidden md:block space-x-8 text-xl font-semibold" aria-label="main">
                    <a href="#about" className="hover:opacity-90 hover:text-cyan-400">About</a>
                    <a href="#services" className="hover:opacity-90 hover:text-cyan-400">Services</a>
                    <a href="#projects" className="hover:opacity-90 hover:text-cyan-400">Projects</a>
                </nav>
            </div>
        </section>



      {isVisible && <section className='dark:bg-black w-full text-5xl flex-col justify-content-center'>
        <nav id="navMenu" className="flex flex-col min-h-screen items-center py-8" aria-label="mobile" onClick={toggleMenu}>
            <a href="#hero" className="w-full text-center py-6 font-bold hover:opacity-90 hover:text-cyan-400">Home</a>                
            <a href="#about" className="w-full text-center py-6 font-bold hover:opacity-90 hover:text-cyan-400">About</a>
            <a href="#services" className="w-full text-center py-6 font-bold hover:opacity-90 hover:text-cyan-400">Services</a>
            <a href="#projects" className="w-full text-center py-6 font-bold hover:opacity-90 hover:text-cyan-400">Projects</a>
        </nav>
        </section>}
     
    </div>
  );
}

export default App;
