export function EmailFilter({ onFilter, setFilterIsRead, setFilterIsUnRead }) {
    return (
            <section className="email-filter-container">
               {/* <h1>filter</h1> */}
               <input type="text" placeholder="search" onChange={(ev)=>{
                   onFilter(ev.target.value)
               }} />
          
            <div className="Read-btn" onClick={setFilterIsRead}>Read</div>
            <div className="UnRead-btn" onClick={setFilterIsUnRead}>UnRead</div>
                    
               
            </section>
    )
}
