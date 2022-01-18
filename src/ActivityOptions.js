import React from 'react';
import Tags from './Tags';

class ActivityOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activityName: this.props.activity[0].activityName,
            creationDate: this.props.activity[0].creationDate,
            tags: [...this.props.activity[0].tags],
            date: this.props.activity[0].date,
            time: this.props.activity[0].time,
            index: this.props.activity[1],
            newTag: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("options saved");
        this.props.updateActivity({
            activityName: this.state.activityName,
            creationDate: this.state.creationDate,
            tags: this.state.tags,
            date: this.state.date,
            time: this.state.time
        }, this.state.index);
    }

    onTagFormSubmit = (event, newTag) => {
        event.preventDefault();

        this.setState({
            tags: [...this.state.tags, newTag],
        });

        this.props.addTag(newTag);
    }

    handleRemoveTag = (event) => {
        this.setState({
            tags: this.state.tags.filter((tag) => {
                return tag !== event.target.id;
            })
        });
    }

    render() {
        return (
            <div>
                <Tags
                    handleSubmit={this.onTagFormSubmit}
                    tags={this.state.tags}
                    removeTag={this.handleRemoveTag}
                />

                <form id="optionsForm" onSubmit={event => this.handleSubmit(event)}>
                    <label htmlFor="activity-name" form="optionsForm">Activity Name</label>
                    <input
                        type="text"
                        name="activityName"
                        id="activity-name"
                        form="optionsForm"
                        value={this.state.activityName}
                        onChange={(event) => this.handleChange(event)}
                    />

                    <label htmlFor="date" form="optionsForm">Date</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={this.state.date}
                        form="optionsForm"
                        onChange={(event) => this.handleChange(event)}
                    />

                    <label htmlFor="time" form="optionsForm">Time</label>
                    <input
                    type="time"
                    id="time"
                    name="time"
                    value={this.state.time}
                    form="optionsForm"
                    onChange={(event) => this.handleChange(event)}
                    />

                    <input type="submit" value="save" form="optionsForm" />
                </form>
            </div>
        )
    }
}

export default ActivityOptions