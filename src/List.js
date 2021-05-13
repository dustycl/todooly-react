import React from 'react'



const Activity =(props) => {
    return (
        <div className="activity">
            <input type="checkbox" />
            <div>{props.item}</div>
            <div>
                <button
                 className="muted-button activity-button-delete"
                 onClick={()=>props.removeActivity(props.id)}>Delete</button>
            </div>
        </div>
    )
}

const Activities = (props) => {
    const activities = props.activityList.map((item, index) => {
        return (
            <li key={index}>
                <Activity id={index} item={item} removeActivity={props.removeActivity} />
            </li>
        )
    })

    return (
        <ul className="activity-list">{activities}</ul>
    )
  }

const List = (props) => {
    const {activityList, removeActivity} = props;

    return (
        <Activities activityList={activityList} removeActivity={removeActivity} />
    )
}

export default List