import React, { useState, useEffect } from 'react'
import * as BooksAPI from './BooksAPI'
import { useHistory } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer.js'
import Bookshelf from './components/Bookshelf'

const bookshelves = [
  { title: 'Currently Reading', shelfName: 'currentlyReading' },
  { title: 'Want to Read', shelfName: 'wantToRead' },
  { title: 'Read', shelfName: 'read' },
]

const App = () => {
  const [books, setBooks] = useState([])
  const history = useHistory()

  useEffect(() => {
    BooksAPI.getAll().then((booksFromApi) => {
      setBooks(booksFromApi)
    })
  }, [])

  return (
    <div className="App">
      <div className="List-Books">
        <div className="List-Books-Title">
          <h1>MyReads</h1>
        </div>
        <div className="List-Books-Content">
          <div>
            {bookshelves.map((bookshelf, index) => (
              <Bookshelf
                key={index}
                title={bookshelf.title}
                books={
                  books &&
                  books.filter((book) => book && book.shelf === bookshelf.shelfName)
                }
                setBooks={setBooks}
              />
            ))}
          </div>
        </div>
        <div className="Open-Search">
          <button onClick={() => history.push('/search')}>Add a book</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
