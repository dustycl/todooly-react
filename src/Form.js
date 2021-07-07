import React, {Component} from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addActivity("activityList", this.props.createActivity(this.state.text));
    
        this.setState({
          text: "",
        });
      }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                 type="text"
                 value={this.state.text}
                 onChange={this.handleChange} />
                <button
                 className="full-button"
                 type="button"
                 onClick={this.handleSubmit}
                >Add activity</button>
            </form>
        )
    }
}


export default Form