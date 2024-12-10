import axios from "axios";

const baseURL=axios.create({baseURL:"https://takafula.com/"});
 const loggedUser=JSON.parse(localStorage.getItem('user')); 
 let isAdmin=false;
 if(loggedUser?._id) isAdmin=loggedUser?.isAdmin

export const config={
    headers:{
        Authorization:`Bearer ${localStorage.getItem("token")}`,
        isAdminUser:`${isAdmin}`
    }
};
export default baseURL;