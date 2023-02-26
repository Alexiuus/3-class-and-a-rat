import { ListInfoUser, ListUsersGame } from './components/componentsModalGame';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import './ModalGame.css';


function ModalGame({username, link}){
  const [listUsers, setListUsers] = useState([]);

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
              <button className='game col-3'>Close Session</button>
              <button className='game col-3'>init Game</button>
            </Modal.Footer>
        </div>
    </Modal>
  );
}

export default ModalGame;