export function BookFilter(props) {
    return <form className="book-filter">
        <h2>Book Filter</h2>
    <select name="toFilter" className="toFilter" onChange={(ev)=> {
        props.toFilter(ev.target.value)
    }}>
        <option value="title">title</option>
        <option value="authors">authors</option>
    </select>
        <section>
            
            <input type="text" placeholder="Filter by Tytle" onChange={(ev) => {
                props.onFilter(ev.target.value)
            }} />
        </section></form>
}