import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Rules from './components/Rules';
import './Home.css';

function Error({error}){
  return <div className='error row offset-3 col-6'><span>{error}</span></div>
}

function Home() {
  const [error, setError] = useState({ state: false,  error: 'init'});
  const verifyUsername = (event) => {
    if(!event.target.value) setError({state: true, error: 'empty name'});
    else setError({ state: false,  error: ''});
  };

  const runGame = () => {
    if (!error.state && error.error !== 'init') console.log("click");
    else setError({state: true, error: 'empty name'});
  }

  return (
    <div className='containerHome container-fluid'>
      <div className="Home col-4">
        <div className="Menu-initGame container text-center">
          <div className='row offset-3 col-6'><h2 className='title'>3 class and a rat</h2></div>
          <input className='username row offset-3 col-6' onChange={(e) => verifyUsername(e)} type="text" placeholder="username"/>
          {
           (error.state)? <Error error={error.error} /> : <div></div>  
          }
          <button className='game row offset-4 col-4' disabled={error.state} onClick={() => runGame()}><span>Game</span></button>
        </div>
      </div>
      <div className="Rules-home offset-5 col-6"><Rules/></div>
    </div>
  );
}

export default Home;