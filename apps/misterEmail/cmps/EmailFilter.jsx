export function EmailFilter({ onFilter, setFilterIsRead, setFilterIsUnRead,toggleMenu ,displayed}) {
    return (

        <React.Fragment> 
        {/* <div className="hamburger-button" onClick={toggleMenu}>
        <i className="fa fa-bars"></i>
    </div>
    <div class={`mobile-menu slide-in-top ${displayed}`}>
        <a className="mobile-nav-link" href="#"><i className="fas fa-plus"></i><span className='compose'>Compose</span></a>
        <a className="mobile-nav-link" href="#"><i className="fas fa-inbox"></i><span className="Inbox">Inbox</span></a>
        <a className="mobile-nav-link" href="#"><i className="fas fa-star"></i><span>Starred</span></a>
        <a className="mobile-nav-link" href="#"><i className="fas fa-share-square"></i><span>Sent mail</span></a>
        <a className="mobile-nav-link" href="#"><i className="fab fa-firstdraft"></i><span>Drafs</span></a>
    </div> */}
            <section className="email-filter-container">

           
               {/* <h1>filter</h1> */}
               
               <input className="search-input2" type="text" placeholder="search" onChange={(ev)=>{
                   onFilter(ev.target.value)
               }}
               
                /><i class="fas fa-search"></i>
                {/* <select className="custom-select">
                    <option className="Read-btn" onClick={setFilterIsRead}>Read</option>
                    <option className="UnRead-btn" onClick={setFilterIsUnRead}>UnRead</option>
                </select> */}
                <div className="filterByRead">
                    <div className="Read-btn" onClick={setFilterIsRead}>Read</div>
                    <div className="UnRead-btn" onClick={setFilterIsUnRead}>UnRead</div>
                </div>

                
               
            </section>
            </React.Fragment>
    )
    
}
