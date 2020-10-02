const MongoClient = require('mongodb').MongoClient;
const { urlMongo, dbName } = require('./env')
 
function insertDocuments (documents) {
    MongoClient.connect(urlMongo, function(err, client) {
        console.log("Connected successfully to server");
    
        const db = client.db(dbName);
    
        const collection = db.collection('access');
        
        collection.insertMany(documents, function(err, result) {
            console.log("Saved rows: ", documents.length);
        });

        client.close()
    });
}

module.exports = {
    insertDocuments
}
