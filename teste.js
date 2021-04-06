let http = "http://"
function dominio (link) {
    let http = "http://"
    var httpLink = (http + link)
    console.log(httpLink)
}
dominio("br.digitalhouse.com")

function adicionarHttp(url) {
    return "http://" + url
}
function processar(array,callback) {
var resultado = [];
for (let i = 0;i < array.lenght;i++){resultado.push(callback(array[i]))}
return resultado
}
processar(["help","me"],adicionarHttp)
