import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebaseConfig'

export const fetchDataFromFireStore = async () => {
    
    const result = await getDocs(collection(db, "community"));
    // console.log("result ", result);
    const data = [];

    result.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() })
    });
    return data;
}