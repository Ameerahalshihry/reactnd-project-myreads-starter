        import React, { Component } from 'react'
        import SearchBooks from './SearchBooks'
        import {Link} from 'react-router-dom'
        import ShelfChanger from './ShelfChanger'

    export default class Library extends Component {
            constructor(props){
                super(props)
                this.state = {
                    showSearchPage: false,
                    shelf : 'None'
                }
            }
                
            render() {
                
                    const currentlyReadingShelfBooks = this.props.books.filter(book => {
                    return (
                        book.shelf === 'currentlyReading'
                    )
                    })

                    const wantToReadShelfBooks = this.props.books.filter(book => {
                        return (
                            book.shelf === 'wantToRead'
                        )
                        })
                        const readShelfBooks = this.props.books.filter(book => {
                            return (
                                book.shelf === 'read'
                            )
                            })
                return (
                    <div>
                    {this.state.showSearchPage ? (<SearchBooks books={this.props.books} onChangeBookShelf={this.props.updateBookShelf} shelf={this.state.shelf}   />):(
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
                                {/* <CurrentlyReading books={this.state.books} /> */}
                                {currentlyReadingShelfBooks.map ( book => 
                                {
                                    return (
                    <li key={book.id}>
                    <div className="book">
                    <div className="book-top">
                    <div className="book-cover">
                    <img src={book.imageLinks.thumbnail} alt=''/>
                    </div>  
                        <ShelfChanger shelf={book.shelf} book={book} onChangeBookShelf={ this.props.updateBookShelf} />
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>

                    </div>
                                </li> 
                                )})}
                                </ol>
                            </div>
                            </div>
                        
                            <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                {/* <WantToReadShelf  books={this.state.books}/> */}
                                {wantToReadShelfBooks.map ( book => 
                                {
                                    return (
                    <li key={book.id}>
                    <div className="book">
                    <div className="book-top">
                    <div className="book-cover">
                    <img src={book.imageLinks.thumbnail} alt=''/>
                    </div>  
                    <ShelfChanger shelf={book.shelf} book={book} onChangeBookShelf={this.props.updateBookShelf}/>

                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>

                    </div>
                                </li> 
                                )})}
                                </ol>
                            </div>
                            </div>
                            <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                {/* <ReadShelf books={this.state.books} onChangeBookShelf={() => this.updateShelf} /> */}
                                {/* <ReadShelf books={this.state.books} /> */}
                                {readShelfBooks.map ( book => 
                                {
                                    return (
                    <li key={book.id}>
                    <div className="book">
                    <div className="book-top">
                    <div className="book-cover">
                    <img src={book.imageLinks.thumbnail} alt=''/>
                    </div>  
                    <ShelfChanger shelf={book.shelf} book={book} onChangeBookShelf={this.props.updateBookShelf}/>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>

                    </div>
                                </li> 
                                 )})}
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
