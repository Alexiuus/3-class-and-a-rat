import axios from "axios";

const URL = 'http://127.0.0.1:5000/'; // url back

// endpoints back
const endpoints = {
    createGame: 'game/createGame',
    joinGame: 'game/joinGame'
}

const Api = axios.create({
    baseURL: URL,
    timeout: 0,
    headers: {'Content-Type': 'application/json' }
});

function webSocketConnection(username, id_game, setSocket, setListUsers){
    const ws = new WebSocket(`ws://localhost:5000/${id_game}/${username}`); // establecer la conexión con el servidor WebSocket
  
    ws.onopen = () => {
      console.log('Conexión establecida');
      setSocket(ws); // establecer el estado del socket en el componente
    };
  
    ws.onmessage = (event) => {
      setListUsers(JSON.parse(event.data).users);
    };
  
    ws.onclose = () => {
      console.log('Conexión cerrada');
      setSocket(null);
    };
  
    ws.onerror = (error) => {
      console.log('Error:', error);
    };
}

export {Api, endpoints, webSocketConnection}; 