import axios from "axios";
// const BASE_URL = "http://localhost:8080"
const BASE_URL = "https://joes-baseball-stats-api.herokuapp.com"

const API = {
    getAllPlayers:function(){
        return axios.get(`${BASE_URL}/api/players`)
    },
    createPlayer:function(playerData){
        return axios.post(`${BASE_URL}/api/players`,playerData, {withCredentials:true})
    },
    getPlayerById:function(id){
        return axios.get(`${BASE_URL}/api/players/${id}`)
    },
    deletePlayerById:function(id){
        return axios.delete(`${BASE_URL}/api/players/${id}`, {withCredentials:true})
    },
    updatePlayerById:function(id,playerData) {
        return axios.put(`${BASE_URL}/api/players/${id}`,playerData, {withCredentials:true},)
    },
    login:function(userData){
        return axios.post(`${BASE_URL}/login`,userData,{withCredentials:true})
    },
    signup:function(userData){
        return axios.post(`${BASE_URL}/signup`,userData,{withCredentials:true})
    },
    readSessions:function(){
        return axios.get(`${BASE_URL}/readsessions`,{withCredentials:true})
    },
    logout:function(){
        return axios.get(`${BASE_URL}/logout`,{withCredentials:true})
    }

}
export default API
