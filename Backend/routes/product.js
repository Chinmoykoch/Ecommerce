import  express  from "express";
import { getAllProducts,createProduct, updateProduct, deleteProduct, getproductDetail } from "../controllers/product.js";

const router = express.Router()

router.get("/products", getAllProducts).get("/products/:id", getproductDetail)
router.post("/products/new", createProduct)
router.put("/products/:id", updateProduct)
router.delete("/products/:id", deleteProduct)

export default router
