import React, { useContext } from "react";
import "./GetData.css";
import userContext from "../context/userContext";



const GetData = () => {

const {data} = useContext(userContext)
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
