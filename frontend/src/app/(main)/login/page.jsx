'use client'

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] =useState('');
    const [error, setError] =useState('');

    const router = useRouter();

    const login = async(e)=>{
        e.preventDefault();
        try{
            const {data} = await axios.post('http://localhost:3000/login', {email, password});
            localStorage.setItem('token', data.token);
            router.push('/dashboard');
        } catch {
            setError('Wrong email or password');
        }
    }

    return(
        <form onSubmit={login} className="border shadow w-[30%] flex flex-col p-10 mx-auto my-10">
            <label>Email</label>
            <input className="border rounded-lg" type="email" onChange={(e)=>{setEmail(e.target.value)}}/>
            <label>PassWord</label>
            <input className="border rounded-lg"  type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <button>Submit</button>
            <div className="flex flex-col gap-1 my-2">
                {error && <p className="text-sm text-red-500">{error}</p> }
            </div>
        </form>
    )
}