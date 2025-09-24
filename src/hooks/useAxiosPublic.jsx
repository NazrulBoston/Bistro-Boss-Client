import axios from "axios";


const axiosPublic = axios.create({
    // baseURL: 'https://bistro-boss-server-gray-six.vercel.app'
    baseURL: 'http://localhost:3005/'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;