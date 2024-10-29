import logo from './logo.svg';
import React from 'react';
import './App.css';
//soal nomor 1
const data = require('./data/myJsonArrayObject.json')

function App() {
  const [jsonData, setJsonData] = React.useState(data)
  
  //supporting soal nomor 4
  const [fetchedData, setFetchedData] = React.useState(null)

  //soal nomor 2
  const changeValue = () => {
    setJsonData(jsonData.map(el => el.id === 0 ? {...el, nama: "Splinter"} : el))
  }

  //soal nomor 3
  const fetchData = () => {
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then(resp => resp.json())
      .then(json => {
        console.log(json)

        setFetchedData(json)
      })
  }

  return (
    <div>
      <div style={{
        display: 'flex',
        flexDirection: 'column'
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

        <div style={{
          marginTop: '1em',
          marginLeft: 'auto',
          marginRight: 'auto',
          backgroundColor: 'white',
          borderRadius: 10,
          padding: '1em'
        }}>
          <p><b>Soal 3</b></p>
          <p> Tekan Fetch untuk mengambil data, data akan ditampilkan di konsol (F12)</p>
          <button onClick={fetchData}>Fetch</button>
        </div>
      </div>
    </div>
  );
}

export default App;
