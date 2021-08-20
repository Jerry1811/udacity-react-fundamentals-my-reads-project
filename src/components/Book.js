import React from 'react'
import * as BooksAPI from '../BooksAPI'

const Book = (props) => {
  const { title, authors, imageUrl, book, setBooks, isSearching, bookshelf } = props

  const handleShelfChange = (event) => {
    if (event.target.value !== 'move') {
      BooksAPI.update(book, event.target.value).then((response) =>
        BooksAPI.getAll().then((newBooks) => {
          setBooks(newBooks)
        }),
      )
    }
  }

  const handleShelfChangeInSearch = (event) => {
    if (event.target.value !== 'move') {
      BooksAPI.update(book, event.target.value)
    }
  }

  return (
    <div className="Book">
      <div className="Book-Top">
        <div
          className="Book-Cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${imageUrl}")`,
          }}
        ></div>
        <div className="Book-Shelf-Changer">
          <select
            onChange={(event) => {
              if (!isSearching) {
                handleShelfChange(event)
              } else {
                handleShelfChangeInSearch(event)
              }
            }}
            defaultValue={bookshelf}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="Book-Title">{title}</div>
      <div className="Book-Authors">
        {authors && authors.map((author) => `${author},`)}
      </div>
    </div>
  )
}

export default Book
