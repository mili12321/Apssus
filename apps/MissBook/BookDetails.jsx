import { bookService } from './book-service.js'
import { RatingForm } from './Form.jsx'
import { BookReview } from './Review.jsx'


export class BookDetails extends React.Component {

    state = {
        isLongTxtShown: false,
        book: null

    }
    componentDidMount() {
       this.getCurrBook()
    }
    

    getReadingLength() {
        // if (!this.state.book) return
        const pageCount = this.state.book.pageCount;
        if (pageCount > 500) return 'Long reading'
        else if (pageCount > 200) return 'Decent Reading'
        else if (pageCount < 100) return 'Light Reading'
    }

    getOldLevel() {
        const publishYear = this.state.book.publishedDate
        const yearDiff = 2020 - publishYear;
        if (yearDiff > 10) return 'Veteran Book'
        else if (yearDiff < 1) return 'New!'
    }

    getPriceClass() {
        const price = this.state.book.listPrice.amount;
        if (price > 150) return 'red-price'
        else if (price < 70) return 'green-price'
    }
    getCurrBook = () => {
        const bookId = this.props.match.params.bookId
        bookService.getById(bookId)
            .then(book => this.setState({ book }))
    }

    render() {
        const book = this.state.book
        if (!book) return <h4>loading</h4>
        const bookLength = this.getReadingLength();
        const bookOldLevel = this.getOldLevel();
        const priceClass = this.getPriceClass()
        return (
            <div className='book-details'>
                <h1>{book.title}</h1>
                <img src={book.thumbnail}/>
                <h3 className={priceClass}>Price: {book.listPrice.amount}</h3>
                <br />
                <p>{bookLength}</p>
                <p>{bookOldLevel}</p>
               {book.reviews && <BookReview BookReview = {book.reviews} />}
                <RatingForm bookId={book.id} getCurrBook={this.getCurrBook}/>
                <button onClick={ () => this.props.history.push('/book')}>Back</button>
            </div>
        )
    }
}
