const supertest = require('supertest');
const should = require('should');

let api = supertest.agent('http://localhost:3000');

describe('UserController Unit Testing', () => {

    it('should return response status 201, message success and password not equals the is passed', (done) => {
        api.post('/users')
            .send({
                name:"Enrico Alvarenga", 
                email: "enricomalvarenga9002@gmail.com", 
                nickname: "enrich92", 
                password:"12345t",
                picture: "xyz", 
                dateOfBirth: "10-21-1996"
            })
            .expect("Content-type",/json/)
            .expect(201)
            .end((err,res) => {
                res.status.should.equal(201);
                res.body.message.should.equal("Success");
                res.body.data.password.should.not.equal("12345t");
                done();
            });
    })

    it("should return data as instance of Array and make sure it exists", function(done){
        api.get("/users")
            .expect(200)
            .end((err,res) => {
                should.exist(res.body.data);
                res.body.data.should.be.an.instanceof(Array);
                done();
            });
    })

    it("should return data as instance of Object and have to be length 1", function(done){
        api.get("/users/590b3ba8a1c11931359ab4be")
            .expect(200)
            .end((err, res) => {
                res.body.data.should.be.an.instanceof(Object);
                res.body.data.should.have.length(1);
                done();
            });
    })

})