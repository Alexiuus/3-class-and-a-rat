import 'bootstrap/dist/css/bootstrap.min.css';
import Rules from './components/Rules';
import './Home.css';

function Home() {
    return (
      <div className='containerHome container-fluid'>
        <div className="Home col-4">
          <div className="Menu-initGame container text-center">
            <div className='row offset-3 col-6'><h2 className='title'>3 class and a rat</h2></div>
            <input className='username row offset-3 col-6' type="text" placeholder="username"/>
            <button className='game row offset-4 col-4'  role="button"><span>Game</span></button>
          </div>
        </div>
        <div className="Rules-home offset-5 col-6"><Rules/></div>
      </div>
    );
}

export default Home;