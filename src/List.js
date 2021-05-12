import React, {Component} from 'react'



class Activity extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: props.item,
            class: "activity"
        }
    }

    handleMouseEnter = () => {
        this.setState({class: this.state.class.concat(" activity-hover")});
    }

    handleMouseLeave = () => {
        this.setState({class: "activity"})
    }

    render() {
        return (
            <div
             className={this.state.class}
             onMouseEnter={this.handleMouseEnter}
             onMouseLeave={this.handleMouseLeave} >
                <input type="checkbox" />
                <div>{this.item}</div>
                <div>
                    <button className="muted-button activity-button-delete">Delete</button>
                </div>
            </div>
        )
    }
}

const Activities = (props) => {
    const activities = props.activityList.map((item, index) => {
        return (
            <li key={index}>
                <Activity item={item} />
            </li>
        )
    })

    return (
        <ul className="activity-list">{activities}</ul>
    )
  }

const List = (props) => {
    const {activityList} = props;

    return (
        <Activities activityList={activityList} />
    )
}

export default List