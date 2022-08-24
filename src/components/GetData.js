import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from ".././firebase/fireStore";
import "./GetData.css";
const GetData = () => {
  const [data, setData] = useState([])
  
  // const colRef = collection(db, "user");\
  // useEffect(() => {
  //   getDocs(colRef).then((snapshot) => {
  //     let user = [];
  //     snapshot.docs.forEach((doc) => {
  //       user.push({ ...doc.data(), id: doc.id });
  //     });
  //     setData(user);
  //     console.log(user);
  //   });
  // }, []);

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
    <div className="get_data">
      <table className="table table-bordered ">
        <thead>
          <tr>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.data.username}</td>
              <td>{item.data.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetData;
