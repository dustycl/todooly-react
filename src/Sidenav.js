import React from 'react'

const Sidenav = (props) => {
    return (
        <div className="sidenav">
            <h2>Dustin</h2>
            <h3>Tags</h3>
            <ul>
                <li><button key="all" data-tag="" onClick={(event)=>props.setFilter(event)}>All</button></li>
                <li><button key="home" data-tag="home" onClick={(event)=>props.setFilter(event)}>Home</button></li>
                <li><button key="chores" data-tag="chores" onClick={(event)=>props.setFilter(event)}>Chores</button></li>
                <li><button key="school" data-tag="school" onClick={(event)=>props.setFilter(event)}>School</button></li>
            </ul>
        </div>
    );
}

export default Sidenav;