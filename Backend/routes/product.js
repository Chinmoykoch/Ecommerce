import  express  from "express";
import { getAllProducts,createProduct, updateProduct, deleteProduct, getProductDetail } from "../controllers/product.js";

const router = express.Router()

router.get("/products", getAllProducts).get("/products/:id", getProductDetail)
router.post("/products/new", createProduct)
router.put("/products/:id", updateProduct)
router.delete("/products/:id", deleteProduct)

export default router
