import React from 'react';

function Main({ handleLogout }) {
    const storedUsername = localStorage.getItem('username')

    return (
        <div style={{
            flex: 1,
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <div style={{ backgroundColor: 'white', borderRadius: 10, padding: '1em' }}>
                <p style={{ fontSize: '2em', fontWeight: 'bold' }}>Selamat Datang, {storedUsername}!</p>
                <button style={{ width: '100%' }} onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Main