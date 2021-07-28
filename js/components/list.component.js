export class List{

    listItems = [];

    constructor() {
        this.ul = document.createElement('ul');
        document.body.appendChild(this.ul);
    }

    updateItems(array) {
        this.listItems = array;
        this.displayItems();
    }

    displayItems() {
        
        this.listItems.forEach((item) => {
            const li = document.createElement('li');
            this.ul.appendChild(li);
            li.innerText = item.toString();
        });
    }



}