import axios from "axios";
import {getMovie} from './config'
const instance=axios.create({
    baseURL:getMovie
});

export default instance;
