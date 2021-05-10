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
  render() {
    return (
      <div class="small-container">
        <form className="flex">
          <input
           type="text"
           ></input>
          <button className="full-button">Add activity</button>
        </form>
        <ul>
          <li>Activity name <button className="muted-button">Delete</button></li>
        </ul>
      </div>
    )
  }
}

export default App;
