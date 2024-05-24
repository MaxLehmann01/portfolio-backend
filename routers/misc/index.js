/* Dependencies */
import express from "express";

/* Routes */
import GETShoppingList from "./routes/GET-ShoppingList.js";

/* Constants */
const router = express.Router();

/* Router-Definition */
router.get('/shoppinglist', GETShoppingList);

/* Default-Export */
export default router;