var express = require('express');
var router = express.Router();
var product = require('./controllers/product')


router.post('/create', function (req, res) {
    console.log(req.body, "Request Body");

    let request = {
        'name': req.body.name,
    }
    product.createProduct(request).then(data => {
        res.json(data);

    }).catch(err => res.status(500).send({
        error_message: err
    }));

});

router.get('/products/:id', function (req, res) {
    product.getProduct(req.params.id).then(data => {
        res.json(data);
    }).catch(err => res.status(500).send({
        error: err
    }));
});

router.get('/products', function (req, res) {
    product.getAllProducts().then(data => {
        res.json(data);
    }).catch(err => res.status(500).send({
        error: err
    }));
});

router.post('/product/remove/:id', function (req, res) {
    product.deleteProductById(req.params.id).then(data => {
        console.log("Remove Acknowledge ", data);
        
        product.getAllProducts().then(data => {
            res.json(data);
        }).catch(err => res.status(500).send({
            error: err
        }));
    }).catch(err => res.status(500).send({
        error: err
    }));
});

router.post('/product/update/:id', function (req, res) {
    const reqBody = req.body;
    product.updateProductById(req.params.id, reqBody).then(data => {
        console.log("Udpate Acknowledge ", data);
        
        product.getAllProducts().then(data => {
            res.json(data);
        }).catch(err => res.status(500).send({
            error: err
        }));
    }).catch(err => res.status(500).send({
        error: err
    }));
});

//Other routes here
router.get('*', function (req, res) {
    res.send('Sorry, this is an invalid URL.');
});
//export this router to use in our index.js
module.exports = router;