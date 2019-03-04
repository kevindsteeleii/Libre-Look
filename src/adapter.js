import axios from 'axios';
const baseURL = 'https://www.googleapis.com/books/v1/volumes?q='

export const search = async (searchTerm) => {
  searchTerm = typeof searchTerm === 'object' ? buildQuery(searchTerm): formatQuery(searchTerm);
  const response = await axios.get(baseURL + searchTerm);
  const totalItems = response.data.totalItems;
  const books = totalItems > 0 ?  response.data.items : null;
  return books;
}

  /* Returns a single harry potter book */
export const sample = async() => {
    const books = await search('harry potter');
    return books[0];
}

/* Helper method that returns compound/advanced query as a formatted string */
const buildQuery = ({searchTerm ,queryObj}) => {
  let query = formatQuery(searchTerm);
  for (const key in queryObj) {
    let term = `+${key}:${formatQuery(queryObj[key])}`
    query += term;
  }
  return query;
}
/* Formats query into something google books api can handle */
const formatQuery = (term) => {
  return term.split(' ').join('+')
}