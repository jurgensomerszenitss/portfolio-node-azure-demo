export const authorsState = {
    authors : {
       list:[]
    }
}

export const authorsGetters = {
    authorsList : state => state.authors.list
}

export const authorsMutations = {
    SET_AUTHORS_LIST(state, list){ state.authors.list = list; },
}


export const authorsActions = {
    setAuthorsList({commit}, list){
        commit('SET_AUTHORS_LIST', list);
    }
}

