const Product = require('../models/product')

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


let products = [
    new Product({     
        imagePath: "https://upload.wikimedia.org/wikipedia/en/6/68/Halo_Guardians.png",
        title: "Halo 5",
        description: "it is a game",
        price: 10
    }),
    new Product({     
        imagePath: "https://upload.wikimedia.org/wikipedia/en/9/92/Halo_4_box_artwork.png",
        title: "Halo 4",
        description: "it is one game",
        price: 20
    }),
    new Product({     
        imagePath: "https://upload.wikimedia.org/wikipedia/en/b/b4/Halo_3_final_boxshot.JPG",
        title: "Halo 3",
        description: "it is another game",
        price: 30
    }),
    new Product({
        imagePath: "https://upload.wikimedia.org/wikipedia/en/9/92/Halo2-cover.png", 
        title: "Halo 2",
        description: "it is one of several games",
        price: 40
    }),
    new Product({
        imagePath: "https://upload.wikimedia.org/wikipedia/en/8/80/Halo_-_Combat_Evolved_%28XBox_version_-_box_art%29.jpg",
        title: "Halo",
        description: "it is a single game",
        price: 50
    }),
    new Product({
        imagePath: "https://upload.wikimedia.org/wikipedia/en/6/6d/Halo-spartan-assault-boxart.png",
        title: "Halo: Spartan Assault",
        description: "it is a game",
        price: 60
    }),
];


mongoose.connect('mongodb://localhost:27017/estore6', {useNewUrlParser: true})
    .then(Product.collection.insertMany(products))
    .then(() => mongoose.connection.close())
//originally had: .then(mongoose.connection.close()) as opposed to returning it in callback and it didnt work. why?
