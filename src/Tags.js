import React from 'react';
import TagList from './TagList';

class Tags extends React.Component {
    state = {
        newTag: ''
    }

    handleChange = (event) => {
        this.setState({
            newTag: event.target.value
        })
    }

    handleSubmit = (event) => {
        this.props.handleSubmit(event, this.state.newTag);

        this.setState({
            newTag: ''
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <div>
                        <div>
                            <label htmlFor="tags">Tags</label>
                            <input
                                type="text"
                                name="newTag"
                                id="newTag"
                                value={this.state.newTag}
                                placeholder="add tag"
                                onChange={(event) => this.handleChange(event)}
                            />
                        </div>
                        <div>
                            <button type="submit" value="+"><i className="fas fa-plus"></i></button>
                        </div>
                    </div>
                </form>
                <TagList tagList={this.props.tags} removeTag={this.props.removeTag} />
            </div>
        );
    }
}

export default Tags;