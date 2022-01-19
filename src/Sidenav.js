import React, { useState } from 'react'

const TagButton = (props) => {
    return <button data-tag={props.tagName} onClick={(event)=>props.setFilter(event)}>{props.tagName}</button>;
}

const TagFilterList = (props) => {
    const tagFilterList = props.tagList.map((tagName) => {
        return (
            <li key={tagName} className="nav-item"><TagButton tagName={tagName} setFilter={props.setFilter} /></li>
        );
    });

    let className = ""
    if (props.hidden) {
        className = "sidenav-drawer";
    }
    else {
        className = "sidenav-drawer visible";
    }

    return <ul id="navbar-drawer" className={className}>{tagFilterList}</ul>;
}

const Sidenav = (props) => {
    const [hidden, setHidden] = useState(true);
    return (
        <div className="sidenav">
            <div>
                <h2>Tags</h2>
                <TagFilterList tagList={props.tagList} setFilter={props.setFilter} hidden={hidden} />
            </div>
            <button id="nav-button" className="nav-button" onClick={() => setHidden(!hidden)}>Menu</button>
        </div>
    );
}

export default Sidenav;