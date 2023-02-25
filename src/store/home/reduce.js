import createHome from "../../services/Home/home";

const defaultDataUser = {
    "username": ""
};

const verifyUsername = ({attribute, username, state, dataUser}) => {
    if(username === '') state({state: 'ERROR', error: 'empty name'});
    else state({ state: 'OK',  error: ''});

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
        createHome(dataUser, action.state);
    }

    return dataUser;
}

export default reducer;