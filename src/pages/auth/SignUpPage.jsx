import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../../utils/baseUrl';
import { useAuth } from '../../utils/authUtils';

export default function SignUpPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 
  const { signUp } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await signUp(username, password);
    if (response) {
      navigate('/auth/login', { replace: true });
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