

const Contact = () => {

    return (
        <div>
            <h1 className="font-bold text-3xl p-4 m-4">This is the Contact page</h1>
            <form>
                <input type="text" className=" border border-black p-1 m-2" placeholder="name" />
                <input type="text" className="border border-black p-1 m-2" placeholder="message" />
                <button className="border border-black p-2 shadow-lg m-2 rounded-xl bg-slate-200">Submit</button>
            </form>
        </div>
    )

}


export default Contact;