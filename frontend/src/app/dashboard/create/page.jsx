'use client'

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react"


export default function addBlog(){
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState([]);
    const [videoLink, setVideoLink] = useState('');
    const [image, setImage] = useState('');
    const [errors, setErrors] = useState([]);

    const router = useRouter();

    const addIngredients = () => {
        const newInput = [...ingredients, ''];
        setIngredients(newInput);
    }
    const addInstructions = () => {
        const newInput = [...instructions, ''];
        setInstructions(newInput);
    }

    const changeIngredients = (value, index) => {
        const array = [...ingredients];
        array[index] = value;
        setIngredients(array);
    }
    const changeInstructions = (value, index) => {
        const array = [...instructions];
        array[index] = value;
        setInstructions(array);
    }
    
    const submit = async (e) => {
        e.preventDefault();
        setErrors([]);
        const data = {
            title,
            ingredients,
            instructions,
            video_link: videoLink,
            image_url: image 
        };
        try {
            await axios.postForm('http://localhost:3000/recepes', data);
            router.push('/dashboard');
            } catch (err) {
                setErrors(err.response.data);
            }
    }

    return(
        <form onSubmit={submit} className="border shadow w-[50%] flex flex-col p-10 mx-auto my-10">
            <label>Title</label>
            <input className="border border-gray-700 rounded-lg" type="text" onChange={(e)=>{setTitle(e.target.value)}}/>
            <label>Ingredients</label>
            {ingredients.map((value, index)=>{
                return <input className="border border-gray-700 rounded-lg" type="text" onChange={(e)=>{changeIngredients(e.target.value, index)}}/>
            })}
            <button type="button" onClick={addIngredients}>Add ingredient</button>
            <label>Instructions</label>
            {instructions.map((value, index)=>{
                return <input className="border border-gray-700 rounded-lg" type="text" onChange={(e)=>{changeInstructions(e.target.value, index)}}/>
            })}
            <button type="button" onClick={addInstructions}>Add instructions</button>
            <label>Video link</label>
            <input className="border border-gray-700 rounded-lg"  type="text" onChange={(e)=>{setVideoLink(e.target.value)}}/>
            <label>Image</label>
            <input className="border border-gray-700 rounded-lg"  type="file" onChange={(e) => setImage(e.target.files[0])}/>
            <button type="submit" className="bg-[#475F45] text-white py-2 px-4 rounded-sm font-semibold mt-5">Submit</button>
            <ul>
                {errors.map((err)=>{
                    return <li className="text-red-500 text-sm list-disc">{err.message}</li>                    
                })}
            </ul>
        </form>
    )
}