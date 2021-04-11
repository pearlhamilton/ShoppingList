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

function editQuantity(id, quantity){
    const itemQuantity = {
        amount: quantity
        
    }
    
    
    
    const options = { 
        method: 'PATCH',
        body: JSON.stringify(itemQuantity),
        headers: { "Content-Type": "application/json" }
    };

   

    fetch(`http://localhost:3000/items/${id}/quantity`, options)
        .then(r => r.json())
        .then(data => console.log(data))
        // .then(data => tr.querySelector('input').textContent = data.item.amount)
        .catch(console.warn)

}


function gotItem(id){

    const gotItem = document.getElementById(`${id}`)
    gotItem.style.opacity = 0.5;
    gotItem.style.color = "black";
    
    const options = { 
        method: 'PATCH',
        headers: { "Content-Type": "application/json" }
    };

   

    fetch(`http://localhost:3000/items/${id}/`, options)
        .then(r => r.json())
        .then(data => console.log(data))
        .catch(console.warn)

}




function deleteItem(id, tr){
    const options = { 
        method: 'DELETE',
    };
    fetch(`http://localhost:3000/items/${id}`, options)
        .then(tr.remove())
        .catch(console.warn)
}


