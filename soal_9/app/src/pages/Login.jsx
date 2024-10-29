import logo from '../logo.svg';
import React from 'react';

function Login({handleLogin}) {
    const [usernameField, setUsernameField] = React.useState('');
    const [passwordField, setPasswordField] = React.useState('');

    return (
        <>
            <div style={{
                display: 'flex',
                paddingLeft: '2em',
                paddingRight: '2em',
                flexDirection: 'column',
                width: '25em',
                backgroundColor: 'white',
                justifyContent: 'center'
            }}>
                <p style={{ fontSize: '2em', fontWeight: '700' }}>Halo!</p>
                {[
                    {
                        id: 'username',
                        label: 'Nama user',
                        placeholder: 'timothytiwow',
                        val: usernameField,
                        setVal: eventData => setUsernameField(eventData.target.value)
                    },
                    {
                        id: 'password',
                        label: 'Kata sandi',
                        placeholder: '*******',
                        val: passwordField,
                        setVal: eventData => setPasswordField(eventData.target.value)
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
                <button onClick={() => handleLogin(usernameField, passwordField)}>Login</button>
            </div>
            <div style={{ display: 'flex', flex: 1, backgroundColor: '#282c34' }}>
                <img src={logo} />
            </div>
        </>
    )
}

export default Login