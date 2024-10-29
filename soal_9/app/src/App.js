import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [clientSize, setClientSize] = React.useState([window.innerWidth, window.innerHeight]);
  const [usernameField, setUsernameField] = React.useState('');
  const [passwordField, setPasswordField] = React.useState('');

  React.useEffect(() => {
    const setResize = (_) => setClientSize([window.innerWidth, window.innerHeight]);
    window.addEventListener('resize', setResize)

    return () => {
      window.removeEventListener('resize', setResize)
    }
  }, [])

  const onUsernameFieldChange = eventData => setUsernameField(eventData.target.value)

  return (
    <div style={{ width: `${clientSize[0]}px`, height: `${clientSize[1]}px`, display: 'flex' }}>
      <div style={{
        display: 'flex',
        paddingLeft: '2em',
        paddingRight: '2em',
        flexDirection: 'column',
        width: '25em',
        backgroundColor: 'white',
        justifyContent: 'center'
      }}>
        <p style={{ fontSize: '2em', fontWeight: '700' }}>Selamat Datang!</p>
        {[
          {
            id: 'username',
            label: 'Nama user',
            placeholder: 'timothytiwow',
            val: usernameField,
            setVal: setUsernameField
          },
          {
            id: 'password',
            label: 'Kata sandi',
            placeholder: '*******',
            val: passwordField,
            setVal: setPasswordField
          }
        ].map(el =>
          <form key={el.id} style={{ display: 'flex', flexDirection: 'column' }}>
            <label>{el.label}</label>
            <input
              type={el.id === 'password' ? 'password' : 'text'}
              value={el.val}
              onChange={el.setVal}
              placeholder={el.placeholder}
            />
          </form>)}
          <button>Login</button>
      </div>
      <div style={{ display: 'flex', flex: 1, backgroundColor: '#282c34' }}>
        <img src={logo} />
      </div>
    </div>
  );
}

export default App;
