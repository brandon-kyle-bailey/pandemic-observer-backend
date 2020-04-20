const https = require('https');


makeHttpRequest = function(uri, callbackFunc) {
    https.get(uri, (response) => {
        console.log('statusCode:', response.statusCode);
        console.log('headers:', response.headers);
        var body = [];
        response.on('data', (data) => {
            body.push(data);
        });
        response.on('end', () => {
            callbackFunc(JSON.parse(body.join('')));
        });
    }).on('error', (err) => {
        console.log(err);
    });
};


exports.all = (req, res) => {
    makeHttpRequest('https://api.covid19api.com/summary', (data) => {
        res.json({"data": data["Countries"]})
    });
};


exports.test = (req, res) => {
    console.log(req);
    makeHttpRequest('https://api.covid19api.com/summary', (data) => {
        res.json({"data": data["Global"]})
    });

}
