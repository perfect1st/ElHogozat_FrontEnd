import baseURL from "../Api/baseURL";

export const useUpdateData=async(url,params)=>{
    const res=await baseURL.put(url,params);
    return res.data;
};

const loggedUser=JSON.parse(localStorage.getItem('user')); 
let isAdmin=false;
if(loggedUser?._id) isAdmin=loggedUser?.isAdmin;

export const useUpdateDataWithImage=async(url,params)=>{
    const updateConfig={
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            isAdminUser:`${isAdmin}`
          }
    };
    const res=baseURL.put(url,params,updateConfig);
    return res;
}