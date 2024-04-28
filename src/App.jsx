
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState('')
  const [chatArray, setChatArray] = useState([])


  function handleChange(event) {
    event.preventDefault()
    setData(event.target.value)
  }

  function handleSubmit() {
    setChatArray((prevData) => [...prevData, data])
  }

  useEffect(() => {
    console.log(chatArray)
  }, [chatArray])

  return (
    <div className='bg-bisque'>
      <h1> Your Chat Bot </h1>
      <div>
        <div style={{
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'end',
          flexDirection: 'column',
          marginRight: '100px'
        }}>
          {
            chatArray.map((chat, index) => (
              <p key={index}>{chat}</p>
            ))
          }
        </div>
        <input type='text' className='input' onChange={(event) => handleChange(event)} />
        <button type='button' onClick={handleSubmit}>Ask Question</button>
      </div>

    </div>
  )
}

export default App
