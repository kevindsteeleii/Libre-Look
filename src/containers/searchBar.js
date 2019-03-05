import React from 'react';
import '../_stylesheets/App.scss';
import GlobalContext from '../context';

/* NOTE: will expand later so starting w/ a class component and will become more of a HOC */

class SearchBar extends React.Component{
  /* Simple */
  state = {
    simpleSearchInput: "",
  }

  handleChangeSimpleSearch = (evt) => {
    let simpleSearchInput = evt.target.value;
    this.setState({ simpleSearchInput });
  }

  handleSubmitQuery = (evt) => {
    const { simpleSearchInput } = this.state;
    const { setSearchQuery } = this.context;
    setSearchQuery(simpleSearchInput);
    evt.preventDefault();
  }

  render() {
    const { simpleSearchInput } = this.state;
    return(<div id="searchBar">
        <div className="simple-search">
          <input onChange={this.handleChangeSimpleSearch} type="text" name="search-input-text" id="search-input-text" placeholder="Add any key word to look for a related book please..."/>
          <div onClick={this.handleSubmitQuery} value={simpleSearchInput} id='submit-search'>Search</div>   
      </div>
      
    </div>);
  }
}

SearchBar.contextType = GlobalContext;
export default SearchBar;