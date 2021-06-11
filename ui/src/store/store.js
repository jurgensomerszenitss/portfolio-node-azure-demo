import Vue from 'vue';
import Vuex from 'vuex';

import createPersistedState from 'vuex-persistedstate'

import { authState, authMutations, authGetters, authActions} from './auth.store';
import { routerState, routerMutations, routerGetters, routerActions} from './router.store';
import { authorsState, authorsMutations, authorsGetters, authorsActions} from './authors.store';
import { userState, userMutations, userGetters, userActions} from './user.store';


Vue.use(Vuex);

export const store = new Vuex.Store({
    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })],
    state : {
        ...authState,
        ...routerState,
        ...authorsState,
        ...userState,
    },
    getters : {
        ...authGetters,
        ...routerGetters,
        ...authorsGetters,
        ...userGetters,
    },
    mutations:{
        ...authMutations,
        ...routerMutations,
        ...authorsMutations,
        ...userMutations,
    },
    actions:{
        ...authActions,
        ...routerActions,
        ...authorsActions,
        ...userActions,
    }
});