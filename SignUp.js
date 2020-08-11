const https = require('https');

/*https.post('https://vishtesting1.eu.auth0.com/dbconnections/signup', (resp) => {
  let data = `{
    "client_id": "ffcJBxpkLSdFBhzeT2FUR4eief8BblJK",
    "email": "test@gmail.com",
    "password": "PASSWORD123@",
    "connection": "Username-Password-Authentication",
    "username": "johndoe",
    "given_name": "John",
    "family_name": "Doe",
    "name": "John Doe",
    "nickname": "johnny",
    "picture": "http://example.org/jdoe.png"
    "user_metadata": { plan: 'silver', team_id: 'a111' }
  }`;*/



const options = {
    hostname: 'vishtesting1.eu.auth0.com',
    path: '/dbconnections/signup',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
        }
};

const data = JSON.stringify({
    
    "client_id": "ffcJBxpkLSdFBhzeT2FUR4eief8BblJK",
    "email": "test535@gmail.com",
    "password": "PASSWORD123@",
    "connection": "Username-Password-Authentication",
    "username": "johndoe",
    "given_name": "John",
    "family_name": "Doe",
    "name": "John Doe",
    "nickname": "johnny",
    "picture": "http://example.org/jdoe.png",
    "user_metadata": { plan: 'silver', team_id: 'a111' }
});


const req = https.request(options, (res) => {
    let data = '';
   console.log('Status Code:', res.statusCode);

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log('Body: ', JSON.parse(data));
    });

}).on("error", (err) => {
    console.log("Error: ", err.message);
});

req.write(data);

req.end();