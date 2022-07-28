import React, { useContext } from 'react';
import './style/header.css';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import Context from './Context';
const Header = () => {
  const { user } = useContext(Context);
  console.log(user);
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Search Artist, Song" type="text" />
      </div>
      <div className="header__right">
        <h4>{user && user.display_name}</h4>
        <Avatar alt="Ishraque" src={user && user.images[0].url} />
      </div>
    </div>
  );
};

export default Header;
