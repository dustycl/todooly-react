import React, { useState } from 'react';
import Tags from './Tags';

export default function ActivityOptions({ activity, updateActivity, addTag }) {

    const [activityName, setActivityName] = useState(activity[0].activityName)
    const [creationDate, setCreationDate] = useState(activity[0].creationDate)
    const [tags, setTags] = useState(activity[0].tags)
    const [date, setDate] = useState(activity[0].date)
    const [time, setTime] = useState(activity[0].time)
    const [index, setIndex] = useState(activity[1])
    const [newTag, setNewTag] = useState('')

    const stateHandlers = {
        'activityName': setActivityName,
        'creationDate': setCreationDate,
        'tags': setTags,
        'date': setDate,
        'time': setTime,
    }

    
    const handleChange = (event) => {
        stateHandlers[event.target.id](event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("options saved");
        updateActivity({
            activityName: activityName,
            creationDate: creationDate,
            tags: tags,
            date: date,
            time: time
        }, index);
    }

    const onTagFormSubmit = (event, newTag) => {
        event.preventDefault();

        setTags([...tags, newTag])

        addTag(newTag);
    }

    const handleRemoveTag = (event) => {
        setTags(tags.filter((tag) => {
            return tag !== event.target.id;
        }))
    }

        return (
            <div className="bg-slate-500 rounded-lg p-12">
                <Tags
                    handleSubmit={onTagFormSubmit}
                    tags={tags}
                    removeTag={handleRemoveTag}
                />

                <form
                  id="optionsForm"
                  className="flex flex-col"
                  onSubmit={event => handleSubmit(event)}
                >
                    <label htmlFor="activity-name" form="optionsForm">Activity Name</label>
                    <input
                        type="text"
                        name="activityName"
                        id="activity-name"
                        className="mb-2 py-1 px-2 bg-transparent border border-slate-400 rounded"
                        form="optionsForm"
                        value={activityName}
                        onChange={(event) => handleChange(event)}
                    />

                    <label htmlFor="date" form="optionsForm">Date</label>
                    <input
                        type="date"
                        id="date"
                        className="mb-2 py-1 px-2 bg-transparent border border-slate-400 rounded"
                        name="date"
                        value={date}
                        form="optionsForm"
                        onChange={(event) => handleChange(event)}
                    />

                    <label htmlFor="time" form="optionsForm">Time</label>
                    <input
                        type="time"
                        id="time"
                        className="mb-2 py-1 px-2 bg-transparent border border-slate-400 rounded"
                        name="time"
                        value={time}
                        form="optionsForm"
                        onChange={(event) => handleChange(event)}
                    />

                    <input className="bg-blue-600 rounded text-white py-2 px-4" type="submit" value="save" form="optionsForm" onClick={console.log('submit button clicked')} />
                </form>
            </div>
        )
    }