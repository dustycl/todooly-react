import React from 'react'



const Activity =(props) => {
    return (
        <div className="activity">
            <input type="checkbox" onChange={()=>props.completeActivity(props.id)} />
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
                <Activity
                 id={index}
                 item={item}
                 removeActivity={props.removeActivity}
                 completeActivity={props.completeActivity} />
            </li>
        )
    })

    return (
        <ul className="activity-list">{activities}</ul>
    )
  }

const List = (props) => {
    const {activityList, removeActivity, completeActivity} = props;

    return (
        <Activities
         activityList={activityList}
         removeActivity={removeActivity}
         completeActivity={completeActivity} />
    )
}

export default List