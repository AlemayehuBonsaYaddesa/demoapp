import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  //   console.log(email, password);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/login", {
        email,
        password,
      });
      console.log(response);
      navigate("/");
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };
  return (
    <div>
      <h1>Add employee</h1>
      {message && <h2>{message}</h2>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          name="email"
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          name="password"
          required
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Login;
