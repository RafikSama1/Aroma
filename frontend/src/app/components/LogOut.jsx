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
            <button onClick={LogOut} className="text-semibold text-md hover:text-blue-500 px-4">Logout</button>
        </>
    )
};