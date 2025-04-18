import axios from "axios";
import { useNavigate } from "react-router";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:3005'
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const{signOutUser} = useAuth()
    // request interception to add authorization header for every secure call to the api
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        // console.log('Request stopped by interceptors', token)
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function(error){
        return Promise.reject(error);
    })


//  intercepts 401 and 403 status
axiosSecure.interceptors.response.use(function (response) {
    return response;
  }, async  (error) => {
    const status = error.response.status;
      // console.log('Status error in the interceptor', status)
      if(status === 401 || status === 403){
        await signOutUser();
        navigate('/login')
      }
      return Promise.reject(error);
  });

   return axiosSecure;
};

export default useAxiosSecure;