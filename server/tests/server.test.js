const expect = require('expect');
const request = require('supertest');

const { server } = require('../server.js');
const { Todo } = require('../models/Todo.js');

beforeEach((done) => {
    Todo.remove({}).then(() => {
        done();
    })
})

describe('POST /todos', () => {
    it('should create a new todo', (done) => {
        let text = 'Test todo text.';

        request(server)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((error, res) => {
                if (error) {
                    return done(error);
                }

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((error) => done(error));
            });
    });

    it('should not create todo with invalid body data', (done) => {
        let text = '';

        request(server)
            .post('/todos')
            .send({text})
            .expect(400)
            .expect((res) => {
                expect(res.body.text).toBe(undefined);
            })
            .end((error, res) => {
                if (error) {
                    return done(error);
                }

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(0);
                    done();
                }).catch((error) => done(error));
            });        
    })
});