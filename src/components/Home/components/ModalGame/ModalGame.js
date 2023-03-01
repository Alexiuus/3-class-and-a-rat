import { ListInfoUser, ListUsersGame } from './components/componentsModalGame';
import { webSocketConnection } from '../../../../config/Api';
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import './ModalGame.css';


function ModalGame({cookies, isSessionInit}){
  const [listUsers, setListUsers] = useState([]);
  const [socket, setSocket] = useState(null);
  const username = cookies.get('username');
  const link = cookies.get('linkGame');
  const id_game = link.split('/')[3];
  
  useEffect(() => {
    webSocketConnection(username, id_game, setSocket, setListUsers);

    return () => {
      // cerrar la conexión cuando el componente se desmonte
      if (socket) socket.close();
    };
  }, []);

  const handleClickCloseSession = () => {
    isSessionInit(false);
    cookies.remove('username');
    cookies.remove('linkGame');
    cookies.remove('gameCreate');
    if (socket) socket.close();
  };

  const handleClickInitGame = () => {
    if (socket) socket.send('init game'); // enviar un mensaje al servidor WebSocket
  };

  return (
    <Modal className='modal-lg' show={true} backdrop="static" keyboard={false}>
        <div className='waitMenu container'>
            <Modal.Header>
              <Modal.Title className='ModalTitle offset-4 col-4'>Wait menu</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h3>Info</h3>
              <ListInfoUser username={username} link={link}/>
              <h3>List user's</h3>
              <ListUsersGame listUsers={listUsers}/>
            </Modal.Body>
            <Modal.Footer>
              <button className='game col-3' onClick={() => handleClickCloseSession()}>Close Session</button>
              <button className='game col-3' onClick={() => handleClickInitGame()}>init Game</button>
            </Modal.Footer>
        </div>
    </Modal>
  );
}

export default ModalGame;