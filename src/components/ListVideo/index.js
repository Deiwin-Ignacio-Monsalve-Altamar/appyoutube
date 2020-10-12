import React from 'react';
import axios from 'axios';



import Search from '../Search/index';
/* import youtube from '../../apis/youtube'; */
import VideoList from '../VideosList/index';
import Inicio from '../Inicio/index'

import './index.css'



/*Bidding and searching for videos */
class ListVideo extends React.Component {
    state = {
        loading: true,
        error: null,
        maximus: 4,
        videos: [],
        selectedVideo: null,
        termFrom: ''
    }
    
    handleSubmit = async (termFromSearchBar, maximus) => {


        const KEY = this.props.Key;
        
        /*Creating a request with axios to bring the searched videos */   
        const youtube = axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3/',
            params: {
                part: 'snippet',
                maxResults: this.state.maximus,
                key: KEY
            }
        })
        
        try {
            const response = await youtube.get('/search', {
                params: {
                    q: termFromSearchBar
                }
            })
                /*Getting the data and states */
                this.setState({
                    loading: false,
                    videos: response.data.items,
                    maximus: this.state.maximus + maximus
                })
        
                console.log("this is resp",response);
            
        } catch (error) {
            this.setState({loading: true, error: error})
        }
    };

    /*Saving the selected video */
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    /*Adding more videos found to show */
    handleMoremaximus =() =>{
        let search = JSON.parse(localStorage.getItem('search'))         
        /* this.setState({maximus: this.state.maiximus + 5}) */
        try {
            this.handleSubmit(search.term, 2)
        } catch (error) {
            console.error(error)
        }
    }
    render() {

        /*Condition if there is an error when doing the get */
        if (this.state.error) {
            return (
              <div>
                <h1>{this.state.error.message}</h1>
              </div>
            );
          }
        return (
        <div className="d-flex">
            {/*Calling the component start and sending the selected video*/}
            <Inicio data={this.state} Key={this.props.Key} handleVideoSelect={this.handleVideoSelect}/>
            <div className="container-fluid d-flex list-container">
                <div className="row list_videos align-items-center d-flex justify-content-center">
                    
                    {/*Search video in the input */}
                    <Search Submit={this.handleSubmit} termFrom={this.state.termFrom}/>
                     
                    {/* Print videos search before in the component search*/}
                    {this.state.videos.length !== 0 && this.state.videos.map((value, i) =>(
                                    <div onClick={ () => this.handleVideoSelect(value)} className="col-12 col-sm-12 list rounded d-flex justify-content-center" key={i}>
                                        <img className="list-container__video" src={value.snippet.thumbnails.medium.url} alt="imagen"/>
                                        <div className="list-container__video-description">
                                            <h4>{value.snippet.title}</h4>
                                            <p>{value.snippet.description.substring(0, 150)}</p>
                                        </div>
                                    </div>
                            ))}
                    {/*Print videos for default*/}
                    {this.state.videos.length === 0 && <VideoList Key={this.props.Key} handleVideoSelect={this.handleVideoSelect}/>}
                    
                    {/*Buton for get more videos */}
                    {this.state.loading === false && (
                        <button onClick={()=>{this.handleMoremaximus(2)}}>Load More</button>
                    )}
                </div>
            </div>
        </div>
        )
    }
}

export default ListVideo;