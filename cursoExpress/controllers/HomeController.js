const HomeController = {
    index: (req, res) =>{
        let info = {
            cursos: ['FSBlend', 'SI', 'Mobile', 'Excel'],
            titulo: 'Cursos Teste Express/EJS'

        }
        
        return res.render('index', info)
    }
}

module.exports = HomeController