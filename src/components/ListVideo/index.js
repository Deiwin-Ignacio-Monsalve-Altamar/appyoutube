import React from 'react';



import Search from '../Search/index';
import youtube from '../../apis/youtube';
import VideoList from '../VideosList/index';
import Inicio from '../Inicio/index'

import './index.css'




class ListVideo extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })

        this.setState({
            videos: response.data.items
        })
        console.log("this is resp",response);
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div className="container-fluid d-flex list-container">
                <Inicio data={this.state} handleVideoSelect={this.handleVideoSelect}/>
                <div className="row list_videos align-items-center d-flex justify-content-center">
                    <Search Submit={this.handleSubmit}/>
                    
                    {this.state.videos.length !== 0 && this.state.videos.map((value, i) =>(
                                    <div onClick={ () => this.handleVideoSelect(value)} className="col-12 col-sm-12 list rounded d-flex justify-content-center" key={i}>
                                        <img className="list-container__video" src={value.snippet.thumbnails.medium.url} alt="imagen"/>
                                        <div className="list-container__video-description">
                                            <h4>{value.snippet.title}</h4>
                                            <p>{value.snippet.description.substring(0, 150)}</p>
                                        </div>
                                    </div>
                            ))}
                    {this.state.videos.length === 0 && <VideoList handleVideoSelect={this.handleVideoSelect}/>}
                </div>
            </div>
        )
    }
}

export default ListVideo;