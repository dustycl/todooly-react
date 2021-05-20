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

  addActivity = (list, activity) => {
    //if (!this.state.activityList.includes(activity)) {
      this.setState({
        [list]: this.state[list].concat([activity]),
      });
   // }
  }

  removeActivity = (list, index) => {
    /* TODO
      Make remove activity work with both checked and unchecked activities
      */

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
