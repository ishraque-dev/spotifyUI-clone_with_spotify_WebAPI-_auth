import React, { useContext } from 'react';
import './style/sidebar.css';
import logo from './imgs/logo.png';
import SideBarOption from './SideBarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import Context from './Context';
// import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
const Sidebar = () => {
  const { playList } = useContext(Context);

  return (
    <div className="sidebar">
      <img src={logo} className="logo" alt="logo" />
      <SideBarOption Icon={HomeIcon} title="Home" />
      <SideBarOption Icon={SearchIcon} title="Search" />
      <SideBarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar__title">Play Lists</strong>
      <hr></hr>
      {playList.items &&
        playList.items.map((playList) => {
          return <SideBarOption title={playList.name} />;
        })}
    </div>
  );
};

export default Sidebar;
