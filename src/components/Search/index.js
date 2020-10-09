import React from 'react';

import './index.css'

class Search extends React.Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.Submit(this.state.term);
    }

    render() {
        
        return (
            <>
            <div className='search-list'>
                <form onSubmit={this.handleSubmit}>
                    <input className='search-list' onChange={this.handleChange} name='video-search' type="text" placeholder="Search favorite videos.."/>
                </form>
            </div>
            </>
        )
    }
}
export default Search;