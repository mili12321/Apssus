



export function BookFilter(props) {
    return <section className="book-filter">
        <h3>Book Filter</h3>
        <input type="text" placeholder="Filter by Name" onChange={(ev)=>{
            props.onSetFilter(ev.target.value)
        }}/>
    </section>
}