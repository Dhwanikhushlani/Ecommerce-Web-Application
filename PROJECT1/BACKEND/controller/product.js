const Product = require("../model/product");

exports.getAllProduct = async (req,res,next)=>{
    try {
        const products = await Product.find();
        res.status(200).send({message : "Product Fetched" , data : products})
    } catch (error) {
        next(error);
    }
};

exports.createProduct = async (req,res,next)=>{
    const { name , price , category , description } = req.body;
    // console.log(req.body);
    console.log(req.file);
    const productUrl =  req.file ? req.file.path : null;
    try {
        const newProduct = new Product({name, price , description, category , productUrl });
        await newProduct.save();
        res.status(201).send({message : "Product Added" , data : newProduct})
    } catch (error) {
        next(error);
    }
};

exports.updateProduct = async (req,res,next)=>{
    const {id } = req.params;
    console.log(req.body)
    console.log(id)
    try {
        const isExisting = await Product.findById(id);
        if(!isExisting){
            const error = new Error("Product not found");
            error.name = "NotFound";
            error.statusCode = 404;
            throw error;
        }
        // const updateProduct = await Product.findByIdAndUpdate(id,req.body,{new : true});
        const updatedProduct = await Product.findByIdAndUpdate(id , req.body , { new : true});
        res.status(200).send({message : "Product Updated" , data : updatedProduct});
    } catch (error) {
        next(error);
    }
};
exports.updateProductWithImage = async (req,res,next)=>{
    const { id } = req.params;
    const productUrl = req.file.path;
    // console.log(productUrl);
    // console.log(id);
    // console.log(req.body)
    const reqBody = { ...req.body , productUrl : productUrl };
    try {
        const isExisting = await Product.findById(id);
        if(!isExisting){
            const error = new Error("Product not found");
            error.name = "NotFound";
            error.statusCode = 404;
            throw error;
        }
        const updatedProduct = await Product.findByIdAndUpdate(id,reqBody,{new : true});
        res.status(200).send({message : "Product Updated" , data : updatedProduct});
    } catch (error) {
        next(error);
    }
};