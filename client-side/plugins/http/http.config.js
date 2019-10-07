import axios from 'axios';
import AuthService from '~/services/auth.service';

const API_PORT = !process.server ? process.env.API_PORT : '3001';
const apiUrl = `${!process.server? window.location.protocol : 'http:'}//${!process.server? window.location.hostname : 'localhost'}:${API_PORT}/api/`;

/**
 * Create Axios
 */
export const http = axios.create({
    baseURL: apiUrl,
})

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our NodeJS back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */
http.interceptors.request.use(
    config => {
        config.headers.common['Authorization'] = AuthService.accessToken;
        return config;
    },
    error => {
        return Promise.reject(error);
    },
);

/**
 * Handle all error messages.
 */
if(!process.server) {
    http.interceptors.response.use(function (response) {
        const data = response.data.data;
        if(data && data.ec && data.ec == 'gl-langadvisor'){
            let dt = HttpConfig.decodeObject(data.data);
            dt = JSON.parse(dt.join(''));
            response.data.data.data = dt;
            return response;
        }
        return response;
    }, function (error, res) {
        const { response } = error;
        if (response.status >= 301 && response.status <= 451) {
            if (response.status == 401) {
                $nuxt._router.push({ name: 'login' });
            }
            if(response.status == 413){
                alert('File size is too big');
            }
            return Promise.reject(response);
        }

        return Promise.reject(response);
    });
}

class HttpConfig{
    /**
    * Return http config
    */
    static get(){
        return http;
    }

    /**
    * Decode hash data
    */
    static decodeObject(dt){
        let decipher = salt => {
            let textToChars = text => text.split('').map(c => c.charCodeAt(0))
            let saltChars = textToChars(salt)
            let applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code)
            return encoded => encoded.match(/.{1,2}/g)
                .map(hex => parseInt(hex, 16))
                .map(applySaltToChar)
                .map(charCode => String.fromCharCode(charCode))
                .join('')
        }
        let initCipher = decipher(process.env.SALT_DECODE);
        dt = initCipher(dt);
        dt = decodeURI(dt);
        let salt = process.env.SALT_OBJECT;
        if(salt && dt.indexOf(salt) != 0){
            console.log('object cannot be decripted');
        }
        dt = dt.substring(salt.length).split('');
        let data = '';
        for(let i = 0, length = dt.length; i < length; i++){
            if(dt[i] == '{'){
                dt[i] = '}';
            }
            else if(dt[i] == '}'){
                dt[i] = '{';
            }
            data += dt[i];
        }
        return data;
    }
}

export default HttpConfig;