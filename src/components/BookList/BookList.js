const BookList =({books, removeBook}) =>{
    return(
        <ul>
            {books.map(book => <li key={book.id}>{book.title} by {book.author}<button onClick={e=>removeBook(book.id)}>Remove</button></li>)}
        </ul>
        
    )
}

export default BookList;