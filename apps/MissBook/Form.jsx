import {bookService} from './book-service.js'


export class RatingForm extends React.Component {
    state = {
        rating: '',
        date: '',
        txt: ''
    } //bookId
    handleInput = (ev) => {
        this.setState({ [ev.target.name]: ev.target.value })
    }
    handleSubmit = (ev) => {
        ev.preventDefault();
        bookService.addReview(this.props.bookId, this.state)
        this.props.getCurrBook()
    }
    render() {
        return <form className="rating-form">
            <h2>Rating Form</h2>
            <h4>Rate The Book</h4>
            <select name="rating" className="rating" onChange={this.handleInput}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <input type="date" name="date" className="date" onChange={this.handleInput}></input>
            <input type="text" name="txt" className="txt" placeholder="review here" onChange={this.handleInput}></input>
            <button type="submit" onClick={this.handleSubmit}>submit</button>
        </form>
    }
}