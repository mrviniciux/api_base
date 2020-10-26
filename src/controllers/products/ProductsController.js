class ProductsController {

    constructor(products){
        this.products = products;
    }

    get(req, res){
        if(!this.products){
            return res.send([{
                name: 'Default product',
                description: 'product description',
                price: 100
            }]);
        } else {
            return res.send(this.products);
        }
    }
}

export default ProductsController;