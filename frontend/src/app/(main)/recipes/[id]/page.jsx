"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function idPage({ params }) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3000/recepes/${params.id}`).then((res) => {
      setProduct(res.data);
    });
  }, []);

  if (!product._id) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex flex-col gap-6 items-center mx-auto my-8">
      <h1 className="text-5xl border-b-2 border-black pb-6">{product.title}</h1>
      <hr />
      <h1 className="text-lg">INSTRUCTIONS</h1>
      <ol type="1">
        {product.instructions.map((instruction) => {
          return <li>{instruction}</li>;
        })}
      </ol>
      <div className="flex w-[40%]">
        <img src={`http://localhost:3000/${product.image_url}`} alt="" />
      </div>
      <h1 className="text-lg">INGREDIENTS</h1>
      <ol type="1">
        {product.ingredients.map((ingredient) => {
          return <li>{ingredient}</li>;
        })}
      </ol>
      <iframe
        width="695"
        height="391"
        src={product.video_link}
        title="7 Recipes You Can Make In 5 Minutes"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}
