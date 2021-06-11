import { store }  from '../store/store'; 
import { ApiSettings } from '../config';
import AuthService from './auth.service';

export default class UserService {

    getInfo() {
        var headers = new Headers();
        var bearer = `Bearer ${store.getters.idToken}`;
        var accesstoken = store.getters.accessToken; 

        if(!accesstoken) {
            const authService = new   AuthService();
            authService.getAccessToken()
                .then( r => {
                    console.log(r);
                    this.getInfo();
                });
        }
        else {
            headers.append("Authorization", bearer);
            headers.append("Content-Type", "application/json");
            
            var options = {
                method: "POST",
                headers: headers,
                body : JSON.stringify({accesstoken:accesstoken})
            };


            fetch(ApiSettings.VUE_APP_API + `users/me`, options)
            .then(response => response.json())
            .then(data => 
                { 
                    store.dispatch('setUserInfo',data);
                }); 
        }
    }
}