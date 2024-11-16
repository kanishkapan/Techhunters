import React, { useState } from 'react';

function AuthPage() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Sign-Up

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Login Form submitted:', form);
      alert('Login Successful!');
    } else {
      console.log('Sign-Up Form submitted:', form);
      alert('Sign-Up Successful!');
    }
  };

  const handleGoogleSignIn = () => {
    console.log('Google Sign-In clicked');
    alert('Google Sign-In is currently a placeholder.');
  };

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
          width: '800px',
        }}
      >
        {/* Left Section with Image */}
        <div
          style={{
            flex: 1,
            position: 'relative',
            backgroundColor: '#6c63ff',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1576506542790-51244b486a6b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Notes Sharing App"
            style={{
              width: '500px',
              height: '450px',
              objectFit: 'cover',
            }}
          />
          <h1
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              fontSize: '32px',
              fontWeight: 'bold',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
            }}
          >
            NoteHunterss
          </h1>
        </div>

        {/* Right Section with Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            gap: '1rem',
            padding: '20px',
            justifyContent: 'center',
          }}
        >
          <button
            type="button"
            onClick={handleGoogleSignIn}
            style={{
              backgroundColor: '#db4a39',
              color: 'white',
              padding: '10px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            {isLogin ? 'Login with Google' : 'Sign up with Google'}
          </button>
          <hr style={{ border: '1px solid #eee' }} />
          {!isLogin && (
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              required={!isLogin}
              style={{
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                fontSize: '14px',
              }}
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            style={{
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '14px',
            }}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            style={{
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '14px',
            }}
          />
          {!isLogin && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <input type="checkbox" required />
              <label>I agree to the Terms & Conditions</label>
            </div>
          )}
          <button
            type="submit"
            style={{
              backgroundColor: '#6c63ff',
              color: 'white',
              padding: '10px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
          <p
            style={{
              textAlign: 'center',
              marginTop: '10px',
              fontSize: '14px',
            }}
          >
            {isLogin
              ? "Don't have an account? "
              : 'Already have an account? '}
            <span
              style={{ color: '#6c63ff', cursor: 'pointer' }}
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default AuthPage;