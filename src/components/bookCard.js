import React from 'react';
import '../_stylesheets/Books.scss';

const BookCard = (props) => {
  const { book } = props;
  const { volumeInfo } = book;
  const author = volumeInfo.authors.length > 1 ? `${volumeInfo.authors[0]} & others`: volumeInfo.authors[0];
  console.log(props.book);
  return(<div className="book-card">
    {/* will need to incorporate the individual link to indicate when to swap out the picture etc. for responsiveness */}
    <img className='thumbnail' src={volumeInfo.imageLinks.thumbnail} alt={`${volumeInfo.title} Book Cover`}/>
    <div className="info-dump text">
      <p className="book-title text">{volumeInfo.title}</p>
      <p className="author text">By: <span>{author}</span></p>
      <p className="publisher text">Published By: <span>{volumeInfo.publisher}</span></p>
      <a target="_blank" rel="noopener noreferrer" href={volumeInfo.canonicalVolumeLink}><button>See This Book</button></a>
    </div>
  </div>)
}

export default BookCard;