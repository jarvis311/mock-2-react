import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { createContext,useState, useEffect } from "react";
import { db } from "../firebase/fireStore";
// import { collection, onSnapshot, orderBy, query } from "firebase/firestore";


const userContext = createContext();

export const UserContextProvider = ({children}) => {    
    const [data, setData] = useState([])

    useEffect(() => {
        const q = query(collection(db, 'user'), orderBy('time', 'desc'))
        onSnapshot(q, (querySnapshot) => {
          setData(querySnapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          })))
        })
      },[])
      

      return (
        <userContext.Provider value={{data}}>
          {children}
        </userContext.Provider>
      );

}

export default userContext