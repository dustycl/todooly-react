import React, {Component} from 'react'
import List from './List.js'
import Form from './Form.js'
import Sidenav from './Sidenav.js'
import ActivityOptions from './ActivityOptions.js'

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      activityList: [],
      completedActivities: [],
      filteredList: [],
      filter: 'all',
      selectedActivity: [{}, 0],
      activitySelected: false,
      tagList: ['all']
    }

    this.createActivity = this.createActivity.bind(this);
    this.addActivity = this.addActivity.bind(this);
    this.removeActivity = this.removeActivity.bind(this);
    this.completeActivity = this.completeActivity.bind(this);
    this.updateActivity = this.updateActivity.bind(this);
    this.onSelectClick = this.onSelectClick.bind(this);
    this.setActivitySelected = this.setActivitySelected.bind(this);
    this.filterList = this.filterList.bind(this);
  }

  createActivity = (activity) => {
    return ({activityName: activity,
            creationDate: Date(),
            tags: [],
            date: "",
            time: "",
          });
  }

  addActivity = (list, activity) => {
    if (!this.state[list].includes(activity)) {
      this.setState({
        [list]: [...this.state[list], activity],
      });
    }
  }

  removeActivity = (list, index) => {
    this.setState({
      [list]: this.state[list].filter((activity, i) => {
        return i !== index
      })
    });
  }

  filterList = (list) => {
    return (list.filter((item) => {
      return item.tags.includes(this.state.filter);
    }));
  }

  completeActivity = (index, event) => {
    if (event.target.checked) {
      this.setState({
        completedActivities: this.state.completedActivities.concat(
          this.state.activityList[index]
        )
      });
      this.removeActivity("activityList", index);
    }
    else {
      this.addActivity("activityList", this.state.completedActivities[index]);
      this.setState({
        completedActivities: this.state.completedActivities.filter((activity, i) => {
            return i !== index;
          }
        )
      })
    }
  }

  updateActivity = (activity, index) => {
    let list = [...this.state.activityList];
    list[index] = activity;

    this.setState({
      activityList: [...list],
      selectedActivity: [{}, 0],
      activitySelected: false
    });
  }

  onSelectClick = (event) => {
    let activityIndex = 0;

    const activity = this.state.activityList.filter((activity, index) => {
      if (activity.creationDate === event.target.id) {
        activityIndex = index;
        return true;
      }
      else {
        return false;
      }
    })
    this.setState({
      selectedActivity: [activity[0], activityIndex],
      activitySelected: true,
    });
  }

  setActivitySelected = () => {
    this.setState({activitySelected: !this.state.activitySelected})
  }

  setFilter = (event) => {
    this.setState({
      filter: event.target.dataset.tag
    });
  }

  addTag = (tag) => {
    if (!this.state.tagList.includes(tag)) {
      this.setState({
        tagList: [...this.state.tagList, tag]
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="flex-row">
          <div className="flex-small one-fourth">
            <Sidenav setFilter={this.setFilter} tagList={this.state.tagList} />
          </div>
          <div className="flex-small three-fourths">
            <h1>Todooly</h1>
            {this.state.activitySelected === false && <div>
                <Form
                 addActivity={this.addActivity}
                 createActivity={this.createActivity}
                />
                <List
                 activityList={this.state.activityList}
                 removeActivity={this.removeActivity} 
                 completeActivity={this.completeActivity}
                 completedActivities={this.state.completedActivities}
                 onSelectClick={this.onSelectClick}
                 filter={this.state.filter}
                 filterList={this.filterList}
                />
              </div>}

              {this.state.activitySelected === true && <div>
                  <ActivityOptions
                   activity={this.state.selectedActivity}
                   updateActivity={this.updateActivity}
                   setActivitySelected={this.setActivitySelected}
                   addTag={this.addTag}
                  />
                </div>}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
