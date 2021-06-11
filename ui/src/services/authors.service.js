import { store }  from '../store/store'; 
import { ApiSettings } from '../config';

export default class AuthorsService {

    getList() {
        var headers = new Headers();
        var bearer = `Bearer ${store.getters.idToken}`;
        headers.append("Authorization", bearer);
        var options = {
             method: "GET",
             headers: headers
        };

        fetch(ApiSettings.VUE_APP_API + 'authors', options)
        .then(response => response.json())
        .then(data => 
            { 
                store.dispatch('setAuthorsList',data.data);
            }); 
    }
}