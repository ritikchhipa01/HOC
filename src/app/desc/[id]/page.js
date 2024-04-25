/* eslint-disable @next/next/no-img-element */
"use client"
import { useSelector } from "react-redux";
import Carousal from "../../components/layout/Carousal";
import { db } from '../../firebaseConfig'
import { addDoc, collection } from 'firebase/firestore'
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

async function addDataToFireStore(name, phone) {
  console.log(name, phone);
  try {
    const docRef = await addDoc(collection(db, "userModel"), {
      name,
      phone,

    });
    console.log("Document written with ID :", docRef.id);
    return true;
  }
  catch (e) {
    console.error("Error adding document: ", e);
    return false;
  }
}
const Page = ({ params }) => {
  const communitydata = useSelector((store) => store.data);
  // console.log("params ", params);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  // const [show, setShow] = useState(false);
  // console.log(communitydata);
  // if (!communitydata) return;

  if (!communitydata) return;
  const filtered = (communitydata.filter((community) => {
    return community.id == params.id;
  }));

  // console.log(filtered[0].builder);
  const description = filtered[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone) alert('Please fill out all fields!');
    const added = await addDataToFireStore(name, phone);
    if (added) {
      toast.success('SuccessFully Joined', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
  
      });
      document.getElementById('my_modal_3').close();
      document.getElementById('my_modal_2').showModal();

    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText('Copy this text to clipboard');
    toast.success('link copied to Clipboard', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",

    });
  }

  return (
    <>
      <ToastContainer className={"z-100"} limit={1} />
      {description &&
        <div className=" bg-background pt-10">
          <div className=" flex flex-col sm:flex-row  w-full sm:w-[69%] mx-auto gap-10  ">
            <div className="  w-full  sm:w-1/2 px-5  ">
              <div>
                <div
                  className={` flex items-center  w-full h-[700px] relative   object-fill `}
                >

                  <img
                    className="w-full h-full  rounded-xl"
                    src={description.image2}
                    alt="community Image"
                  />
                  <div className=" bg-black p-3 rounded-lg  absolute bottom-0 translate-y-1/2 left-7">
                    <img className=" w-16 h-16 rounded-full object-cover" src={description.image1} alt="" />
                  </div>
                </div>
                <div className=" mt-3 mr-8 z-20">
                  <ul className=" flex gap-x-2 justify-end">
                    <li>
                      <img src="/instagram.svg" alt="" />
                    </li>
                    <li>
                      <img src="/instagram.svg" alt="" />
                    </li>
                    <li>
                      <img src="/email.svg" alt="" />
                    </li>
                    <li>
                      <img src="/twitter.svg" alt="" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className=" mt-8 flex flex-col border-2 gap-y-5  border-[#4EBEF6] rounded-lg px-3 py-5">
                <h2 className=" text-[#B7E0F3] text-2xl font-bold"> {description.CommunityName} </h2>
                <div className=" flex items-center gap-x-3">
                  <button className=" sm:mx-0 mx-auto bg-[#4EBEF6] px-3 text-white rounded-full py-1" onClick={() => document.getElementById('my_modal_3').showModal()}>
                    Join the community
                  </button>
                  <img src="/share2.svg"
                    alt=""
                    className=" "
                    onClick={() => handleCopy()}
                  >

                  </img>

                </div>
                <p className=" mr-16 text-lg text-white">
                  {description.description}
                </p>
              </div>
            </div>
            <div className=" flex flex-col w-full sm:w-1/2 px-5 text-white">
              <div className=" order-5 sm:order-1 mt-8">
                <div className=" bg-gradient-to-r from-[#08ACFE]/80   to-yellow-200 p-4  rounded-xl">
                  <p>Why You should Join ?</p>
                  <p>
                    {description.reason}
                  </p>
                </div>

                <button className=" order-4  my-7 bg-[#4EBEF6] px-3 text-white rounded-full py-1" onClick={() => document.getElementById('my_modal_3').showModal()}>
                  Join the community
                </button>
              </div>
              <div className=" mt-3 order-2 sm:order-2">
                <h2 className=" my-2">Past Events</h2>
                <Carousal />
              </div>
              <div className=" order-1 sm:order-3 mt-6">
                <h2>Members</h2>
                <ul className="mt-2 flex  gap-x-4">
                  <li className=" ">
                    <img className="rounded-full h-16 w-16 object-cover" src="/pran.png" alt=" "></img>
                  </li>
                  <li className=" ">
                    <img className="rounded-full h-16 w-16 object-cover" src="/pran.png" alt=" "></img>
                  </li>
                  <li className=" ">
                    <img className="rounded-full h-16 w-16 object-cover" src="/pran.png" alt=" "></img>
                  </li>
                  <li className=" ">
                    <img className="rounded-full h-16 w-16 object-cover" src="/pran.png" alt=" "></img>
                  </li>
                </ul>
              </div>

              <div className=" order-6 sm:order-4  mt-6 text-white bg-background">
                <h2>Community Builders</h2>
                <div className=" mt-2 flex gap-5 text-white">
                  {
                    description.builder.map((build, index) => {
                      return (
                        <div key={index} className=" gap-y-3 max-w-fit flex flex-col items-center">
                          <img className="  h-24 w-24 rounded-2xl " src="/pran.png" alt="" />
                          <h3 >
                            {build}
                          </h3>
                          <ul className=" flex gap-x-2 ">
                            <li>
                              <img src="/instagram.svg" alt="" />
                            </li>
                            <li>
                              <img src="/instagram.svg" alt="" />
                            </li>
                          </ul>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      {description &&
        <div>
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <dialog id="my_modal_3" className="modal    bg-black/80">
            <div className="modal-box bg-white max-w-[90%] sm:w-[400px] rounded-badge">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2">✕</button>
              </form>
              <img className=" w-20 h-20 object-fill rounded-full my-5 mx-auto" src={description.image1} alt="logo community"></img>
              <p className="py-4 text-3xl  text-black text-center font-semibold">{description.CommunityName}</p>

              <form className="  px-6">
                <div className="  flex flex-col  mx-auto ">
                  <label htmlFor="email" className="block text-sm font-medium leading-5  text-[#606367]">Your Name</label>
                  <div className="mt-1  relative rounded-md shadow-sm">
                    <input id="name" name="name" placeholder="" type="text" value={name} onChange={(e) => setName(e.target.value)} required className=" bg-transparent  w-full block   px-3 py-2 border border-black rounded-full  focus:outline-none  transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                  </div>
                </div>
                <div className=" mt-5  flex flex-col  mx-auto ">
                  <label htmlFor="email" className="block text-sm font-medium leading-5  text-[#606367">Your phone</label>
                  <div className="mt-1  relative rounded-md shadow-sm">
                    <input id="name" name="name" placeholder="" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required className=" bg-transparent  w-full block   px-3 py-2 border border-black rounded-full  focus:outline-none  transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                  </div>
                </div>
                <div className=" flex justify-center">
                  <button onClick={(e) => handleSubmit(e)} className="  bg-[#414141]  px-4 py-2 rounded-full text-white shadow-xl shadow-black/40 mt-4">
                    Join Now
                  </button>
                </div>
              </form>
              <p className=" mt-4 text-xs text-[#606367] text-center">You will be redirected to join their community group</p>
            </div>
          </dialog>
        </div>
      }
      {description &&
        <div>
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <dialog id="my_modal_2" className="modal    bg-black/80">
            <div className="modal-box  bg-white max-w-[90%] sm:w-[400px] rounded-badge">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2">✕</button>
              </form>
              <img className=" w-20 h-20 object-fill rounded-full my-5 mx-auto" src={description.image1} alt="logo community"></img>
              <p className="py-4 text-3xl  text-black text-center font-semibold">{description.CommunityName}</p>


              <h2 className=" text-[#606367] px-6 text-center">Congrats!! <br></br>they will soon accept your request</h2>

              <div className=" flex flex-col items-center">
                <div className=" mt-3  z-20">
                  <ul className=" flex gap-x-2 bg-black">
                    <li>
                      <img src="/instagram.svg" alt="" />
                    </li>
                    <li>
                      <img src="/instagram.svg" alt="" />
                    </li>
                    <li>
                      <img src="/email.svg" alt="" />
                    </li>
                    <li>
                      <img src="/twitter.svg" alt="" />
                    </li>
                  </ul>
                </div>
                <div className=" flex justify-center">
                  <button className="  bg-[#414141]  px-4 py-2 rounded-full text-white shadow-xl shadow-black/40 mt-4">
                    Follow On Social
                  </button>
                </div>
                <p className=" mt-4 text-xs text-[#606367] text-center">connect with this community on instagram</p>
              </div>
            </div>
          </dialog>
        </div>

      }
    </>
  );
};

export default Page;
