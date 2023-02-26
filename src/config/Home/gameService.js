import { Api, endpoints } from "../Api";
import Cookies from 'universal-cookie';

async function createGame(dataUser, state){
    if(true){
        return await Api.post(endpoints.createGame, dataUser)
            .then( (_) =>  state({state: 'CREATE_GAME', info: ''}))
            .catch( (_) => {
                const cookies = new Cookies();
                cookies.set('gameCreate', true, { path: '/', maxAge: 2*60*60});
                cookies.set('linkGame', 'iwiwbdkbqwh2yg3y44', { path: '/', maxAge: 2*60*60});
                cookies.set('username', dataUser.username, { path: '/', maxAge: 2*60*60});
                state({state: 'CREATE_GAME', info: 'error back'});
            })
    }
}

export default createGame;