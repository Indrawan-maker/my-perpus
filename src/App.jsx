import Header from './components/Header' 
import BookList from './components/BookList'
import { useEffect, useState } from 'react'
import AddBookForm from './components/AddBookForm'

function App() {

  const [books, setBooks] = useState(() => {
    const savedBook = localStorage.getItem('books')
    return savedBook ? JSON.parse(savedBook) : []
  })

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  },[books])
// pr tambahkan styling sebagus mungkin
// // dan tambahkan gambar buku
//   useEffect(() => {
//     const sampleBooks = [
//         {title:"Hujan", author: "Tere Liye"},
//       {title:"Atomic Habits", author: "James Clear"},
//         {title:"How to Wins Friend", author: "Dale Carneige"}
//     ]
//     setBooks(sampleBooks)
//   },[])

  const AddBook = (book) => {
    setBooks([...books, book])
  }

  return (
  <>
    <div>
    <Header />
    <AddBookForm 
    onAdd={AddBook}
    />
    <BookList books={books}/>
    </div>
    </>
  )
}

export default App
