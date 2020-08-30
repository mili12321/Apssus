const { Link } = ReactRouterDOM
import {getBookCurrency} from './BookCurrency.jsx'


export default class BookDetails extends React.Component { 

    state = {
        shouldShowFullDescription:false
    }

    // readMoreElement = <a onClick={setState({shouldShowFullDescription = true})}></a>

    getBookLength() {
        const pageCount = this.props.book.pageCount
        var bookLength;
        if (pageCount > 500) {
            bookLength = 'Long Reading'
        } else if (pageCount > 200) {
            bookLength = 'Decent Reading'
        } else {
            bookLength = 'Light Reading'
        }

    return <h3>{bookLength}</h3>
    }


    getPublishedDate() {
        var publishedDate = this.props.book.publishedDate
        var bookAge = new Date().getFullYear() - publishedDate
        if (bookAge >= 10) {
            return <h3>Veteran Book</h3>
        } else if (bookAge <= 1) {
            return <h3>New!</h3>
        } else {
            return ''
        }
    }

    // getBookCurrency() {
    //     var bookPrice = this.props.book.listPrice
    //     switch (bookPrice.currencyCode) {
    //         case 'EUR':
    //             return `${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(bookPrice.amount)}`
    //         case 'ILS':
    //             return `${new Intl.NumberFormat('he-IL', { style: 'currency', currency: 'ILS' }).format(bookPrice.amount)}`
    //         case 'USD':
    //             return `${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(bookPrice.amount)}`
    // }}

    getPriceClass() {
        var bookPrice = this.props.book.listPrice.amount
        if (bookPrice > 150) {
            return 'book-price-red'
        } else if (bookPrice < 20) {
            return 'book-price-green'
        } else {
            return ''
        }
    }

    // getDescriptionLength = () => {
    //     var newDesc = (this.state.shouldShowFullDescription) ? this.props.book.description : this.props.book.description.substring(0,100) + '...'

    // }


    onClickReadMore = () => {
        this.setState({shouldShowFullDescription : true})
    }

    render() {
        return <section className="book-details">
                <div className="back-button" onClick={this.props.onUnSelectBook}>Back to list</div>
                    <h2 className="book-title">{this.props.book.title}</h2>
                <img src={`${this.props.book.thumbnail}`} />
                    <div className={this.getPriceClass()}>{BookCurrency.getBookCurrency(this.props.book.listPrice)}</div>
                    {this.getBookLength()}
                    {this.getPublishedDate()}
                    {(this.state.shouldShowFullDescription || this.props.book.description.length < 100) ? <p>{this.props.book.description}</p> : (<p>{this.props.book.description.substring(0,100) + '...'}<a onClick={this.onClickReadMore}>Read More</a></p>)}
                 </section>
    }

    
}