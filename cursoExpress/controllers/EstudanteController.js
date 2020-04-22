const EstudanteController = {
    index: (req, res)  =>{
        let info = {
            titulo: 'Estudantes'
        }
        return(res.render("estudantes", info))
    }
}

module.exports = EstudanteController