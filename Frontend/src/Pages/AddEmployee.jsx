import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function AddEmployee() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  // console.log(first_name, last_name, email, password);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/add-employee", {
        first_name,
        last_name,
        email,
        password,
      });
      console.log(response);
      setMessage(response?.data?.message);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }
  // console.log(message);
  return (
    <div>
      <h1>Add employee</h1>
      {message && <h2>{message}</h2>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First name:</label>
        <br />
        <input
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          id="fname"
          name="fname"
          value={first_name}
          required
        />
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          id="lname"
          name="lname"
          required
          value={last_name}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          name="email"
          required
          value={email}
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
          value={password}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default AddEmployee;
