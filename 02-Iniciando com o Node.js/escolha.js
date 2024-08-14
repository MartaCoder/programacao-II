import { createServer } from 'http'; // Disponibilizar no locahost
import { parse } from 'url'; // Para trabalhar a url esse método parse vem do pacote url(tem vários para trabalhar com redirecionamento)
import { readFile } from 'fs';// ReadFile lê esse html que está na minha estrutura que é do pacote fs

createServer(
    function (req, res){
        let q = parse(rea.url, true); //Quando passa a requisiçao url ele vai separar isoo em propiedades e dentro dessa variavel temos o pathname
        let filename = "./" + q.pathname; //copiar o diretorio do caminho inverno.html ou verao.html
        console.log(q);
        console.log(filename);


        readFile(filename, function(err, data) {// essa funtion vai receber um erro ou um dado esperado
            console.log(err);
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});// 404 - status code
                return res.end("404 NOT FOUD");// o metodo end ele pode retornar nada, um vazio, mas coloquei uma mensagem padrao
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    }

).listen(8080); // esse metodo de listen tem quatro parametros, mas eles não são parametros obrigatorios, então ele consegue resolver se você colocar somente um deles, nesse caso está somente a porta 8080 então ele vai escutar do localhost 8080.