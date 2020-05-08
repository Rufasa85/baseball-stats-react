import axios from "axios";
const API = {
    getAllPlayers:function(){
        return axios.get("http://localhost:8080/api/players")
    }
}
export default API
