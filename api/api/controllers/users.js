const jwtDecode = require('jwt-decode');
const fetch = require('node-fetch');

exports.users_get =
(req, res, next) => {

    console.log(req.body.accesstoken);
    var bearer = `Bearer ${req.body.accesstoken}`;    
    var options = {
         method: "GET",
         headers:  {
             Authorization : bearer
         }
    };



    fetch('https://graph.microsoft.com/v1.0/me/', options)
    .then(response => response.json())
    .then(data => 
        { 
            res.status(200).json(data);            
        })
        .catch(err => console.log(err));  
}