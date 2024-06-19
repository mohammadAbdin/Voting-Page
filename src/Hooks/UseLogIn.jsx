import React, { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { accounts } from "../data";
import { postAccounts, getAccounts } from "../Api/HttpRequests";

export const UseLogIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [admin, setAdmin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  let pass = true;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    admin,
    setAdmin,
    passwordVisible,
    setPasswordVisible,
    togglePasswordVisibility: () => {
      setPasswordVisible(!passwordVisible);
    },
    navigate,
    handleLogin: async () => {
      if (password != "" && email != "") {
        const accounts = await getAccounts();
        console.log(accounts);
        accounts.forEach((account) => {
          if (account.email == email) {
            if (account.password == password) {
              localStorage.setItem("email", JSON.stringify(email));
              navigate("/VotingPage");
            } else {
              alert("wrong password");
              pass = false;
              return;
            }
          }
        });

        const newAccount = { email: email, password: password, votedTo: "" };
        if (/^[^@]+@[^@]*admin[^@]*$/.test(email)) {
          newAccount.admin = true;
        } else newAccount.admin = false;

        if (pass) {
          postAccounts(email, password, "Chiko", newAccount.admin);
          localStorage.setItem("email", JSON.stringify(email));
          navigate("/VotingPage");
        }
      } else console.log("email or password is empty");
    },
    handleEmailChange,
    handlePasswordChange,
  };
};
