import axios from 'axios'
import { toast } from 'react-toastify';


const authfetch = axios.create({
       baseURL : "https://real-pear-fly-kilt.cyclic.app/"
})
authfetch.interceptors.request.use((req) =>{
    console.log(JSON.parse(localStorage.getItem("userInfo"))?.jwtToken);
    req.headers['Content-Type'] = "application/json"
    req.headers["Authorization"] = "bearer " + JSON.parse(localStorage.getItem("userInfo"))?.jwtToken;
    return req;
},(error) =>{
    return Promise.reject(error)
})
authfetch.interceptors.response.use((response) =>{
    console.log(response);
    if(response.status == 200)
    { 
        if(response.data.message)
        {
            toast.success(`${response.data.message}`, {
              position: "top-center",
              autoClose: false,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: 0,
              }); 
            }
            else if(response.config.url.includes("authenticate")){
                toast.success(`login success`, {
                    position: "top-center",
                    autoClose: false,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: 0,
                    }); 
         
            } 
    }

    if(response.status == 400)
    {
        toast.error(`${response.data.message}`, {
          position: "top-center",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          });  

    }
        return response;

},(error) =>{
    if(error?.response?.status == 400)
    {
        toast.error(`${error.response.data.message}`, {
            position: "top-center",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            });  
    }
    return Promise.reject(error);
})
export default authfetch