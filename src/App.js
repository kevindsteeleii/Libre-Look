import React, { Component } from 'react';
import TopBar from './containers/topBar';
import BooksContainer from './containers/booksContainer';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar/>
        <BooksContainer/>
      </div>
    );
  }
}

export default App;
