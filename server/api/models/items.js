const db = require ('../dbConfig')


class Item {
    constructor(data){
        this.id = data.id,
        this.item_name = data.item_name,
        this.amount = data.amount
    }

 static get all(){
    return new Promise (async (resolve, reject) => {
        try {
            const itemsData = await db.query(`SELECT * FROM items;`)
            console.log(itemsData)
            const items = itemsData.rows.map(i => new Item(i))
            console.log(items)
            resolve(items);
        } catch (err) {
            reject("Error retrieving items")
        }
    })

    }
}



module.exports = Item