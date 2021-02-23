// const { getHomePage, getContactPage, getBlogPage, getSingleBlogPage, getCartPage, getCategoryPage, getCheckoutPage, getConfirmationPage, getLoginPage, getRegisterPage, getSingleProductPage, getTrackingOrderPage, getProduct, getNewProductPage, get404Page } = require("../controllers/shopController");

const shopController = require("../controllers/shopController");

const express = require("express");

const router = express.Router();

router.get("/", shopController.getHomePage);

router.get("/contact", shopController.getContactPage); 

router.get("/blog", shopController.getBlogPage);

router.get("/single-blog", shopController.getSingleBlogPage); 

router.get("/category", shopController.getCategoryPage);

router.get("/cart", shopController.getCartPage); 

router.get("/checkout", shopController.getCheckoutPage);

router.get("/confirmation", shopController.getConfirmationPage);

router.get("/login", shopController.getLoginPage);

router.get("/register", shopController.getRegisterPage);

router.get("/single-product", shopController.getSingleProductPage);

router.get("/tracking-order", shopController.getTrackingOrderPage);

router.get("/products/:productId", shopController.getProduct);

router.get("/add-product", shopController.getNewProductPage);

router.post("/add-product", shopController.postNewsProductPage);

router.get("/update-product/:id", shopController.changeProduct);

router.post("/update-product/:id", shopController.postNewUpdateProduct);

// router.get("/change-product/:id", shopController.changeProduct);

router.get("*", shopController.get404Page);

module.exports = router;