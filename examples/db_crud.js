import { MongoClient, ObjectId } from 'mongodb';

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('Darn it! Could not connect');
  }
  console.log('Yup, we are connected');

  const collection = client.db('TestDB').collection('users');

  // collection
  //   .insertOne({
  //     name: 'Wojtek',
  //     isLivingInPoland: true,
  //     age: 27
  //   })
  //   .then(value => console.log(value))
  //   .catch(err => console.log(err));

  // collection.insertMany([
  //   {
  //     name: 'Kasia',
  //     isLivingInPoland: false,
  //     age: 26
  //   },
  //   {
  //     name: 'Ludwik',
  //     isLivingInPoland: true,
  //     age: 120
  //   }
  // ]);

  // collection
  //   .find({ _id: new ObjectId('5a87f2c2a100d426b9117a2f') })
  //   .toArray()
  //   .then(users => console.log(users));

  // collection
  //   .deleteMany({ age: 27 })
  //   .then(docs => console.log(docs.opt))
  //   .catch(err => console.log(err));

  // collection
  //   .findOneAndDelete({ _id: new ObjectId('5a87f2c2a100d426b9117a30') })
  //   .then(doc => console.log(doc))
  //   .catch(err => console.log(err));

  collection
    .findOneAndUpdate(
      { _id: new ObjectId('5a87f2c2a100d426b9117a31') },
      {
        $set: {
          name: 'Napoleon Bonaparte'
        }
      }
    )
    .then(doc => console.log(doc));

  client.close();
});
