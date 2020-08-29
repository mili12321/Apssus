export function EmailFilter({ onFilter, setFilterIsRead, setFilterIsUnRead }) {
    return (
            <section className="email-filter-container">
               <h1>filter</h1>
               <input type="text" placeholder="search" onChange={(ev)=>{
                   onFilter(ev.target.value)
               }} />
          
            <div onClick={setFilterIsRead}>Read</div>
            <div onClick={setFilterIsUnRead}>UnRead</div>
                    
               
            </section>
    )
}
