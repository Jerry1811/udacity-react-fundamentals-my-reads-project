import React from 'react'
import Book from './Book'

const Bookshelf = (props) => {
  const { books, title, setBooks } = props

  return (
    <div className="Bookshelf">
      <h2 className="Bookshelf-Title">{title}</h2>
      <div className="Bookshelf-Books">
        <ol className="Books-Grid">
          {books &&
            books.map((book, index) => (
              <li key={index}>
                <Book
                  title={book.title}
                  authors={book.authors}
                  imageUrl={book.imageLinks && book.imageLinks.thumbnail}
                  bookshelf={book.shelf}
                  book={book}
                  setBooks={setBooks}
                />
              </li>
            ))}
        </ol>
      </div>
    </div>
  )
}

export default Bookshelf
