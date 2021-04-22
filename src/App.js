import React, { useState, useEffect } from 'react'

import Header from './components/Header/Header'
import Dropdown from './components/Dropdown/Dropdown'
import Listbox from './components/Listbox/Listbox'
import axios from 'axios'
import './App.css'
import { Credentials } from './Credentials';

const App = () => {

  const keys = Credentials()

  const [token, setToken] = useState('')
  const [genres, setGenres] = useState({ selectedGenre: '', listOfGenresFromApi:[] })
  const [playlist, setPlaylist] = useState({ selectedPlaylist: '', listOfPlaylistFromApi:[] })
  const [tracks, setTracks] = useState({ selectedTracks: '', listOfTracksFromApi:[] })
  const [trackDetail, setTrackDetail] = useState(null)

  console.log('spotify tokenization render')

  const downContent = [
    {value: 1, name: 'soul'},
    {value: 2, name: 'Funky'},
    {value: 3, name: 'Blues'}
  ]

  useEffect(() => {
    //get token
    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(process.env.REACT_APP_CLIENT_ID + ':' + process.env.REACT_APP_CLIENT_SECRET)      
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
    .then(tokenResponse => {   
      //console.log(tokenResponse.data.access_token)   
      setToken(tokenResponse.data.access_token);

      //get categories
      axios('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
      method: 'GET',
      headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token }
    })
    .then(genreResponse => {
      //console.log(genreResponse.data.categories.items)
      //setGenres(genreResponse.data.categories.items)
      setGenres({
        selectedGenre: genres.selectedGenre,
        listOfGenresFromApi: genreResponse.data.categories.items
      })
    })
    }) 

  }, [genres.selectedGenre, keys.ClientId, keys.ClientSecret]);

  const genreChanged = (val) => {
    setGenres({
      selectedGenre: val,
      listOfGenresFromApi: genres.listOfGenresFromApi
    })

    axios(`https://api.spotify.com/v1/browse/categories/${val}/playlists?limit=10`, {
      method: 'GET',
      headers: { 'Authorization' : 'Bearer ' + token }
    })
    .then(playlistResponse => {
      //console.log(playlistResponse)
      setPlaylist({
        selectedPlaylist: playlist.selectedPlaylist,
        listOfPlaylistFromApi: playlistResponse.data.playlists.item
      }) 
    })
  }

  const playlistChanged = val => {
    setPlaylist({
      selectedPlaylist: val,
      listOfPlaylistFromApi: playlist.listOfPlaylistFromApi
    })
  }

  const buttonClicked = (e) => {
    e.preventDefault()

    axios(`https://api.spotify.com/v1/playlists/${playlist.selectedPlaylist}/tracks?limit=10`, {
      method: 'GET',
      headers: {
        'Authorization' : 'Bearer ' + token
      }
    })
    .then(tracksResponse => {
      console.log(tracksResponse)
      setTracks({
        selectedTracks: tracks.selectedTracks,
        listOfTracksFromApi: tracksResponse.data.items
      })
    })
  }

  const listboxClicked = val => {
    const currentTracks = [...tracks.listOfTracksFromApi]
    const trackInfo = currentTracks.filter(t => t.track.id === val)
    setTrackDetail(trackInfo[0].track)
  }
  
  return (
    <div className="App">
      {/* <Header />  */}
      <form onSubmit={buttonClicked}>
        <Dropdown options={genres.listOfGenresFromApi} selectedValue={genres.selectedGenre} changed={genreChanged} />
        <Dropdown options={playlist.listOfPlaylistFromApi} selectedValue={playlist.selectedPlaylist} changed={playlistChanged} />
        <button type="submit">Get Categories</button>
        <Listbox items = {tracks.listOfTracksFromApi} clicked={listboxClicked} />
      </form>
    </div>
  );
}

export default App;
