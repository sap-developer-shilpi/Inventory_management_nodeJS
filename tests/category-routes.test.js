const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Category} = require('./../models/category');

beforeEach((done) => {
    Category.remove({}).then(() => done());
});

after(() => {
    process.exit(0);
});
describe('Post /categories', () => {
    it('should crete a new category', (done) => {
        const categoryName = "test7";
        const image = "test.jpg";
        const description = "this is a test category";
        request(app)
            .post('/categories/create')
            .send({categoryName, image, description})
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                console.log("end");
                done();
            });
    });

});