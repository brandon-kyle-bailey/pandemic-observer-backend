const https = require('https');


exports.global = (request, response) => {

    var response_body;

    https.get('https://api.covid19api.com/summary', (res) => {

        var body = '';

        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);

        res.on('data', (d) => {
            body += d;
        });

        res.on('end', () => {
            response_body = JSON.parse(body);
            response_body["Global"]["Date"] = response_body["Date"];
            response.json({
                "message":"this is managed by the summary controller.",
                "data": {
                    "global": response_body["Global"],
                },
            });
        });

    }).on('error', (e) => {

        console.error(e);

    });

    //response.json({
    //    "message":"this is managed by the summary controller.",
    //    "data": {
    //        "global": response_body.global,
    //    },
    //});
};
