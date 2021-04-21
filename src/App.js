import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Dropdown from './components/Dropdown/Dropdown'
import axios from 'axios'
import './App.css'

const App = () => {
  //const [token, setToken] = useState('')

  const downContent = [
    {value: 1, name: 'soul'},
    {value: 2, name: 'Funky'},
    {value: 3, name: 'Blues'}
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
  }

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
