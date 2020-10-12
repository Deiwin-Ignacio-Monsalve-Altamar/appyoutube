import React from 'react';

import './index.css'

/*Getting the data entered and looking for it in the API*/
class Search extends React.Component {
    handleChange = (event) => {
        this.setState({
            /*palabra a search */
            term: event.target.value
        });
        /*Saving local for usage in another component */
        localStorage.setItem('search', JSON.stringify(this.state))
    };

    /*when the search engine with enter*/
    handleSubmit = event => {
        event.preventDefault();
        this.props.Submit(this.state.term);
        
    }

    render() {
        
        return (
            <>
            <div className='search-list'>
                <form onSubmit={this.handleSubmit}>
                    {/*Finder bar*/}
                    <input className='search-list' onChange={this.handleChange} name='video-search' type="text" placeholder="Search favorite videos.."/>
                </form>
            </div>
            </>
        )
    }
}
export default Search;