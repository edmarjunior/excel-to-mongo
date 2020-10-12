const MongoClient = require('mongodb').MongoClient;
 
function insertDocuments (documents) {

    const urlMongo = 'mongodb://localhost:27017/db_excel', 
        dbName = 'database', 
        collectionName = 'collection'

    MongoClient.connect(urlMongo, function(err, client) {

        console.log("Connected successfully to server");
    
        const db = client.db(dbName);
    
        const collection = db.collection(collectionName);
        
        collection.insertMany(documents, function(err, result) {
            console.log("Saved rows: ", documents.length);
        });

        client.close()
    });
}

module.exports = {
    insertDocuments
}
