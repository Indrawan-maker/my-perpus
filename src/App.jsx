import Header from './components/Header' 
import BookList from './components/BookList'
import { useEffect, useState } from 'react'

function App() {

  const [books, setBooks] = useState([])

// pr tambahkan styling sebagus mungkin
// dan tambahkan gambar buku
  useEffect(() => {
    const sampleBooks = [
        {title:"Hujan", author: "Tere Liye"},
      {title:"Atomic Habits", author: "James Clear"},
        {title:"How to Wins Friend", author: "Dale Carneige"}
    ]
    setBooks(sampleBooks)
  },[])

  return (
  <>
    <div>
    <Header />
    <BookList books={books}/>
    </div>
    </>
  )
}

export default App
