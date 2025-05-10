import React, {useState} from 'react'
import List from './List.js'
import Form from './Form.js'
import Sidenav from './Sidenav.js'
import ActivityOptions from './ActivityOptions.js'

export default function App()  {

  const [activityList, setActivityList] = useState([])
  const [completedActivities, setCompletedActivities] = useState([])
  const [filteredList, setFilteredList] = useState([])
  const [filter, setFilter] = useState('all')
  const [selectedActivity, setSelectedActivity] = useState([{}, 0])
  const [activitySelected, setActivitySelected] = useState(false)
  const [tagList, setTagList] = useState(['all'])

  
  const createActivity = (activity) => {
    return ({activityName: activity,
            creationDate: Date(),
            tags: [],
            date: "",
            time: "",
          });
  }

  const addActivity = (list, activity) => {
    if (!list.includes(activity)) {
      setActivityList(
        [...list, activity]
      );
    }
  }

  const removeActivity = (list, index) => {
    setActivityList(
      list.filter((activity, i) => {
        return i !== index
      })
    );
  }

  const filterList = (list) => {
    return (list.filter((item) => {
      return item.tags.includes(filter);
    }));
  }

  const completeActivity = (index, event) => {
    if (event.target.checked) {
      setCompletedActivities(
        completedActivities.concat(
          activityList[index]
        )
      );
      removeActivity(activityList, index);
    }
    else {
      addActivity(activityList, completedActivities[index]);
      setCompletedActivities(
        completedActivities.filter((activity, i) => {
            return i !== index;
          }
        )
      )
    }
  }

  const updateActivity = (activity, index) => {
    let list = [...activityList];
    list[index] = activity;

    setActivityList([...list])
    setSelectedActivity([{}, 0])
    setActivitySelected(false)
  }

  const onSelectClick = (event) => {
    let activityIndex = 0;

    const activity = activityList.filter((activity, index) => {
      if (activity.creationDate === event.target.id) {
        activityIndex = index;
        return true;
      }
      else {
        return false;
      }
    })

    setSelectedActivity([activity[0], activityIndex])
    setActivitySelected(true)
  }

  const handleSelectActivity = () => {
    setActivitySelected(!activitySelected)
  }

  const handleSetFilter = (event) => {
      setFilter(event.target.dataset.tag)
  }

  const addTag = (tag) => {
    if (!tagList.includes(tag)) {
        setTagList([...tagList, tag])
    }
  }

    return (
      <div className="h-screen p-2 bg-slate-600">
        <div className="flex w-full h-full">
          <div className="flex-none w-64 h-full bg-slate-700 p-6 mr-4 rounded-xl text-slate-50">
            <Sidenav
              filter={filter}
              setFilter={handleSetFilter}
              tagList={tagList}
            />
          </div>
          <div className="flex-none w-128">
            {activitySelected === false && <div>
                <Form
                 addActivity={addActivity}
                 createActivity={createActivity}
                 activityList={activityList}
                />
                <List
                 activityList={activityList}
                 removeActivity={removeActivity} 
                 completeActivity={completeActivity}
                 completedActivities={completedActivities}
                 onSelectClick={onSelectClick}
                 filter={filter}
                 filterList={filterList}
                />
              </div>}

              {activitySelected === true && <div>
                  <ActivityOptions
                   activity={selectedActivity}
                   updateActivity={updateActivity}
                   setActivitySelected={setActivitySelected}
                   addTag={addTag}
                  />
                </div>}
          </div>
        </div>
      </div>
    )
  }
