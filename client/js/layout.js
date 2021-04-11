
const table = document.querySelector('table')


function appendItems(data){
    data.forEach(item => appendItem(item))
}

function appendItem(item){
    const newRow = document.createElement('tr')
    const formattedRow = formatRow(item, newRow)
    table.append(formattedRow)

}


function formatRow(item, newRow){

 if (item.got_item === true){
    newRow.style.opacity = 0.3;
    newRow.style.color = "black"
    }

    const itemTd = document.createElement('td')
    newRow.setAttribute('id', `${item.id}`)
    const deleteTd = document.createElement('td')
    const deleteBtn = document.createElement('button')
    const counterTd = document.createElement('td')
    const counterDiv = document.createElement('div')
    const addButton = document.createElement('button')
    const substractButton = document.createElement('button')
    const quantityInput = document.createElement('input')
    const tickButton = document.createElement('button')
    const tickTd = document.createElement('td')


    addButton.textContent = "+"
    substractButton.textContent = "-"
    quantityInput.value = item.amount
    quantityInput.setAttribute('class','quantityInput')

    console.log(typeof(item.amount))

    counterTd.append(counterDiv)
    counterDiv.append(substractButton)
    counterDiv.append(quantityInput)
    counterDiv.append(addButton)




    tickButton.innerHTML= "&#10004"
    deleteBtn.innerHTML = "&#10008"
    itemTd.textContent = item.item_name;

    deleteTd.append(deleteBtn)
    tickTd.append(tickButton)

    newRow.append(itemTd)
    newRow.append(counterTd)
    newRow.append(tickTd)
    newRow.append(deleteTd)
    

    // console.log(item.id)
    //add event listeners to buttons 




    tickButton.onclick = () => gotItem(item.id)
    addButton.onclick = () => add()
    substractButton.onclick = () => subtract()
    deleteBtn.onclick =() => deleteItem(item.id, newRow)
   


    function add(){
        quantityInput.value = parseInt(quantityInput.value) + 1
        editQuantity(item.id, quantityInput.value)
    
    }


    function subtract(){
        quantityInput.value = parseInt(quantityInput.value) - 1
        editQuantity(item.id, quantityInput.value)

    }


    return newRow

}






// function gotItem(id){
//     const gotItem = document.getElementById(`${id}`)
//     gotItem.style.opacity = 0.2

// }


// const createNewList = document.getElementById('createNewList')
// createNewList.addEventListener('click', deleteAll)

// function deleteAll(){
//    const list = document.getElementById('list-area')
//    list.forEach(tr => tr.style.backgroundColor = "blue")
// }
