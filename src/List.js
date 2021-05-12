import React, {Component} from 'react'



class Activity extends Component {
    constructor(props) {
        super(props)
        state = {
            isMouseOver: false,
            class: "activity"
        }
    }

    handleMouseOver = () => {
        this.setState({isMouseOver: !this.state.isMouseOver});
        alert(this.state.isMouseOver);
    }

    render() {
        return (
            <div
             className={this.state.class}
             onMouseOver={this.handleMouseOver}>
                <input type="checkbox" />
                <div>{props.item}</div>
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
    const {activityList, handleMouseOver, isMouseOver} = props;

    return (
        <Activities activityList={activityList} />
    )
}

export default List