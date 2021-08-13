import React from 'react'

const ActivityOptions = (props) => {
    console.log(props.activity.name);
    const activityName = props.activity.name;
    return (
        <div>
            <p>Activity Name</p>
            <h2>{activityName}</h2>
        </div>
    )
}

export default ActivityOptions