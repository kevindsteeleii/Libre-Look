import React from 'react';
import BookCard from '../components/bookCard';
import * as _search from '../adapter';
import '../App.scss';

class BooksContainer extends React.Component{
  state = {
    books: [],
    book : null
  }

  async componentDidMount() {
    const books = await _search.search('harry potter');
    this.setState({books}, async() => {
      const book = await _search.sample();
      this.setState({book});
    });
  }

  render() {
    const { book } = this.state;
    return(<>
      {book && <BookCard book={{...book}}/>}
    </>);
  }
}

export default BooksContainer;