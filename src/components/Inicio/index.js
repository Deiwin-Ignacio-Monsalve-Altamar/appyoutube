import React from 'react';
import $ from 'jquery';


import ListLiks from '../ListLikes/index';
import './index.css'




function Inicio (props){

    /*Create states for aplication of result API */
    const [key, setKey] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        
        const key = props.Key;
        let playlistId = 'PL3ZIwoBDzQbfXabPNxq6QDmcEp-MCP_JL';
        const URL = 'https://www.googleapis.com/youtube/v3/playlistItems';
        
        
        /*Minimum requirements requested by the api */
        let options = {
            part: 'snippet',
            key: key,
            maxResult: 20,
            playlistId: playlistId,
        }
        return loadVideos();
        
        /* Performing a get with the permission to request video list */
        function loadVideos(){
            $.getJSON(URL, options, function(data){
                /* let Photo = data.items[0].snippet.thumbnails.medium.url; */
                setKey(data.items)
                setLoading(false)            
            }).fail(function(error){
                setLoading(true);
            })
        }
        
    }, [props.Key])
    return (
        <div>
                <h4 className="Recomend">Recomend</h4>
                {loading && <div> <p>Cargando....</p></div>}
                {/* Print Recommended Video List*/}
                <div className="container-inicio__recommend">
                        {key.map((value, i) =>(
                        <div onClick={ () => props.handleVideoSelect(value)} className="videos" id="videoprincipal" key={i}>
                        {/*When selecting the video it will be played */}
                        <img className="list-container__video" src={value.snippet.thumbnails.medium.url} alt="imagen"/>
                        <h4>{value.snippet.title}</h4>
                    </div>
                    ))}
                </div>

                <h4 className="News">News</h4>
                {loading && <div> <p>Cargando....</p></div>}
                {/* Print New Video List*/}
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

/*Showing the selected videos and they play automatically */
function SubInicio (props) {


    let videoSrc, title, decriptions, videoId;
    /*Decisions to know which video to play along with your data */
        if(props.data.selectedVideo){
            videoId = props.data.selectedVideo.id.videoId;
            videoSrc = `https://www.youtube.com/embed/${videoId}?rel=0&amp;autoplay=1`
            title = props.data.selectedVideo.snippet.title;
            decriptions = props.data.selectedVideo.snippet.description;
        } else {
            videoId = 'ZaI2IlHwmgQ';
            videoSrc=`https://www.youtube.com/embed/${videoId}?rel=0&amp;autoplay=1`
            title = 'The Black Eyed Peas - Pump It (Official Music Video)';
            decriptions = `REMASTERED IN HD!
            Music video by Black Eyed Peas performing Pump It. (C) 2006 A&M Records
            #TheBlackEyedPeas #PumpIt #Remastered #Vevo #Pop #OfficialMusicVideo`
        }
        return (
            <div className="row container-inicio d-flex justify-content-center">
                {props.loading && <p>Cargando....</p>}
                <div className="videos-seleccionado">
                    <h4>Selected videos</h4>
                    <div className="videos-seleccionado" id="videoprincipal">
                    
                    {/*Playing the selected video at the top*/}
                    <iframe width="300" height="155" src={videoSrc} allowFullScreen title="Video player" />
                        <h4>{title}</h4>
                        {/*Size containg of descriptions */}
                        <p>{decriptions.substring(0, 150)}</p>
                        <ListLiks id={videoId}/>   
                    </div>
                    
                </div>
                {/*Call the function for the videos recommend and news and display */}
                <Inicio  handleVideoSelect={props.handleVideoSelect}/>
            </div>
        )
}
export default SubInicio;