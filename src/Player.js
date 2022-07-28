import React from 'react';
import './style/player.css';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Body from './Body';
const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>

      <Footer />
    </div>
  );
};

export default Player;
