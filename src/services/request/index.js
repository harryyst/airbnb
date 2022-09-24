import axios from "axios";

import { BASE_URL,TIMEOUT } from "./config";

class stRequest{
    constructor(baseURL,timeOut){
        this.instance = axios.create({baseURL,timeOut})
        this.instance.interceptors.response.use((res)=>{
            return res.data
        })
    }
    request(config){
        return this.instance.request(config)
    }
    get(config){
        return this.instance.request({...config,method:'GET'})
    }
    post(config){
        return this.instance.request({...config,method:'POST'})
    }
}


export default new stRequest(BASE_URL,TIMEOUT)