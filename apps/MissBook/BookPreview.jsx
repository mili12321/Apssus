
const { Link } = ReactRouterDOM

export function BookPreview(props) {

     return <Link to={ `/book/${props.book.id}` }>
     <article className="book-preview" >
        <h3>{props.book.title}</h3>
        <h4>subtitle: {props.book.subtitle}</h4>
    </article> 
    </Link>
}


