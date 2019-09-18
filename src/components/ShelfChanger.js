import React, { Component } from 'react'
import update from '../BooksAPI'

export default class ShelfChanger extends Component {
    state = {
        shelf : ''
    }
    handleChange = (e) =>{
        // update(book,)
        this.setState({ shelf : e.target.value})
        console.log(this.state.shelf);
        console.log(this.props.book_id);
   
    }
    render() {
        
        return (
            <div className="book-shelf-changer">
            <select onChange={this.handleChange}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option selected value="read">Read</option>
                <option value="none">None</option>
            </select>
            </div>
        )
    }
}
