import { Api, endpoints } from "../Api";

async function createHome(dataUser, state){
    if(true){
        return await Api.post(endpoints.createGame, dataUser)
            .then( (_) =>  state({state: 'CREATE_GAME', error: ''}))
            .catch( (_) => state({state: 'ERROR', error: 'error back'}))
    }
}

export default createHome;