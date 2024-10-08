const Sales = require("../models/sales");
const Product = require("../models/product");


const soldStock = async (productID, stockSoldData) => {

  // Updating sold stock
  try {

    
    const myProductData = await Product.findOne({ _id: productID });
    let myUpdatedStock = parseInt(myProductData.stock) - parseInt(stockSoldData);
    console.log("MY SOLD STOCK: ", myUpdatedStock);

    const SoldStock = await Product.findByIdAndUpdate(
      { _id: productID },
      {
        stock: myUpdatedStock,
      },
      { new: true }
    );
    console.log(SoldStock);

  } catch (error) {
    console.error("Error updating sold stock ", error);
  }
};

module.exports = soldStock;
