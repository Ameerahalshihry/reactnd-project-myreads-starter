        import React, { Component } from 'react'
        import SearchBooks from './SearchBooks'
        import {getAll, update} from '../BooksAPI'
        import ReadShelf from './ReadShelf';
        import WantToReadShelf from './WantToReadShelf';
        import CurrentlyReading from './CurrentlyReading';
        import {Link} from 'react-router-dom'

    export default class Library extends Component {
            constructor(props){
                super(props)
                this.state = {
                    showSearchPage: false,
                    books: []
                }
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
                
            render() {
                return (
                    <div>
                    {this.state.showSearchPage ? (<SearchBooks books={this.state.books}  />):(
                        <div className="list-books">
                        <div className="list-books-title">
                        <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                        <div>
                            <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                <CurrentlyReading books={this.state.books} />
                                </ol>
                            </div>
                            </div>
                            <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                <WantToReadShelf  books={this.state.books}/>
                                </ol>
                            </div>
                            </div>
                            <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                <ReadShelf books={this.state.books} />
                            
                                </ol>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="open-search">
                        <Link to='/search'>
                        <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
                        </Link>
                        </div>
                </div>
                    )}
                    </div>

                )
            }
        }
