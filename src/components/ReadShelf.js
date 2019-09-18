import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger';


export default class ReadShelf extends Component {
    state = {
        shelf: 'read'
    }
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
                    <ShelfChanger shelf={this.state.shelf} book_id={book.id} />
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
