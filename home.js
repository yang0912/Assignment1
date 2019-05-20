var input = document.getElementById("txt"),
    items = document.querySelectorAll("#list li"),
    tab = [], index;
//get the selected li index using array
//populate array with li values

for (var i = 0; i < items.length; i++) {
    tab.push(items[i].innerHTML);
}

//get li index onclick
for (var i = 0; i < items.length; i++) {
    items[i].onclick = function () {
        index = tab.indexOf(this.innerHTML);
        console.log(this.innerHTML + "INDEX = " + index);
        //set the selected li value into input text
        input.value = this.innerHTML;
    };
}

function refreshArray() {
    tab.length = 0;
    items = document.querySelectorAll("#list li")

    //fill array
    for (var i = 0; i < items.length; i++) {
        tab.push(items[i].innerHTML);
    }

}

function add() {
    var listNode = document.getElementById("list"),
        textNode = document.createTextNode(input.value),
        liNode = document.createElement("LI");

    liNode.appendChild(textNode);
    listNode.appendChild(liNode);

    refreshArray();

    //add event to the new LI
    liNode.onclick = function () {
        index = tab.indexOf(liNode.innerHTML);
        console.log(liNode.innerHTML + "INDEX = " + index);
        input.value = liNode.innerHTML;
    };
    input.value = "";
}

function edit() {
    //edit the selected li using input text
    items[index].innerHTML = input.value;
    refreshArray();
}

function deleteItem() {

    refreshArray();
    if (items.length > 0) {
        items[index].parentNode.removeChild(items[index]);
        input.value = "";
    }
}   