import Drink from '../models/example.model.mjs';
const productController = {};

productController.getAllProducts = async (req, res) => {
  try {
    /*
     * query database
     */
    const drinks = await Drink.find();

    /*
     * send data
     */
    res.status(200).json({ products: drinks });
  } catch (error) {
    /*
     * catch error
     */
    console.log(error);
    res.status(500).json({ message: 'HTTP 500 Internal server error' });
  }
};

export default productController;
