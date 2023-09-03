db.inventory.find() //fetches all documents present in our database

//Similar to SQL Statement SELECT * FROM inventory
db.inventory.find() // or we can write this as db.inventory.find({})

//Similar to SQL Statement SELECT * FROM inventory WHERE qty = "90"
db.inventory.find({qty:90})

//AND Operation similar to SQL Statement SELECT * FROM inventory WHERE status in ("A", "D")
db.inventory.find( { status: "A", qty: { $lt: 30 } } )

//OR Operation similar to SQL Statement SELECT * FROM inventory WHERE status = "A" OR qty < 30
db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } )