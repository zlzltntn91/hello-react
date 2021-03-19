import React, {Component} from "react";

class StateClass extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         fixedDate: new Date().toLocaleString(),
    //         date: new Date().toLocaleString(),
    //         count: 0
    //     }
    // }

    state = {
        fixedDate: new Date().toLocaleString(),
        date: new Date().toLocaleString(),
        count: 0
    }

    render() {
        const {date, fixedDate, count} = this.state;
        return (
            <div>
                <div>{fixedDate}</div>
                <div>{date}</div>
                <div>{count}</div>
                <button onClick={
                    () => {
                        this.setState((prevState) => {return {count : prevState.count + 1}}, () => (alert("callback")));
                        this.setState(prevState => ({count : prevState.count + 1}))
                    }
                }>
                    갱신
                </button>
            </div>

        )
    }
}

export default StateClass