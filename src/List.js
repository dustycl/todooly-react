import React from 'react'

const Activities = (props) => {
    const activities = props.activityList.map((item, index) => {
        return (
            <li key={index} className="activity">
                <div>{item}</div>
                <div>
                    <button className="muted-button">Delete</button>
                </div>
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
        <Activities activityList={activityList}/>
    )
}

export default List