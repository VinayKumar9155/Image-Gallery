import React from 'react'
import 'font-awesome/css/font-awesome.min.css';

const Navbar = () => {
  return (
    <>
    <nav class="bg-gray-1000 text-white p-4 flex justify-between items-center bg-black">
  <div class="text-2xl subpixel-antialiased">
    Image Gallery
  </div>
  <ul class="flex space-x-6">
    <li class="hover:text-gray-400">Explore</li>
    <li class="hover:text-gray-400">Collection</li>
    <li id="theme-switch" class="cursor-pointer">
    <i class="fa fa-adjust"></i>
    </li>
  </ul>
</nav>
    </>
  )
}

export default Navbar
