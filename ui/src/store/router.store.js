export const routerState = {
    router : {
        currentRoute:'test'
    }
}

export const routerGetters = {
    currentRoute : state => state.router.currentRoute,
}

export const routerMutations = {
    ROUTE_CHANGED(state, router) { 
        state.router.currentRoute = router.currentRoute.path; 
    },
}


export const routerActions = {
    onRouteChanged({commit}, router) {
        commit('ROUTE_CHANGED', router); 
    }
}



