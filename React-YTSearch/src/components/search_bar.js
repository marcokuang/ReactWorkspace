import React, {Component} from 'react';

class SearchBar extends Component{

    constructor (props) {
        super(props);

        this.state = {term: 'video search'};
        this.onInputChange = this.onInputChange.bind(this);
    }

    render () {
        return (
            <div>
                <input value={this.state.term} onChange={this.onInputChange} />
                <p>value of the input: {this.state.term} </p>
            </div>
        )
    }

    onInputChange(e){
        this.setState({term: e.target.value});
        console.log(e.target.value);
    }
}

export default SearchBar;