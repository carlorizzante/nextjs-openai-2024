import { AstraDB } from '@datastax/astra-db-ts';

const DATASTAX_APPLICATION_TOKEN = process.env.DATASTAX_APPLICATION_TOKEN;
const DATASTAX_DATABASE_END_POINT = process.env.DATASTAX_DATABASE_END_POINT;

const VECTOR_TEST = 'vector_test';

export const dataStaxDemo = async () => {
  try {

    // Initialize the client
    const astraDB = new AstraDB(
      DATASTAX_APPLICATION_TOKEN,
      DATASTAX_DATABASE_END_POINT
    )
    console.log('astraDB')
    console.log(astraDB);
    console.log('\n-----\n')

    // Create a collection
    await astraDB.createCollection(
      VECTOR_TEST,
      {
        'vector': {
          'dimension': 5,
          'metric': 'cosine'
        }
      }
    )
    const collection = await astraDB.collection(VECTOR_TEST);
    console.log('astraDB > collection')
    console.log(collection);
    console.log('\n-----\n');

    // Insert documents into the collection
    const documents = [
      {
        "_id": "1",
        "text": "ChatGPT integrated sneakers that talk to you",
        "$vector": [0.1, 0.15, 0.3, 0.12, 0.05],
      },
      {
        "_id": "2",
        "text": "An AI quilt to help you sleep forever",
        "$vector": [0.45, 0.09, 0.01, 0.2, 0.11],
      },
      {
        "_id": "3",
        "text": "A deep learning display that controls your mood",
        "$vector": [0.1, 0.05, 0.08, 0.3, 0.6],
      }
    ];
    const results = await collection.insertMany(documents);
    console.log('astraDB > results')
    console.log(results);
    console.log('\n-----\n');

    // Define the search options
    const options = {
      sort: {
        "$vector": [0.15, 0.1, 0.1, 0.35, 0.55],
      },
      limit: 5
    }

    // Perform a similarity search
    collection.find({}, options)
      .toArray()
      .then((docs) => {
        console.log('astraDB > find')
        console.log(docs);
        console.log('\n-----\n');
        // return docs;
      })
    // .then((docs) => {
    //   docs.forEach((doc) => console.log(doc))
    // })

    // Delete the collection
    astraDB.dropCollection(VECTOR_TEST)
      .then((response) => {
        console.log('astraDB > dropCollection')
        console.log(response);
        console.log('\n-----\n');
        // return response;
      })
    // .then((response) => console.log(response))

  } catch (e) {
    console.log(e);
    return e
  }
}
