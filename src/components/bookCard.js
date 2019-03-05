import React from 'react';
import '../_stylesheets/Books.scss';

const BookCard = (props) => {
  const { book } = props;
  let { volumeInfo } = book;

  /* 
    this evaluates the author const as '<AUTHOR_NAME> & others' if authors object is both defined
    and it's length is more than one, if it exists but is authored by one per it's '<AUTHOR_NAME>'
    and lastly, if it's undefined, return as 'Unknown Author'
  */
  const author = 
    volumeInfo.authors !== undefined
      ? volumeInfo.authors.length > 1 
        ? `${volumeInfo.authors[0]} & others`
        : volumeInfo.authors[0]
      : 'Unknown Author';

  return(<div className="book-card">
    {/* Some Volumes don't contain image data or use Google Books API's dynamic routing to make a dummy cover wh/ this request cannot grab */}
    {volumeInfo.imageLinks !== undefined && <img className='thumbnail' src={ volumeInfo.imageLinks.thumbnail} alt={`${volumeInfo.title} Book Cover`}/>}
    <div className="info-dump text">
      <p className="book-title text">{volumeInfo.title}</p>
      <p className="author text">By: <span>{author}</span></p>
      <p className="publisher text">Published By: <span>{volumeInfo.publisher}</span></p>
      <a target="_blank" rel="noopener noreferrer" href={volumeInfo.canonicalVolumeLink}><button>See This Book</button></a>
    </div>
  </div>)
}

export default BookCard;