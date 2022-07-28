import React from 'react';
import './style/songRow.css';
const SongRow = ({ track, playSong }) => {
  return (
    <div className="song__row">
      <img className="song__rowAlbum" src={track?.album.images[0].url} alt="" />
      <div className="song__rowInfo">
        <h1>{track.name}</h1>
        <p>{track?.artists.map((artist) => artist.name).join(', ')}</p>
      </div>
    </div>
  );
};

export default SongRow;
