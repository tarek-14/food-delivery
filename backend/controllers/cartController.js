import userModel from '../models/userModel.js';

// add itams to user cart 
const addToCart = async (req, res) => {
    try {
      if (!req.body.userId || !req.body.itemId) {
        return res.status(400).json({ success: false, message: "Missing required fields" });
      }
  
      const userData = await userModel.findById(req.body.userId);
      if (!userData) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
  
      let cartData = userData.cartData || {};
      if (!cartData[req.body.itemId]) {
        cartData[req.body.itemId] = 1;
      } else {
        cartData[req.body.itemId] += 1;
      }
  
      await userModel.findByIdAndUpdate(req.body.userId, { cartData }, { new: true });
      res.json({ success: true, message: "Added To Cart" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Error adding to cart" });
    }
  };
// remove items from user cart 
const removeFromCart = async (req, res) => {
    try {
      if (!req.body.userId || !req.body.itemId) {
        return res.status(400).json({ success: false, message: "Missing required fields" });
      }
  
      const userData = await userModel.findById(req.body.userId);
      if (!userData) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
  
      let cartData = userData.cartData || {};
      if (cartData[req.body.itemId]) {
        if (cartData[req.body.itemId] > 1) {
          cartData[req.body.itemId] -= 1;
        } else {
          delete cartData[req.body.itemId];
        }
  
        await userModel.findByIdAndUpdate(req.body.userId, { cartData }, { new: true });
        res.json({ success: true, message: "Removed from cart" });
      } else {
        return res.status(404).json({ success: false, message: "Item not found in cart" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Error removing from cart" });
    }
  };
//fetch user cart data
const getCart = async (req, res) => {
  try {
      const userData = await userModel.findById(req.body.userId);
      if (!userData) {
          return res.status(404).json({ success: false, message: "User not found" });
      }
      const cartData = userData.cartData || {}; 
      res.json({ success: true, cartData });
  } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Error fetching cart data" });
  }
};
export {
    addToCart,
    removeFromCart,
    getCart
}