import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Cookies from 'universal-cookie';
import ModalGame from '../ModalGame/ModalGame';
import Modal from 'react-bootstrap/Modal';

function ModalInitSession({ setIsSessionInit }){
    return <Modal className='modal-lg' show={true} backdrop="static" keyboard={false}>
            <div className='waitMenu container'>
                <Modal.Header>
                  <Modal.Title className='ModalTitle offset-4 col-4'>Init Session</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 className='offset-4 col-4 text-center'>Write a name to use</h4>
                    <input className='username offset-4 col-4' type='text' placeholder='username'/>
                </Modal.Body>
                <Modal.Footer>
                  <button className='game col-3'>init Session</button>
                </Modal.Footer>
            </div>
        </Modal>;
}

function JoinGame(){
    const cookies = new Cookies();
    const {id_game} = useParams();
    const [isSessionInit, setIsSessionInit] = useState(cookies.get('username'));

    return <div>
        {
            (!isSessionInit)? <ModalInitSession setIsSessionInit={setIsSessionInit}/> : <ModalGame cookies={cookies} isSessionInit={setIsSessionInit}/> 
        }
    </div>;
}

export default JoinGame;