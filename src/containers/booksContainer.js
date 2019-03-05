import React from 'react';
import BookCard from '../components/bookCard';
import GlobalContext from '../context';
import * as _search from '../adapter';
import '../_stylesheets/Books.scss';

class BooksContainer extends React.Component{
  state = {
    books: []
  }

  // REFACTOR: need to reset on submit and make this state global context for ease of use
  async componentDidUpdate() {
    const { globalSearchQuery } = this.context;
    const books = await _search.search(globalSearchQuery);
    this.setState({books});
  }

  // REFACTOR: possible tweaking needed to work more efficiently
  makeCards = () => {
    const { books } = this.state;
    if (books !== undefined && books !== null) {
      return books.length > 0
      ? books.map(book => <BookCard book={{...book}}/>)
      : <h1>No Books</h1>;
    }
    return <h1>No Books</h1>;
  }

  render() {
    const { books } = this.state;
    return(<div id="books-container">
      {books && this.makeCards()}
    </div>);
  }
}

BooksContainer.contextType = GlobalContext;
export default BooksContainer;