const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    item_name: { type: String , default: "Shopping Item"},
    time_to_buy: { type: Date, default: Date.now },
    item_cost: { type: Number, default: 0.0 },
    item_descripition: { type: String },
    item_bought: {type: Boolean, default: false},
})

var Item = mongoose.model('Item', ItemSchema);

module.exports = Item;