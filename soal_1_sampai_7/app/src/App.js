import logo from './logo.svg';
import React from 'react';
import './App.css';
//soal nomor 1
const data = require('./data/myJsonArrayObject.json')

function App() {
  const [jsonData, setJsonData] = React.useState(data)

  //soal nomor 2
  const changeValue = () => {
    setJsonData(jsonData.map(el => el.id === 0 ? {...el, nama: "Splinter"} : el))
  }

  return (
    <div>
      <div style={{
        display: 'flex'
      }}>
        <div style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          backgroundColor: 'white',
          borderRadius: 10,
          padding: '1em'
        }}>
          <p><b>Soal 2</b></p>
          <p style={{whiteSpace: 'pre-wrap'}}>{JSON.stringify(jsonData, null, 2)}</p>
          <button onClick={changeValue}>Change Value</button>
        </div>
      </div>
    </div>
  );
}

export default App;
