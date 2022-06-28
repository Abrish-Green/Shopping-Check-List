const mongoose = require("mongoose");

const Item = new mongoose.Schema({
    item_name: { type: String , default: "Shopping Item"},
    time_to_buy: { type: Date, default: Date.now },
    item_cost: { type: Number, default: 0.0 },
    item_descripition: { type: String },
    item_bought: {type: Boolean, default: false},
})