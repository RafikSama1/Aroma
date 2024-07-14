'use client'

import { useEffect, useState } from "react"
import axios from "axios";
import Link from "next/link";

export default function blogPage(){
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3000/recepes')
        .then((res)=>{setProducts(res.data)})
    }, [])
    return(
        <section>
            <div className="w-[40%] text-center mx-auto my-10">
                <h1 className="font-semibold text-red-500 text-lg pb-3">Our Best Recepes</h1>
                <p className="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore laborum consequatur in amet ab veritatis quae totam doloremque commodi sunt! Et beatae magni eos illum voluptatibus saepe sed dolorum eaque!</p>
            </div>
            <section className="grid grid-cols-4 max-w-5xl mx-auto gap-x-8 gap-y-10">
                {products.map((product)=>{
                    return(
                        <Link href={`http://localhost:3001/recipes/${product._id}`} className="flex flex-col" key={product._id}>
                            <div>
                                <img src={`http://localhost:3000/${product.image_url}`} alt="" />
                            </div>
                            <div>
                                <h1 className="font-semibold text-red-500 text-lg">{product.title}</h1>
                                <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum</p>
                            </div>
                        </Link>
                    )
                })}


            </section>
        </section>
    )
}