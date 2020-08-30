import {getBookCurrency} from './BookCurrency.jsx'
const { Link } = ReactRouterDOM

export function BookPreview({ book, onSelectBook }) {
    return <Link to={ `/book/${book.id}` }><article key={book.id} className="book-preview">
        <h3>{book.title}</h3>
        <img src={book.thumbnail} />
        <h4>{getBookCurrency(book.listPrice)}</h4>
    </article></Link>
}

// function getBookCurrency(bookPrice) {
//     switch (bookPrice.currencyCode) {
//         case 'EUR':
//             return `${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(bookPrice.amount)}`
//         case 'ILS':
//             return `${new Intl.NumberFormat('he-IL', { style: 'currency', currency: 'ILS' }).format(bookPrice.amount)}`
//         case 'USD':
//             return `${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(bookPrice.amount)}`
//     }
// }