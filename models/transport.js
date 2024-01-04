const transports = [
    {
        id: 1,
        method: "Plane",
        economical: false,
        distance: "can travel very far",
        price: "$$$",
        stars: 4
    },
    {
        id: 2,
        method: "Bicycle",
        economical: true,
        distance: "cannot travel that far",
        price: "$",
        stars: 2
    },
    {
        id: 3,
        method: "Car",
        economical: false,
        distance: "can travel quite far",
        price: "$$",
        stars: 4
    },
    {
        id: 4,
        method: "Bus",
        economical: true,
        distance: "will remain somewhat local",
        price: "$",
        stars: 2
    },
    {
        id: 5,
        method: "Train",
        economical: true,
        distance: "can travel a good distnace",
        price: "$",
        stars: 3
    }
]

module.exports = {
    getAll,
    getOne
    }

    function getAll(){
        return transports
    }

    function getOne(id){
        id = parseInt(id)
        return transports.find((transport) => transport.id === id)
    }