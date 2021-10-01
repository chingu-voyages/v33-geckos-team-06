import React, {useContext} from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'
import './index.css'

const FilteredComponent = (props) => {
    const [globalState, setGlobalState] = useContext(GlobalContext)

    const filterObjects = (games, filter) => {
        if (filter == 'all'){
            setGlobalState( (prev) => { return {...prev, filteredGames: games} } );
            return;
        }
        // let games =[
        //     {genre: 'RPG'},
        //     {genre: 'RPG'},
        //     {genre: 'RPG'},
        //     {genre: 'FPS'},
        //     {genre: 'Puzzle'},
        //     {genre: 'Adventure'},
        //     {genre: 'RTS'},
        //     {genre: 'Racing'}
        // ];
        console.log(JSON.stringify(games))
        let filteredGames = games.filter(g => g.genre == filter);
        
        console.log(filteredGames);
        // for (let i=0; i < games.length; i++){
        //     if (games[i]?.genre === 'rpg') {
        //         filteredGames.push(games[i]);
        //     }
        //} 
        setGlobalState( (prev) => { return {...prev, filteredGames: filteredGames} } );
        console.log(`filtered ${JSON.stringify(filteredGames)}`);
    }    
    

    
    return (
        <div>
            <div className="sidebar"> 
            <h1>Popular Tags</h1>   
            <div className="tags">
            <span className="hover-color" onClick={() => {filterObjects(props.data, 'rpg')}}>RPG</span>
            <span className="hover-color" onClick={() => {filterObjects(props.data, 'adventure')}}>Adventure</span>
            <span className="hover-color" onClick={() => {filterObjects(props.data, 'horror')}}>Horror</span>
            <span className="hover-color" onClick={() => {filterObjects(props.data, 'rts')}}>RTS</span>
            <span className="hover-color" onClick={() => {filterObjects(props.data, 'fps')}}>FPS</span> 
            </div> 
            </div>
        </div>
        
    )
}

export default FilteredComponent
