export const userState = {
    user : {
       info:{}
    }
}

export const userGetters = {
    userInfo : state => state.user.info
}

export const userMutations = {
    SET_USER_INFO(state,info){ state.user.info = info; },
}


export const userActions = {
    setUserInfo({commit}, info){
        commit('SET_USER_INFO', info);
    }
}

