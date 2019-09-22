import React, { Component } from 'react'
import './App.css'
import SearchBooks from './components/SearchBooks.js'
import Library from './components/Library'
import { BrowserRouter, Route } from 'react-router-dom'
import {search} from './BooksAPI'
import {getAll, update} from './BooksAPI'



class BooksApp extends Component {
  state = {
    searchedBooks : [],
    books: []
    }
    componentDidMount(){
      getAll()
      .then (res => {
      console.log(res)
      this.setState({
      books : res
      }) 
      }
      )
  }
  updateBookShelf = (book, shelf) => {
    update(book, shelf).then(() =>
        console.log('The shelf is updated'))
        const updatedBooks = this.state.books.map(b => {
        if (b.id === book.id) {
            b.shelf = shelf;
            console.log(book)}
    return b
        })
    
        this.setState({
        books: updatedBooks
        })
        console.log(this.state.books);
        
        }

  
searchForBooks = (query) => {
      if (query.length > 0) {
      search(query).then(books => {
          this.setState({ searchedBooks: books });
            console.log(books);
      });
    } 
}

closeSearch = () =>
{
  this.setState({ searchedBooks: [] });
}

  render() {
    return (
      <BrowserRouter>
      <div className="app">
      <Route exact path='/' 
      render = {() => <Library books={this.state.books}  updateBookShelf={this.updateBookShelf}/>} />
      <Route path='/search' 
      render= {() => <SearchBooks searchedBooks={this.state.searchedBooks} 
      onChange={this.searchForBooks} onClose={this.closeSearch} books={this.state.books} updateBookShelf={this.updateBookShelf}/>}/>
      </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
