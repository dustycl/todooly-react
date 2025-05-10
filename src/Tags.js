import React, { useState } from 'react';
import TagList from './TagList';

export default function Tags(props) {

    const [newTag, setNewTag] = useState('')

    const handleChange = (event) => {
        setNewTag(event.target.value)
    }

    const handleSubmit = (event) => {
        props.handleSubmit(event, newTag);

        setNewTag('')
    }

        return (
            <div className="mb-6">
                <form onSubmit={event => handleSubmit(event)}>
                    <div className="flex">
                        <div className="flex flex-col">
                            <label htmlFor="tags">Tags</label>
                            <div>
                                <input
                                    type="text"
                                    name="newTag"
                                    className="py-1 px-2 mr-2 bg-transparent border border-slate-400 rounded"
                                    id="newTag"
                                    value={newTag}
                                    placeholder="add tag"
                                    onChange={(event) => handleChange(event)}
                                />
                                <button className="bg-blue-600 rounded py-0.5 px-2 text-white" type="submit" value="+">
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                <TagList tagList={props.tags} removeTag={props.removeTag} />
            </div>
        );
    }