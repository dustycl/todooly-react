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

  handleSubmitForm = (activity) => {
    this.setState({
      activityList: this.state.activityList.concat([activity]),
    });
  }

  removeActivity = (index) => {
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
    }
    else {
      this.setState({
        completedActivities: this.state.completedActivities.filter((activity, i) => {
            return activity !== event.target.name;
          }
        )
      })
    }
  }

  render() {
    return (
      <div className="small-container">
        <h1>Todooly</h1>
        <Form handleSubmitForm={this.handleSubmitForm} />
        <List
         activityList={this.state.activityList}
         removeActivity={this.removeActivity} 
         completeActivity={this.completeActivity} />
      </div>
    )
  }
}

export default App;
