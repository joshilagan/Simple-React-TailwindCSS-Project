import React from 'react'

const Startship = () => {
  return (
    <section id="startship" class="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height max-w-4xl mx-auto">
            <h2 class="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
                Our StartShips
            </h2>
            <ul class="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
                <li class="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
                    <img src="./img/startshipman.png" alt="Explorer" class="w-1/2 mb-6"/>
                    <h3 class="text-3xl text-center text-slate-900 dark:text-white">Explorer</h3>
                    <p class="hidden sm:block text-3xl text-center mt-2 text-slate-400 dark:text-slate-400">$</p>
                    <p class="sm:hidden text-2xl mt-2 text-center text-slate-400 dark:text-slate-400 ">Affordable Exploration</p>
                </li>
                <li class="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
                    <img src="./img/startshipride.png" alt="Adventurer" class="w-1/2 mb-6"/>
                    <h3 class="text-3xl text-center text-slate-900 dark:text-white">Adventurer</h3>
                    <p class="hidden sm:block text-3xl text-center mt-2 text-slate-400 dark:text-slate-400">$$</p>
                    <p class="sm:hidden text-2xl mt-2 text-center text-slate-400 dark:text-slate-400 ">Best Selling StartShip</p>
                </li>
                <li class="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
                    <img src="./img/startshiplunch.png" alt="Infinity and Beyond" class="w-1/2 mb-6"/>
                    <h3 class="text-3xl text-center text-slate-900 dark:text-white">Infinity</h3>
                    <p class="hidden sm:block text-3xl text-center mt-2 text-slate-400 dark:text-slate-400">$$$</p>
                    <p class="sm:hidden text-2xl mt-2 text-center text-slate-400 dark:text-slate-400 ">Luxury Starship</p>
                </li>
            </ul>
        </section>
  )
}

export default Startship