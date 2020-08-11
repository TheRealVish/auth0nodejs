const https = require('https');




const options = {
    hostname: 'domain.eu.auth0.com',
    path: '/dbconnections/signup',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
        }
};

const data = JSON.stringify({
    
    "client_id": "",
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