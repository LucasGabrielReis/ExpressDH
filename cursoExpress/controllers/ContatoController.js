const ContatoController = {
    index: (req, res)  =>{
        let info = {
            titulo: 'Contato'
        }
        return(res.render("contato", info))
    }
}

module.exports = ContatoController