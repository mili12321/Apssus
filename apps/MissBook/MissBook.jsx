import { bookService } from './book-service.js'
import { BookList } from './BookList.jsx'
import { BookFilter } from './Filter.jsx'
import { BookAdd } from './BookAdd.jsx'



export class MissBook extends React.Component {

    state = {
        books: null,
        filterBy: '',
        toFilter: "title",
        selectedBook: null
    }

    componentDidMount() {
        this.loadBooks();
        
    }
    loadBooks() {
        var books = bookService.getBooks()
        this.setState({ books })
    }

    setFilter = (filterBy) => {
        console.log('App Got: ', filterBy);
        this.setState({ filterBy })
    }
    toFilter = (toFilter) => {
        this.setState({ toFilter })
    }
    getBooksForDisplay() {
        let books;
        if (this.state.toFilter === "title") {
            books = this.state.books.filter(book => book.title.includes(this.state.filterBy))
        }
        else {
            books = this.state.books.filter(book => {
                return book.authors.some(author => {
                    return author.includes(this.state.filterBy)
                });
            })
        }

        return books;
    }
    onAddBook = (book) => {
        bookService.addBook(book)
            .then(() => {
                this.loadBooks();
            })
    }



    render() {

        if (!this.state.books) return <div>loading</div>
        const books = this.getBooksForDisplay();
        return (

            <section className="book-app">
                <h2>books</h2>

                <BookFilter onFilter={this.setFilter} toFilter={this.toFilter} />
                <BookAdd onAddBook={this.onAddBook} />
                <BookList books={books} />
                {/* <hr /> */}
                {/* <form onSubmit={ this.addPet }>
                    <input name="name" value={ this.state.petToAdd.name }
                        placeholder="Pet Name" type="text"
                        onChange={ this.onInputChange }
                    />
                    <input name="power" value={ this.state.petToAdd.power }
                        placeholder="Pet Power" type="text"
                        onChange={ this.onInputChange }
                    />
                    <button onClick={ this.addPet }>Add Pet</button>
                </form> */}


            </section>
        )
    }
}
