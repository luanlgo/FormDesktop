var url = require('url');
var fs = require('fs');

function renderHtml(path, response) {
    fs.readFile(path, null, function(error, data){
        if (error) {
            response.writeHead(404);
            response.write('File not Found');
        } else {
            response.write(data);
        }
        response.end();
    });
}

module.exposts = {
    handleRequest: function(request, response) {
        response.writeHead(200, {'Content-Type': 'text/html'});

        var path = url.parse(request.url).pathname;
        switch (path) {
            case '/':
                renderHtml('./html/formTabela.html', response);
                break;
            
            case '/valores':
                
                renderHtml('./html/form.html', response);
                break;

            default:
                response.writeHead(404);
                response.write('Route not defined');
                response.end();
        }

    }
};