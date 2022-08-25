import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase/fireStore";
import "./AddUserData.css";
import InputField from "./InputField";
const AddUserData = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      password: password,
    }).then(() => {
      setUsername("");
      setEmail("");
      setPassword("");
      sessionStorage.setItem("username", username);
      console.log("Data is Added");
      navigate("/loggedin ");
    });
  };

  return (
    <form className="user_add_data" onSubmit={onSubmitHandler}>
      <div className="inputs">
        <h2 style={{ color: "white", textAlign: "center" }}>
          Registration Form{" "}
        </h2>
        <InputField
          labelName="Enter username"
          htmlFor="username"
          type="text"
          id="username"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputField
          labelName="Enter Email"
          htmlFor="email"
          type="email"
          id="email"
          aria_describedby="emailHelp"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          labelName="Enter Password"
          htmlFor="password"
          type="password"
          id="password"
          minLength="3"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddUserData;
