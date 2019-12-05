const axios = require('axios');

exports.handler = function(event, context, callback) {

    const { API_URL, API_URL_ID, API_URL_SECRET } = process.env;


    const URL = `${API_URL}?client_id=${API_URL_ID}&client_secret=${API_URL_SECRET}`;

    // Send user REsponse
    const send = body => {
        callback(null, {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            },
            body: JSON.stringify(body)
        });
    };

    // Perform API cALL to Github
    const getUser = () => {
        axios.get(URL)
            .then(res => send(res.data))
            .catch(err => send(err));
    };

    // Method is GET
    if (event.httpMethod == 'GET') {
        // Run
        getUser();

    }


};