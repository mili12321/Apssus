import { bookService } from './book-service.js'

export class BookAdd extends React.Component {



    state = {
        books: [],
        title: ''

    }

    onSearch = (ev) => {
        this.setState({ title: ev.target.value }, () => {
            bookService.getBooksFromAPI(this.state.title)
                .then(books => {
                    console.log(books.items);
                    this.setState({ books: books.items })
                })
        })
    }
    onAddBook = (bookId) => {
        const { books } = this.state
        const book = books.find((book) => {
            return (book.id === bookId)
        })
        this.props.onAddBook(book)
    }

    render() {
        const { books } = this.state
        if (!books) return <h2>loading...</h2>
        return (
            <div>
                <input type="text" onChange={this.onSearch}></input>
                <div>
                    {books.map(book => {
                        return <div className="search-book" key={book.id}>
                            <div>{book.volumeInfo.title}</div>
                            <button onClick={() => {
                                this.onAddBook(book.id)
                            }}>+</button>
                        </div>
                    })
                    }
                </div>

            </div >
        )
    }
}