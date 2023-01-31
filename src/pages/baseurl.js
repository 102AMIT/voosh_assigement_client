import Axios from 'axios';
const axiosBaseURL = Axios.create({
    baseURL:'https://lime-thankful-kingfisher.cyclic.app/'
});
export default axiosBaseURL