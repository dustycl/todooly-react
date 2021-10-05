import React from 'react'
import Activity from './Activity.js'

const Activities = (props) => {
    const activities = props.list.map((item, index) => {
        return (
            <li key={index}>
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

    let list = [];
    if (props.filter) {
        list = props.filterList(props.activityList);
    }
    else {
        list = props.activityList;
    }
    

    return (
        <div>
            <Activities
             list={list}
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