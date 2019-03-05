import React from 'react';
import SearchBar from './searchBar';
import '../_stylesheets/App.scss';

class TopBar extends React.Component{
  state = {
  }
  render() {
    return(<div id="top-bar">
      <SearchBar/>
    </div>);
  }
}

export default TopBar;