const models = require('../models');
// const Op = models.Sequelize.Op;
// const sequelize = models.sequelize;
// const moment = require('moment');

module.exports = {
    createProduct: function (request) {
        return new Promise((resolve, reject) => {
            models.Product.create(request).then(event => {
                console.log('product created ' + JSON.stringify(event));
                resolve(event);
            }).catch(err => {
                console.log('error occurred', err);
                reject(err);
            });
        });
    },
    getProduct : function (id){
        return new Promise((resolve,reject)=>{
            models.Product.findOne({
                where:{
                    id : id
                } 
            }).then(product =>{
                console.log("Product Data" , JSON.stringify(product));                
                resolve(product)
            }).catch(err =>{
                console.log('Error Occured', err);
                reject(err)                
            });
        });
    },
    getAllProducts : function (){
        return new Promise((resolve,reject)=>{
            models.Product.findAll({}).then(product =>{
                console.log("Product Data" , JSON.stringify(product));                
                resolve(product)
            }).catch(err =>{
                console.log('Error Occured', err);
                reject(err)                
            });
        });
    },
    deleteProductById : function(id){
        return new Promise((resolve, reject)=>{
            models.Product.destroy({
                where:{
                    id: id 
                }
            }).then(product =>{
                resolve(product)
            }).catch(err =>{
                reject(err)
            })
        })
    },
    updateProductById : function(id, req){
        return new Promise((resolve, reject)=>{
            models.Product.update(req, {
                where:{
                    id: id 
                }
            }).then(product =>{
                resolve(product)
            }).catch(err =>{
                reject(err)
            })
        })
    }
}