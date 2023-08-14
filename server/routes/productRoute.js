const express = require("express");
const router = express.Router({ mergeParams: true });;
const { CreateProduct, GetProducts, UpdateProduct, DeleteProduct, GetProduct, GetProductDetail } = require("../controller/product");
const { protected } = require("../middleware/authMiddleware")

// router.post("/product", CreateProduct);
router.get("/products", GetProducts)
router.get("/products/:id", GetProductDetail)


router
    .route("/product/:id")
    .post(CreateProduct)
    .get(GetProduct)
    .put(UpdateProduct)
    .delete(DeleteProduct)



module.exports = router;
