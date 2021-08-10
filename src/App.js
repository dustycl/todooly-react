import React, {Component} from 'react'
import List from './List.js'
import Form from './Form.js'
import Sidenav from './Sidenav.js'

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      activityList: [],
      completedActivities: [],
      tagName: "",
    }

    this.createActivity = this.createActivity.bind(this);
    this.addActivity = this.addActivity.bind(this);
    this.removeActivity = this.removeActivity.bind(this);
    this.completeActivity = this.completeActivity.bind(this);
    this.handleTagChange = this.handleTagChange.bind(this);
    this.addTag = this.addTag.bind(this);
  }

  createActivity = (activity) => {
    return ({name: activity,
            creationDate: Date(),
            tags: [],
          });
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

  filterList = (event) => {
    const filteredList = this.state.activityList.filter((item) => {
      return item === event.target.key;
    });
    return filteredList;
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
      <div className="medium-container">
        <div className="flex-row">
          <div className="flex-large one-fourth">
            <Sidenav />
          </div>
          <div className="flex-large three-fourths">
          <h1>Todooly</h1>
            <Form
             addActivity={this.addActivity}
             createActivity={this.createActivity}
            />
            <List
             activityList={this.state.activityList}
             removeActivity={this.removeActivity} 
             completeActivity={this.completeActivity}
             completedActivities={this.state.completedActivities}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
