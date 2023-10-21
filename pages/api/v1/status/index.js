function status(request, response) {
response.status(200).json({"chave" : "verificar UTF-8 é ã"});
}

export default status;