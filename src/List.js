import React from 'react'
import Activity from './Activity.js'

const Activities = (props) => {
    const activities = props.activityList.map((item, index) => {
        return (
            <li key={item["name"] + "-" + item["creationDate"]}>
                <Activity
                 id={index}
                 item={item}
                 removeActivity={props.removeActivity}
                 completeActivity={props.completeActivity}
                 onSelectClick={props.onSelectClick}
                 list="activityList"
                 checked="" />
            </li>
        )
    })

    return (
        <ul className="activity-list">{activities}</ul>
    )
  }

  const CompletedActivities = (props) => {
      const activities = props.completedActivities.map((item, index) => {
          return (
              <li key={item["name"] + "-" + item["creationDate"]}>
                  <Activity
                    id={index}
                    item={item}
                    removeActivity={props.removeActivity}
                    completeActivity={props.completeActivity}
                    list="completedActivities"
                    checked="checked" />
              </li>
          )
      })

      return (
          <ul className="activity-list">{activities}</ul>
      )
  }

const List = (props) => {
    const {activityList, removeActivity, completeActivity, completedActivities, onSelectClick} = props;

    return (
        <div>
            <Activities
             activityList={activityList}
             removeActivity={removeActivity}
             completeActivity={completeActivity}
             onSelectClick={onSelectClick}
            />
            <CompletedActivities
             activityList={activityList}
             removeActivity={removeActivity}
             completeActivity={completeActivity}
             completedActivities={completedActivities} />
         </div>
    )
}

export default List