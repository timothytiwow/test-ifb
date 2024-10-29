import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './pages/Login';
import Main from './pages/Main';

function App() {
  const [clientSize, setClientSize] = React.useState([window.innerWidth, window.innerHeight]);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const setResize = (_) => setClientSize([window.innerWidth, window.innerHeight]);
    window.addEventListener('resize', setResize);

    if(localStorage.getItem('username') !== null && localStorage.getItem('password') !== null) {
      setIsLoggedIn(true)
    }

    return () => {
      window.removeEventListener('resize', setResize);
    }
  }, [])

  const handleLogin = (username, password) => {
    if (username.trim().length <= 0) {
      alert("Mohon masukkan nama user!")
      return;
    }

    if (password.trim().length <= 0) {
      alert("Mohon masukkan kata sandi!")
      return;
    }

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.clear();
  }

  return (
    <div style={{ width: `${clientSize[0]}px`, height: `${clientSize[1]}px`, display: 'flex' }}>
      {
        isLoggedIn ?
          <Main handleLogout={handleLogout} /> :
          <Login handleLogin={handleLogin} />
      }
    </div>
  );
}

export default App;
