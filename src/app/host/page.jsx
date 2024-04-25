/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);


        formData.append("access_key", "52fcc42b-c524-4ccb-ad57-899c9e062d57");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {

            toast.success(' Request Sent Succesfully!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",

            });



            setContact('');
            setEmail('');
            setName('');
            setlinks('');


        }
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [links, setlinks] = useState('');
    return (
        <div>
            <ToastContainer />
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
                <div>
                    <h2 className=' text-black  font-medium text-5xl text-center'>
                        Host Your Community  <br></br>on House of community
                    </h2>
                    <p className=' mt-4 text-xl text-[#747371] text-center'>
                        Together Lets build a Genuine space <br></br> for offline communities
                    </p>
                </div>
                <div className="mt-8  sm:mx-auto w-[80%] sm:w-full sm:max-w-sm">
                    <div className="bg-gradient-to-b from-gray-900  to-gray-700 py-8 px-4 shadow rounded-[30px] sm:px-6">
                        <h2 className=' mb-7 text-[#92D8FB] text-2xl'>
                            Its Free and Refereshing!
                        </h2>
                        <form id="form" onSubmit={handleSubmit} >
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-5  text-white">Community Name</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input id="name" name="name" placeholder="" type="text" value={name} required onChange={(e) => setName(e.target.value)} className=" bg-transparent block w-full px-3 py-2 border border-white rounded-full  focus:outline-none  transition duration-150 ease-in-out sm:text-sm sm:leading-5" />

                                </div>
                            </div>
                            <div className=' mt-3'>
                                <label htmlFor="email" className="block text-sm font-medium leading-5  text-white">Creator Name</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input id="email" name="email" placeholder="" onChange={(e) => setEmail(e.target.value)} type="text" value={email} required className=" bg-transparent block w-full px-3 py-2 border border-white rounded-full  focus:outline-none  transition duration-150 ease-in-out sm:text-sm sm:leading-5" />

                                </div>
                            </div>
                            <div className=' mt-3'>
                                <label htmlFor="contact" className="block text-sm font-medium leading-5  text-white">Creator Contact number</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input id="contact" name="contact" placeholder="" value={contact} onChange={(e) => setContact(e.target.value)} type="text" required className=" bg-transparent block w-full px-3 py-2 border border-white rounded-full  focus:outline-none  transition duration-150 ease-in-out sm:text-sm sm:leading-5" />

                                </div>
                            </div>
                            <div className=' mt-3'>
                                <label htmlFor="links" className="block text-sm font-medium leading-5  text-white">Social Links (if Any)</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input id="links" name="links" placeholder="" value={links} type="text" onChange={(e) => setlinks(e.target.value)} required className=" bg-transparent block w-full px-3 py-2 border border-white rounded-full  focus:outline-none  transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                </div>
                            </div>
                            <div className=' mt-7 w-full justify-center flex'>
                                <button className='  rounded-full  px-7 text-white py-2  shadow-2xl bg-gradient-to-r from-blue-500 to-blue-300 text-[27px]'>
                                    Join the waitlist
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
