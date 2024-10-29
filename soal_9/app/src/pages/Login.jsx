import logo from '../logo.svg';
import React from 'react';

function Login({ handleLogin }) {
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
                            style={{
                                marginTop: '0.5em',
                                padding: '1em',
                                borderRadius: 10,
                                borderStyle: 'solid',
                            }}
                        />
                    </form>)}
                <button
                    style={{
                        backgroundColor: '#61dbfb',
                        marginTop: '1em',
                        paddingTop: '0.5em',
                        paddingBottom: '0.5em',
                        borderStyle: 'none',
                        borderRadius: 10,
                        fontSize: '1em',
                        fontWeight: 'bold'
                    }}
                    onClick={() => handleLogin(usernameField, passwordField)}
                >Login</button>
            </div>
            <div style={{ display: 'flex', flex: 1, backgroundColor: '#282c34' }}>
                <img src={logo} />
            </div>
        </>
    )
}

export default Login