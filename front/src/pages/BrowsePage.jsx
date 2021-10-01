import React, {useState, useEffect, useContext} from 'react'
import "./BrowsePage.css" 
import ResourceCards from "../components/ResourceCards"
import Navigation from "../components/Navigation"
import { GetGames } from '../utils/FirebaseConnector'
import Filter from "../components/Filter"
import { GlobalContext } from '../contexts/GlobalContext'

const Index = () => {
  const [resourceCards, setResourceCards] = useState([]);
  const [data, setData] = useState([]);
  const [globalState, setGlobalState] = useContext(GlobalContext);

  useEffect( () => {
    GetGames().then( (returnValue) => {setData(returnValue)});
  }, []);

  console.log(resourceCards);
    let displayGames = data;
    if (globalState.filteredGames.length > 0) {
      displayGames=globalState.filteredGames
    }
    return (
      
      <div>
        <Navigation/>
        <div className="main">
        <Filter data={data}/>
        
      <div className="browse-box">
         <h1 className="browse-title">Browse Games</h1>

      <div id="all-images">

      {//data && data.map(dataItem =>
      displayGames && displayGames.map(dataItem =>  
            <ResourceCards game={dataItem.game} 
                           description={dataItem.description} 
                           author={dataItem.author} 
                           genre={dataItem.genre} 
                           platform={dataItem.platform}
                           download_link={dataItem.download_files ?? []}
                           images={dataItem.images ?? []}
            />          

                    )}
      
            
      </div>
    </div>
    </div>
    </div>
        
    )
}

export default Index