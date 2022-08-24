import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase/fireStore";
import "./AddUserData.css";
const AddUserData = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const colRef = collection(db, "user");
  var d = new Date();
  var date = d.toLocaleTimeString();
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addDoc(colRef, {
      username: username,
      email: email,
      time: date,
    }).then(() => {
      setUsername("");
      setEmail("");
      sessionStorage.setItem('username',username);
      console.log("Data is Added");
      navigate("/loggedin ");
    });
  };

  return (

      <form className="user_add_data" onSubmit={onSubmitHandler}>
        <div className="inputs">
          <h2 style={{color:'white', textAlign:'center'}}>Registration Form </h2>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email "
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
  );
};

export default AddUserData;
