const Product = require("../models/product");

exports.getHomePage = (req, res, next) => {
    res.render("pages/index");
}

exports.getContactPage = (req, res, next) => {
    res.render("pages/contact");
}

exports.getBlogPage = (req, res, next) => {
    res.render("pages/blog");
}

exports.getSingleBlogPage = (req, res, next) => {
    res.render("pages/single-blog");
}

exports.getCartPage = (req, res, next) => {
    res.render("pages/cart");
}

exports.getCategoryPage = (req, res, next) => {
    Product.findAll()
    .then((products) => {        
        res.render("pages/category", {
            products: products            
        });
    })
    .catch(err => console.log(err));
}

exports.getCheckoutPage = (req, res, next) => {
    res.render("pages/checkout");
}

exports.getConfirmationPage = (req, res, next) => {
    res.render("pages/confirmation");
}

exports.getLoginPage = (req, res, next) => {
    res.render("pages/login");
}

exports.getRegisterPage = (req, res, next) => {
    res.render("pages/register");
}

exports.getSingleProductPage = (req, res, next) => {
    res.render("pages/single-product");
}

exports.getTrackingOrderPage = (req, res, next) => {
    res.render("pages/tracking-order");
}

exports.getProduct = (req, res, next) => {
    const productId = req.params.productId;
    Product.findByPk(productId)
    .then((product) => {
        res.render("pages/single-product", {
            product: product
        })
    })
    .catch(err => console.log(err));
}

exports.getNewProductPage = (req, res, next) => {
    res.render("pages/addNewProduct");
}

exports.postNewsProductPage = (req, res, next) => {
    const title = req.body.title;
    const price = req.body.price;
    const image = req.body.image;
    const description = req.body.description;

    Product.create({
        title: title,
        price: price,
        image: image,
        description: description
    })
    .then((result) => {
        console.log('Product created');
        return res.redirect("/category");
    })
    .catch(err => console.log(err));
}

exports.changeProduct = (req, res, next) => {
    const id = req.params.id;
    Product.findByPk(id)
    .then((product) => {
        res.render("pages/updateProduct", {
            product: product
        })
    })
    .catch(err => console.log(err));
}

// exports.getNewUpdateProduct = (req, res, next) => {
//     res.render("pages/updateProduct");    
// }

exports.postNewUpdateProduct = (req, res, next) => { 
    const id = req.params.id;
    const title = req.body.title;    
    const price = req.body.price;
    const image = req.body.image;
    const description = req.body.description;
    const product = {
        title: title,        
        price: price,
        image: image,
        description: description
    }

    Product.update(product, {
        where: {
            id: id
        }
    })
    .then((result) => {
        res.redirect("/category");
    })
    .catch(err => console.log(err));

    // const titleU = req.body.titleU;
    // const priceU = req.body.priceU;
    // const imageU = req.body.imageU;
    // const descriptionU = req.body.descriptionU;

    // Product.updateAttributes({
    //     title: titleU,
    //     price: priceU,
    //     image: imageU,
    //     description: descriptionU
    // })
    // .then((result) => {
    //     console.log('Product updated');
    //     return res.redirect("/category");
    // })
    // .catch(err => console.log(err));
}



exports.get404Page = (req, res, next) => {
    res.status(404).render("pages/404");
}