import React from 'react'
import "./index.css"

const ResourceCard = (props) => {
    console.log(props.key, "resource card")
    
    return (
        
            <div className="resource-text">    
                        <div>
                            <a href="<%= resource.link %>">   
                              <img className="game-preview" src="/images/ resource.image "/> </a>
                        </div> 
                        <span className="emphasis"> {props.game} </span><br></br> {props.description} 
                        <br></br>
                        {props.author}  <br></br>
                        Genre  <br></br>
                        <a className="all-images__link" href="resource.details">Details</a>
              </div>
        
    )
}

export default ResourceCard