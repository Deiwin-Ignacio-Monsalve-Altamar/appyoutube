import axios from 'axios';
import React from 'react';


import './index.css';
import arriba from '../../images/descarga.png'
import abajo from '../../images/manoabajo.jpg'


/* Printing the likes and dislikes of the video */
class ListLiks extends React.Component{
    
        
    constructor(props){
        super(props)
        this.state = {
              data: {}  
        };
        this.handleLikes();
    }

    handleLikes(){

        /*Doing the get for the details of the video depending on whether it is the main one or looking for the user*/
        let id = this.props.id
        if (this.props.id === undefined) {
            id = this.props.id
        } else{
            id = 'ZaI2IlHwmgQ'
        }
        axios.get(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${id}&key=AIzaSyDTSlbX9vc-mkgcp-PUQia4NeaYzwr2lMo`)
        .then(res => {
            this.setState({ data: res.data.items[0].statistics });
        })
    }


    render(){
        return (
            
            <div className="d-flex justify-content-around">
                {this.handleLikes()}
                {/*Print details count likes and dislike with images */}
                <div className="arriba"><img src={arriba} alt="Like" />{this.state.data.likeCount}</div>
                <div className="abajo"> <img src={abajo} alt="DisLike" />{this.state.data.dislikeCount}</div>
            </div>
        )
    }
};
export default ListLiks;

