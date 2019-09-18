import React, { Component } from 'react'

export default class WantToReadShelf extends Component {
    state = {
        shelf: 'wantToRead'
    }
    render() {
        const WantToReadBooks = this.props.books.filter ( book => 
            book.shelf === 'wantToRead').map( book => {
                return (
                    <li key={book.id}>
                    <div className="book">
                    <div className="book-top">
                    <div className="book-cover">
                    <img src={book.imageLinks.thumbnail} alt=''/>
                    </div>  
                    
                        <div className="book-shelf-changer">
                        <select>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option selected value="wantToRead">Want to Read</option>
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
                {WantToReadBooks}
            </div>
        )
    }
}

