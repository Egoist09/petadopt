import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // ⬅ Add this import
import { login, register } from '../api/auth';

const LoginRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');

  const navigate = useNavigate();  // ⬅ Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const data = isLogin 
        ? await login(email, password)
        : await register(email, password);

      // ✅ Save token to localStorage
      localStorage.setItem('token', data.token);

      // ✅ Redirect to dashboard
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">{isLogin ? 'Login' : 'Register'}</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="email" 
          placeholder="Email" 
          className="w-full border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="w-full border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
      <button
        className="mt-4 text-sm text-blue-500"
        onClick={() => setIsLogin(!isLogin)}
      >
        {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
      </button>
    </div>
  );
};

export default LoginRegister;
