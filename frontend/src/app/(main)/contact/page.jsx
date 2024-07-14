

export default function contact (){
    return(
        <div>
            <div className="w-[40%] text-center mx-auto my-10">
                <h1 className="font-semibold text-red-500 text-lg pb-3">CONTACT US  </h1>
                <p className="text-gray-600">Need to get in touch with us? Fill out the form bellow and submit your request.</p>
            </div>
            <form className="border shadow w-[30%] flex flex-col p-10 mx-auto my-10">
                <label>Full Name</label>
                <input className="border rounded-lg" type="text"/>
                <label>Email</label>
                <input className="border rounded-lg" type="email"/>
                <label>Full Name</label>
                <input className="border rounded-lg" type="text"/>
                <label>Message</label>
                <textarea  className="border rounded-lg"/>
                <button className="py-2 px-4 rounded-lg bg-orange-300 text-white  mt-4">Submit</button>
            </form>
        </div>
    )
}