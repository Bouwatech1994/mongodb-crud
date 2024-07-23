const express = require('express');
const { getProducts, createProducts, findProducts, updateProducts, deleteProducts } = require('../controllers/product.controller');

const router = express.Router();

router.get("/",getProducts);
router.post("/",createProducts);
router.get("/:id",findProducts);
router.put("/:id",updateProducts);
router.delete(":id",deleteProducts);

module.exports = router;