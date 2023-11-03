import React from 'react'

const Hero = () => {
  return (
    <section id="hero"
            class="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height">
            <article class="sm:w-1/2">

                <h2
                    class="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
                    We Boldly Go <span class="text-indigo-700 dark:text-indigo-300"> Where No One </span>Has Gone Before...
                </h2>
                <p class="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
                    We're happy to see you smile. From the Moon to Mars, Jupiter and beyond...
                </p>
                <p class="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
                    Think StartShip Enterprise.
                </p>
            </article>
            <img class="w-1/2" src="./img/startshipdab.png" alt="StartShip Dab"/>
        </section>
  )
}

export default Hero