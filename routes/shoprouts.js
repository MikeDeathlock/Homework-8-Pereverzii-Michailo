const { getHomePage, getContactPage, getBlogPage, getSingleBlogPage, getCartPage, getCategoryPage, getCheckoutPage, getConfirmationPage, getLoginPage, getRegisterPage, getSingleProductPage, getTrackingOrderPage, getProduct, get404Page } = require("../controllers/shopController");

const express = require("express");

const router = express.Router();

router.get("/", getHomePage);

router.get("/contact", getContactPage); 

router.get("/blog", getBlogPage);

router.get("/single-blog", getSingleBlogPage); 

router.get("/category", getCategoryPage);

router.get("/cart", getCartPage); 

router.get("/checkout", getCheckoutPage);

router.get("/confirmation", getConfirmationPage);

router.get("/login", getLoginPage);

router.get("/register", getRegisterPage);

router.get("/single-product", getSingleProductPage);

router.get("/tracking-order", getTrackingOrderPage);

router.get("/products/:productId", getProduct);

router.get("*", get404Page);

module.exports = router;