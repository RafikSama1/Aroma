'use client'

import { useRouter } from "next/navigation"

export default function LogOut() {
    const router = useRouter();

    const LogOut = () => {
        localStorage.clear('token');
        router.push('/');
    };

    return (
        <>
            <button onClick={LogOut} className="text-semibold text-md bg-green-500 rounded-lg text-white py-2 px-4 hover:bg-purple-950">Logout</button>
        </>
    )
};