    import React, { Component } from 'react'
    import { Link } from 'react-router-dom'
    
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
            // const {searchedBooks, onChange} = this.props;
            return (
                <div className="search-books">
                <div className="search-books-bar">
                <Link to="/">
                <button className="close-search" >Close</button>
                </Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" 
                    value={this.state.searchInput} onChange={this.handleChange}/>
                </div>
                </div>
                <div className="search-books-results">
                <ol className="books-grid">
                {this.props.searchedBooks.map(book => {
                    return <li key={book.id}> {book.title}</li>
                }
                    )}        
                </ol>
                </div>
            </div>
            )}}
        
    


    