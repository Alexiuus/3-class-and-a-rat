import { SetUsername, SendAndCreateGame } from '../../store/home/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rules from './components/Rules';
import {connect} from 'react-redux';
import { useState } from "react";
import './Home.css';

function Error({error}){
  return <div className='error row offset-3 col-6'><span>{error}</span></div>
}

function Home({ SetUsername, SendAndCreateGame }) {
  const [state, setState] = useState({ state: 'OK',  error: ''});
  
  const runGame = () => {
    if (!state.error && state.error !== 'init') SendAndCreateGame(setState);
    else setState({state: true, error: 'empty name'});
  }

  return (
    <div className='containerHome container-fluid'>
      <div className="Home col-4">
        <div className="Menu-initGame container text-center">
          <div className='row offset-3 col-6'><h2 className='title'>3 class and a rat</h2></div>
          <input className='username row offset-3 col-6' onChange={(e) => SetUsername(e.target.value, setState)} type="text" placeholder="username"/>
          {
           (state.state === 'ERROR')? <Error error={state.error} /> : <div></div>  
          }
          <button className='game row offset-4 col-4' disabled={state.error} onClick={() => runGame()}><span>Game</span></button>
        </div>
      </div>
      <div className="Rules-home offset-5 col-6"><Rules/></div>
    </div>
  );
}

export default connect(null, { SetUsername, SendAndCreateGame })(Home);