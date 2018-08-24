module.exports = function(app){
    
    app.get('/teste', function(request, response){
        console.log('retorna lista de teste');
        response.send('lista');
    });
    
    app.post('/teste', function(req, resp){
        console.log('teste criado');
        resp.send('criado');
    });
    
    app.put('/teste', function(req, resp){
        console.log('teste alterado');
        resp.send('alterado');
    });

    app.delete('/teste', function(req, resp){
        console.log('teste deletetado');
        resp.send('deletado');
    })
}