import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger';


export default class ReadShelf extends Component {
    state = {
        shelf: 'read'
    }
    updateShelf = (book, shelf) => {
        const updatedBooks = this.state.books.map(b => {
        if (b.id === book.id) {
            b.shelf = shelf;
        }
        return b;
        });
    
        this.setState({
        books: updatedBooks,
        });
        // update(book, shelf).then(() => console.log('Book update done'))

    };

    render() {
        const ReadBooks = this.props.books.filter ( book => 
            book.shelf === 'read').map( book => {
                return (
                    <li key={book.id}>
                    <div className="book">
                    <div className="book-top">
                    <div className="book-cover">
                    <img src={book.imageLinks.thumbnail} alt=''/>
                    </div>  
                    <ShelfChanger shelf={this.state.shelf} book={book} onChangeBookShelf={() => this.updateShelf}/>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>

                    </div>
                </li>
                )
            })
        
        return (
            <div>
                {ReadBooks}
            </div>
        )
    }
}
