
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
    const quantityTd = document.createElement('td')
    const deleteTd = document.createElement('td')
    const addTd = document.createElement('td')
    const minusTd = document.createElement('td')
    const deleteBtn = document.createElement('button')
    const addBtn = document.createElement('button')
    const minusBtn = document.createElement('button')

    addBtn.textContent = "+"
    minusBtn.textContent = "-"
    deleteBtn.textContent = "X"
    itemTd.textContent = item.item_name;
    quantityTd.textContent = item.amount;

    deleteTd.append(deleteBtn)
    addTd.append(addBtn)
    minusTd.append(minusBtn)

    newRow.append(itemTd)
    newRow.append(quantityTd)
    newRow.append(addTd)
    newRow.append(minusTd)
    newRow.append(deleteTd)

    // console.log(item.id)
    //add event listeners to buttons 
    addTd.onclick = () => addToQuantity(item.id, newRow)
    return newRow
}


