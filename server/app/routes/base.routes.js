const express = require('express');
const order = require('../controllers/orders.controller');
const items = require('../controllers/items.controller');
const router = express.Router();

    //create new order
    router.post("/", order.createOrder);
    
    //get all items
    router.get("/items", items.findAll);
    
    //add items
    router.post("/admin/add", items.createItems);
    
    //delete one items
    router.delete("/admin/delete/:id", items.deleteItem);

    //update one items
    router.put("/admin/update/:id", items.updateItem);

module.exports = router;





