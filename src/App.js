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
         onMouseOver={this.handleMouseOver}
         isMouseOver={this.state.isMouseOver} />
      </div>
    )
  }
}

export default App;
