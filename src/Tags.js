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
            <div className="mb-6">
                <form onSubmit={event => this.handleSubmit(event)}>
                    <div className="flex">
                        <div className="flex flex-col">
                            <label htmlFor="tags">Tags</label>
                            <div>
                                <input
                                    type="text"
                                    name="newTag"
                                    className="py-1 px-2 mr-2 bg-transparent border border-slate-400 rounded"
                                    id="newTag"
                                    value={this.state.newTag}
                                    placeholder="add tag"
                                    onChange={(event) => this.handleChange(event)}
                                />
                                <button className="bg-blue-600 rounded py-0.5 px-2 text-white" type="submit" value="+">
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                <TagList tagList={this.props.tags} removeTag={this.props.removeTag} />
            </div>
        );
    }
}

export default Tags;