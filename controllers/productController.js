const ProductModel = require("../models/productModel");

exports.getProducts = async (req, res, next) => {
  const query = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};
  const products = await ProductModel.find(query);

  res.json({
    success: true,
    data: products,
  });
};

exports.getSingleProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    console.log("product id", id);

    const product = await ProductModel.findOne({ id: parseInt(id) });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.json({
      success: true,
      data: product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Unable to fetch the product",
    });
  }
};
