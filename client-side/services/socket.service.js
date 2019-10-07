import io from 'socket.io-client';

const SOCKET_PORT = !process.server ? process.env.SOCKET_PORT : '5001';
const CRON_SOCKET_PORT = !process.server ? process.env.CRON_SOCKET_PORT : '5002';
const socket = io.connect(`${!process.server ? window.location.protocol : 'http:'}//${!process.server ? window.location.hostname : 'localhost'}:${SOCKET_PORT}`);
const cron_socket = io.connect(`${!process.server? window.location.protocol : 'http:'}//${!process.server ? window.location.hostname : 'localhost'}:${CRON_SOCKET_PORT}`);

class SocketService {

    /**
    * @description Emit event to Socket
    * @return emit event
    */
    static emit(key, data){
        socket.emit(key, data);
    }

    /**
    * @description Socket object
    * @return {void}
    */
    static get socket(){
        return socket;
    }

    /**
    * @description CronSocket object
    * @return {void}
    */
    static get cronSocket(){
        return cron_socket;
    }
}

export default SocketService;
