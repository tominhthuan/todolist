import React, { Component } from 'react';



class Footer extends Component {
    constructor() {
        super();

    }

    render() {
        const { totalTodos, filtersTodo } = this.props;

        return (
            <div className="foo-footer">
                <span className="todo-count">
                    <strong>{totalTodos}</strong>
                    <span> </span>
                    <span>items left</span>
                </span>
                <ul className="filters">
                    <li onClick={() => filtersTodo("all")}>
                        <a className='selected' href="#/">All</a>
                    </li>
                    <span> </span>
                    <li onClick={() => filtersTodo("active")}>
                        <a href="#/active">Active</a>
                    </li>
                    <span> </span>
                    <li onClick={() => filtersTodo("completed")}>
                        <a href="#/completed">Completed</a>
                    </li>
                </ul>
            </div>);


    }
}
export default Footer;