import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        //console.log(event.target.value);

        if( event.target.value ) {
            this.setState({
                term: event.target.value
            });
        }
    }

    onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input
                    value={this.state.term ? this.state.term : ''}
                    placeholder="Get a five-day forecast in your favorite cities."
                    className="form-control"
                    onChange={this.onInputChange}
                />
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