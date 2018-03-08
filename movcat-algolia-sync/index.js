const algoliasearch = require('algoliasearch');
const dotenv = require('dotenv');
const firebase = require('firebase');

// load values from the .env file in this directory into process.env
dotenv.load();

// configure firebase
firebase.initializeApp({
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});
const database = firebase.database();

// configure algolia
const algolia = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_API_KEY
);
const index = algolia.initIndex(process.env.ALGOLIA_INDEX_NAME);

const collectionsRef = database.ref('/collections');
collectionsRef.on('child_added', addOrUpdateIndexRecord);
collectionsRef.on('child_changed', addOrUpdateIndexRecord);

const deleteLogRef = database.ref('/deleteLog');
deleteLogRef.on('child_added', deleteIndexRecord);

function addOrUpdateIndexRecord(collection) {
  console.log('addOrUpdateIndexRecord');
  // console.log(collection.toJSON())
  for(var key in collection.val()) {

    let movie = collection.val()[key];
    movie.UID = collection.key;
    movie.key = key;

    // Get Firebase object
    const record = movie;
    // Specify Algolia's objectID using the Firebase object key
    record.objectID = key;
    // Add or update object
    index
      .saveObject(record)
      .then(() => {
        console.log('Firebase object indexed in Algolia', record.objectID);
      })
      .catch(error => {
        console.error('Error when indexing collection into Algolia', error);
        process.exit(1);
      });
  }  
}

function deleteIndexRecord(collection) {
  // Get Algolia's objectID from the Firebase object key
  const objectID = collection.val().movieID;

  // Remove the object from Algolia
  index
    .deleteObject(objectID)
    .then(() => {
      console.log('Firebase object deleted from Algolia', objectID);
    })
    .catch(error => {
      console.error('Error when deleting collection from Algolia', error);
      process.exit(1);
    });
}