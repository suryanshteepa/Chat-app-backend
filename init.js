const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main()
.then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
} 

let allChats =[
  {
    from : "neha",
    to : "priya",
    msg : "send me your exam sheets",
    created_at: new Date()
  },
  {
    from : "rahul",
    to : "mahi",
    msg : "taech me js",
    created_at: new Date()
  },
  {
    from : "anurag",
    to : "ved",
    msg : "i love you",
    created_at: new Date()
  },
];

Chat.insertMany(allChats);

 