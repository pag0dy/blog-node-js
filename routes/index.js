const express = require('express');
const { index, about, faq, contact, pricing, blog_home, blog_post, portfolio_item, portfolio_overview} = require('../controllers/index.controller')

const router = express.Router();

router.get('/', index);
router.get('/about', about);
router.get('/faq', faq);
router.get('/contact', contact);
router.get('/pricing', pricing);
router.get('/blog-home', blog_home);
router.get('/blog-post', blog_post);
router.get('/portfolio-item', portfolio_item);
router.get('/portfolio-overview', portfolio_overview);

module.exports = router;
