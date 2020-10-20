var authorizationBasic = 'Y2xpZW50ZTpjbGllbnRl';
$.ajax({
type: 'POST',
url: 'https://api.braspress.com/v1/cotacao/calcular/json',
data: '{"cnpjRemetente":60701190000104,"cnpjDestinatario":30539356867,"modal":"R","tipoFrete":"1", "cepOrigem":2323000,"cepDestino":7093090,"vlrMercadoria":100.00,"peso":50.55,"volumes":10,"cubagem":[{"altura":0.46,"largura":0.67,"comprimento":0.67,"volumes":10}]}',
dataType: "json",
contentType: 'application/json; charset=utf-8',
xhrFields: {
withCredentials: true
},
crossDomain: true,
headers: {
'Authorization': 'Basic ' + authorizationBasic,
},
success: function (result) {
console.log(result);
},
error: function (req, status, error) {
console.log(error);
}
});