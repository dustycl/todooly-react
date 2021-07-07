import React, {Component} from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }

        this.createActivity = this.createActivity.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    createActivity = (activity) => {
        return {name: activity, creationDate: Date()}
      }

    handleChange = (event) => {
        this.setState({
            text: event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmitForm("activityList", this.createActivity(this.state.text));
    
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