import baseURL, { config } from "../Api/baseURL";


export const useGetData=async(url,params)=>{
    const res=await baseURL.get(url,config);
    return res.data;
}

export const useGetDataToken=async(url,params)=>{
    const res=await baseURL.get(url,config);
    return res.data;
}