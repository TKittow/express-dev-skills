const Transport = require("../models/transport")

module.exports = {
    index,
    show
}

function show(req, res){
    res.render("transports/show", {
        transport: Transport.getOne(req.params.id)
    })
}

function index(req, res){
    res.render("transports/index", {
        transports: Transport.getAll()
    })
}