function saudacao(){
    return function(req,res,next){
        console.log('Seja bem vindo')
        next()
    }        
}

module.exports =  saudacao