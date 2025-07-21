import Header from './components/Header' 
import BookList from './components/BookList'
import { useEffect, useState } from 'react'
import AddBookForm from './components/AddBookForm'
import SearchBook from './components/SearchBook'

function App() {

  const [books, setBooks] = useState(() => {
    const savedBook = localStorage.getItem('books')
    return savedBook ? JSON.parse(savedBook) : []
  })

  const [query, setQuery] = useState('')

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  },[books])

  const AddBook = (book) => {
    setBooks([...books, book])
  }



// handle pencarian lower cases semua
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
  <>
    <div>
    <Header />
    <AddBookForm 
    onAdd={AddBook}
    />
    <SearchBook 
    query={query}
    setQuery={setQuery}
    />
    <BookList books={filteredBooks}/>
    </div>
    </>
  )
}

export default App
