
import  { useState } from "react"
import React from 'react'
import { navItems } from "../constats"

const Navbar = () => {
const [mobileDrawerOpen, setmobileDrawerOpen] = useState(false)

const toggleNavbar = ()=>{
    setmobileDrawerOpen(!mobileDrawerOpen)
}


  return (
<nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/800 ">
    <div className="container px-4 mx-auto relative text-sm  ">
        <div className="flex justify-between items-center ">
            <div className="flex item-center flex-shrink-0 ">
                <span className="text-xl tracking-tight">VirtualR</span>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12">
            { navItems.map((item, index)=>(
               <li key={index}>
                    <a href={item.href}> {item.label}</a>
                </li>
            ))}
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
                <a href="#" className='py-2 px-3 border rounded-md'>
                    Sign In
                </a>
                <a href="#" className='bg-gradient-to-r  from-orange-500 to-orange-800 py-2 px-3 rounded-md text-white'>
                    Create an Account
                </a>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
                <button onClick={toggleNavbar}>{
                    !mobileDrawerOpen ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-x"></i>
                    }</button>
            </div>
        </div>
        {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                <ul>
                    {navItems.map((item,index)=>(
                        <li key={index} className="py-4">
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="flex span-x-6">
                    <a href="#" className="py-2 px-3 border rounded-md mr-6">
                        Sign In
                    </a>
                    <a href="#" className='bg-gradient-to-r  from-orange-500 to-orange-800 py-2 px-3 rounded-md text-white '>
                    Create an Account
                </a>
                </div>
            </div>
        )}
    </div>
</nav>
  )
}

export default Navbar
