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

    this.createActivity = this.createActivity.bind(this);
    this.addActivity = this.addActivity.bind(this);
    this.removeActivity = this.removeActivity.bind(this);
    this.completeActivity = this.completeActivity.bind(this);
  }

  createActivity = (activity) => {
    return {name: activity, creationDate: Date()}
  }

  addActivity = (list, activity) => {
    if (!this.state[list].includes(activity)) {
      this.setState({
        [list]: this.state[list].concat([activity]),
      });
    }
  }

  removeActivity = (list, index) => {
    this.setState({
      [list]: this.state[list].filter((activity, i) => {
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

  render() {
    return (
      <div className="small-container">
        <h1>Todooly</h1>
        <Form
         addActivity={this.addActivity}
         createActivity={this.createActivity}
        />
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
