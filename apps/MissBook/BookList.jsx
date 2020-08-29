import { BookPreview } from './BookPreview.jsx'
// import { BookDetails } from './BookDetails.jsx'





export class BookList extends React.Component {
    // if(!books) <div>loading</div>  // 

    detailsToShow(bookId) {
    console.log(bookId)
    }

    render() { return <div className="book-list">
        {
        this.props.books.map(book => {
            
            return <div key={ book.id } className="book">
                <BookPreview book={ book } />
                {/* <button onClick={ () => this.removePet(pet.id) }>x</button> */}
            </div>} ) 
    
    }
    </div> 
    }
}


