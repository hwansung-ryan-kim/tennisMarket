let http = require('http');
let url = require('url');

function start(route, handle, productId) { 
    function onRequest(req, res) {
        let pathname = url.parse(req.url).pathname;
        let queryData = url.parse(req.url, true).query;

        route(pathname, handle, res, queryData.productId);
    }
    
    http.createServer(onRequest).listen(8888);
    //http://localhost:8888/
}

exports.start = start; 
// start는 함수 안에서만 실행되는데, 밖에서도 쓸 수 있게 해주겠다!