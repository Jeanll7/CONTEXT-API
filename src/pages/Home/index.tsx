import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

import "./styles.css";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { setUser, user } = useContext(AuthContext);
  console.log({ user });

  const history = useHistory();

  function handleSubmit() {
    setUser({ name, email });
    history.push("/dashboard");
  }

  return (
    <div className="container">
      <div className="container-form">
        <h1 className="title">Create account</h1>
        <input
          type="text"
          className="input mb"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="email"
          className="input"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button
          type="button"
          className="btn mt"
          onClick={handleSubmit}
          disabled={name === "" || email === ""}
        >
          Sign up
        </button>
      </div>
    </div>
  );
}
