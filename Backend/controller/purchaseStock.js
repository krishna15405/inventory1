const Purchase = require("../models/purchase");
const Product = require("../models/Product");

const purchaseStock = async (productID, purchaseStockData) => {
  // Updating Purchase stock
  try {
    const myProductData = await Product.findOne({ _id: productID });

    //let currentStock = parseInt(myProductData.stock, 10);
    //let myUpdatedStock = currentStock - myProductData.stock;

    let myUpdatedStock = parseInt(myProductData.stock) + parseInt(purchaseStockData);

    const PurchaseStock = await Product.findByIdAndUpdate(
      { _id: productID },
      {
        stock: myUpdatedStock,
      },
      { new: true }
    );
    console.log(PurchaseStock);
  } catch (error) {
    console.error("Error updating Purchase stock ", error);
  }
};

module.exports = purchaseStock;
