import React from 'react'

const Activity = (props) => {
    return (
        <div
         className="activity"
         onMouseOver={props.handleMouseOver}>
            <input type="checkbox" />
            <div>{item}</div>
            <div>
                <button className="muted-button activity-button-delete">Delete</button>
            </div>
        </div>
    )
}

const Activities = (props) => {
    const activities = props.activityList.map((item, index) => {
        return (
            <li key={index}>
                
            </li>
        )
    })

    return (
        <ul className="activity-list">{activities}</ul>
    )
  }

const List = (props) => {
    const {activityList, handleMouseOver} = props;

    return (
        <Activities activityList={activityList} onMouseOver={handleMouseOver} />
    )
}

export default List