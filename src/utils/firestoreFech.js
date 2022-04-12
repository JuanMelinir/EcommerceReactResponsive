import {query,orderBy,where,collection,getDocs} from '@firebase/firestore';
import {doc,getDoc} from "firebase/firestore";
import db from './FirebaseConfig';

export const firestoreFech=async(idCategory)=>{
    let q;
    if(idCategory){
       //TODO: Filtro por catecorias
    q=query(collection(db,"remeras"), where('idCategory', '==' ,parseInt(idCategory)));
    console.log(q);
    }else{
       //TODO: Muestro todos los elementos en la base de datos
    q=query(collection(db,"remeras"), orderBy('title'));
    }
    const querySnapshot = await getDocs(q);
    //TODO: obtengo los datos desde firestore
    const dataFromFirestore=querySnapshot.docs.map(document=>({
                id:document.id,
                ...document.data()
            }));
    return dataFromFirestore;
}

export const firestoreFechOne=async(idItem)=>{
    const docRef=doc(db,"remeras",idItem);
    const docSnap=await getDoc(docRef);
    //TODO: obtengo los datos de un item desde firestore
    if(docSnap.exists()){
       return {
          id:idItem,
          ...docSnap.data()
       }
    }else{
       console.log("No such document!"); 
    }
}