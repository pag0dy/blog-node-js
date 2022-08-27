const { response } = require("express");

const index = (request, response) => {
    response.render('index');
}

const about = (request, response) => {
    response.render('about');
}

const faq = (request, response) => {
    response.render('faq');
}

const contact = (request, response) => {
    response.render('contact');
}

const pricing = (request, response) => {
    response.render('pricing');
}

const blog_home = (request, response) => {
    response.render('blog-home');
}

const blog_post = (request, response) => {
    response.render('blog-post');
}

const portfolio_item = (request, response) => {
    response.render('portfolio-item');
}

const portfolio_overview = (request, response) => {
    response.render('portfolio-overview');
}

module.exports = {
    index,
    about,
    faq,
    contact,
    pricing,
    blog_home,
    blog_post,
    portfolio_item,
    portfolio_overview
}