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


/* local : uncomment this section to run local (development)*/
// export const AuthSettings = {
//     VUE_APP_AUTH_CLIENT_ID : '2eb44e3d-6e68-4a77-9e7d-ae045182d3ef',
//     VUE_APP_AUTH_AUTHORITY : 'https://login.microsoftonline.com/12a3af23-a769-4654-847f-958f3d479f4a', 
//     VUE_APP_AUTH_REDIRECT_URI : 'https://localhost:4200'
// }
 
// export const ApiSettings = {
//     VUE_APP_API : 'http://localhost:3200/'
// } 