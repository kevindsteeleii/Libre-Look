import React from 'react';

/* NOTE: will expand later so starting w/ a class component and will become more of a HOC */
class SearchBar extends React.Component{
  state = {
    simpleSearch: ""
  }

  handleChangeSimpleSearch = (evt) => {
    const simpleSearch = ''
    console.log(evt);
    debugger;
    this.setState({ simpleSearch });
  }

  render() {
    return(<div id="searchBar">
      <div className="simple-search">
        <input type="text" name="search-input-text" id="search-input-text" placeholder="Add any key word to look for a related book please..."/>
        
      </div>
    </div>);
  }
}

export default SearchBar;