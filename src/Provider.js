import React, { useReducer } from 'react';
import Context from './Context';
const initialState = {
  user: null,
  playLists: [],
  playing: false,
  item: null,
  discover_list: null,
  token: null,
  // token:
  //   'BQBexEoWHEhYK57o_PepiFIx28xmyzo4vGWCi_xzAujxGey9iziOvvLkYxqe53_OEf7eFXmab8dFZi_9TUThoTC3aiTiz72te0TRgPLG2b5A8XZlZSfTcd5QNnkGtaS4ZDW6SXynSciX3hZDY0aiC4sR1NfXW6E-PnyNXaB6gEHcwSkDkCn7kcEIrlQI4not4cD3oqUxF9pa2LYFerD_bw',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_TOKEN': {
      return {
        ...state,
        token: action.token,
      };
    }
    case 'SET_PLAYLIST': {
      return {
        ...state,
        playLists: action.playList,
      };
    }
    case 'SET_LIST': {
      return {
        ...state,
        discover_list: action.discover_list,
      };
    }
    case 'SET_ITEM':
      return {
        ...state,
        item: action.item,
      };
    case 'SET_PLAYING':
      return {
        ...state,
        playing: action.playing,
      };
    default:
      return state;
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setUser = (user) => {
    dispatch({
      type: 'SET_USER',
      user: user,
    });
  };
  const setToken = (token) => {
    dispatch({
      type: 'SET_TOKEN',
      token: token,
    });
  };
  const setPlayList = (playList) => {
    dispatch({
      type: 'SET_PLAYLIST',
      playList: playList,
    });
  };
  const setList = (playList) => {
    dispatch({
      type: 'SET_LIST',
      discover_list: playList,
    });
  };
  const setItem = (item) => {
    dispatch({
      type: 'SET_ITEM',
      item: item,
    });
  };
  const setPlaying = (play) => {
    dispatch({
      type: 'SET_PLAYING',
      playing: play,
    });
  };
  const stateValue = {
    token: state.token,
    user: state.user,
    playList: state.playLists,
    discover_list: state.discover_list,
    setUser: setUser,
    setToken: setToken,
    setPlayList: setPlayList,
    setList: setList,
    setItem: setItem,
    setPlaying: setPlaying,
  };
  return <Context.Provider value={stateValue}>{children}</Context.Provider>;
};
export default Provider;
