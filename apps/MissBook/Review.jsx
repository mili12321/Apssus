export class BookReview extends React.Component {
    render() {
        return <article className="book-Review" >{
            this.props.BookReview.map(book => {
                return <div className="reader-reviews">
                    <h2>reader reviews</h2>
                    <h3>review: {book.txt}</h3>
                    <h3>{book.rating} out of 5</h3>
                    <h3>published on: {book.date}</h3>
                </div>
            })
        }
        </article>
    }

}



// this.props.books.map(book => {

//     return <div key={book.id} className="book">
//         <BookPreview book={book} />
//         {/* <button onClick={ () => this.removePet(pet.id) }>x</button> */}
//     </div>
// })



// console.log(this.props);

// <h3>{this.props.BookReview[0].txt}</h3>