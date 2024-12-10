import baseURL from "../Api/baseURL";
const loggedUser=JSON.parse(localStorage.getItem('user')); 
let isAdmin=false;
if(loggedUser?._id) isAdmin=loggedUser?.isAdmin;



export const useInsertData=async(url,params)=>{
    let configInsert={
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            isAdminUser:`${isAdmin}`
          },
    
    };
    const res=await baseURL.post(url,params,configInsert);
    return res.data;
}



export const useInsertDataWithImage=async(url,params)=>{
    let configInsert={
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            isAdminUser:`${isAdmin}`
          },
    
    };
    const res=await baseURL.post(url,params,configInsert);
    return res;
}