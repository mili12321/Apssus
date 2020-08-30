
import {BookPreview} from 'BookPreview.jsx'


export default class BookList extends React.Component { 
    
       render() {
           {if (!this.props.books) return ''}
           
           return <section className="books-list">
               {/* <Link to={ `/book/${book.id}` }>Edit</Link> */}
               {this.props.books.map(book => <BookPreview key={book.id} book={book} onSelectBook={this.props.onSelectBook} />)}
           </section>
       }
}

/*
export default function BookList() {
    return <section className="books-list">
        {this.props.books.map(book => <BookPreview book={book} onSelectBook={this.props.onSelectBook} />)}
    </section>
}
*/