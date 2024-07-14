'use client'
import 'client-only'

import Link from "next/link"
import LogOut from "./LogOut"
import Dashboard from "./Dashboard"

export default function Navbar(){

    return(
        <div className="bg-none text-gray-400">
            <div className="text-center py-5 font-['Pacifico']">
                ALGERIAN AROMA
            </div>
            <nav className="flex justify-center gap-20 py-5 border-t-2">
            <Link href={'/'}>Home</Link> 
            <Link href={'/recipes'}>Featured Recipes</Link> 
            {window && (localStorage.getItem('token') && <Dashboard className="bg-green-500 rounded-lg text-white py-2 px-4 hover:bg-purple-950"/>)}
            <Link className="bg-green-500 rounded-lg text-white py-2 px-4 hover:bg-purple-950" href={'/contact'}>Contact</Link>
            <Link className="bg-green-500 rounded-lg text-white py-2 px-4 hover:bg-purple-950" href={'/login'}>Login</Link>
            <LogOut/>
            </nav>
        </div>
    )
}