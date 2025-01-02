import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://lordanayami:A12345678b!@cluster0.bg1k4.mongodb.net/auth-demo?retryWrites=true&w=majority'
  );

  return client;
}
