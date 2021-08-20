import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Book from './Book'
import Footer from './Footer.js'
import * as BooksAPI from '../BooksAPI'

const Search = (props) => {
  const [searchText, setSearchText] = useState('')
  const [searchedBooks, setSearchedBooks] = useState([])
  const history = useHistory()

  const handleSearchTextChange = (event) => {
    if (searchText.length !== 0) {
      BooksAPI.search(searchText).then((searchedBooks) => {
        if (!searchedBooks.error) {
          BooksAPI.getAll().then((myBooks) => {
            setSearchedBooks(setDefaultShelves(searchedBooks, myBooks))
          })
        } else {
          setSearchedBooks([])
        }
      })
    } else if (searchText.length === 0) {
      setSearchedBooks([])
    }
  }

  const setDefaultShelves = (searchedBooksLocal, myBooks) => {
    return searchedBooksLocal.map((book) => {
      for (let i = 0; i < myBooks.length; i++) {
        if (myBooks[i].id === book.id) {
          return { ...book, shelf: myBooks[i].shelf }
        }
      }
      return { ...book, shelf: 'none' }
    })
  }

  useEffect(() => {
    handleSearchTextChange()
  }, [searchText])

  return (
    <div className="Search-Books">
      <div className="Search-Books-Bar">
        <button className="Close-Search" onClick={() => history.push('/')}>
          Close
        </button>
        <div className="Search-Books-Input-Wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={(event) => setSearchText(event.target.value)}
          />
        </div>
      </div>
      <div className="Search-Books-Results">
        <ol className="Books-Grid">
          {searchedBooks &&
            searchedBooks.map((book, index) => (
              <Book
                key={index}
                title={book.title}
                authors={book.authors}
                imageUrl={book.imageLinks && book.imageLinks.thumbnail}
                bookshelf={book.shelf}
                book={book}
                isSearching
              />
            ))}
        </ol>
      </div>
      <Footer />
    </div>
  )
}

export default Search
