import './App.css';
import React, { useEffect, useState, useContext } from 'react';
import Login from './Login';
import Player from './Player';
import { getTokenFromURL } from './Spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Context from './Context';
const spotify = new SpotifyWebApi();

function App() {
  const ctx = useContext(Context);
  const { user, token } = ctx;

  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      console.log(_token);
      ctx.setToken(_token);
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        ctx.setUser(user);
      });
    }
    spotify.getUserPlaylists().then((playLists) => {
      ctx.setPlayList(playLists);
    });
    spotify.getPlaylist('37i9dQZF1E35epInawG9V4').then((playLists) => {
      ctx.setList(playLists);
    });
  }, []);
  console.log(user);
  console.log(token);
  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
