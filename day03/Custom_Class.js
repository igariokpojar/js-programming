/*
Create a class named Item with the following attributes:
ITEM_NAME. PRICE, QUALITY,

METHOD:
contructor: initialize all the fields
calculateTotalPrice: calculate total price (price * quantity)
toString: return the name of the class with the following attributes and properties 

*/

/**
 * Represents an item with properties like name, price, and quality.
 * @class
 * @param {string} itemName - The name of the item.
 * @param {number} price - The price of the item.
 * @param {number} quality - The quality of the item.
 */
class Item {
  constructor(itemName, price, quality) {
    this.itemName = itemName;
    this.price = price;
    this.quality = quality;
  }

  /**
   * Calculates the total price of the item by multiplying the price and quality.
   * @returns {number} The total price of the item.
   */
  calculateTotalPrice() {
    return this.price * this.quality;
  }

  /**
   * Returns a string representation of the item with its properties.
   * @returns {string} A string representation of the item.
   */
  toString() {
    return `Item: ${this.itemName}, Price: ${this.price}, Quality: ${
      this.quality
    }, Total Price: ${this.calculateTotalPrice()}`;
  }
}

// create instance of Item class and display their properties
let item1 = new Item("Apple", 1.5, 10);
console.log(item1.toString());

let item2 = new Item("Banana", 0.8, 5);
console.log(item2.toString());
