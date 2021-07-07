import React from 'react'



const Activity =(props) => {
    return (
        <div className="activity">
            <input
             type="checkbox"
             name={props.item}
             onChange={(event)=>props.completeActivity(props.id, event)}
             checked={props.checked} />
            <div>
                <div>{props.item}</div>
                <div>
                    <a href="" className="tag-button">chores</a>
                    <a href="" className="tag-button">home</a>
                </div>
             </div>
            
            <div>
                <button
                 className="muted-button activity-button-delete"
                 onClick={()=>props.removeActivity(props.list, props.id)}>Delete</button>
            </div>
        </div>
    )
}

const Activities = (props) => {
    const activities = props.activityList.map((item, index) => {
        return (
            <li key={item["name"] + "-" + item["creationDate"]}>
                <Activity
                 id={index}
                 item={item["name"]}
                 removeActivity={props.removeActivity}
                 completeActivity={props.completeActivity}
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
                    item={item["name"]}
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
    const {activityList, removeActivity, completeActivity, completedActivities} = props;

    return (
        <div>
            <Activities
            activityList={activityList}
            removeActivity={removeActivity}
            completeActivity={completeActivity} />
            <CompletedActivities
            activityList={activityList}
            removeActivity={removeActivity}
            completeActivity={completeActivity}
            completedActivities={completedActivities} />
         </div>
    )
}

export default List