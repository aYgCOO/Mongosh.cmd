//Basic cmd 
/* 
show dbs
show logs
use database
*/

//Insert a single data
db.collection.insertOne({
     name: "John Deo",
     age: 20,
     role: "Backend"

})

//Insert multiple data
db.collection.insertMany([
     {
          name: "Jane",
          age: 25
     },
     {
          name: "Doe",
          age: 22
     }
])

//Read data - fetch all data
db.collection.find()

//Read only a specific data - fetch a single data
db.collection.find(
     {
          status: "Pending"
     }
)

//Fetch only those people with no status record.
db.collection.find({ status: { $exists: false } })

//Update a single data
db.collection.updateOne(
     {
          name: "John Deo"

     },
     {
          $set: { status: "Success" }
     }
)

//Update multiple data
db.collection.updateMany(
     {
          age: { $gt: 20 }
     },
     {
          $set: { position: "Senior" }
     }
)

//Update the status record of the row through the given ids 
db.collection.updateMany(
     { _id: { $in: [
         ObjectId('66aa2b207db20e489c228fb8'),
         ObjectId('66aa2b207db20e489c228fb9'),
         ObjectId('66aa518e7db20e489c228fba'),
         ObjectId('66aa518e7db20e489c228fbb'),
         ObjectId('66aa59447db20e489c228fbc'),
         ObjectId('66aa59447db20e489c228fbd')
       ]}
     },
     { $set: { status: "Success" } }
   ).acknowledged  /* Use the `acknowledged` flag to confirm that 
   the update operation was acknowledged by the database.*/

//Update the status record of the row through the given names 
db.employs.updateMany(
     {name:{$in:[
          "Sourav Joshi", 
          "John Deo", 
          "Sristi Sarker", 
          "Deb Dooth", 
          "Agnik Roy", 
          "Souvik Ghosh"
     ]}
},
{$set:{position: "Junior"}}
).acknowledge
   
//Delete multiple documents or a single document
db.collection.remove()

//Designed to remove only one document that matches a specified filter
db.collection.deleteOne(
     { _id: ObjectId('66aa2a547db20e489c228fb7') },
)

// Delete all data
db.collection.deleteMany()

//Sort data
/*retrieves all students older than 18 and sorts them by grade in descending order. 
If two students have the same grade, they are further sorted by name in ascending order*/.
db.students.find({ age: { $gt: 18 } }).sort({ grade: -1, name: 1 }) 

//Sort by accending order
db.collection.find().sort({age:1})

//Sort by descending order
db.employs.find().sort({age:-1})

//Skip documents
db.employs.find().skip(3) //Skip 3 documents

//Counts documents 
db.employs.find().count() //Count the total number of documents. 

//Limits
db.employs.find().limit(3) //Limits th number out output of the documents.








