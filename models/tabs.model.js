const mongoose= require('mongoose');
const bcrypt = require('bcryptjs');

const tabsSchema = new mongoose.Schema({
    user_id:{
        type: String,
        required: [true, "Please enter your user_id"],
    },
    folder_id:{
        type: String,
        required: [true, "Please enter your folder_id"],
    },
    tab_name:{
        type: String,
        required: [true, "Please enter your tab_name"],
    },
    tab_url:{
        type: String,
        required: [true, "Please enter your tab_url"],
    },
    tab_icon:{
        type: String,
        required: [true, "Please enter your tab_icon"],
    },
    tab_color:{
        type: String,
        required: [true, "Please enter your tab_color"],
    },
    tab_tags:{
        type: Array,
        default: [],
    },
    tab_notes:{
        type: String,
        default: "",
    },
    tab_starred:{
        type: Boolean,
        default: false,
    },
    tab_pinned:{
        type: Boolean,
        default: false,
    },
    tab_hidden:{
        type: Boolean,
        default: false,
    },
    tab_open:{
        type: Boolean,
        default: false,
    },
    tab_closed:{
        type: Boolean,
        default: false,
    },
    tab_deleted:{
        type: Boolean,
        default: false,
    },
    tab_archived:{
        type: Boolean,
        default: false,
    },
    tab_locked:{
        type: Boolean,
        default: false,
    },
    tab_locked_password:{
        type: String,
        default: "",
    },
    tab_locked_password_hint:{
        type: String,
        default: "",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Tabs", tabsSchema);