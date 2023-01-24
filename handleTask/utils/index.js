import { endpoints } from "./endpoints";
import * as config from './config';
import * as services from './services'
import { exp } from "react-native/Libraries/Animated/Easing";


const getFullUrl = (endpoint) => {
    console.log('url',`${config.URL}${endpoint}`)
    return `${config.URL}${api_prefix}${endpoint}`;
}


export {
    config,
    endpoints,
    getFullUrl,
    services
}
