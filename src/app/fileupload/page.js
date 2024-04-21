// /* eslint-disable react-hooks/rules-of-hooks */
// "use client"
// import React, { useState } from 'react'
// import { storage } from '../firebaseConfig';
// import { ref, uploadBytesResumable,getDownloadURL } from 'firebase/storage';
// const page = () => {
//     const [image, setImage] = useState(null);
//     const handleChange = (e) => {
//         if(e.target.files && e.target.files[0]){
//             setImage(e.target.files[0]);
//             // console.log(e.target.files[0]);
//         }
//     }

//     const handleUpload = () => {
        
//         const storageRef  = ref(storage,`images/${image.name}`);

//         const uploadTask = uploadBytesResumable(storageRef,image).then((data) => {
//             // Handle successful uploads on complete
//             getDownloadURL(data.task.snapshot.ref).then((downloadURL)  => {
//                 // console.log('File uploaded!');
//                 // console.log(`URL: ${downloadURL}`);
//             });
//         });

        

//         (error) => {
//             // console.log(error.message);
//         }
        
//         () => {
//             alert( "uploaded");
//         }
         
//     }


//   return (
//     <div>
//       <input type='file' onChange={(e) => handleChange(e)} ></input>
//       <button onClick={() => handleUpload()}> Upload Image</button>
//     </div>
//   )
// }

// export default page
