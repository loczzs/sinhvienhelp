
import axiosClient from "./axiosClient"
import { Cty } from "../interface/data"
import { upCheck } from "../modules/Home/slices/ListCtySlice"
import Search from "antd/lib/input/Search"
// import axios from "axios"

const ctyAPI = {
    getCty:()=>{
        return axiosClient.get<unknown,Cty[]>(``)
    },
    upCheckApi:(cty:Cty)=>{
        const number:number =1
        // console.log(typeof cty.check);
        
        const newCty = {...cty, check: cty.check +1  }
        return axiosClient.put(`/${newCty.id}`,{
            ...newCty,
            
        })
    },
    SearchList :(payload:string)=>{
        return axiosClient.get<unknown,Cty[]>(`?info=${payload}`)
    }


}
export default ctyAPI