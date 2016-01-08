var http = require('http');
var fs = require('fs');
module.exports = function(request,response){
	console.log('client request URL: ',request.url);
	if(request.url === '/'){
		fs.readFile('./views/index.html','utf8',function(errors,contents){
			response.writeHead(200,{'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}else if(request.url === '/cars'){
		fs.readFile('./views/cars.html','utf8',function(errors,contents){
			response.writeHead(200,{'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}else if(request.url == '/cats'){
		fs.readFile('./views/cats.html','utf8',function(errors,contents){  //don't type '/dojos/dojos.html'!!!
			response.writeHead(200,{'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		})
	}else if(request.url == '/cars/new'){
		fs.readFile('./views/form.html','utf8',function(errors,contents){  //don't type '/dojos/dojos.html'!!!
			response.writeHead(200,{'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		})
	}else if(request.url === '/stylesheets/style.css'){
		fs.readFile('./stylesheets/style.css','utf8',function(errors,contents){
			response.writeHead(200,{'Content-Type': 'text/css'});
			response.write(contents);
			response.end();
		});
	}else if(request.url === '/images/car1.jpg'){
		fs.readFile('./images/car1.jpg',function(errors,contents){
			response.writeHead(200,{'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url === '/images/car2.jpg'){
		fs.readFile('./images/car2.jpg',function(errors,contents){
			response.writeHead(200,{'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url === '/images/cat1.jpg'){
		fs.readFile('./images/cat1.jpg',function(errors,contents){
			response.writeHead(200,{'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url === '/images/cat2.jpg'){
		fs.readFile('./images/cat2.jpg',function(errors,contents){
			response.writeHead(200,{'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	}
	else{
		response.writeHead(404);
		response.end('File not found!!!');
	}
}
