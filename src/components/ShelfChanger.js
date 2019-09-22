import React, { Component } from 'react'

export default class ShelfChanger extends Component {
    state = {
        shelf : this.props.shelf
    }
    updateHandler = (e) =>{
    
        this.setState({ shelf : e.target.value  }, () => {
        this.props.onChangeBookShelf(this.props.book, this.state.shelf)
        });
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
