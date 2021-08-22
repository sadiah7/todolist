var ul = document.querySelector("#items")
var form = document.getElementById('myform')
form.addEventListener('submit',addItem2)

function addItem()
{ 
    var num = ul.children.length + 1
    var li = document.createElement("li")
    li.textContent = "Item " + num 
    ul.appendChild(li)
}

function addItem2(e)
{
    e.preventDefault()
    var li = document.createElement("li")
    var text = document.getElementById('item').value 
    if(text==""){
        alert('Empty Input is not allowed')
    }
    else
    {
        li.innerHTML = text
        li.className = 'li'
        ul.appendChild(li)
    }
    document.getElementById('item').value = ""
}

function remFirst()
{
    if(ul.children.length==0)
    {
        alert('All Items Removed')
    }
    else
    {
        ul.removeChild(ul.children[0])
    }
}


function remLast()
{
    if(ul.children.length==0)
    {
        alert('All Items Removed')
    }
    else
    {
        ul.removeChild(ul.children[ul.children.length-1])
    }
}