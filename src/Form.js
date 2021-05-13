import React, {Component} from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmitForm(this.state.text);
    
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