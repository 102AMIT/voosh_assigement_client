import Axios from 'axios';
const axiosBaseURL = Axios.create({
    baseURL:'http://localhost:8000/'
});
export default axiosBaseURL