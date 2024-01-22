import { MongoClient } from 'mongodb';

async function setupDatabase() {
  const dbName = 'games';
  const collectionName = "codeknacker";

  const uri = `mongodb://localhost:27017/${dbName}`;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('MongoDB connected');

    const database = client.db(`${dbName}`);
    await database.createCollection(`${collectionName}`);
    console.log(`collection "${collectionName}" created`);

  } finally {
    await client.close();
    console.log('connection closed');
  }
}

setupDatabase();