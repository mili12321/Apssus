import { getGoogleBooks } from '../services/google-books-service.js'
import { BookService } from '../services/bookService.js'

export default class BookAddResults extends React.Component {
    state = {
        books: null
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.searchQuery === this.props.searchQuery) return
        if (this.props.searchQuery.length === 0) {
            console.log('searchQuery')
            this.setState({books:null})
            return }
        this.getBooksFromApi()
        
    }
    
    addBook = (bookIdx) => {
        const book = this.state.books[bookIdx]
        var newBook = {
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            id: book.id,
            listPrice: {amount: book.saleInfo.listPrice.amount, currencyCode:book.saleInfo.listPrice.currencyCode},
            pageCount: book.volumeInfo.pageCount,
            title: book.volumeInfo.title,
            publishedDate: book.volumeInfo.publishedDate,
            isOnSale: false,
            thumbnail: book.volumeInfo.imageLinks.thumbnail
        }
        BookService.addGoogleBook(newBook).then(() => this.props.whenChange())
        
        
    }

    getBooksFromApi() {
        getGoogleBooks(this.props.searchQuery).then(data => this.setState({books:data.items}))
    }

    render() {
        if (!this.state.books) return <div></div>
        return (
            <ul className="google-books-search-results">
                {this.state.books.map((book,idx) => {
                    if (book.saleInfo.listPrice){
                        return (<li key={idx}>
                            {book.volumeInfo.title}
                            <button onClick={() => {this.addBook(idx)}}>Add Book</button>
                    </li>)
                        }
                })}
            </ul>
        )
    }
}


// authors: ["William Shakespeare"]
// categories: ["Computers", "Hack"]
// description: "aliquet euismod mi vivamus bibendum donec etiam quisque iaculis ullamcorper est sed"
// id: "vxYYYdVlEH3"
// language: "sp"
// listPrice: {amount: 186, currencyCode: "ILS", isOnSale: true}
// amount: 186
// currencyCode: "ILS"
// isOnSale: true
// pageCount: 904
// publishedDate: 2011
// subtitle: "varius malesuada augue molestie sollicitudin faucibus mi eu tempus"
// thumbnail: "http://coding-academy.org/books-photos/2.jpg"
// title: "donec mi ullamcorper"