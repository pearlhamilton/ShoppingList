window.addEventListener("load", getallItems)
const form = document.querySelector('form')
form.addEventListener("submit", addItem)

function getallItems(){
    fetch('http://localhost:3000/items')
        .then(r => r.json())
        .then(data => appendItems(data))
}


function addItem(e){
    e.preventDefault()

    const itemData ={
        item_name: e.target.item.value,
        amount: e.target.quantity.value
        
    }

    const options = { 
        method: 'POST',
        body: JSON.stringify(itemData),
        headers: { "Content-Type": "application/json" }
    };

    fetch('http://localhost:3000/items', options)
        .then(r => r.json())
        .then(data => appendItem(data))
        .then(() => e.target.reset())
        .catch(console.warn)
}

function addToQuantity(id, tr){
    const options = { 
        method: 'PATCH',
    };

    fetch(`http://localhost:3000/items/${id}`, options)
        .then(r => r.json())
        .then(data => tr.querySelectorAll('td')[1].textContent = data.item.amount)
        .catch(console.warn)

}




function deleteItem(){

}