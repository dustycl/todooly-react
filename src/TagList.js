import React from 'react';

const TagList = (props) => {
    const list = props.tagList.map((item, index) => {
        return(
            <li key={index}>
                <div className="tag">
                    <span>{item}</span>
                    <i id={item} className="remove-tag-btn fas fa-times" onClick={event => props.removeTag(event)}></i>
                </div>
            </li>
        );
    });

    return <ul className="tag-list">{list}</ul>;
}

export default TagList;