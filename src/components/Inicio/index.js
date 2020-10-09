import React from 'react';
import $ from 'jquery';

import './index.css'




function Inicio (props){
    const [key, setKey] = React.useState([]);

    React.useEffect(() => {
        
        const key = 'AIzaSyCxKpmkXAn1Ub3CkK0ALyUFCu4FRSKYjRg';
        let playlistId = 'PL3ZIwoBDzQbfXabPNxq6QDmcEp-MCP_JL';
        const URL = 'https://www.googleapis.com/youtube/v3/playlistItems';

        
        let options = {
            part: 'snippet',
            key: key,
            maxResult: 20,
            playlistId: playlistId,
        }
        return loadVideos();

        function loadVideos(){
            $.getJSON(URL, options, function(data){
                /* let Photo = data.items[0].snippet.thumbnails.medium.url; */
                setKey(data.items)
    
            }).fail(function(data){
            })
        }
        
    }, [])
        return (
            <div>
                <h4>Recomend</h4>
                <div className="container-inicio__recommend">
                        {key.map((value, i) =>(
                    <div onClick={ () => props.handleVideoSelect(value)} className="videos" id="videoprincipal" key={i}>
                        <img className="list-container__video" src={value.snippet.thumbnails.medium.url} alt="imagen"/>
                        <h4>{value.snippet.title}</h4>
                    </div>
                    ))}
                </div>

                <h4>News</h4>
                <div className="container-inicio__news">
                    {key.map((value, i) =>(
                    <div onClick={ () => props.handleVideoSelect(value)} className="videos" id="videoprincipal" key={i}>
                        <img className="list-container__video" src={value.snippet.thumbnails.medium.url} alt="imagen"/>
                        <h4>{value.snippet.title}</h4>
                    </div>
                    ))}
                </div>
            </div>
        )
    }

class SubInicio extends React.Component {
    render(){
        let videoSrc, title , decriptions;
        if(this.props.data.selectedVideo){
            videoSrc = `https://www.youtube.com/embed/${this.props.data.selectedVideo.id.videoId}?rel=0&amp;autoplay=1`
            title = this.props.data.selectedVideo.snippet.title;
            decriptions = this.props.data.selectedVideo.snippet.description;
        } else {
            videoSrc='https://www.youtube.com/embed/ZaI2IlHwmgQ?rel=0&amp;autoplay=1'
            title = 'The Black Eyed Peas - Pump It (Official Music Video)';
            decriptions = `REMASTERED IN HD!
            Music video by Black Eyed Peas performing Pump It. (C) 2006 A&M Records
            #TheBlackEyedPeas #PumpIt #Remastered #Vevo #Pop #OfficialMusicVideo`
        }
        return (
            <div className="row container-inicio d-flex justify-content-center">
                <div className="videos-seleccionado">
                    <h4>Video Seleccionado</h4>
                    <div className="videos-seleccionado" id="videoprincipal">
                    <iframe width="300" height="155" iframe src={videoSrc} allowFullScreen title="Video player" />
                        <h4>{title}</h4>
                        <p>{decriptions.substring(0, 150)}</p>
                    </div>
                    
                </div>
                <Inicio  handleVideoSelect={this.props.handleVideoSelect}/>
            </div>
        )
    }
}
export default SubInicio;