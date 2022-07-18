import { useState } from "react";
import BookForm from "./components/BookForm/BookForm";
import BookList from "./components/BookList/BookList";
import shortid from "shortid";

const  App = () =>{

  const [books, setBooks] = useState([
    {id: 1, title: 'Mickie Mouse', author: 'Disney'},
    {id: 2, title: 'Witcher', author: 'Sabkowski'}
  ]);

  const removeBook = bookId => {
    setBooks(books.filter(book => book.id !== bookId))
  };
  const addBook = newBook =>{
    setBooks([...books,{id: shortid(), title: newBook.title, author: newBook.author}])
    console.log(newBook.title, newBook.author)
  }
  return (
    <div>
      <h1>Books app</h1>
      <BookForm addBook={addBook}/>
      <BookList books={books} removeBook={removeBook}/>
    </div>
  );
}

export default App;
