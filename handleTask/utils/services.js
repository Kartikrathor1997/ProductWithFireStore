import { API_KEY } from "./config";
import { app, auth, getFirestore, collection, addDoc, getDocs,db , deleteDoc} from '../firebase'




const getProduct= async() =>{
    const userCollectionRef = collection(db, "products")
    let data=null;
    let viewArr = []

         data = await getDocs(userCollectionRef);
         viewArr = data.docs.map((doc)=>({
            ...doc.data(),
            id:doc.id,
            
        }))
        console.log("viewarr", viewArr)
        return viewArr;    
}

const getProdAdd = async (data) => {
    try {
        const docRef = await addDoc(collection(db, "products"),
            {
                name: data?.name,
                price: data?.price,
                offerPrice:data?.offerPrice,
            })
        
     return "added"
    }

    catch (e) {
        console.error(e)
      
    }
}








export { getProduct, getProdAdd}