
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

    const itemTd = document.createElement('td')
    const deleteTd = document.createElement('td')
    const deleteBtn = document.createElement('button')
    const counterDiv = document.createElement('div')
    const addButton = document.createElement('button')
    const substractButton = document.createElement('button')
    const quantityInput = document.createElement('input')


    addButton.textContent = "+"
    substractButton.textContent = "-"
    quantityInput.value = item.amount
    quantityInput.setAttribute('class','quantityInput')

    console.log(typeof(item.amount))

    counterDiv.append(substractButton)
    counterDiv.append(quantityInput)
    counterDiv.append(addButton)





    deleteBtn.innerHTML = "&#10004"
    itemTd.textContent = item.item_name;

    deleteTd.append(deleteBtn)

    newRow.append(itemTd)
    newRow.append(counterDiv)
    newRow.append(deleteTd)

    // console.log(item.id)
    //add event listeners to buttons 





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




