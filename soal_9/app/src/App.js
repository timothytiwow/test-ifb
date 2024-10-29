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
    window.addEventListener('resize', setResize)

    return () => {
      window.removeEventListener('resize', setResize)
    }
  }, [])

  const handleLogin = (username, password) => {
    console.log('clicked')
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
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
