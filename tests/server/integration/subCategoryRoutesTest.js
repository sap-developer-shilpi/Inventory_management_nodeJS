// const expect = require('expect');
// const request = require('supertest');
//
// const {app} = require('./../server');
// const {Category} = require('./../models/category');
// const {SubCategory} = require('./../models/subCategory');
// const categories = [{
//     categoryName: "testCategory1",
//     image: "testImage1.jpg",
//     description: "test description of testCategory1"
// },{
//     categoryName: "testCategory2",
//     image: "testImage2.jpg",
//     description: "test description of testCategory2"
// }];
// beforeEach((done) => {
//     Category.remove({}).then(() => {
//        return  Category.insertMany(categories);
//     }).then(()=> done());
// });
//
// after(() => {
//     process.exit(0);
// });
// describe('Post /categories', () => {
//     it('should crete a new category', (done) => {
//         const categoryName = "test";
//         const image = "test.jpg";
//         const description = "this is a test category";
//         request(app)
//             .post('/categories/create')
//             .send({categoryName, image, description})
//             .expect(200)
//                     .end((err) => {
//                         if (err) {
//                             return done(err);
//                         }
//                         Category.find({categoryName}).then((categories) => {
//                             expect(categories.length).toBe(1);
//                             expect(categories[0].categoryName).toBe(categoryName);
//                             expect(categories[0].image).toBe(image);
//                             done();
//                         }).catch((e) => done(e));
//                     });
//     });
//     it('should not create a new category', (done) => {
//         request(app)
//             .post('/categories/create')
//             .send({})
//             .expect(400)
//             .end((err) => {
//                 if (err) {
//                     return done(err);
//                 }
//                 Category.find().then((categories) => {
//                     expect(categories.length).toBe(2);
//                     done();
//                 }).catch((e) => done(e));
//             });
//     });
//     it('should not create a new category with no image', (done) => {
//         const categoryName = "test";
//         const description = "this is a test category";
//         request(app)
//             .post('/categories/create')
//             .send({categoryName, description})
//             .expect(400)
//             .end((err) => {
//                 if (err) {
//                     return done(err);
//                 }
//                 Category.find().then((categories) => {
//                     expect(categories.length).toBe(2);
//                     done();
//                 }).catch((e) => done(e));
//             });
//     });
// });
//
// describe('Get /categories', () => {
//    it('should return the categories',(done) => {
//        request(app)
//            .get('/categories')
//            .expect(200)
//            .expect((res) =>{
//             expect(res.text).toContain(`test description of testCategory1`);
//            })
//            .end(done);
//     });
// });

