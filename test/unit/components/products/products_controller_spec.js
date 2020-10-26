import ProductsController from '../../../../src/controllers/products/ProductsController.js';
import sinon from 'sinon';

describe('Controller: products', () => {
    const defaultProducts = [{
        name: 'Default product',
        description: 'product description',
        price: 100
    }];

    describe('GET products', () => {
        it('Should return a list of products', () => {
            const request = {};
            const response = {
                send: sinon.spy()
            };

            const productsController = new ProductsController(defaultProducts);
            productsController.get(request, response);

            expect(response.send.called).to.be.true;
            sinon.assert.calledWith(response.send, defaultProducts);
        });
    });

});