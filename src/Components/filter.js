import React from 'react';
import '../App.css'

class Filter extends React.Component {
    render() {
        return (
            <div className="filter">
            <input type="text" placeholder="Company"/>
            <input type="text" placeholder="Designation"/>
            <input type="location" placeholder="location"/>
            <input type="button" value="search"/>
            </div>
        )
    }
}

export default Filter;