import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Dropdown from './components/Dropdown/Dropdown'
import axios from 'axios'
import './App.css'

const App = () => {
  const [token, setToken] = useState('')

  console.log('spotify tokenization render')

  const downContent = [
    {value: 1, name: 'soul'},
    {value: 2, name: 'Funky'},
    {value: 3, name: 'Blues'}
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('search api')
  }


    
  useEffect(() => {
    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(process.env.REACT_APP_CLIENT_ID + ':' + process.env.REACT_APP_CLIENT_SECRET)      
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
    .then(tokenResponse => {      
      setToken(tokenResponse.data.access_token);
    })

  }, [])
  
  return (
    <div className="App">
      {/* <Header />  */}
      <form onSubmit={handleSubmit}>
        <Dropdown options={downContent} />
        <Dropdown options={downContent} />
        <button type="submit">Get Categories</button>
      </form>
    </div>
  );
}

export default App;
