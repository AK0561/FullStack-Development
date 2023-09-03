//Building the Database
db.inventory.insertMany([
    { item: "journal", qty: 25, tags: ["blank", "red"], size: { h: 14, w: 21, uom: "cm" } },
    { item: "mat", qty: 85, tags: ["gray"], size: { h: 27.9, w: 35.5, uom: "cm" } },
    { item: "mousepad", qty: 25, tags: ["gel", "blue"], size: { h: 19, w: 22.85, uom: "cm" } }
 ])

db.inventory.find().sort( {qty: -1}) // Descending order of qty 
db. inventory.find().sort({qty: 1}) // Increasing order of qty

db.inventory.find().skip(1) // Skips first document 
db.inventory.find().skip (2) // Skips first 2 documents

db. inventory.find().limit(1)// Limits the number of documents in the output to one.
db.inventory.find().limit (2) // Limits the number of documents in the output to two.