import baseURL from "../../Api/baseURL";


export const login=async ({username,password})=>{
    try {
        const data={username,password};

    const response=await baseURL.post('/api/v1/users/login',data);

    return response;
    //console.log('response',response);        
    } catch (error) {
        //console.error(error.response.data);

        return error.response;
    }

}