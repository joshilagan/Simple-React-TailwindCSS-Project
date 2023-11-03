import React from 'react'

const Footer = () => {
  return (
    <footer id="footer" class="bg-indigo-700 text-white text-xl">
        <section class="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
            <address>
            <h2>Startship Enterprise</h2>
                123 Blazing Drive <br/>
                Cornfield, New Jersey 12345-5555<br/><br/>
                Email: <a href="example.com">Inquiries@startshipenterprise.com</a><br/>
                Phone: <a href="example.com">(555)555-5555</a>
            </address>
            <nav class="hidden md:flex flex-col gap-2" aria-label="footer">
                <a href="/startship" class="hover:opacity-90">Our StartShips</a>
                <a href="/testimonials" class="hover:opacity-90">Testimonials</a>
                <a href="/contact" class="hover:opacity-90">Contact Us</a>
            </nav>
            <div class="flex flex-col sm:gap-2">
                <p class="text-right">Copyright &copy; <span id="year">2023</span></p>
                <p class="text-right">All Rights Reserved</p>
            </div>
        </section>
    </footer>
  )
}

export default Footer