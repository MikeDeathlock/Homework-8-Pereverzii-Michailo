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

exports.get404Page = (req, res, next) => {
    res.status(404).render("pages/404");
}