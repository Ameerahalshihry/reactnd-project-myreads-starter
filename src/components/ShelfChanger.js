import React, { Component } from 'react'
import {update} from '../BooksAPI'

export default class ShelfChanger extends Component {
    state = {
        shelf : this.props.shelf
    }
    updateHandler = (e) =>{
    
        this.setState({ shelf : e.target.value  }, () => {
            console.log(`0- ${this.state.shelf}`);
            console.log(`00- ${this.props.book}`);

            this.props.onChangeBookShelf(this.props.book, this.state.shelf)
            console.log(`1- ${this.state.shelf}`);
            console.log(`2- ${this.props.book}`);

        });
    
        console.log(this.props.book.shelf);
        console.log(this.props.book);


    }
    render() {
        
        return (
            <div className="book-shelf-changer">
            <select defaultValue={this.state.shelf} onChange={this.updateHandler}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option  value="read">Read</option>
                <option value="none">None</option>
            </select>
            </div>
        )
    }
}
