import React, {Component} from 'react'

class App extends Component {
  render() {
    return (
      <div class="container">
        <form className="flex">
          <input
           type="text"
           ></input>
          <button className="full-button">Add activity</button>
        </form>
      </div>
    )
  }
}

export default App;
