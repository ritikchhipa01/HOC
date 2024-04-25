/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { db } from '../firebaseConfig'
import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react';
import { storage } from '../firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';


async function addDataToFireStore(name, city, description, builder, tags, reason, imageUrl1, imageUrl2, theme, email, twitterLink, instaLink, faceBook,communityLink) {

  const tag = await tags.split(',');
  const build = await builder.split(',');
  console.log("Tag: ", tag);
  try {
    const docRef = await addDoc(collection(db, "community"), {
      CommunityName: name,
      description: description,
      reason: reason,
      builder: build,
      tags: tag,
      image1: imageUrl1,
      image2: imageUrl2,
      cityName: city,
      theme: theme,
      social: {
        email,
        twitterLink,
        instaLink,
        faceBook
      },
      communityLink,
    });
    console.log("Document written with ID :", docRef.id);
    return true;
  }
  catch (e) {
    console.error("Error adding document: ", e);
    return false;
  }
}


const page = () => {

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [builder, setBuilder] = useState("");
  const [tags, setTags] = useState("");
  const [reason, setReason] = useState("");
  const [instaLink, setInstaLink] = useState("");
  const [email, setEmail] = useState("");
  const [twitterLink, setTwitterLink] = useState("");
  const [theme, setTheme] = useState("");
  const [faceBook, setFacebook] = useState("");
  const [communityLink, setCommunityLink] = useState("");


  const [imageUrl1, setImageUrl1] = useState(null);
  const [imageUrl2, setImageUrl2] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !description || !builder || !tags || !reason || !imageUrl1 || !imageUrl2) alert('Please fill out all fields!');
    const added = await addDataToFireStore(name, city, description, builder, tags, reason, imageUrl1, imageUrl2, theme, email, twitterLink, instaLink, faceBook,communityLink);
    if (added) {
      setName("");
      setDescription("");
      setBuilder("");
      setTags("");
      setReason("");

      alert("Data added to firestore DB!!");
    }
  }

  const handleChange = (e, num) => {
    if (e.target.files && e.target.files[0]) {
      (num === 1) ? setImageUrl1(e.target.files[0]) : setImageUrl2(e.target.files[0]);
      console.log(e.target.files[0]);
    }
  }

  const handleUpload = (e, num) => {
    e.preventDefault();
    // const storageRef = ref(storage, `images/${(num == 1) ? imageUrl1.name : imageUrl2.name}`);
    const storageRef = ref(storage, `images/${v4()}`);
    const uploadTask = uploadBytesResumable(storageRef, (num == 1) ? imageUrl1 : imageUrl2).then((data) => {
      // Handle successful uploads on complete
      getDownloadURL(data.task.snapshot.ref).then((downloadURL) => {
        // console.log('File uploaded!');
        // console.log(`URL: ${downloadURL}`);
        (num === 1) ? setImageUrl1(downloadURL) : setImageUrl2(downloadURL);
        alert("image uploaded Successfully");

      });
    });

    (error) => {
      console.log(error.message);
    }

    () => {
      alert("uploaded");
    }

  }

  return (
    <div className=" w-full sm:max-w-2xl mx-auto  p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add Community Data to Firestore</h2>
      <form onSubmit={handleSubmit} className=' w-full flex flex-wrap'>
        <div className=' w-full sm:w-auto'>
          <label htmlFor="" className="block text-gray-600">Community Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full  bg-transparent border border-white rounded-md p-2"
          />
        </div>
        <div className=' w-full sm:w-auto'>
          <label htmlFor="" className="block text-gray-600">City Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Community link */}
        <div className=' w-full sm:w-auto'>
          <label htmlFor="" className="block text-gray-600">Whatsapp Community Link</label>
          <input
            type="url"
            id="description"
            name="description"
            value={communityLink}
            onChange={(e) => setCommunityLink(e.target.value)}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>
        {/* Insta link */}
        <div className=' w-full sm:w-auto'>
          <label htmlFor="" className="block text-gray-600">Instagram Link</label>
          <input
            type="url"
            id="description"
            name="description"
            value={instaLink}
            onChange={(e) => setInstaLink(e.target.value)}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>
        {/* Twitter */}
        <div className=' w-full sm:w-auto'>
          <label htmlFor="" className="block text-gray-600">Twitter Link</label>
          <input
            type="url"
            id="description"
            name="description"
            value={twitterLink}
            onChange={(e) => setTwitterLink(e.target.value)}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>
        {/* Email */}
        <div className=' w-full sm:w-auto'>
          <label htmlFor="" className="block text-gray-600">Email Link</label>
          <input
            type="email"
            id="description"
            name="description"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>
        <div className=' w-full sm:w-auto'>
          <label htmlFor="" className="block text-gray-600">FaceBook Link</label>
          <input
            type="url"
            id="description"
            name="description"
            value={faceBook}
            onChange={(e) => setFacebook(e.target.value)}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>
        <div className=' w-full sm:w-auto'>
          <label htmlFor="" className="block text-gray-600">Community Description</label>
          <textarea
            rows={2}
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>
        <div className=' w-full sm:w-auto'>
          <label htmlFor="" className="block text-gray-600">Joining reason</label>
          <textarea
            rows={2}
            type="text"
            id="description"
            name="description"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>
        <div className=' w-full sm:w-auto'>
          <label htmlFor="" className="block text-gray-600">Community Builder's name</label>
          <textarea
            type="text"
            id="builder"
            name="builder"
            value={builder}
            onChange={(e) => setBuilder(e.target.value)}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>
        <div className=' w-full sm:w-auto'>
          <label htmlFor="tags" className="block text-gray-600">Tags (comma-separated)</label>
          <textarea
            type="text"
            id="tags"
            name="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>
        <div className=' w-full sm:w-auto'>
          <h2> Select Commmunity theme</h2>
          <div className=' flex gap-x-3 my-4'>
            <div className={` w-8 h-8  cursor-pointer rounded-full bg-orange border-black ${theme == "orange" ? "border-2" : " border-0"}`} onClick={() => setTheme("orange")}></div>
            <div className={` w-8 h-8 rounded-full bg-pink-500  border-black ${theme == "pink" ? "border-2" : " border-0"}`} onClick={() => setTheme("pink")}></div>
            <div className={` w-8 h-8 rounded-full bg-red-500 border-black ${theme == "red" ? "border-2" : " border-0"}`} onClick={() => setTheme("red")}></div>
            <div className={` w-8 h-8 rounded-full bg-blue-500 border-black ${theme == "blue" ? "border-2" : " border-0"}`} onClick={() => setTheme("blue")}></div>
          </div>
        </div>
        <div className='w-full sm:w-auto flex flex-wrap justify-between items-center'>
          <div className=' flex flex-col'>
            <label>Commmunity Logo</label>
            <input type='file' onChange={(e) => handleChange(e, 1)} ></input>
          </div>
          <button className=' bg-black text-white px-4 rounded-md ' onClick={(e) => handleUpload(e, 1)}> Upload</button>
        </div>
        <div className='w-full sm:w-auto flex justify-between items-center flex-wrap'>
          <div className=' flex flex-col'>
            <label>Cover Photo</label>
            <input type='file' onChange={(e) => handleChange(e, 2)} ></input>
          </div>
          <button className=' bg-black text-white px-4 rounded-md' onClick={(e) => handleUpload(e, 2)}> Upload </button>
        </div>

        <button type="submit" className="mt-10 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Submit</button>

      </form>
    </div>
  )
}

export default page




