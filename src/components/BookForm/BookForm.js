import { useState } from "react";

const BookForm =({addBook}) =>{

    const [title, setTitle] =useState('');
    const [author, setAuthor] =useState('');

    const handleSubmit = e =>{
        e.preventDefault();
        addBook({title, author}); {/*Czemu muszę to pisać w nawiasach{} i czemu skoro  bookList mam action nie musze zrobic addBook.action*/}
        setTitle('');
        setAuthor('');
    }
    


    return(
        <form onSubmit={handleSubmit}>
            Title:  <input type= "text" value={title}  onChange={(e)=> setTitle(e.target.value)  }/>
            Author: <input type= "text" value={author} onChange={(e)=> setAuthor(e.target.value)}/>
            <button>Add book</button>
        </form>
       
    )
}

export default BookForm;