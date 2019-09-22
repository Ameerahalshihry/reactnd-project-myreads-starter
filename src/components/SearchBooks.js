    import React, { Component } from 'react'
    import { Link } from 'react-router-dom'
    import ShelfChanger from './ShelfChanger'

    export default class SearchBooks extends Component {
        state = {
            searchInput : ''
        }
        handleChange = (e) => {
            this.setState({searchInput: e.target.value})
            console.log(this.state.searchInput);
            this.props.onChange(this.state.searchInput)
        }
        
        render() {
            return (
                <div className="search-books">
                <div className="search-books-bar">
                <Link to="/">
                <button className="close-search" onClick={this.props.onClose}>Close</button>
                </Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" 
                    value={this.state.searchInput} onChange={this.handleChange}/>
                </div>
                </div>
                <div className="search-books-results">
                <ol className="books-grid">
                {this.props.searchedBooks.map(book => {
                    return (
                        <li key={book.id}>
                        <div className="book">
                        <div className="book-top">
                        <div className="book-cover">
                        <img src={book.imageLinks.thumbnail} alt=''/>
                        </div>  
                        <ShelfChanger shelf={book.shelf ? book.shelf : 'none'} book={book} onChangeBookShelf={() => this.props.onChangeBookShelf}/>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
    
                        </div>
                                    </li> 
                        )
                }
                    )}        
                </ol>
                </div>
            </div>
            )}}
        
    


    