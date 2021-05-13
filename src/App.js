import React, {Component} from 'react'
import List from './List.js'

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      text: "",
      activityList: [],
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  }

  handleSubmit = () => {
    this.setState({
      activityList: this.state.activityList.concat([this.state.text]),
    });

    this.setState({
      text: "",
    });
  }

  removeActivity = (index, event) => {
    this.setState({
      activityList: this.state.activityList.filter((activity, i) => {
        return i !== index;
    })})

  }

  render() {
    return (
      <div className="small-container">
        <h1>Todooly</h1>
        <form>
          <input
           type="text"
           value={this.state.text}
           onChange={this.handleChange}
           ></input>
          <button
           className="full-button"
           type="button"
           onClick={this.handleSubmit}
           >Add activity</button>
        </form>
        <List
         activityList={this.state.activityList}
         removeActivity={this.removeActivity} />
      </div>
    )
  }
}

export default App;
