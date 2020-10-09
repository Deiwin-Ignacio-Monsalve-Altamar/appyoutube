import React from 'react';
import $ from 'jquery';


import './index.css';

function VideoList(props){

    const [key, setKey] = React.useState([]);

    React.useEffect(() => {
      
        const key = 'AIzaSyCxKpmkXAn1Ub3CkK0ALyUFCu4FRSKYjRg';
        let playlistId = 'PL2fnLUTsNyq7A335zB_RpOzu7hEUcSJbB';
        const URL = 'https://www.googleapis.com/youtube/v3/playlistItems';


        let options = {
            part: 'snippet',
            key: key,
            maxResult: 5,
            playlistId: playlistId,
        }
        return loadVideos();

        function loadVideos(){
            $.getJSON(URL, options, function(data){
                console.log(data);
                /* let Photo = data.items[0].snippet.thumbnails.medium.url; */
                setKey(data.items)
    
            }).fail(function(data){
                console.log(data);
            })
        }

    }, [])


    return(
            <div>
                {key.map((value, i) =>(
                    
                    <div onClick={ () => props.handleVideoSelect(value)} className="col-12 col-sm-12 list rounded d-flex justify-content-center" key={i}>
                    <img className="list-container__video" src={value.snippet.thumbnails.medium.url} alt="imagen"/>
                    <div className="list-container__video-description">
                        <h4>{value.snippet.title}</h4>
                        <p>{value.snippet.description.substring(0, 150)}</p>
                        </div>
                </div>
                ))}
            </div>
        )
}


export default VideoList;