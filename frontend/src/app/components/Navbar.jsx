'use client'
import 'client-only'

import Link from "next/link"
import LogOut from "./LogOut"

export default function Navbar(){

    return(
        <div className="bg-white flex justify-between mx-28 mt-8 text-orange-500  text-lg">
            <div className="text-center font-['Pacifico'] font-bold">
                ALGERIAN AROMA
            </div>
            <nav className="flex justify-center gap-20">
            <Link className='hover:text-blue-500' href={'/'}>Home</Link> 
            <Link className='hover:text-blue-500' href={'/recipes'}>Featured Recipes</Link> 
            {window && (localStorage.getItem('token') && <button className="text-semibold text-md">Dashboard</button>)}
            <Link className="hover:text-blue-500" href={'/contact'}>Contact</Link>
            </nav>
            <div>
                <Link className="hover:text-blue-500" href={'/login'}>Login</Link>
                <LogOut/>
            </div>
        </div>
    )
}