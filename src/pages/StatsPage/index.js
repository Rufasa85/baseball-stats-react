import React, {useState,useEffect} from 'react'
import "./style.css"
import StatsTable from '../../components/StatsTable';
import API from "../../utils/API"

export default function StatsPage() {
    const [playersState,setPlayersState] = useState([]);
    const [filteredPlayersState,setFilteredPlayersState] = useState([]);
    const [sortedBy,setSortedBy] = useState();
    const [playerSearch, setPlayerSearch]= useState("");
    
    useEffect(()=>{
        API.getAllPlayers().then(res=>{
            console.log(res.data)
            setPlayersState(res.data)
            setFilteredPlayersState(res.data)
        }).catch(err=>{
            console.log(err);
        })
    },[])

    useEffect(()=>{
        const sortedPlayers = [...playersState];
        switch (sortedBy) {
            case "name":
                sortedPlayers.sort(function(a,b){
                    if(a.name<b.name){
                        return -1
                    }else {
                        return 1;
                    }
                   
                })
                break;
            case "team":
                sortedPlayers.sort(function(a,b){
                    if(a.team<b.team){
                        return -1
                    }else {
                        return 1;
                    }
                   
                })
                break;
        
                case "at_bats":
                    sortedPlayers.sort(function(a,b){
                        if(a.at_bats<b.at_bats){
                            return -1
                        }else {
                            return 1;
                        }
                        
                    })
                    break;
                case "hits":
                    sortedPlayers.sort(function(a,b){
                        if((a.singles+a.doubles+a.triples+a.home_runs)<(b.singles+b.doubles+b.triples+b.home_runs)){
                            return -1
                        }else {
                            return 1;
                        }
                        
                    })
                    break;
                case "avg":
                    sortedPlayers.sort(function(a,b){
                        if(((a.singles+a.doubles+a.triples+a.home_runs)/a.at_bats)<((b.singles+b.doubles+b.triples+b.home_runs)/b.at_bats)){
                            return -1
                        }else {
                            return 1;
                        }
                        
                    })
                    break;
                case "at_bats":
                    sortedPlayers.sort(function(a,b){
                        if(a.at_bats<b.at_bats){
                            return -1
                        }else {
                            return 1;
                        }
                        
                    })
                    break;
            default:
                break;
        }
        console.log(sortedPlayers)
        setPlayersState(sortedPlayers);
    },[sortedBy])
    
    useEffect(()=>{
        const copyOfPlayers=[...playersState];
        const filteredPlayers = copyOfPlayers.filter(player=>{
            if(player.name.includes(playerSearch)){
                return true
            } else {
                return false
            }
        })
        setFilteredPlayersState(filteredPlayers);
    },[playerSearch,playersState])

    const sortingClickHandler = colName=>{
        setSortedBy(colName)
    }

    const handleInputChange = event=>{
        const name = event.target.name;
        const value = event.target.value;
        if(name==="playerSearch"){
            setPlayerSearch(value);
        }else if(name==="teamSearch"){
            //TODO: set team serach
        }
    }


    return (
        <div className="StatsPage">
            <form>
                <input type='text' value ={playerSearch} onChange={handleInputChange} name="playerSearch" placeholder = "player search"/>
                <input type='text' placeholder = "team search"/>
            </form>
             <button>Add a Player</button>
                <StatsTable sorting={sortingClickHandler} players = {filteredPlayersState}/>
        </div>
    )
}
