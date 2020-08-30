import {BookService} from '../services/bookService.js'
import {BookFilter} from '../cmps/BookFilter.jsx'
import BookList from '../cmps/BookList.jsx'
import BookDetails from './BookDetails.jsx'
import { Modal } from '../cmps/Modal.jsx';
import  BookAdd  from '../cmps/BookAdd.jsx';

export default class BookApp extends React.Component { 

    state = {
        books: null,
        filterBy: '',
        selectedBook: null
    }

    isReady = false

    onSetFilter = (filterBy) => {
        console.log('filter by ', filterBy);
        this.setState({ filterBy })
    }

    loadBooks(books) {
        this.isReady = true
        this.setState({books})
    }

    booksToShow() {
        if (!this.state.books) return
        return this.state.books.filter(book => book.title.includes(this.state.filterBy))
    }

    onSelectBook = (id) => {
        this.setState({selectedBook:this.state.books[this.findBookById(id)]})
    }

    findBookById(id) {
        return this.state.books.findIndex(book => book.id === id)
    }

    onUnSelectBook = () => {
        this.setState({selectedBook:null})
    }

    getBooks = () => {
        BookService.getAllBooks().then(books => this.loadBooks(books))
    }
    componentDidMount() {
        this.getBooks()
    }

    render() {
        
            {if (this.isReady) {
                return <div> {!this.state.selectedBook ? <section><div className="add-book-title">Add a book</div><BookFilter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter} />
                <BookAdd whenChange={this.getBooks} />
                <BookList onSelectBook={this.onSelectBook} books={this.booksToShow()}  /></section>: <section><BookDetails book={this.state.selectedBook} onUnSelectBook={this.onUnSelectBook} />
                <Modal  >
                </Modal>
                </section>
            } </div>} else {
                return <div></div>
            }

        }}}
