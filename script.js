let items = JSON.parse(localStorage.getItem('items')) || [];

function renderList() {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';
    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Odstranit';
        removeBtn.onclick = () => removeItem(index);
        li.appendChild(removeBtn);
        itemList.appendChild(li);
    });
}

function addItem(item) {
    if (item !== '') {
        items.push(item);
        localStorage.setItem('items', JSON.stringify(items));
        renderList();
    }
}

function removeItem(index) {
    items.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(items));
    renderList();
}

function clearList() {
    items = [];
    localStorage.removeItem('items');
    renderList();
}

window.onload = renderList;
