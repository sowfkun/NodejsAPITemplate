import Drink from '../models/example.model.mjs';
const productController = {};

productController.getAllProducts = async (req, res) => {
  try {
    const drinks = await Drink.find();
    res.status(200).json({ products: drinks });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'HTTP 500 Internal server error' });
  }
};

export default productController;
