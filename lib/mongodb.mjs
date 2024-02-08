import { MongoClient, ServerApiVersion } from 'mongodb';

const mongoURI =
  'mongodb+srv://Michael:kYGNcpRftNF1Fq9l@monkfishrecipes.ax9sab8.mongodb.net/?retryWrites=true&w=majority';

const uri = mongoURI;

const client = new MongoClient(uri, {
  serverApi: ServerApiVersion.v1,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDatabase() {
  try {
    if (!client.isConnected()) await client.connect();
    const db = client.db('monkfish-rescipes');
    console.log('Successfully connected to MongoDB.');
    return { db, client };
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    throw new Error('Failed to connect to MongoDB');
  }
}

connectToDatabase();

export { connectToDatabase };
