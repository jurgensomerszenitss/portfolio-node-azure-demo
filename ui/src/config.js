// server
export const ServerSettings = {
    VUE_APP_SERVER_PORT:4200
}

/* deployed : uncomment this section before sending to devops */
export const AuthSettings = {
    VUE_APP_AUTH_CLIENT_ID : '#{VUE_APP_AUTH_CLIENT_ID}#',
    VUE_APP_AUTH_AUTHORITY : '#{VUE_APP_AUTH_AUTHORITY}#',
    VUE_APP_AUTH_REDIRECT_URI : '#{VUE_APP_AUTH_REDIRECT_URI}#',
}
 
export const ApiSettings = { 
    VUE_APP_API : '#{VUE_APP_API}#'
}
