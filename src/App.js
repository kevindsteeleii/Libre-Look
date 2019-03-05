import React, { Component } from 'react';
import TopBar from './containers/topBar';
import BooksContainer from './containers/booksContainer';
import './_stylesheets/App.scss';
import GlobalContext from './context';


class App extends Component {

  state = {
    globalSearchQuery: '',
    books: [],
    searchHistory: []
  }

  /* NOTE: _METHODNAME is used for context providers*/
  _setSearchQuery = (formattedQuery) => {
    const globalSearchQuery = formattedQuery;
    this.setState({globalSearchQuery});
  }

  render() {
    const {globalSearchQuery, books } = this.state;
    return (
      <div className="App">
        <GlobalContext.Provider value={{
          setSearchQuery: this._setSearchQuery,
          globalSearchQuery,
          books
        }}>
          <TopBar/>
          <BooksContainer/>
        </GlobalContext.Provider>
      </div>
    );
  }
}
// export SetSearchContext;
export default App;
