function addItem()
{ 
    var ul = document.querySelector("#items")
    var num = ul.children.length + 1
    var li = document.createElement("li")
    li.textContent = "Item " + num
    
    ul.appendChild(li)
}

function addItem2()
{
    var ul = document.querySelector("#items")
    var li = document.createElement("li")
    text = document.forms['myform']['item'].value
    console.log(text)
    li.textContent = text
    ul.appendChild(li)
}