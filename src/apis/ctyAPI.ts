
import axiosClient from "./axiosClient"
import { Cty } from "../interface/data"
import { Request } from "../interface/data"
import axiosClient2 from "./axiosClient2"


// import axios from "axios"

const ctyAPI = {
    getCty:()=>{
        return axiosClient.get<unknown,Cty[]>(``)
    },
    upCheckApi:(cty:Cty)=>{
        const number:number =1
        // console.log(typeof cty.check);
        
        const newCty = {...cty, check: Number(cty.check) +1  }
        return axiosClient.put(`/${newCty.id}`,{
            ...newCty,
            
        })
    },
    SearchList :(keysearch:string)=>{
        return axiosClient.get<unknown,Cty[]>(`?info=${keysearch}`)
    },

    requestCty:(data:Request)=>{
        return axiosClient2.post("",{
            ...data
        })
    },
    getCtyfilter:(payload:string )=>{
        return axiosClient.get<unknown,Cty[]>(`?type=${payload}`)
    },


}
export default ctyAPI