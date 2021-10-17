import React, {useState, useEffect, useContext} from 'react'
import "./BrowsePage.css" 
import ResourceCards from "../components/ResourceCards"
import Navigation from "../components/Navigation"
import { GetGames, GetFollowers } from '../utils/FirebaseConnector'
import Filter from "../components/Filter"
import { GlobalContext } from '../contexts/GlobalContext'

const Index = () => {
  const [resourceCards, setResourceCards] = useState([]);
  const [data, setData] = useState([]);
  const [globalState, setGlobalState] = useContext(GlobalContext);

  useEffect( () => {
    GetGames().then( (returnValue) => {setData(returnValue)});

    GetFollowers().then( (r) => {
      if (r === false)
        console.log('GetFollowers returned false');
      
      else {
        console.log(`Followers - ${JSON.stringify(r)}`);
        setGlobalState( (prev) => {
          return {...prev, followers: r}
        });
      }
      
    });
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