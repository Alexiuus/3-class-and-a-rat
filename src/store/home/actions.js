const SetUsername = (username, state) => {
    return {
        type: 'SET_USERNAME',
        data: username,
        state: state
    }
}

const SendAndCreateGame = (state) => {
    return {
        type: 'CREATE_GAME',
        data: '',
        state: state
    }
}

export { SetUsername, SendAndCreateGame };