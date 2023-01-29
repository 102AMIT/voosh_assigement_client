import Axios from 'axios';
const axiosBaseURL = Axios.create({
    baseURL:'https://voosh-fxyt.onrender.com/'
});
export default axiosBaseURL