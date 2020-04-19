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
    makeHttpRequest(process.env.API_ROOT, (data) => {
        res.json({"data": data})
    });
};


exports.test = (req, res) => {

     https.get('https://api.covid19api.com/summary', (response) => {
         console.log('statusCode:', response.statusCode);
         console.log('headers:', response.headers);
         var body = [];
         response.on('data', (data) => {
             body.push(data);
         });
         response.on('end', () => {
             var test_data = JSON.parse(body.join(''));
             res.json({"data": test_data["Global"]})
         });
     }).on('error', (err) => {
         console.log(err);
     });
}
