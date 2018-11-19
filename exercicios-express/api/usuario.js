function salvar(req,res){
    res.send('Usuario > salvar')
}

function obter(req,res){
    res.send('Usuario > obeter')    
}

module.exports = {salvar, obter}