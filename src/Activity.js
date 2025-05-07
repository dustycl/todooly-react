import React from 'react'

const Activity = (props) => {
    return (
        // TODO: Make onClick work for completedActivities
        <div className="flex justify-between border border-slate-800 items-center rounded p-4 mb-2.5">
            <div className="flex items-center">
                <input
                type="checkbox"
                className="h-4 w-4 border border-slate-300 rounded appearance-none mr-2"
                name={props.item["name"]}
                onChange={(event)=>props.completeActivity(props.id, event)}
                checked={props.checked}
                />
                <div className="text-slate-300" id={props.item["creationDate"]}  onClick={(event)=>props.onSelectClick(event)} >
                    {props.item.activityName}
                </div>
            </div>
            <div>
                <button
                 className="underline text-slate-400"
                 onClick={()=>props.removeActivity(props.list, props.id)}>
                    Delete
                 </button>
            </div>
        </div>
    )
}

export default Activity