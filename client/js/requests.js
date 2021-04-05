window.addEventListener("load", getallItems)

function getallItems(){
    fetch('http://localhost:3000/items')
        .then(r => r.json())
        .then(data => appendItems(data))
}