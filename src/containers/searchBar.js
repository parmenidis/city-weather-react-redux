import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }
    }

    render() {
        return (
            <form className="input-group">
                <input value={this.state.term}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">
                        Search
                    </button>
                </span>
            </form>
        );
    }
}

export default SearchBar;