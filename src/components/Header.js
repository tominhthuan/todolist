import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        const { onKeyUp, onChange, value } = this.props;
        return (
            <div className='header'>
                <h1>TodoApp</h1>
                <input
                    className='new-todo'
                    type='text'
                    placeholder='Add a new item'
                    onKeyUp={onKeyUp}
                    onChange={onChange}
                    value={value}
                />
            </div>
        );
    }
}
export default Header;
