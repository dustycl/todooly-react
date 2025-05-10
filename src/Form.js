import React, {useState} from 'react'

export default function Form(props) {
    const [text, setText] = useState('')
    

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addActivity(props.activityList, props.createActivity(text));
    
        setText('')
      }

        return (
            <form onSubmit={handleSubmit} className="mt-1 mb-8">
                <input
                 type="text"
                 value={text}
                 className="border border-slate-400 bg-slate-200 rounded-md mr-2 px-2 text-sm py-2 focus:outline-none focus:border-slate-600"
                 onChange={handleChange} />
                <button
                 className="px-4 py-2 rounded-md border border-slate-800 bg-slate-800 text-slate-50 text-sm"
                 type="button"
                 onClick={handleSubmit}
                >
                    Add activity
                </button>
            </form>
        )
    }
