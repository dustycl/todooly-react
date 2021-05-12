import React from 'react'



const Activity =(props) => {
    return (
        <div className="activity">
            <input type="checkbox" />
            <div>{props.item}</div>
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
                <Activity item={item} />
            </li>
        )
    })

    return (
        <ul className="activity-list">{activities}</ul>
    )
  }

const List = (props) => {
    const {activityList} = props;

    return (
        <Activities activityList={activityList} />
    )
}

export default List