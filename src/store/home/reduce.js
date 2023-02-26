import createGame from "../../config/Home/gameService";

const defaultDataUser = {
    "username": ""
};

const verifyUsername = ({attribute, username, state, dataUser}) => {
    if(username === '') state({state: 'ERROR', info: 'empty name'});
    else state({ state: 'OK',  info: ''});

    return {
        ...dataUser,
        [attribute]: username
    }
};

function reducer(dataUser = defaultDataUser, action){
    if (action.type === 'SET_USERNAME') {
        return verifyUsername({
                attribute: 'username', 
                username: action.data, 
                state: action.state, 
                dataUser: dataUser
            });
    } else if(action.type === 'CREATE_GAME') {
        createGame(dataUser, action.state);
    }

    return dataUser;
}

export default reducer;