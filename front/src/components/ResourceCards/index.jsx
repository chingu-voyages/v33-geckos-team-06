import React, { useContext, useEffect, useState } from 'react'
import "./index.css"

import { GlobalContext } from '../../contexts/GlobalContext';

import { GetLink } from '../../utils/FirebaseConnector';

const ResourceCard = (props) => {

    const [context, setContext] = useContext(GlobalContext);
    const [images, setImages] = useState([]);
    const [downloadLinks, setDownloadLinks] = useState([]);

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
                    images: images,
                    
                    show: true
                }
            }
        });
    }

    useEffect(() => {
        props?.images?.map( (i) => {
            GetLink(i).then( (r) => {
                setImages( (p) => {
                    console.log(`setImage - ${r}`)
                    return [ ...p, r ]
                })
            }
            );
        });
    }, []);
    
    return (
        
            <div className="resource-text">    
                        <div>
                            <a href={images?.[0]} target='_blank'>   
                              <img className="game-preview" src={images?.[0]}/> </a>
                        </div> 
                        <span className="emphasis"> {props.game ?? ''} </span><br></br> {props.description ?? ''} 
                        <br></br>
                        {props.author ?? ''}  <br></br>
                        {props.genre ?? ''}  <br></br>
                        {/* {props.platform?.map((e) => {
                            return e + ' '
                        })} */}
                        <a className="all-images__link details-link" onClick={() => {onDetailsClick()}}>Details</a>
              </div>
        
    )
}

export default ResourceCard