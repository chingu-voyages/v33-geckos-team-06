import React, { useContext } from 'react'
import "./index.css"

import { GlobalContext } from '../../contexts/GlobalContext';

const ResourceCard = (props) => {

    const [context, setContext] = useContext(GlobalContext);

    console.log(props.key, "resource card")

    const onDetailsClick = () => {

        setContext( (prevContext) => {
            return {
                ...prevContext, 
                gameDescriptionModal: {
                    game: props.game,
                    description: props.description,
                    author: props.author,
                    genre: props.genre,
                    platform: props.platform,
                    download_link: props.download_link,
                    images: props.images,
                    
                    show: true
                }
            }
        });
    }
    
    return (
        
            <div className="resource-text">    
                        <div> 
                              <img className="game-preview" src={props.images[0]}/>
                        </div> 
                        <span className="emphasis"> {props.game} </span><br></br> {props.description} 
                        <br></br>
                        {props.author}  <br></br>
                        {props.genre}  <br></br>
                        {props.platform.map((e) => {
                            return e + ' '
                        })}
                        <a className="all-images__link" onClick={() => {onDetailsClick()}}>Details</a>
              </div>
        
    )
}

export default ResourceCard