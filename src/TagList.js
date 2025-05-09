import React from 'react';

const TagList = (props) => {
    const list = props.tagList.map((item, index) => {
        return(
            <li key={index} className="mt-4">
                <div className="rounded-full border border-slate-700 px-1 py-.5 w-fit">
                    <span className="mr-1">{item}</span>
                    <i id={item} className="remove-tag-btn fas fa-times fa-small" onClick={event => props.removeTag(event)}></i>
                </div>
            </li>
        );
    });

    return <ul className="tag-list">{list}</ul>;
}

export default TagList;