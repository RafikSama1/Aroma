import { IoFastFoodSharp } from "react-icons/io5";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { FaBowlFood } from "react-icons/fa6";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="h-[700px] w-auto hero-bg mt-[-9rem] flex flex-col justify-center">
        <h1 className="font-semibold text-white text-7xl mt-48 ml-48">Lorem ipsum dolor sit</h1>
        <p className="text-gray-200  ml-48 mt-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat accusamus nesciunt nam!</p>
      </div>
      <div className="flex justify-center mx-auto font-bold my-16">
        <div className="h-36 w-48 text-black flex flex-col items-center border-l-2">
          <IoFastFoodSharp className="text-red-600 h-24 w-16"/>
          <h1>Main dishes</h1>
        </div>
        <div className="h-36 w-48 text-black flex flex-col items-center border-l-2">
          <FaBowlFood className="text-red-600 h-24 w-16"/>
          <h1>Soupe /Salads</h1>
        </div>
        <div className="h-36 w-48 text-black flex flex-col items-center border-l-2 ">
          <MdOutlineEmojiFoodBeverage className="text-red-600 h-24 w-16"/>
          <h1>Beverages</h1>
        </div>
        <div className="h-36 w-48 text-black flex flex-col items-center border-l-2 border-r-2">
          <IoFastFoodSharp className="text-red-600 h-24 w-16"/>
          <h1>Desserts</h1>
        </div>
      </div>
      <div className="flex gap-16 justify-center items-center w-[70%] mx-auto">
        <div className="w-[50%] ">
          <img className="object-contain rounded-full" src="/assets/recepes.jpg" alt="" />
        </div>
        <div className="flex flex-col items-start w-[40%] gap-5">
          <h1 className="font-semibold text-red-500 text-xl">Featured Recepes</h1>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum accusantium esse quos fugit corrupti, cupiditate incidunt sapiente. Et dicta nulla ut quibusdam.</p>
          <Link href={'/recipes'} className="font-semibold px-4 py-2 rounded-xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Now More</Link>
        </div>
      </div>
    </main>
  );
}
