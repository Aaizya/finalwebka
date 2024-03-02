// интеграционный тест
const assert = require('assert');
const { MongoClient } = require('mongodb');

describe('MongoDB Tests', () => {
  let connection;
  let db;

  before(async () => {
    
    const uri = 'mongodb://localhost:27017'; 
    connection = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    db = connection.db('mydatabase'); 
  });

  after(async () => {
 
    await connection.close();
  });

  it('read documents from users, movies, and ratings collections', async () => {
    
    const users = await db.collection('users').find({}).toArray();
    assert.strictEqual(users.length, 6); 

   
    const movies = await db.collection('movies').find({}).toArray();
    assert.strictEqual(movies.length, 2); 

    
    const ratings = await db.collection('ratings').find({}).toArray();
    assert.strictEqual(ratings.length, 7); 
  });
});
