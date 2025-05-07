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
            <form onSubmit={this.handleSubmit} className="mt-1 mb-8">
                <input
                 type="text"
                 value={this.state.text}
                 className="border border-slate-400 bg-slate-200 rounded-md mr-2 px-2 text-sm py-2 focus:outline-none focus:border-slate-600"
                 onChange={this.handleChange} />
                <button
                 className="px-4 py-2 rounded-md border border-slate-800 bg-slate-800 text-slate-50 text-sm"
                 type="button"
                 onClick={this.handleSubmit}
                >Add activity</button>
            </form>
        )
    }
}


export default Form