import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; import instance from '../../utils/baseUrl';

export default function SignUpPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await instance.post("register", {
        email: username,
        password: password
      });

      if (response.data.success === true) {
        navigate('/auth/login', { replace: true });
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}