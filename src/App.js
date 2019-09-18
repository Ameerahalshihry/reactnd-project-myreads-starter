import React, { Component } from 'react'
import './App.css'
import SearchBooks from './components/SearchBooks.js'
import Library from './components/Library'
import { BrowserRouter, Route } from 'react-router-dom'
import {search} from './BooksAPI'
import { log } from 'util';
import * as BooksAPI from './BooksAPI'



class BooksApp extends Component {
  state = {
    searchedBooks : []
      /**
       * TODO: Instead of using this state variable to keep track of which page
       * we're on, use the URL in the browser's address bar. This will ensure that
       * users can use the browser's back and forward buttons to navigate between
       * pages, as well as provide a good URL they can bookmark and share.
       */
    }

  
searchForBooks = (query) => {
  // this.setState({ query: query.trim() });
  
      if (query.length > 0) {
      BooksAPI.search(query).then(books => {
        if (books.error) {
          this.setState({ searchedBooks: [] });
        } else {
          this.setState({ searchedBooks: books });
            console.log(books);

        }
      });
    }  
}
  render() {
    return (
      <BrowserRouter>
      <div className="app">
      <Route exact path='/' component={ Library } />
      <Route path='/search' 
      render= {() => <SearchBooks searchedBooks={this.state.searchedBooks} 
      onChange={this.searchForBooks}/>}/>
      </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
