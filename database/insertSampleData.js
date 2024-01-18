import { MongoClient } from 'mongodb';

async function insertSampleData(username, password, score) {
  const uri = 'mongodb://localhost:27017/games';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('MongoDB connected');

    const database = client.db('games');
    const userCollection = database.collection('codeknacker');

    // example data
    const sampleUser = {
      username: 'Nina',
      password: 'Rüya2017',
      score: 440
    };

    const result = await userCollection.insertOne(sampleUser);
    console.log(`Datensatz eingefügt mit ID: ${result.insertedId}`);

  } finally {
    await client.close();
    console.log('Connection closed');
  }
}

//insertSampleData('exampleUser', 'examplePassword', 1000);
insertSampleData()