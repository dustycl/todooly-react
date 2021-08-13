import React from 'react'

const Activity =(props) => {
    return (
        // TODO: Make onClick work for completedActivities
        <div className="activity" id={props.item["creationDate"]}  onClick={(event)=>props.onSelectClick(event)}>
            <input
             type="checkbox"
             name={props.item["name"]}
             onChange={(event)=>props.completeActivity(props.id, event)}
             checked={props.checked}
            />
            <div>
                {props.item.name}
            </div>
            <div>
                <button
                 className="muted-button activity-button-delete"
                 onClick={()=>props.removeActivity(props.list, props.id)}>
                    Delete
                 </button>
            </div>
        </div>
    )
}

export default Activity