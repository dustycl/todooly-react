import React from 'react'

const TagButton = (props) => {
    return <button data-tag={props.tagName} onClick={(event)=>props.setFilter(event)}>{props.tagName}</button>;
}

const TagFilterList = (props) => {
    const tagFilterList = props.tagList.map((tagName) => {
        return (
            <li key={tagName}><TagButton tagName={tagName} setFilter={props.setFilter} /></li>
        );
    });

    return <ul>{tagFilterList}</ul>;
}

const Sidenav = (props) => {

    return (
        <div className="sidenav">
            <h2>Tags</h2>
            <TagFilterList tagList={props.tagList} setFilter={props.setFilter} />
        </div>
    );
}

export default Sidenav;