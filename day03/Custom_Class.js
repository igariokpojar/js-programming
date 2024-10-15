/*
Create a class named Item with the following attributes:
ITEM_NAME. PRICE, QUALITY,

METHOD:
contructor: initialize all the fields
calculateTotalPrice: calculate total price (price * quantity)
toString: return the name of the class with the following attributes and properties 

*/

class Item {
  constructor(itemName, price, quality) {
    this.itemName = itemName;
    this.price = price;
    this.quality = quality;
  }

  calculateTotalPrice() {
    return this.price * this.quality;
  }

  toString() {
    return `Item: ${this.itemName}, Price: ${this.price}, Quality: ${this.quality}, Total Price: ${this.calculateTotalPrice()}`;
  }
}
// create instance of Item class and display their properties

let item1 = new Item("Apple", 1.5, 10);
console.log(item1.toString());

let item2 = new Item("Banana", 0.8, 5);
console.log(item2.toString());


