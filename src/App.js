import React, {Component} from 'react'
import List from './List.js'
import Form from './Form.js'

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      activityList: [],
      completedActivities: [],
    }
  }

  createActivity = (activity) => {
    return {name: activity, creationDate: Date()}
  }

  addActivity = (activity) => {
    //if (!this.state.activityList.includes(activity)) {
      this.setState({
        activityList: this.state.activityList.concat([this.createActivity(activity)]),
      });
   // }
  }

  removeActivity = (index) => {
    /* TODO
      Make remove activity work with both checked and unchecked activities
      */
     
    this.setState({
      activityList: this.state.activityList.filter((activity, i) => {
        return i !== index;
      })
    });
  }

  completeActivity = (index, event) => {
    if (event.target.checked) {
      this.setState({
        completedActivities: this.state.completedActivities.concat(
          this.state.activityList[index]
        )
      });
      this.removeActivity(index);
    }
    else {
      this.setState({
        completedActivities: this.state.completedActivities.filter((activity, i) => {
            return activity !== event.target.name;
          }
        )
      })
      this.addActivity(event.target.name);
    }
  }

  render() {
    return (
      <div className="small-container">
        <h1>Todooly</h1>
        <Form handleSubmitForm={this.addActivity} />
        <List
         activityList={this.state.activityList}
         removeActivity={this.removeActivity} 
         completeActivity={this.completeActivity}
         completedActivities={this.state.completedActivities} />
      </div>
    )
  }
}

export default App;
