import React, {useState, useEffect} from 'react'
import "./BrowsePage.css" 
import ResourceCards from "../components/ResourceCards"
import Navigation from "../components/Navigation"
import { GetGames } from '../utils/FirebaseConnector'


const Index = () => {
  const [resourceCards, setResourceCards] = useState([]);
  const [data, setData] = useState([]);

  useEffect( () => {
    GetGames().then( (returnValue) => {setData(returnValue)});
  }, []);

  console.log(resourceCards);
  
    return (
      
      <div>
        <Navigation/>
        <div className="main">
        

      <div className="browse-box">
         <h1 className="browse-title">Browse Games</h1>

      <div id="all-images">
      {data && data.map(dataItem =>
            <ResourceCards game={dataItem.game} 
                           description={dataItem.description} 
                           author={dataItem.author} 
                           genre={dataItem.genre} 
                           platform={dataItem.platform}
                           download_link={dataItem.download_files ?? []}
                           images={dataItem.images ?? []}
            />
                        // <tr key={data.id}>
                        //     <td>{data.firstName} {data.lastName}</td>
                        //     <td>{data.email}</td>
                        //     <td>{user.role}</td>
                        // </tr>
                    )}
      
            
      </div>
    </div>
    </div>
    </div>
        
    )
}

export default Index