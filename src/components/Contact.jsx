const Contact = () => {
    return (
        <div className="bg-contact-bg bg-cover bg-center h-screen">
            <h1 className="py-12 w-1/2 mx-auto text-2xl font-bold text-gray-700 text-center">Feel free to Contact Us</h1>
            <form action="submit" className="flex flex-col mx-auto gap-6 w-1/2">
                <input type="email" placeholder="Write your email" className="border border-gray-500 rounded-xl p-3 text-gray-800"/>
                <input type="text" placeholder="Your reason of contacting us" className="border border-gray-500 rounded-xl p-3 text-gray-800"/>
                <button className="bg-slate-800 border mx-auto border-gray-500 rounded-xl p-3 text-gray-200 w-fit">Submit</button>
            </form>
        </div>
    )
}

export default Contact;