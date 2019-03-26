import socketio from 'socket.io';
import VueSocketIO from 'vue-socket.io';

const SocketInstance = socketio('http://localhost:3000');

export default Vue => {
  Vue.use(VueSocketIO, SocketInstance)
}