"use client"
// // components/FormDataComponent.js

// import { useState } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/firestore';

// const FormDataComponent = () => {
//   const [formData, setFormData] = useState({
//     communityName: '',
//     communityDescription: '',
//     communityBuildersName: '',
//     tags: [],
//     communityBanner: null,
//     communityLogo: null,
//   });

//   const handleChange = (e) => {
//     if (e.target.name === 'tags') {
//       // Split the input value into an array of tags
//       const tags = e.target.value.split(',').map(tag => tag.trim());
//       setFormData((prevData) => ({
//         ...prevData,
//         tags,
//       }));
//     } else if (e.target.name === 'communityBanner' || e.target.name === 'communityLogo') {
//       // Handle file inputs separately
//       setFormData((prevData) => ({
//         ...prevData,
//         [e.target.name]: e.target.files[0],
//       }));
//     } else {
//       const { name, value } = e.target;
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const communityRef = await firebase.firestore().collection('communities').add(formData);

//       // Upload images to Firebase Storage
//       const bannerStorageRef = firebase.storage().ref().child(`banners/${communityRef.id}`);
//       await bannerStorageRef.put(formData.communityBanner);
//       const bannerUrl = await bannerStorageRef.getDownloadURL();

//       const logoStorageRef = firebase.storage().ref().child(`logos/${communityRef.id}`);
//       await logoStorageRef.put(formData.communityLogo);
//       const logoUrl = await logoStorageRef.getDownloadURL();

//       // Update the document with image URLs
//       await communityRef.update({
//         communityBanner: bannerUrl,
//         communityLogo: logoUrl,
//       });

//       alert('Data added to Firestore successfully!');
//       setFormData({ // Reset form fields after submission
//         communityName: '',
//         communityDescription: '',
//         communityBuildersName: '',
//         tags: [],
//         communityBanner: null,
//         communityLogo: null,
//       });
//     } catch (error) {
//       console.error('Error adding document: ', error);
//       alert('An error occurred. Please try again later.');
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
//       <h2 className="text-2xl font-semibold mb-4">Add Community Data to Firestore</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="communityName" className="block text-gray-600">Community Name</label>
//           <input
//             type="text"
//             id="communityName"
//             name="communityName"
//             value={formData.communityName}
//             onChange={handleChange}
//             className="w-full border-gray-300 rounded-md p-2"
//           />
//         </div>
//         <div>
//           <label htmlFor="communityDescription" className="block text-gray-600">Community Description</label>
//           <textarea
//             id="communityDescription"
//             name="communityDescription"
//             value={formData.communityDescription}
//             onChange={handleChange}
//             className="w-full border-gray-300 rounded-md p-2"
//           ></textarea>
//         </div>
//         <div>
//           <label htmlFor="communityBuildersName" className="block text-gray-600">Community Builder's Name</label>
//           <input
//             type="text"
//             id="communityBuildersName"
//             name="communityBuildersName"
//             value={formData.communityBuildersName}
//             onChange={handleChange}
//             className="w-full border-gray-300 rounded-md p-2"
//           />
//         </div>
//         <div>
//           <label htmlFor="tags" className="block text-gray-600">Tags (comma-separated)</label>
//           <input
//             type="text"
//             id="tags"
//             name="tags"
//             value={formData.tags.join(', ')}
//             onChange={handleChange}
//             className="w-full border-gray-300 rounded-md p-2"
//           />
//         </div>
//         <div>
//           <label htmlFor="communityBanner" className="block text-gray-600">Community Banner</label>
//           <input
//             type="file"
//             id="communityBanner"
//             name="communityBanner"
//             onChange={handleChange}
//             className="w-full border-gray-300 rounded-md p-2"
//           />
//         </div>
//         <div>
//           <label htmlFor="communityLogo" className="block text-gray-600">Community Logo</label>
//           <input
//             type="file"
//             id="communityLogo"
//             name="communityLogo"
//             onChange={handleChange}
//             className="w-full border-gray-300 rounded-md p-2"
//           />
//         </div>
//         <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default FormDataComponent;


// components/FormDataComponent.js

import { useState } from 'react';
import { db } from '../firebaseConfig'; // Adjust the path as necessary
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useDispatch, useSelector } from 'react-redux';
import { addCounter } from '../redux/slice';
import { store } from '../redux/store';

const FormDataComponent = () => {
  const [formData, setFormData] = useState({
    communityName: '',
    communityDescription: '',
    communityBuildersName: '',
    tags: [],
    communityBanner: null,
    communityLogo: null,
  });

  const handleChange = (e) => {
    if (e.target.name === 'tags') {
      const tags = e.target.value.split(',').map(tag => tag.trim());
      setFormData((prevData) => ({
        ...prevData,
        tags,
      }));
    } else if (e.target.name === 'communityBanner' || e.target.name === 'communityLogo') {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.files[0],
      }));
    } else {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const communityRef = await addDoc(collection(db, 'communities'), formData);

      const storage = getStorage();
      const bannerStorageRef = ref(storage, `banners/${communityRef.id}`);
      await uploadBytes(bannerStorageRef, formData.communityBanner);
      const bannerUrl = await getDownloadURL(bannerStorageRef);

      const logoStorageRef = ref(storage, `logos/${communityRef.id}`);
      await uploadBytes(logoStorageRef, formData.communityLogo);
      const logoUrl = await getDownloadURL(logoStorageRef);

      await updateDoc(doc(db, 'communities', communityRef.id), {
        communityBanner: bannerUrl,
        communityLogo: logoUrl,
      });

      alert('Data added to Firestore successfully!');
      setFormData({
        communityName: '',
        communityDescription: '',
        communityBuildersName: '',
        tags: [],
        communityBanner: null,
        communityLogo: null,
      });
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  


  const handleDispatch = () => {
    setCount(prevCount => prevCount + 1);
    // console.log(count);
    dispatch(addCounter(count));
  }

  // const number = useSelector((store) => store.number);
  const communitydata = useSelector((store) => store.data);
  // console.log(communitydata)

  

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add Community Data to Firestore</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div>
          <label htmlFor="communityName" className="block text-gray-600">Community Name</label>
          <input
            type="text"
            id="communityName"
            name="communityName"
            value={formData.communityName}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="communityDescription" className="block text-gray-600">Community Description</label>
          <textarea
            id="communityDescription"
            name="communityDescription"
            value={formData.communityDescription}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md p-2"
          ></textarea>
        </div>
        <div>
          <label htmlFor="communityBuildersName" className="block text-gray-600">Community Builder's Name</label>
          <input
            type="text"
            id="communityBuildersName"
            name="communityBuildersName"
            value={formData.communityBuildersName}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="tags" className="block text-gray-600">Tags (comma-separated)</label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags.join(', ')}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="communityBanner" className="block text-gray-600">Community Banner</label>
          <input
            type="file"
            id="communityBanner"
            name="communityBanner"
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="communityLogo" className="block text-gray-600">Community Logo</label>
          <input
            type="file"
            id="communityLogo"
            name="communityLogo"
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Submit</button>
      </form> 
{/* 
      <div className='  my-10'>
        {communitydata &&
          communitydata.map((user, index) => {
            return (<div key={index} className='mb-4 text-black text-4xl flex justify-center gap-2'>
              <p>{user.CommunityName}</p>
              <p>{user.description}</p>
              <p>{user.builder}</p>
            </div>
            )
          })
        }
      </div> */}
      <p>number is : {number}</p>

      <button className=' mt-5 px-5 py-1 bg-blue-500 rounded-full' onClick={handleDispatch}>
        counter
      </button>
    </div>
  );
};

export default FormDataComponent;
