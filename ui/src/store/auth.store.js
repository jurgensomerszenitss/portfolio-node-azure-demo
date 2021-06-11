export const authState = {
    auth : {
        idToken:null,
        accessToken:null,
        isAuthenticated : false,
        userName : {}
    }
}

export const authGetters = {
    idToken : state => state.auth.idToken,
    accessToken : state => state.auth.accessToken,
    userName : state => {return state.auth.userName; },
    isAuthenticated : state => { return state.auth.isAuthenticated },
}

export const authMutations = {
    SET_AUTH_ID_TOKEN(state, idToken) { 
        state.auth.idToken = idToken;  
    },
    SET_AUTH_ACCESS_TOKEN(state, accessToken) { 
        state.auth.accessToken = accessToken;  
    },
    SET_AUTH_USER(state, userName) {
        state.auth.isAuthenticated = true;
        state.auth.userName = userName;
    },
    DELETE_AUTH_USER(state){
        state.auth.isAuthenticated = false;
        state.auth.userName = {};
        state.auth.idToken = null;
        state.auth.accessToken = null;
    }
}


export const authActions = {
    onSignIn({commit}, idToken, userName){
        commit('SET_AUTH_ID_TOKEN', idToken);
        commit('SET_AUTH_USER', userName);
    },
    onGetAccessToken({commit}, accessToken){
        commit('SET_AUTH_ACCESS_TOKEN',accessToken);
    },
    onSignOut({commit}) {
        commit('DELETE_AUTH_USER');
    }
}

