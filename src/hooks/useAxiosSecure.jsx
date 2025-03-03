import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:3005'
})
const useAxiosSecure = () => {
   return axiosSecure;
};

export default useAxiosSecure;