import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

function Rules(){
  return <div></div>;
}

function Home() {
    return (
      <>
        <div className="Home">
          <div className="Menu-initGame container">
            <h1 className='row offset-1'>3 class and a rat</h1>
            <input className='row offset-1 col-6' type="text" placeholder="username"/>
            <button className='row offset-1 col-4'>Game</button>
          </div>
        </div>
        <Rules/>
      </>
    );
}

export default Home;