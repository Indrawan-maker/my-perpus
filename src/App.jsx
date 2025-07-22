import Header from './components/Header' 
import BookList from './components/BookList'
import { useEffect, useState } from 'react'
import AddBookForm from './components/AddBookForm'
import SearchBook from './components/SearchBook'
import Swal from 'sweetalert2'
import NullSearch from './components/nullSearch'

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

  function handleRemove(id) {
    Swal.fire({
      title: "Apakah kamu yakin?",
  text: "Anda tidak dapat mengembalikannya!",
  icon: "warning",
  showCancelButton: false,
  confirmButtonColor: "#3085d6",
  confirmButtonText: "Ya, Hapus!"
}).then((result) => {
  if (result.isConfirmed) {

    const remove = books.filter((_, i) => i !== id)
    setBooks(remove)

    Swal.fire({
      title: "Deleted!",
      text: "File mu sudah dihapus.",
      timer: 800,
      showConfirmButton: false,
      icon: "success"
    });
  }
});
}

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase())
  )

  const showNullSearch = query.length > 0 && filteredBooks.length === 0


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
    {showNullSearch ? <NullSearch
    /> : null }
    <BookList
    books={filteredBooks}
    onClick={handleRemove}
    />
    </div>
    </>
  )
}

export default App
