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
    setJsonData(jsonData.map(el => el.id === 0 ? { ...el, nama: "Splinter" } : el))
  }

  //soal nomor 3
  const fetchData = () => {
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then(resp => resp.json())
      .then(json => {
        console.log(json)

        setFetchedData(json.slice(0, 10))
      })
  }

  //soal nomor 5
  const deleteData = () => {
    alert("menghapus data dengan id 10")
    setFetchedData(fetchedData.filter(el => el.id !== 10))
  }

  //soal nomor 6
  const deleteDataKey = () => {
    alert("menghapus key 'title' dari sebuah data")
    setFetchedData(fetchedData.map(el => {
      if(el.title !== 'qui est esse')
        return el;

      let truncatedObject = el;
      delete el.title
      return truncatedObject
    }))
  }

  return (
    <div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: '2em',
        paddingRight: '2em',
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: 10,
          padding: '1em'
        }}>
          <p><b>Soal 2</b></p>
          <p style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(jsonData, null, 2)}</p>
          <button onClick={changeValue}>Change Value</button>
        </div>

        <div style={{
          marginTop: '1em',
          backgroundColor: 'white',
          borderRadius: 10,
          padding: '1em'
        }}>
          <p><b>Soal 3</b></p>
          <p> Tekan Fetch untuk mengambil data, data akan ditampilkan di konsol (F12)</p>
          <button onClick={fetchData}>Fetch</button>
        </div>

        <div style={{
          marginTop: '1em',
          backgroundColor: 'white',
          borderRadius: 10,
          padding: '1em',
        }}>
          <p><b>Soal 4</b></p>
          <p>Tabel akan ditampilkan ketika tombol Fetch di soal nomor 3 ditekan</p>
          {
            fetchedData === null ?
              <p>Tekan fetch di Soal 3 diatas</p> :
              <div style={{ height: '25em', overflowY: 'scroll' }}>
                <table>
                  <tr>
                    {Object.keys(fetchedData[0]).map((el, idx) => <th id={idx}>{el}</th>)}
                  </tr>
                  {fetchedData.map(el =>
                    <tr id={el.id}>
                      <td>{el.userId}</td>
                      <td>{el.id}</td>
                      <td>{el.title}</td>
                      <td>{el.body}</td>
                    </tr>
                  )}
                </table>
              </div>
          }
        </div>

        <div style={{
          marginTop: '1em',
          backgroundColor: 'white',
          borderRadius: 10,
          padding: '1em',
        }}>
          <p><b>Soal 5</b></p>
          <p>Tabel akan ditampilkan ketika tombol Fetch di soal nomor 3 ditekan</p>
          {
            fetchedData === null ?
              <p>Tekan fetch di Soal 3 diatas</p> :
              <div>
                <button onClick={deleteData}>Delete One Data</button>
                <div style={{ height: '25em', overflowY: 'scroll' }}>
                  <table>
                    <tr>
                      {Object.keys(fetchedData[0]).map((el, idx) => <th id={idx}>{el}</th>)}
                    </tr>
                    {fetchedData.map(el =>
                      <tr id={el.id}>
                        <td>{el.userId}</td>
                        <td>{el.id}</td>
                        <td>{el.title}</td>
                        <td>{el.body}</td>
                      </tr>
                    )}
                  </table>
                </div>
              </div>
          }
        </div>

        <div style={{
          marginTop: '1em',
          backgroundColor: 'white',
          borderRadius: 10,
          padding: '1em',
        }}>
          <p><b>Soal 6</b></p>
          <p>Tabel akan ditampilkan ketika tombol Fetch di soal nomor 3 ditekan</p>
          {
            fetchedData === null ?
              <p>Tekan fetch di Soal 3 diatas</p> :
              <div>
                <button onClick={deleteDataKey}>Delete One Key from Data</button>
                <div style={{ height: '25em', overflowY: 'scroll' }}>
                  <table>
                    <tr>
                      {Object.keys(fetchedData[0]).map((el, idx) => <th id={idx}>{el}</th>)}
                    </tr>
                    {fetchedData.map(el =>
                      <tr id={el.id}>
                        <td>{el.userId}</td>
                        <td>{el.id}</td>
                        <td>{el.title === undefined ? "DELETED DATA" : el.title}</td>
                        <td>{el.body}</td>
                      </tr>
                    )}
                  </table>
                </div>
              </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
