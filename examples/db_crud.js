import { MongoClient, ObjectId } from 'mongodb';

MongoClient.connect('mongodb://localhost:27017/TestDB').then(client => {
  console.log('Yey, we are connected');


  const collection = client.db('TestDB').collection('users');

  //

  //READING

  // collection.find({arms: { $gt: 2 }}).toArray().then(users => console.log(users));

  // collection.find({ _id: new

  // collection.deleteMany({arms: 1})
  //   .then(docs => console.log(docs))
  //   .catch(err => console.error(err))

    collection.findOneAndDelete({_id: new Object("5ad768315990ff7a958e0cb0")})
      .then(val => console.log(val))
      .catch(err => console.log(err))

      collection.findOneAndUpdate({_id: new Object("5ad768315990ff7a958e0cb0")},
    {
      name: "Kuba"
    })

  client.close();

}).catch(err => {
  console.error('Naaaay, we have failed!', err);
})