import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'
import {update} from '../BooksAPI'

export default class CurrentlyReading extends Component {
    state = {
        shelf: 'currentlyReading'
    }
    updateShelf = (book, shelf) => {
        const updatedBooks = this.state.books.map(b => {
        if (b.id === book.id) {
            b.shelf = shelf;
        }
        return b;
        });
    
        this.setState({
        books: updatedBooks
        });
        update(book, shelf).then(() => console.log('Book update done'))

    };
    render() {
        const CurrentlyReadingBooks = this.props.books.filter ( book => 
            book.shelf === 'currentlyReading').map( book => {
                return (
                    <li key={book.id}>
                    <div className="book">
                    <div className="book-top">
                    <div className="book-cover">
                    <img src={book.imageLinks.thumbnail} alt=''/>
                    </div>  
                    <ShelfChanger shelf={this.state.shelf} book={book} onChangeBookShelf={() => this.updateShelf}/>

                        <div className="book-shelf-changer">
                        <select>
                            <option value="move" disabled>Move to...</option>
                            <option selected value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>

                    </div>
                </li>
                )
            })
        
        return (
            <div>
                {CurrentlyReadingBooks}
            </div>
        )
    }
}

