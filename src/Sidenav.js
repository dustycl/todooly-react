import React, { useState } from 'react'

const TagButton = (props) => {
    let selected = props.tagName === props.filter;
    return (
        <button
          className={`w-full py-2 px-4 text-left rounded ${selected ? 'bg-slate-500' : 'hover:bg-slate-600'}`}
          data-tag={props.tagName}
          onClick={(event)=>props.setFilter(event)}
        >
            {props.tagName}
        </button>
    );
}

const TagFilterList = (props) => {
    const tagFilterList = props.tagList.map((tagName) => {
        return (
            <li key={tagName} className="nav-item w-full mb-0.5"><TagButton tagName={tagName} setFilter={props.setFilter} filter={props.filter} /></li>
        );
    });

    const EMPTY = ""
    let className = EMPTY
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
                <h1 className="text-md font-semibold mb-4">Todooly</h1>
                <h2 className="text-xs mb-2 font-light uppercase ">Tags</h2>
                <TagFilterList tagList={props.tagList} setFilter={props.setFilter} filter={props.filter} hidden={hidden} />
            </div>
            <button id="nav-button" className="sm:hidden" onClick={() => setHidden(!hidden)}>Menu</button>
        </div>
    );
}

export default Sidenav;