const db = require ('../dbConfig')


class Item {
    constructor(data){
        this.id = data.id,
        this.item_name = data.item_name,
        this.amount = data.amount,
        this.got_item = data.got_item
    }

 static get all(){
     //use get so we can call it without the () in controllers
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

    static findById (id) {
        return new Promise (async (resolve, reject) => {
            try {
                let itemsData = await db.query(`SELECT * FROM items WHERE id = $1;`, [ id ]);
                let item = new Item(itemsData.rows[0]);
                resolve (item);
            } catch (err) {
                reject('Item not found');
            }
        })
    }

    static create(item_name, amount){
        return new Promise (async (resolve, reject) => {
            try {
                let itemData = await db.query(`INSERT INTO items (item_name, amount) VALUES ($1, $2) RETURNING *;`, [ item_name, amount ]);
                console.log(itemData)
                let newItem = new Item(itemData.rows[0]);
                console.log(newItem)
                resolve (newItem);
            } catch (err) {
                reject('Error creating item');
            }
        });
    }

    update(amount) {
        return new Promise (async (resolve, reject) => {
            try {
                let updatedItemData = await db.query(`UPDATE items SET amount = ${amount} WHERE id = $1 RETURNING *;`, [ this.id ]);
                let updatedItem = new Item(updatedItemData.rows[0]);
                resolve (updatedItem);
            } catch (err) {
                reject('Error updating item');
            }
        });
    }

    gotItem() {
        return new Promise (async (resolve, reject) => {
            try {
                let updatedItemData = await db.query(`UPDATE items SET got_item = TRUE WHERE id = $1 RETURNING *;`, [ this.id ]);
                let updatedItem = new Item(updatedItemData.rows[0]);
                resolve (updatedItem);
            } catch (err) {
                reject('Error updating item');
            }
        });
    }



    destroy(){
        return new Promise(async(resolve, reject) => {
            try {
                await db.query(`DELETE FROM items WHERE id = $1;`, [ this.id ]);
                resolve('Item was deleted')
            } catch (err) {
                reject('Item could not be deleted')
            }
        })
    }



}



module.exports = Item