import * as Msal from 'msal';
import { store } from '../store/store';
import { AuthSettings } from '../config';

export default class AuthService {
    constructor() {
        this.msalConfig = {
            auth: {
              clientId: AuthSettings.VUE_APP_AUTH_CLIENT_ID,
              authority: AuthSettings.VUE_APP_AUTH_AUTHORITY,
              redirectUri: AuthSettings.VUE_APP_AUTH_REDIRECT_URI,
              validateAuthority: false,
              knownAuthorities: [],
              scopes: ["user.read"]  

            },
            cache: {
              cacheLocation: "localStorage", // This configures where your cache will be stored
              storeAuthStateInCookie: false // Set this to "true" to save cache in cookies to address trusted zones limitations in IE (see: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/Known-issues-on-IE-and-Edge-Browser)
            }
          };           

          this.msalObj = new Msal.UserAgentApplication(this.msalConfig);
    }

    signOut()  {
      this.msalObj.logout();
      store.dispatch('onSignOut');      
    }

    getAccessToken(){
      console.log('get access token');
      const msalObj  = this.msalObj; 

      var tokenRequest = {
        scopes: ["user.read"]
      };

      return msalObj.acquireTokenSilent(tokenRequest)
        .then(response => {
          store.dispatch('onGetAccessToken',response.accessToken);
          return response.accessToken;
        })
        .catch(err => {
          console.warn(err);
            // could also check if err instance of InteractionRequiredAuthError if you can import the class.
            if (err.name === "InteractionRequiredAuthError") {
                return msalObj.acquireTokenPopup(tokenRequest)
                    .then(response => {                      
                      store.dispatch('onGetAccessToken',response.accessToken);                     
                    })
                    .catch(err => {
                      console.error(err);
                        // handle error
                    });
            }
        });
    }
 
      
    signIn() {
        const msalObj  = this.msalObj; 

        msalObj.loginPopup()
          .then(response => {
            if(msalObj.getAccount()) {
              store.dispatch('onSignIn',response.idToken.rawIdToken, msalObj.getAccount());
            }

            //this.getAccessToken();
          }).catch(error => {
            console.log(error);       
          });
        }  
  }