import React, {Component} from 'react'

const Activities = (props) => {
    const activities = props.activityList.map((item, index) => {
        return (
            <li key={index}>
                <div>{item}</div>
                <button className="muted-button">Delete</button>
            </li>
        )
    })

    return (
        <ul>{activities}</ul>
    )
  }

const List = (props) => {
    const {activityList} = props;

    return (
        <ul>
            <Activities activityList={activityList}/>
        </ul>
    )
}

export default List