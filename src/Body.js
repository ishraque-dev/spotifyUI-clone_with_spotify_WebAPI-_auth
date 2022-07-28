import React, { useContext, useEffect, useState } from 'react';
import './style/body.css';
import Header from './Header';
import Context from './Context';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow';

// var myDate = new Date();
// var hrs = myDate.getHours();

// var greet;

// if (hrs < 12) greet = 'Good Morning';
// else if (hrs >= 12 && hrs <= 17) greet = 'Good Afternoon';
// else if (hrs >= 17 && hrs <= 24) greet = 'Good Evening';

// document.getElementById('greetings').innerHTML = '<b>' + greet + '</b>';
const Body = ({ spotify }) => {
  const [player, setPlayer] = useState(undefined);
  const { discover_list } = useContext(Context);
  const ctx = useContext(Context);
  console.log(discover_list);

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_list?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PlayList</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_list?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {discover_list?.tracks.items.map((item) => {
          return <SongRow track={item.track} />;
        })}
      </div>
    </div>
  );
};

export default Body;
