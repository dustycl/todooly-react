import React, {Component} from 'react'

const Activity = (props) => {
  <li>
    {props.activityName}
    <button
     className="muted-button"
    >Delete</button>
  </li>
}

class App extends Component {
  state = {
    activityList: [],
  }

  handleClick(event) {
    this.setState({
      activityList: activityList.concat(event.target.value),
    });
  }

  render() {
    return (
      <div class="small-container">
        <form className="flex">
          <input
           type="text"
           ></input>
          <button
           className="full-button"
           onClick={handleClick}>Add activity</button>
        </form>
        <ul>
          <li>Activity name <button className="muted-button">Delete</button></li>
        </ul>
      </div>
    )
  }
}

export default App;
